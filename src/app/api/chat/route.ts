import { NextResponse } from "next/server";
import { streamText, type ModelMessage } from "ai";
import { NESANI_KNOWLEDGE } from "@/data/chat-knowledge";

export const runtime = "nodejs";
export const maxDuration = 30;

// Stop-Loss-Limits: schützen vor Bot-Spam und Kostenexplosion.
// Hard cap: max 30.000 Konversations-Turns/Monat (~ 1.000/Tag).
// Liegen über den Anthropic-Dashboard-Limits (Backstop) und über typischer Realnutzung.
const IP_WINDOW_MS = 5 * 60 * 1000; // 5 Minuten
const IP_MAX_REQUESTS = 20;
const DAILY_MAX_REQUESTS = 1000;

const ipBuckets = new Map<string, number[]>();
const dailyCounter = { day: "", count: 0 };

function getClientIp(req: Request): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  const real = req.headers.get("x-real-ip");
  if (real) return real.trim();
  return "unknown";
}

function checkRateLimit(ip: string): {
  ok: boolean;
  reason?: "ip" | "daily";
  retryAfter?: number;
} {
  const now = Date.now();

  // Daily global cap
  const today = new Date().toISOString().slice(0, 10);
  if (dailyCounter.day !== today) {
    dailyCounter.day = today;
    dailyCounter.count = 0;
  }
  if (dailyCounter.count >= DAILY_MAX_REQUESTS) {
    return { ok: false, reason: "daily", retryAfter: 3600 };
  }

  // Per-IP sliding window
  const bucket = (ipBuckets.get(ip) ?? []).filter(
    (t) => now - t < IP_WINDOW_MS,
  );
  if (bucket.length >= IP_MAX_REQUESTS) {
    const retryAfter = Math.ceil((IP_WINDOW_MS - (now - bucket[0])) / 1000);
    ipBuckets.set(ip, bucket);
    return { ok: false, reason: "ip", retryAfter };
  }

  bucket.push(now);
  ipBuckets.set(ip, bucket);
  dailyCounter.count++;

  // Lazy GC: gelegentlich tote Buckets aufräumen
  if (Math.random() < 0.02 && ipBuckets.size > 500) {
    for (const [k, v] of ipBuckets) {
      if (v.length === 0 || now - v[v.length - 1] > IP_WINDOW_MS) {
        ipBuckets.delete(k);
      }
    }
  }

  return { ok: true };
}

const SYSTEM_RULES = `Du bist der Chat-Assistent auf der Website von Nesani.

Verhaltensregeln:
- Antworte auf Deutsch (außer der Nutzer schreibt in einer anderen Sprache).
- Antworte kurz und konkret — 2 bis 4 Sätze, kein Marketing-Fluff, keine Floskeln.
- Stütze dich ausschließlich auf die untenstehende Wissensbasis. Wenn etwas nicht abgedeckt ist, sag das ehrlich und verweise auf /kontakt.
- Bei Projektanfragen, Preisanfragen oder Terminwünschen: höflich auf /kontakt verweisen — dort wird das Erstgespräch organisiert. Nenne niemals Preise, auch nicht "ab X €".
- Wenn nach einer Leistung gefragt wird: kurz erklären, dann den passenden Pfad (/leistungen/...) nennen.
- Keine Versprechen, keine Garantien, keine rechtlichen, steuerlichen oder unternehmerischen Auskünfte.
- Wenn etwas nicht zu Nesani gehört: freundlich darauf hinweisen und auf /kontakt verweisen.

${NESANI_KNOWLEDGE}`;

type IncomingMessage = {
  role: "user" | "assistant";
  content: string;
};

export async function POST(req: Request) {
  if (process.env.CHAT_ENABLED !== "1") {
    return NextResponse.json(
      { unavailable: true, reason: "disabled" },
      { status: 503 },
    );
  }

  const ip = getClientIp(req);
  const limit = checkRateLimit(ip);
  if (!limit.ok) {
    return NextResponse.json(
      { unavailable: true, reason: `rate-${limit.reason}` },
      {
        status: 429,
        headers: limit.retryAfter
          ? { "Retry-After": String(limit.retryAfter) }
          : {},
      },
    );
  }

  let messages: IncomingMessage[] = [];
  try {
    const body = (await req.json()) as { messages?: IncomingMessage[] };
    messages = Array.isArray(body.messages) ? body.messages : [];
  } catch {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  // Sanitize: only user/assistant with non-empty string content, cap length
  const cleaned: ModelMessage[] = messages
    .filter(
      (m) =>
        m &&
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim().length > 0,
    )
    .slice(-12)
    .map((m) => ({ role: m.role, content: m.content.slice(0, 2000) }));

  if (cleaned.length === 0) {
    return NextResponse.json({ error: "Empty messages" }, { status: 400 });
  }

  try {
    const result = streamText({
      model: process.env.CHAT_MODEL ?? "anthropic/claude-haiku-4-5",
      // Ephemeral cache: identische System-Prompts werden für 5 Minuten serverseitig
      // bei Anthropic gecacht und nicht erneut bezahlt. Spart bei dauerhaftem
      // Traffic ~90 % der Input-Token-Kosten der Wissensbasis.
      messages: [
        {
          role: "system",
          content: SYSTEM_RULES,
          providerOptions: {
            anthropic: { cacheControl: { type: "ephemeral" } },
          },
        },
        ...cleaned,
      ] satisfies ModelMessage[],
      temperature: 0.4,
    });
    return result.toTextStreamResponse();
  } catch (err) {
    console.error("[chat] streamText error:", err);
    return NextResponse.json(
      { unavailable: true, reason: "upstream" },
      { status: 503 },
    );
  }
}
