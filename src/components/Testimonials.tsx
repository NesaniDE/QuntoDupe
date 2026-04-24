"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRightIcon, ChevronLeftIcon, ChevronRightIcon, PauseIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";

type Quote = {
  quote: string;
  author: string;
  role: string;
  image: string;
  label: string;
};

const QUOTES: Quote[] = [
  {
    quote:
      "Wir haben rund 40 % unserer manuellen Arbeit automatisiert — ohne, dass Kunden etwas davon merken. Nur die Reaktionszeit ist deutlich kürzer.",
    author: "Jens B.",
    role: "Geschäftsführer, Beratung",
    image: "/images/breit/portrait-1.png",
    label: "NESANI | BERATUNG",
  },
  {
    quote:
      "Der neue Auftritt wirkt nicht wie ein Template, sondern wie unser Unternehmen. Genau das war der Punkt.",
    author: "Laura K.",
    role: "Gründerin, Studio",
    image: "/images/breit/portrait-2.png",
    label: "NESANI | STUDIO",
  },
  {
    quote:
      "Von der ersten Skizze bis zum Livegang war der Prozess klar und ohne Reibung. Wir haben nur noch entschieden, nicht mehr verwaltet.",
    author: "Tobias M.",
    role: "CEO, B2B Software",
    image: "/images/breit/portrait-3.png",
    label: "NESANI | B2B SOFTWARE",
  },
  {
    quote:
      "Wir waren skeptisch, ob KI in unserem Umfeld wirklich greift. Heute übernimmt der Assistent rund 70 % der Erstanfragen — 24/7.",
    author: "Sarah H.",
    role: "Geschäftsführerin, Online-Handel",
    image: "/images/breit/portrait-4.png",
    label: "NESANI | ONLINE-HANDEL",
  },
  {
    quote:
      "Individuelle Entwicklung statt Baukasten — genau das hat bei uns den Unterschied gemacht. Die Lösung wächst jetzt mit dem Geschäft mit.",
    author: "Andreas V.",
    role: "Geschäftsführer, Industrie",
    image: "/images/breit/portrait-5.png",
    label: "NESANI | INDUSTRIE",
  },
];

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const current = QUOTES[idx];

  const prev = () => setIdx((i) => (i === 0 ? QUOTES.length - 1 : i - 1));
  const next = () => setIdx((i) => (i + 1) % QUOTES.length);

  return (
    <section className="bg-[#050505] text-white py-20 md:py-28">
      <div className="mx-auto max-w-[1344px] px-5 lg:px-12">
        <Reveal as="div" className="mb-10 md:mb-14">
          <h2 className="font-sans font-semibold text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.02em] max-w-[900px]">
            Das sagen unsere Kundinnen<br />und Kunden
          </h2>
        </Reveal>

        <div className="relative overflow-hidden rounded-3xl aspect-[16/11] md:aspect-[16/9] lg:aspect-[16/8]">
          <Image
            src={current.image}
            alt={current.author}
            fill
            sizes="(min-width: 1024px) 1344px, 100vw"
            className="object-cover"
            priority={idx === 0}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, rgba(5,5,5,0.78) 0%, rgba(5,5,5,0.55) 38%, rgba(5,5,5,0.15) 62%, rgba(5,5,5,0) 80%)",
            }}
          />

          <button
            type="button"
            aria-label="Referenz öffnen"
            className="absolute top-5 right-5 md:top-7 md:right-7 w-10 h-10 md:w-11 md:h-11 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/60 transition"
          >
            <ArrowUpRightIcon className="w-4 h-4" />
          </button>

          <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-10 lg:p-14">
            <div className="text-white/85 text-[12px] md:text-[13px] uppercase tracking-[0.18em] font-semibold">
              {current.label}
            </div>
            <div className="max-w-[640px]">
              <blockquote className="text-[22px] md:text-[30px] lg:text-[36px] leading-[1.25] font-sans tracking-[-0.01em]">
                &ldquo;{current.quote}&rdquo;
              </blockquote>
              <div className="mt-6 md:mt-8 text-[14px] md:text-[15px] text-white/85">
                {current.author}, {current.role}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-6 md:mt-8">
          <div className="flex items-center gap-2">
            {QUOTES.map((_, i) => (
              <button
                key={i}
                aria-label={`Kundenstimme ${i + 1}`}
                onClick={() => setIdx(i)}
                className={[
                  "h-1 rounded-full transition-all",
                  i === idx ? "w-8 bg-white" : "w-4 bg-white/30",
                ].join(" ")}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Vorherige"
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition"
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </button>
            <button
              aria-label="Pause"
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition"
            >
              <PauseIcon className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              aria-label="Nächste"
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition"
            >
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
