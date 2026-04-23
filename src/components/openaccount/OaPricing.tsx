"use client";

import { useState } from "react";
import { CheckIcon } from "@/components/icons";

type Plan = {
  name: string;
  badge?: string;
  price: string;
  priceNote?: string;
  sub: string;
  bullets: string[];
  cta: string;
  ctaNote?: string;
};

const SEGMENTS = [
  { key: "stufe1", label: "Stufe 01 · Digitale Präsenz" },
  { key: "stufe2", label: "Stufe 02 · KI-Integration" },
  { key: "stufe3", label: "Stufe 03 · Autonome Systeme" },
] as const;

type SegmentKey = (typeof SEGMENTS)[number]["key"];

const PLANS: Record<SegmentKey, Plan[]> = {
  stufe1: [
    {
      name: "Websites",
      badge: "Einstieg",
      price: "Stufe 01",
      sub: "Moderne, performante Websites – technisch sauber und auf Conversion ausgelegt.",
      bullets: [
        "Individuelles Design statt Baukasten",
        "SEO-Grundlagen und schnelle Ladezeiten",
        "Wartbarer Code mit klarer Dokumentation",
      ],
      cta: "Projekt anfragen",
      ctaNote: "Unverbindliches Erstgespräch",
    },
    {
      name: "Social Media & Online-Präsenz",
      price: "Stufe 01",
      sub: "Konsistente Markenpräsenz über Kanäle hinweg – sichtbar und anschlussfähig.",
      bullets: [
        "Kanal-Strategie statt Zufallsposts",
        "Inhalte, die zur Marke passen",
        "Messbare Reichweite und Kontakte",
      ],
      cta: "Projekt anfragen",
      ctaNote: "Unverbindliches Erstgespräch",
    },
  ],
  stufe2: [
    {
      name: "KI-Workflows & Automatisierung",
      badge: "Bestseller",
      price: "Stufe 02",
      sub: "Wiederkehrende Prozesse in klare, wartbare Automatisierungen überführen.",
      bullets: [
        "Analyse vor Aufbau – kein Overengineering",
        "Schnittstellen zu bestehenden Tools",
        "Dokumentierte, nachvollziehbare Workflows",
      ],
      cta: "Projekt anfragen",
      ctaNote: "Unverbindliches Erstgespräch",
    },
    {
      name: "KI-Assistenten & Chatbots",
      price: "Stufe 02",
      sub: "Eigene Assistenten, die Routineanfragen übernehmen und Ihr Team entlasten.",
      bullets: [
        "Trainiert auf Ihre Inhalte und Prozesse",
        "Integriert in bestehende Kanäle",
        "Überwachbar, anpassbar, messbar",
      ],
      cta: "Projekt anfragen",
      ctaNote: "Unverbindliches Erstgespräch",
    },
  ],
  stufe3: [
    {
      name: "Autonome Agenten",
      price: "Stufe 03",
      sub: "Systeme, die selbstständig beobachten, entscheiden und ausführen.",
      bullets: [
        "Klare Ziele, klare Leitplanken",
        "Modulare Agenten-Architektur",
        "Protokollierung und Kontrolle inklusive",
      ],
      cta: "Projekt anfragen",
      ctaNote: "Unverbindliches Erstgespräch",
    },
    {
      name: "Individuelle Systemarchitektur",
      badge: "Premium",
      price: "Stufe 03",
      sub: "Maßgeschneiderte Softwarelösungen für anspruchsvolle Anforderungen.",
      bullets: [
        "Architektur, die zu Ihrem Business passt",
        "Saubere Trennung, sauberer Code",
        "Gebaut für Skalierung und Wartbarkeit",
      ],
      cta: "Projekt anfragen",
      ctaNote: "Unverbindliches Erstgespräch",
    },
  ],
};

export function OaPricing() {
  const [seg, setSeg] = useState<SegmentKey>("stufe1");
  const plans = PLANS[seg];

  return (
    <section id="pricing" className="bg-white text-[#050505]">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-32">
        <h2 className="font-sans font-semibold text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.02em] text-center max-w-[22ch] mx-auto">
          Leistungen, die zu Ihrem Business passen
        </h2>

        <div className="mt-10 flex justify-center">
          <div
            role="tablist"
            className="inline-flex flex-wrap items-center gap-1 p-1 rounded-full bg-[#F4F1EA]"
          >
            {SEGMENTS.map((s) => (
              <button
                key={s.key}
                role="tab"
                aria-selected={seg === s.key}
                onClick={() => setSeg(s.key)}
                className={[
                  "rounded-full px-4 md:px-5 py-2 text-[13px] md:text-[14px] font-medium transition",
                  seg === s.key
                    ? "bg-[#050505] text-white"
                    : "text-[#050505]/70 hover:text-[#050505]",
                ].join(" ")}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[880px] mx-auto">
          {plans.map((p) => {
            const highlight = p.badge === "Bestseller";
            return (
              <article
                key={p.name}
                className={[
                  "rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col border",
                  highlight
                    ? "bg-[#050505] text-white border-transparent"
                    : "bg-white text-[#050505] border-[#050505]/10",
                ].join(" ")}
              >
                <div className="flex items-center gap-2">
                  <h3 className="font-sans font-semibold text-[22px] md:text-[26px] leading-[1.2]">
                    {p.name}
                  </h3>
                  {p.badge && (
                    <span
                      className={[
                        "text-[11px] font-medium px-2 py-0.5 rounded-full",
                        highlight
                          ? "bg-white text-[#050505]"
                          : "bg-[#F4F1EA] text-[#050505]",
                      ].join(" ")}
                    >
                      {p.badge}
                    </span>
                  )}
                </div>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-sans font-semibold text-[28px] md:text-[32px] leading-none">
                    {p.price}
                  </span>
                  {p.priceNote && (
                    <span
                      className={[
                        "text-[13px]",
                        highlight ? "text-white/70" : "text-[#050505]/70",
                      ].join(" ")}
                    >
                      {p.priceNote}
                    </span>
                  )}
                </div>
                <p
                  className={[
                    "mt-4 text-[14px] leading-[1.5]",
                    highlight ? "text-white/80" : "text-[#050505]/75",
                  ].join(" ")}
                >
                  {p.sub}
                </p>
                <ul className="mt-6 space-y-3">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-[14px]">
                      <CheckIcon
                        className={[
                          "w-4 h-4 mt-0.5 shrink-0",
                          highlight ? "text-white" : "text-[#050505]",
                        ].join(" ")}
                      />
                      <span
                        className={
                          highlight ? "text-white/90" : "text-[#050505]/85"
                        }
                      >
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <a
                    href="#"
                    className={[
                      "inline-flex items-center rounded-full text-[14px] font-semibold px-5 py-3 w-full justify-center transition",
                      highlight
                        ? "bg-white text-[#050505] hover:bg-white/90"
                        : "bg-[#050505] text-white hover:bg-black/90",
                    ].join(" ")}
                  >
                    {p.cta}
                  </a>
                  {p.ctaNote && (
                    <p
                      className={[
                        "mt-3 text-[12px] text-center",
                        highlight ? "text-white/60" : "text-[#050505]/60",
                      ].join(" ")}
                    >
                      {p.ctaNote}
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
