import { Resend } from "resend";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Body = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  service?: string;
  phase?: string;
  budget?: string;
  timeline?: string;
  goal?: string;
  description?: string;
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

  const resend = new Resend(apiKey);

  try {
    const body = (await request.json()) as Body;
    const {
      name,
      company,
      email,
      phone,
      service,
      phase,
      budget,
      timeline,
      goal,
      description,
    } = body;

    if (!name || !email || !goal || !description) {
      return NextResponse.json(
        { error: "Pflichtfelder fehlen." },
        { status: 400 },
      );
    }

    const { error } = await resend.emails.send({
      from: "Nesani Kontaktformular <kontakt@nesani.de>",
      to: ["info@nesani.de"],
      replyTo: email,
      subject: `Neue Projektanfrage von ${name}${company ? ` (${company})` : ""}`,
      html: buildHtml({
        name,
        company,
        email,
        phone,
        service,
        phase,
        budget,
        timeline,
        goal,
        description,
      }),
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

function buildHtml(b: {
  name: string;
  email: string;
  goal: string;
  description: string;
  company?: string;
  phone?: string;
  service?: string;
  phase?: string;
  budget?: string;
  timeline?: string;
}) {
  return `
    <div style="font-family: -apple-system, Segoe UI, Helvetica, Arial, sans-serif; background:#fafafa; color:#050505; padding:32px;">
      <div style="max-width:600px; margin:0 auto; background:#fff; border:1px solid #eee; border-radius:16px; padding:32px;">
        <p style="color:#050505; font-size:12px; letter-spacing:.22em; margin:0 0 4px; font-weight:600;">NEUE PROJEKTANFRAGE</p>
        <p style="font-size:20px; font-weight:700; margin:0 0 24px;">${escapeHtml(b.name)}${b.company ? ` — ${escapeHtml(b.company)}` : ""}</p>

        <table style="width:100%; border-collapse:collapse;">
          ${row("E-Mail", `<a href="mailto:${encodeURIComponent(b.email)}" style="color:#050505;">${escapeHtml(b.email)}</a>`)}
          ${b.phone ? row("Telefon", escapeHtml(b.phone)) : ""}
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

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
