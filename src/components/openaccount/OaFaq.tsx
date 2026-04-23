"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@/components/icons";

type Item = { q: string; a: string };

const ITEMS: Item[] = [
  {
    q: "Welche Leistungen bietet Nesani?",
    a: "Nesani bietet drei Leistungsstufen: Digitale Präsenz (Websites + Social Media), KI-Integration (KI-Workflows und KI-Assistenten) sowie Autonome Systeme (Autonome Agenten und individuelle Systemarchitektur). Jede Stufe baut auf der vorherigen auf und kann einzeln oder kombiniert umgesetzt werden.",
  },
  {
    q: "Wie läuft die Zusammenarbeit ab?",
    a: "Erstgespräch, gemeinsame Analyse von Zielen und Rahmenbedingungen, klares Angebot, anschließend Umsetzung mit direktem Draht zum Entwickler. Keine Projektmanager-Ketten, keine Agentur-Overhead – ein Ansprechpartner von Anfang bis nach dem Launch.",
  },
  {
    q: "Welche Unternehmen arbeiten mit Nesani?",
    a: "Unternehmen verschiedener Größen und Branchen – von Einzelunternehmern und Selbstständigen bis zu mittelständischen Betrieben. Gemeinsam ist ihnen der Anspruch, digitale Systeme nicht nur zu haben, sondern wirtschaftlich nutzbar zu machen.",
  },
  {
    q: "Sind die Systeme auch ohne Nesani wartbar?",
    a: "Ja. Jedes Projekt wird dokumentiert und so gebaut, dass Ihr Team (oder ein anderer Entwickler) die Systeme selbst weiterpflegen kann. Keine Blackbox, keine künstliche Abhängigkeit – das ist bewusste Grundhaltung.",
  },
  {
    q: "Kann ich mit einer kleinen Leistung starten und später erweitern?",
    a: "Unbedingt. Viele Unternehmen beginnen mit einer Website oder einem einzelnen Workflow und erweitern später um KI-Assistenten oder autonome Agenten. Die Stufen sind modular gedacht, nicht als festes Paket.",
  },
];

export function OaFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white text-[#050505]">
      <div className="mx-auto max-w-[1120px] px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-32">
        <h2 className="font-sans font-semibold text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.02em] max-w-[22ch]">
          Häufig gestellte Fragen zur Zusammenarbeit
        </h2>

        <div className="mt-10 divide-y divide-[#050505]/10 border-y border-[#050505]/10">
          {ITEMS.map((it, i) => {
            const isOpen = i === open;
            return (
              <div key={it.q}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 md:py-6 text-left"
                >
                  <span className="font-sans font-semibold text-[18px] md:text-[20px] leading-[1.35]">
                    {it.q}
                  </span>
                  <ChevronDownIcon
                    className={[
                      "w-4 h-4 shrink-0 transition-transform duration-300",
                      isOpen ? "rotate-180" : "",
                    ].join(" ")}
                  />
                </button>
                <div
                  className={[
                    "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 pb-6"
                      : "grid-rows-[0fr] opacity-0",
                  ].join(" ")}
                >
                  <div className="overflow-hidden">
                    <p className="text-[15px] leading-[1.65] text-[#050505]/80 max-w-[72ch]">
                      {it.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
