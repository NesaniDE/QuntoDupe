"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRightIcon, CheckIcon } from "@/components/icons";

const SERVICES = [
  "Website",
  "Social Media & Online-Präsenz",
  "KI-Workflows & Automatisierung",
  "KI-Assistenten & Chatbots",
  "Autonome Agenten",
  "Individuelle Systemarchitektur",
  "Noch unklar",
];

const PHASES = [
  "Erste Orientierung",
  "Grobes Konzept",
  "Konkrete Planung",
  "Verbesserung nötig",
];

const BUDGETS = [
  "Offen",
  "unter 2.000 €",
  "2.000 – 5.000 €",
  "5.000 – 10.000 €",
  "10.000 € +",
];

const TIMELINES = [
  "Sofort",
  "Innerhalb 30 Tage",
  "2 – 3 Monate",
  "Flexibel",
];

const INPUT_CLASSES =
  "w-full rounded-xl bg-white border border-black/10 px-4 py-3 text-[15px] text-[#050505] placeholder:text-[#050505]/40 focus:outline-none focus:border-[#050505]/40 transition";

const LABEL_CLASSES =
  "block text-[13px] font-semibold text-[#050505]/80 mb-2";

export function KontaktForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const params = new URLSearchParams();
    data.forEach((value, key) => {
      if (typeof value === "string" && value.trim()) params.append(key, value);
    });
    const subject = `Projektanfrage: ${data.get("name") ?? ""}`.trim();
    const body = Array.from(params.entries())
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");
    const href = `mailto:info@nesani.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setSubmitted(true);
  };

  return (
    <section className="bg-white text-[#050505]">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-20 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <aside className="lg:col-span-4">
            <h2 className="font-sans font-semibold text-[28px] md:text-[36px] leading-[1.1] tracking-[-0.01em]">
              So läuft die Anfrage.
            </h2>
            <ul className="mt-8 flex flex-col gap-5">
              {[
                "Antwort in der Regel innerhalb von 24 Stunden",
                "Klare Einschätzung statt Verkaufsdruck",
                "Strukturiert statt vage",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] leading-[1.5]">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#050505] text-white">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 rounded-2xl bg-[#F4F1EA] p-6">
              <div className="text-[13px] uppercase tracking-widest font-semibold text-[#050505]/70">
                Direkt schreiben
              </div>
              <a
                href="mailto:info@nesani.de"
                className="mt-3 inline-flex items-center gap-1.5 text-[18px] md:text-[20px] font-semibold text-[#050505] hover:opacity-80 transition"
              >
                info@nesani.de
                <ArrowUpRightIcon className="w-4 h-4" />
              </a>
              <div className="mt-6 text-[14px] text-[#050505]/70">
                Schwäbisch Gmünd, Deutschland
              </div>
            </div>
          </aside>

          <form
            onSubmit={onSubmit}
            className="lg:col-span-8 rounded-3xl bg-[#F7F6F2] p-6 md:p-10 lg:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              <div>
                <label htmlFor="name" className={LABEL_CLASSES}>
                  Name*
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className={INPUT_CLASSES}
                  placeholder="Vor- und Nachname"
                />
              </div>
              <div>
                <label htmlFor="company" className={LABEL_CLASSES}>
                  Unternehmen
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  className={INPUT_CLASSES}
                  placeholder="Firmenname"
                />
              </div>
              <div>
                <label htmlFor="email" className={LABEL_CLASSES}>
                  E-Mail*
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={INPUT_CLASSES}
                  placeholder="name@unternehmen.de"
                />
              </div>
              <div>
                <label htmlFor="phone" className={LABEL_CLASSES}>
                  Telefon
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className={INPUT_CLASSES}
                  placeholder="+49 …"
                />
              </div>

              <div>
                <label htmlFor="service" className={LABEL_CLASSES}>
                  Gewünschte Leistung
                </label>
                <select
                  id="service"
                  name="service"
                  defaultValue=""
                  className={INPUT_CLASSES}
                >
                  <option value="" disabled>
                    Bitte wählen
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="phase" className={LABEL_CLASSES}>
                  Projektphase
                </label>
                <select
                  id="phase"
                  name="phase"
                  defaultValue=""
                  className={INPUT_CLASSES}
                >
                  <option value="" disabled>
                    Bitte wählen
                  </option>
                  {PHASES.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="budget" className={LABEL_CLASSES}>
                  Budgetrahmen
                </label>
                <select
                  id="budget"
                  name="budget"
                  defaultValue=""
                  className={INPUT_CLASSES}
                >
                  <option value="" disabled>
                    Bitte wählen
                  </option>
                  {BUDGETS.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="timeline" className={LABEL_CLASSES}>
                  Zeitrahmen
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  defaultValue=""
                  className={INPUT_CLASSES}
                >
                  <option value="" disabled>
                    Bitte wählen
                  </option>
                  {TIMELINES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="goal" className={LABEL_CLASSES}>
                  Was soll das Projekt verbessern?*
                </label>
                <input
                  id="goal"
                  name="goal"
                  type="text"
                  required
                  className={INPUT_CLASSES}
                  placeholder="z. B. Sichtbarkeit erhöhen, Prozesse automatisieren …"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="description" className={LABEL_CLASSES}>
                  Projektbeschreibung*
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={6}
                  className={`${INPUT_CLASSES} resize-y`}
                  placeholder="Stand, Rahmen, konkrete Anforderungen …"
                />
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-[13px] text-[#050505]/60 max-w-[52ch]">
                Mit dem Absenden erklärst du dich einverstanden, dass deine
                Angaben zur Bearbeitung der Anfrage verwendet werden.
              </p>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#050505] text-white text-[15px] font-semibold px-6 py-3 hover:bg-black/90 transition self-start sm:self-auto"
              >
                Anfrage senden
                <ArrowUpRightIcon className="w-4 h-4" />
              </button>
            </div>

            {submitted ? (
              <p className="mt-6 text-[14px] text-[#050505]/70">
                E-Mail-Programm geöffnet. Falls nichts passiert ist, schreib
                direkt an info@nesani.de.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
