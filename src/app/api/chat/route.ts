import { NextResponse } from "next/server";
import { streamText, type ModelMessage } from "ai";
import { openai } from "@ai-sdk/openai";
import { NESANI_KNOWLEDGE } from "@/data/chat-knowledge";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";

export const runtime = "nodejs";
export const maxDuration = 30;

// Stop-Loss-Limits: schützen vor Bot-Spam und Kostenexplosion.
// HINWEIS: Rate-Limit-State ist Lambda-instanzweise. Bei Vercel-Skalierung
// kann der tagesglobale Cap pro Instanz separat zählen. Wahre Sicherung
// ist deshalb das OpenAI-Dashboard-Spend-Limit (Pflicht-Setup).
const RATE_CONFIG = {
  bucketName: "chat",
  windowMs: 5 * 60 * 1000,
  maxPerIp: 15,
  maxPerDay: 500,
};

// Body-Größenlimit auf API-Route-Ebene. Vercel akzeptiert per Default bis
// 4.5 MB — viel zu groß für Chat. 50 KB reichen für 12 Nachrichten × 4 KB.
const MAX_BODY_BYTES = 50 * 1024;
const MAX_HISTORY = 8;
const MAX_MESSAGE_CHARS = 1000;
const MAX_OUTPUT_TOKENS = 300;

const SYSTEM_RULES = `Du bist der Chat-Assistent auf der Website von Nesani.

Verhaltensregeln:
- Antworte auf Deutsch (außer der Nutzer schreibt in einer anderen Sprache).
- Antworte kurz und konkret — 2 bis 4 Sätze, kein Marketing-Fluff, keine Floskeln.
- WICHTIG: Schreibe ausschließlich reinen Fließtext. KEINE Markdown-Formatierung. Keine Sternchen für Fettschrift (*Text* oder **Text**). Keine Unterstriche, keine Backticks, keine Aufzählungs-Bullets. Keine Überschriften mit #. Wenn du eine Liste brauchst, nutze nummerierte Sätze in Prosa wie "Erstens, ... Zweitens, ...".
- Stütze dich ausschließlich auf die untenstehende Wissensbasis. Wenn etwas nicht abgedeckt ist, sag das ehrlich und verweise auf /kontakt.
- Sprich Nutzer immer in der Sie-Form an, niemals duzen.
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
  const limit = checkRateLimit(ip, RATE_CONFIG);
  if (!limit.ok) {
    return NextResponse.json(
      { unavailable: true, reason: `rate-${limit.reason}` },
      {
        status: 429,
        headers: { "Retry-After": String(limit.retryAfter) },
      },
    );
  }

  // Content-Length-Pre-Check: blockiert oversized Bodies vor JSON-Parse
  const contentLength = Number(req.headers.get("content-length") ?? 0);
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Payload too large" }, { status: 413 });
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
    .slice(-MAX_HISTORY)
    .map((m) => ({
      role: m.role,
      content: m.content.slice(0, MAX_MESSAGE_CHARS),
    }));

  if (cleaned.length === 0) {
    return NextResponse.json({ error: "Empty messages" }, { status: 400 });
  }

  try {
    // Direkter OpenAI-Aufruf via OPENAI_API_KEY env var.
    // Modell-Override per CHAT_MODEL möglich (default: gpt-4o-mini, günstig + zuverlässig).
    const modelName = process.env.CHAT_MODEL ?? "gpt-4o-mini";
    const result = streamText({
      model: openai(modelName),
      messages: [
        { role: "system", content: SYSTEM_RULES },
        ...cleaned,
      ] satisfies ModelMessage[],
      temperature: 0.4,
      maxOutputTokens: MAX_OUTPUT_TOKENS,
      // Wenn der Client die Verbindung schließt, brechen wir die OpenAI-Generation
      // ab — kein Token-Verbrauch mehr für niemanden, der zuhört.
      abortSignal: req.signal,
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
