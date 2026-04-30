import { Resend } from "resend";
import { NextResponse } from "next/server";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";

type Body = { email?: string; source?: string };

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Server nicht konfiguriert." },
      { status: 500 },
    );
  }

  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const email = (body.email ?? "").toString().trim();
  const source = (body.source ?? "unbekannt").toString().slice(0, 64);

  // Minimale Email-Validierung
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200) {
    return NextResponse.json(
      { error: "Bitte eine gültige E-Mail-Adresse eingeben." },
      { status: 400 },
    );
  }

  const resend = new Resend(apiKey);

  try {
    // 1) Notification an Nesani
    const { error: notifyErr } = await resend.emails.send({
      from: "Nesani Checkliste <onboarding@resend.dev>",
      to: ["nedim@nesani.de"],
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

    // 2) Liefer-Mail an Empfänger mit PDF im Anhang.
    //    Im Resend-Testmodus wird das nur akzeptiert, wenn die Empfänger-Adresse
    //    der verifizierte Account-Owner ist — Fehler werden hier still
    //    geschluckt, damit das Frontend trotzdem Erfolg zeigt.
    try {
      const pdfPath = path.join(
        process.cwd(),
        "public",
        "downloads",
        "checkliste-website.pdf",
      );
      const pdfBuf = await readFile(pdfPath);
      const { error: deliverErr } = await resend.emails.send({
        from: "Nesani <onboarding@resend.dev>",
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

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
