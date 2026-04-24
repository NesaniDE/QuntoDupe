"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon, PauseIcon } from "@/components/icons";

type Quote = {
  quote: string;
  author: string;
  role: string;
  image: string;
  logo?: string;
  logoLabel: string;
};

const QUOTES: Quote[] = [
  {
    quote:
      "Wir haben rund 40 % unserer manuellen Arbeit automatisiert — ohne, dass Kunden etwas davon merken. Nur die Reaktionszeit ist deutlich kürzer.",
    author: "Jens B.",
    role: "Geschäftsführer, Beratung",
    image: "/images/breit/portrait-1.png",
    logoLabel: "BERATUNG",
  },
  {
    quote:
      "Der neue Auftritt wirkt nicht wie ein Template, sondern wie unser Unternehmen. Genau das war der Punkt.",
    author: "Laura K.",
    role: "Gründerin, Studio",
    image: "/images/breit/portrait-2.png",
    logoLabel: "STUDIO",
  },
  {
    quote:
      "Von der ersten Skizze bis zum Livegang war der Prozess klar und ohne Reibung. Wir haben nur noch entschieden, nicht mehr verwaltet.",
    author: "Tobias M.",
    role: "CEO, B2B Software",
    image: "/images/breit/portrait-3.png",
    logoLabel: "B2B SOFTWARE",
  },
  {
    quote:
      "Wir waren skeptisch, ob KI in unserem Umfeld wirklich greift. Heute übernimmt der Assistent rund 70 % der Erstanfragen — 24/7.",
    author: "Sarah H.",
    role: "Geschäftsführerin, Online-Handel",
    image: "/images/breit/portrait-4.png",
    logoLabel: "ONLINE-HANDEL",
  },
  {
    quote:
      "Individuelle Entwicklung statt Baukasten — genau das hat bei uns den Unterschied gemacht. Die Lösung wächst jetzt mit dem Geschäft mit.",
    author: "Andreas V.",
    role: "Geschäftsführer, Industrie",
    image: "/images/breit/portrait-5.png",
    logoLabel: "INDUSTRIE",
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
        <div className="mb-10 md:mb-14">
          <h2 className="font-sans font-semibold text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.02em] max-w-[900px]">
            Das sagen unsere Kundinnen<br />und Kunden
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          <div className="relative lg:col-span-7 aspect-[16/11] lg:aspect-auto lg:min-h-[460px] rounded-3xl overflow-hidden">
            <Image
              src={current.image}
              alt={current.author}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
              priority={idx === 0}
            />
          </div>

          <div className="lg:col-span-5 flex flex-col">
            <div className="flex-1 rounded-3xl bg-white/[0.04] border border-white/10 p-8 md:p-10 flex flex-col">
              <div className="text-white/70 text-[13px] uppercase tracking-widest font-semibold">
                {current.logoLabel}
              </div>
              <blockquote className="mt-8 text-[20px] md:text-[22px] leading-[1.4] font-sans">
                “{current.quote}”
              </blockquote>
              <div className="mt-auto pt-8">
                <div className="font-semibold">{current.author}</div>
                <div className="text-white/65 text-[14px]">{current.role}</div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-6">
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
        </div>
      </div>
    </section>
  );
}
