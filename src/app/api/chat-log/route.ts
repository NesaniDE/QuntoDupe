import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

/**
 * Speichert ein Chat-Transkript per E-Mail an info@nesani.de.
 *
 * DSGVO-Hygiene:
 * - Es werden NUR Nachrichten-Inhalte und ein zufälliger Conversation-Hash gespeichert.
 * - Keine IP, kein User-Agent, kein Cookie, keine Tracking-ID.
 * - Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO — berechtigtes Interesse an
 *   Qualitätssicherung und Verbesserung des Chat-Assistenten.
 * - Speicherdauer wird über das E-Mail-Postfach kontrolliert (Empfehlung: 30 Tage).
 * - Aktivierbar/Deaktivierbar über CHAT_LOG_ENABLED.
 */

type LogMessage = {
  role: "user" | "assistant";
  content: string;
  ts?: number;
};

type Body = {
  conversationId?: string;
  startedAt?: number;
  messages?: LogMessage[];
};

const MAX_MESSAGES = 30;
const MAX_CONTENT_CHARS = 1500;

export async function POST(req: Request) {
  if (process.env.CHAT_LOG_ENABLED !== "1") {
    // Stillschweigend OK — vermeidet, dass das Widget Fehler meldet
    return NextResponse.json({ ok: true, logged: false });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ ok: true, logged: false });
  }

  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: "invalid body" }, { status: 400 });
  }

  const messages = Array.isArray(body.messages)
    ? body.messages
        .filter(
          (m) =>
            m &&
            (m.role === "user" || m.role === "assistant") &&
            typeof m.content === "string" &&
            m.content.trim().length > 0,
        )
        .slice(-MAX_MESSAGES)
        .map((m) => ({
          role: m.role,
          content: m.content.slice(0, MAX_CONTENT_CHARS),
        }))
    : [];

  // Mindestens eine User-Nachricht muss enthalten sein, sonst lohnt sich kein Log
  const hasUser = messages.some((m) => m.role === "user");
  if (!hasUser) {
    return NextResponse.json({ ok: true, logged: false });
  }

  const conversationId =
    typeof body.conversationId === "string" && body.conversationId.length > 0
      ? body.conversationId.slice(0, 64)
      : "anon";
  const startedAt =
    typeof body.startedAt === "number" && Number.isFinite(body.startedAt)
      ? body.startedAt
      : Date.now();
  const startedDate = new Date(startedAt);

  try {
    const resend = new Resend(apiKey);
    const firstUserMsg =
      messages.find((m) => m.role === "user")?.content.slice(0, 60) ?? "";
    const { error } = await resend.emails.send({
      from: "Nesani Chat-Log <onboarding@resend.dev>",
      to: ["assistent@nesani.de"],
      subject: `Chat-Log: ${firstUserMsg || conversationId}`,
      html: buildHtml({
        conversationId,
        startedAt: startedDate,
        messages,
      }),
    });
    if (error) {
      console.error("[chat-log] resend rejected:", error);
      return NextResponse.json({ ok: true, logged: false });
    }
    return NextResponse.json({ ok: true, logged: true });
  } catch (err) {
    console.error("[chat-log] send error:", err);
    // Auch bei Fehler 200 zurück — der User soll davon nichts merken
    return NextResponse.json({ ok: true, logged: false });
  }
}

function buildHtml(b: {
  conversationId: string;
  startedAt: Date;
  messages: { role: "user" | "assistant"; content: string }[];
}) {
  const rows = b.messages
    .map((m) => {
      const isUser = m.role === "user";
      const bg = isUser ? "#050505" : "#F4F1EA";
      const fg = isUser ? "#ffffff" : "#050505";
      const label = isUser ? "BESUCHER" : "BOT";
      return `
        <div style="margin:12px 0;">
          <div style="font-size:10px; letter-spacing:0.18em; color:#9ca3af; font-weight:600; margin-bottom:4px;">${label}</div>
          <div style="background:${bg}; color:${fg}; padding:10px 14px; border-radius:12px; font-size:14px; line-height:1.5; white-space:pre-wrap;">${escapeHtml(m.content)}</div>
        </div>
      `;
    })
    .join("");

  return `
    <div style="font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif; background:#fafafa; color:#050505; padding:32px;">
      <div style="max-width:600px; margin:0 auto; background:#fff; border:1px solid #eee; border-radius:16px; padding:32px;">
        <p style="color:#050505; font-size:11px; letter-spacing:0.22em; margin:0 0 4px; font-weight:600;">CHAT-LOG</p>
        <p style="font-size:18px; font-weight:700; margin:0 0 8px;">${b.messages.length} Nachrichten · ${b.startedAt.toLocaleString("de-DE", { dateStyle: "medium", timeStyle: "short" })}</p>
        <p style="font-size:11px; color:#9ca3af; margin:0 0 16px; font-family:ui-monospace,SFMono-Regular,Menlo,monospace;">${escapeHtml(b.conversationId)}</p>
        <hr style="border:none; border-top:1px solid #eee; margin:16px 0;" />
        ${rows}
        <p style="margin-top:24px; color:#9ca3af; font-size:10px; letter-spacing:0.2em;">
          NESANI.DE · ANONYMISIERT · KEINE IP · KEIN TRACKING
        </p>
      </div>
    </div>
  `;
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
