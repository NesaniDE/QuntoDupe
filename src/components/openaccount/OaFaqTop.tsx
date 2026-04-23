"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@/components/icons";

type Item = { q: string; a: string };

const ITEMS: Item[] = [
  {
    q: "Was unterscheidet Nesani von einer klassischen Agentur?",
    a: "Kein Callcenter, kein Projektleiter-Pingpong. Sie sprechen mit der Person, die auch entwickelt – von Schwäbisch Gmünd aus. Kein Zwischenhändler, keine verteilten Verantwortungen. Genau ein Ansprechpartner, der technisch tief im Projekt steckt und auch nach dem Launch noch erreichbar ist.",
  },
  {
    q: "Für wen sind die Leistungen geeignet?",
    a: "Für Unternehmen, die digital sichtbarer und leistungsfähiger werden wollen – vom Kleinunternehmen bis zum mittelständischen Betrieb. Die drei Stufen bilden den typischen Weg ab: erst digitale Präsenz aufbauen, dann wiederkehrende Prozesse automatisieren, zuletzt autonome Systeme und individuelle Softwarearchitektur.",
  },
  {
    q: "Was kostet ein Projekt bei Nesani?",
    a: "Jedes Projekt ist unterschiedlich, deshalb gibt es keine Schubladenpreise. Im unverbindlichen Erstgespräch klären wir Umfang, Ziele und Rahmenbedingungen und machen Ihnen anschließend ein transparentes Angebot – ohne versteckte Kosten und ohne Agentur-Aufschlag.",
  },
  {
    q: "Welche Technologien setzt Nesani ein?",
    a: "Moderne, bewährte Stacks – Next.js, React, TypeScript für Web, Claude/GPT und passende Frameworks für KI-Integrationen, klare Schnittstellen für Automatisierung. Jede Entscheidung folgt dem gleichen Prinzip: wartbar, dokumentiert, langfristig tragbar.",
  },
  {
    q: "Wie schnell kann ein Projekt starten?",
    a: "Nach einem Erstgespräch und geklärtem Umfang geht es in der Regel innerhalb weniger Tage los. Kleinere Projekte sind oft in 2–4 Wochen live, größere Systeme werden iterativ ausgeliefert – mit klaren Meilensteinen statt unsichtbarer Entwicklungsblackbox.",
  },
  {
    q: "Was passiert nach dem Launch?",
    a: "Nesani baut keine Wegwerfprojekte. Systeme entstehen so, dass sie mitwachsen – mit klarer Dokumentation, wartbarem Code und einem Ansprechpartner, der auch nach dem Go-Live da ist. Langfristige Zusammenarbeit ist Standard, kein Add-on.",
  },
  {
    q: "Muss ich mich auf eine Stufe festlegen?",
    a: "Nein. Die drei Stufen sind ein Orientierungsrahmen, keine starren Pakete. Viele Unternehmen starten mit einer Website oder einem konkreten Workflow und erweitern später um KI-Assistenten oder autonome Agenten – passend zu Tempo und Budget.",
  },
];

export function OaFaqTop() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white text-[#050505]">
      <div className="mx-auto max-w-[1120px] px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-32">
        <h2 className="font-sans font-semibold text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.02em] max-w-[20ch]">
          Zusammenarbeit mit Nesani: Ablauf, Leistungen, Kosten
        </h2>
        <p className="mt-4 text-[16px] md:text-[18px] leading-[1.5] text-[#050505]/70 max-w-[54ch]">
          Die häufigsten Fragen zum Projektablauf, den drei Stufen und der
          Zusammenarbeit auf einen Blick.
        </p>

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
