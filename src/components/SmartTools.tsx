"use client";

import { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon, CheckIcon } from "@/components/icons";

type Step = {
  number: string;
  title: string;
  body: string;
  bullets: string[];
};

const STEPS: Step[] = [
  {
    number: "Schritt 01",
    title: "Analyse & Audit",
    body: "Wir analysieren bestehende Prozesse und identifizieren die größten Potenziale für Automatisierung und Sichtbarkeit.",
    bullets: ["Prozess-Mapping", "Datenanalyse", "ROI-Kalkulation"],
  },
  {
    number: "Schritt 02",
    title: "Strategie",
    body: "Wir definieren eine klare Roadmap mit messbaren Zielen — priorisiert nach Wirkung und Umsetzbarkeit.",
    bullets: ["Zieldefinition", "Stack-Auswahl", "Priorisierung"],
  },
  {
    number: "Schritt 03",
    title: "Prototyping",
    body: "In einem kurzen Sprint entsteht ein funktionsfähiger Prototyp, den du direkt testen kannst.",
    bullets: ["MVP in 2–4 Wochen", "Iteratives Feedback", "Proof of Concept"],
  },
  {
    number: "Schritt 04",
    title: "Umsetzung",
    body: "Wir bauen die finale Lösung — sauber integriert, skalierbar und auf deine Systeme abgestimmt.",
    bullets: ["Integration", "Automatisierung", "Qualitätssicherung"],
  },
  {
    number: "Schritt 05",
    title: "Wachstum",
    body: "Nach dem Launch optimieren wir kontinuierlich auf Basis echter Daten und skalieren, wo es wirkt.",
    bullets: ["Monitoring", "Optimierung", "Skalierung"],
  },
];

export function SmartTools() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (delta: number) => {
    scrollRef.current?.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section className="bg-white text-[#050505] py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[1344px] px-5 lg:px-12">
        <div className="flex items-end justify-between gap-4 mb-10 md:mb-14">
          <h2 className="font-sans font-semibold text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.02em] max-w-[900px]">
            In 5 Schritten zur Lösung
          </h2>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scrollBy(-400)}
              aria-label="Vorheriger Schritt"
              className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center hover:bg-black/5 transition"
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollBy(400)}
              aria-label="Nächster Schritt"
              className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center hover:bg-black/5 transition"
            >
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="no-scrollbar overflow-x-auto scroll-smooth snap-x snap-mandatory"
      >
        <ul className="flex gap-4 md:gap-6 px-5 lg:px-12 pb-1">
          {STEPS.map((s) => (
            <li
              key={s.number}
              className="snap-start shrink-0 w-[85%] sm:w-[60%] md:w-[45%] lg:w-[32%] max-w-[420px]"
            >
              <article className="flex h-full flex-col gap-5 rounded-[28px] border border-black/10 bg-[#f7f6f2] p-7 md:p-8">
                <div className="text-[13px] font-semibold tracking-widest uppercase text-[#050505]/55">
                  {s.number}
                </div>
                <h3 className="font-sans font-semibold text-[24px] md:text-[28px] leading-tight">
                  {s.title}
                </h3>
                <p className="text-[#050505]/70 text-[15px] leading-relaxed">
                  {s.body}
                </p>
                <ul className="mt-auto flex flex-col gap-3 pt-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-[15px]">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#050505] text-white">
                        <CheckIcon className="h-3 w-3" />
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
