import { Resend } from "resend";
import { NextResponse } from "next/server";
import { FROM_CONTACT, SUPPORT_EMAIL } from "@/lib/site";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";
import {
  asString,
  escapeAttr,
  escapeHtml,
  isValidEmail,
} from "@/lib/email-helpers";

export const runtime = "nodejs";

// Strenger als der Chat — Kontaktanfragen sind selten und teuer.
const RATE_CONFIG = {
  bucketName: "contact",
  windowMs: 15 * 60 * 1000,
  maxPerIp: 3,
  maxPerDay: 50,
};

// Längen-Caps schützen vor Spam-Floods und überlangen Resend-Payloads.
const FIELD_LIMITS = {
  short: 200,
  medium: 500,
  long: 5000,
};

let resendInstance: Resend | null = null;
function getResend(apiKey: string): Resend {
  if (!resendInstance) resendInstance = new Resend(apiKey);
  return resendInstance;
}

type ContactPayload = {
  name: string;
  email: string;
  goal: string;
  description: string;
  company: string;
  phone: string;
  website: string;
  service: string;
  phase: string;
  budget: string;
  timeline: string;
};

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Missing RESEND_API_KEY");
    return NextResponse.json(
      { error: "Server nicht konfiguriert." },
      { status: 500 },
    );
  }

  // Rate-Limit-Check vor dem teuren Body-Parse
  const ip = getClientIp(request);
  const limit = checkRateLimit(ip, RATE_CONFIG);
  if (!limit.ok) {
    return NextResponse.json(
      { error: "Zu viele Anfragen. Bitte später erneut versuchen." },
      {
        status: 429,
        headers: { "Retry-After": String(limit.retryAfter) },
      },
    );
  }

  let raw: Record<string, unknown>;
  try {
    raw = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const payload: ContactPayload = {
    name: asString(raw.name, FIELD_LIMITS.short),
    email: asString(raw.email, FIELD_LIMITS.short),
    goal: asString(raw.goal, FIELD_LIMITS.medium),
    description: asString(raw.description, FIELD_LIMITS.long),
    company: asString(raw.company, FIELD_LIMITS.short),
    phone: asString(raw.phone, FIELD_LIMITS.short),
    website: asString(raw.website, FIELD_LIMITS.short),
    service: asString(raw.service, FIELD_LIMITS.short),
    phase: asString(raw.phase, FIELD_LIMITS.short),
    budget: asString(raw.budget, FIELD_LIMITS.short),
    timeline: asString(raw.timeline, FIELD_LIMITS.short),
  };

  if (!payload.name || !payload.goal || !payload.description) {
    return NextResponse.json(
      { error: "Pflichtfelder fehlen." },
      { status: 400 },
    );
  }

  if (!isValidEmail(payload.email)) {
    return NextResponse.json(
      { error: "Bitte eine gültige E-Mail-Adresse eingeben." },
      { status: 400 },
    );
  }

  try {
    const resend = getResend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_CONTACT,
      to: [SUPPORT_EMAIL],
      replyTo: payload.email,
      subject: `Neue Projektanfrage von ${payload.name}${payload.company ? ` (${payload.company})` : ""}`,
      html: buildHtml(payload),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "E-Mail konnte nicht gesendet werden." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Interner Fehler." }, { status: 500 });
  }
}

function buildHtml(b: ContactPayload) {
  return `
    <div style="font-family: -apple-system, Segoe UI, Helvetica, Arial, sans-serif; background:#fafafa; color:#050505; padding:32px;">
      <div style="max-width:600px; margin:0 auto; background:#fff; border:1px solid #eee; border-radius:16px; padding:32px;">
        <p style="color:#050505; font-size:12px; letter-spacing:.22em; margin:0 0 4px; font-weight:600;">NEUE PROJEKTANFRAGE</p>
        <p style="font-size:20px; font-weight:700; margin:0 0 24px;">${escapeHtml(b.name)}${b.company ? ` — ${escapeHtml(b.company)}` : ""}</p>

        <table style="width:100%; border-collapse:collapse;">
          ${row("E-Mail", `<a href="${escapeAttr("mailto:" + b.email)}" style="color:#050505;">${escapeHtml(b.email)}</a>`)}
          ${b.phone ? row("Telefon", escapeHtml(b.phone)) : ""}
          ${b.website ? row("Website", `<a href="${escapeAttr(b.website)}" style="color:#050505;" target="_blank" rel="noreferrer">${escapeHtml(b.website)}</a>`) : ""}
          ${b.service ? row("Gewünschte Leistung", escapeHtml(b.service)) : ""}
          ${b.phase ? row("Projektphase", escapeHtml(b.phase)) : ""}
          ${b.budget ? row("Budgetrahmen", escapeHtml(b.budget)) : ""}
          ${b.timeline ? row("Zeitrahmen", escapeHtml(b.timeline)) : ""}
        </table>

        <div style="margin-top:24px; border-top:1px solid #eee; padding-top:20px;">
          <p style="color:#050505; font-size:11px; letter-spacing:.22em; margin:0 0 8px; font-weight:600;">WAS SOLL DAS PROJEKT VERBESSERN?</p>
          <p style="color:#050505cc; font-size:14px; line-height:1.55; margin:0;">${escapeHtml(b.goal)}</p>
        </div>

        <div style="margin-top:24px; border-top:1px solid #eee; padding-top:20px;">
          <p style="color:#050505; font-size:11px; letter-spacing:.22em; margin:0 0 8px; font-weight:600;">PROJEKTBESCHREIBUNG</p>
          <p style="color:#050505cc; font-size:14px; line-height:1.55; margin:0; white-space:pre-wrap;">${escapeHtml(b.description)}</p>
        </div>

        <p style="margin-top:32px; color:#9ca3af; font-size:11px; letter-spacing:.2em;">
          NESANI.DE · AUTOMATISCH GENERIERT ÜBER KONTAKTFORMULAR
        </p>
      </div>
    </div>
  `;
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="color:#6b7280; font-size:11px; letter-spacing:.18em; padding:6px 16px 6px 0; vertical-align:top; white-space:nowrap; font-weight:600;">${label.toUpperCase()}</td>
      <td style="color:#050505; font-size:14px; padding:6px 0;">${value}</td>
    </tr>
  `;
}
