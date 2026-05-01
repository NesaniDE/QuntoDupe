import { Resend } from "resend";
import { NextResponse } from "next/server";
import { readFile } from "node:fs/promises";
import path from "node:path";
import {
  FROM_CHECKLIST,
  FROM_DELIVERY,
  SUPPORT_EMAIL,
} from "@/lib/site";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";
import {
  asString,
  escapeHtml,
  isValidEmail,
} from "@/lib/email-helpers";

export const runtime = "nodejs";

const RATE_CONFIG = {
  bucketName: "checklist",
  windowMs: 15 * 60 * 1000,
  maxPerIp: 3,
  maxPerDay: 200,
};

let resendInstance: Resend | null = null;
function getResend(apiKey: string): Resend {
  if (!resendInstance) resendInstance = new Resend(apiKey);
  return resendInstance;
}

// PDF einmalig pro Lambda-Lifetime einlesen statt bei jedem Request.
let pdfBufferPromise: Promise<Buffer> | null = null;
function getPdfBuffer(): Promise<Buffer> {
  if (!pdfBufferPromise) {
    const pdfPath = path.join(
      process.cwd(),
      "public",
      "downloads",
      "checkliste-website.pdf",
    );
    pdfBufferPromise = readFile(pdfPath);
  }
  return pdfBufferPromise;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Server nicht konfiguriert." },
      { status: 500 },
    );
  }

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

  const email = asString(raw.email, 254);
  const source = asString(raw.source, 64) || "unbekannt";

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Bitte eine gültige E-Mail-Adresse eingeben." },
      { status: 400 },
    );
  }

  const resend = getResend(apiKey);

  try {
    // 1) Notification an Nesani
    const { error: notifyErr } = await resend.emails.send({
      from: FROM_CHECKLIST,
      to: [SUPPORT_EMAIL],
      replyTo: email,
      subject: "Landingpage Website",
      html: buildNotifyHtml(email, source),
    });
    if (notifyErr) {
      console.error("[checklist] notify error:", notifyErr);
      return NextResponse.json(
        { error: "E-Mail konnte nicht gesendet werden." },
        { status: 500 },
      );
    }

    // 2) Liefer-Mail mit PDF — Resend-Testmodus blockiert externe
    //    Empfänger; Fehler still schlucken, damit das Frontend Erfolg zeigt.
    try {
      const pdfBuf = await getPdfBuffer();
      const { error: deliverErr } = await resend.emails.send({
        from: FROM_DELIVERY,
        to: [email],
        subject: "Ihre Nesani Website-Checkliste",
        html: buildDeliveryHtml(),
        attachments: [
          {
            filename: "Nesani-Website-Checkliste.pdf",
            content: pdfBuf,
          },
        ],
      });
      if (deliverErr) {
        console.warn("[checklist] delivery skipped:", deliverErr);
      }
    } catch (err) {
      console.warn("[checklist] delivery exception:", err);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[checklist] error:", err);
    return NextResponse.json({ error: "Interner Fehler." }, { status: 500 });
  }
}

function buildNotifyHtml(email: string, source: string) {
  return `
    <div style="font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif; background:#fafafa; color:#050505; padding:32px;">
      <div style="max-width:520px; margin:0 auto; background:#fff; border:1px solid #eee; border-radius:16px; padding:32px;">
        <p style="color:#050505; font-size:11px; letter-spacing:.22em; margin:0 0 4px; font-weight:600;">LANDINGPAGE WEBSITE</p>
        <p style="font-size:18px; font-weight:700; margin:0 0 16px;">${escapeHtml(email)}</p>
        <p style="font-size:13px; color:#6b7280; margin:0;">Quelle: ${escapeHtml(source)}</p>
      </div>
    </div>
  `;
}

function buildDeliveryHtml() {
  return `
    <div style="font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif; background:#fafafa; color:#050505; padding:32px;">
      <div style="max-width:560px; margin:0 auto; background:#fff; border:1px solid #eee; border-radius:16px; padding:32px;">
        <p style="font-size:20px; font-weight:700; margin:0 0 12px;">Vielen Dank!</p>
        <p style="font-size:15px; line-height:1.55; margin:0 0 12px; color:#050505cc;">
          Im Anhang finden Sie unsere kompakte Checkliste für Websites,
          die professionell wirken und Anfragen bringen.
        </p>
        <p style="font-size:14px; line-height:1.55; margin:0 0 24px; color:#050505aa;">
          Bei Fragen einfach auf diese Mail antworten — wir melden uns gern.
        </p>
        <p style="font-size:12px; color:#9ca3af; margin:24px 0 0;">
          Nesani UG (haftungsbeschränkt) i.G. · Schwäbisch Gmünd · nesani.de
        </p>
      </div>
    </div>
  `;
}
