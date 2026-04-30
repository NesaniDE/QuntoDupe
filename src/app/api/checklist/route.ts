import { Resend } from "resend";
import { NextResponse } from "next/server";

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

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Nesani Checkliste <onboarding@resend.dev>",
      to: ["nedim@nesani.de"],
      replyTo: email,
      subject: `Checkliste-Anfrage: ${email}`,
      html: `
        <div style="font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif; background:#fafafa; color:#050505; padding:32px;">
          <div style="max-width:520px; margin:0 auto; background:#fff; border:1px solid #eee; border-radius:16px; padding:32px;">
            <p style="color:#050505; font-size:11px; letter-spacing:.22em; margin:0 0 4px; font-weight:600;">CHECKLISTE-ANFRAGE</p>
            <p style="font-size:18px; font-weight:700; margin:0 0 16px;">${escapeHtml(email)}</p>
            <p style="font-size:13px; color:#6b7280; margin:0;">Quelle: ${escapeHtml(source)}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("[checklist] resend error:", error);
      return NextResponse.json(
        { error: "E-Mail konnte nicht gesendet werden." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[checklist] error:", err);
    return NextResponse.json({ error: "Interner Fehler." }, { status: 500 });
  }
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
