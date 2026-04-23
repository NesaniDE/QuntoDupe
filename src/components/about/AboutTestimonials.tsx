"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";

type T = { quote: string; name: string; role: string; img: string };

const ITEMS: T[] = [
  {
    quote:
      "Nedim denkt mit statt nur umzusetzen. Das Ergebnis war nicht nur technisch sauber, sondern wirtschaftlich spürbar — unsere Anfragen haben sich nach dem Relaunch merklich erhöht.",
    name: "Marc P.",
    role: "Geschäftsführer, Dienstleistung",
    img: "/images/about-9896-325d93b61b.jpg",
  },
  {
    quote:
      "Endlich jemand, der Automatisierung nicht als Buzzword verkauft, sondern als echtes Werkzeug einsetzt. Der gebaute Workflow läuft seit Monaten ohne Zwischenfälle.",
    name: "Madeleine v. H.",
    role: "Mitgründerin, E-Commerce",
    img: "/images/about-26236-a083e29e72.jpg",
  },
  {
    quote:
      "Wir bekommen einen festen Ansprechpartner, klare Dokumentation und ein System, das wir auch selbst bedienen können. Genau so soll Agentur-Arbeit heute laufen.",
    name: "Ege G.",
    role: "CEO, SaaS",
    img: "/images/about-26191-efc8e6860b.jpg",
  },
  {
    quote:
      "Der KI-Assistent, den Nesani für uns gebaut hat, übernimmt heute Routinefragen unserer Kunden — unser Support-Team hat endlich wieder Kapazität für das, was wirklich zählt.",
    name: "Norman S.",
    role: "Gründer, Energiewirtschaft",
    img: "/images/about-9511-a1c0fa9690.jpg",
  },
  {
    quote:
      "Wir haben vorher mit zwei Agenturen gearbeitet. Bei Nesani reicht ein Ansprechpartner — und die Geschwindigkeit ist ein anderes Level.",
    name: "Marius H.",
    role: "Steuerberater",
    img: "/images/about-12132-1f45c09895.jpg",
  },
  {
    quote:
      "Unser interner Prozess zur Angebotserstellung dauerte 40 Minuten pro Kunde. Nach der Automatisierung durch Nesani sind es drei. Das ist der Unterschied, den wir gesucht haben.",
    name: "Charlotte P.",
    role: "Mitgründerin, B2B Services",
    img: "/images/about-26195-eedb3091b7.jpg",
  },
  {
    quote:
      "Klare Architektur, keine unnötigen Features, sauberer Code. Unser Entwickler-Team kann die Systeme heute selbst weiterpflegen — genau wie versprochen.",
    name: "Klemens W.",
    role: "Geschäftsführer, Green Tech",
    img: "/images/about-9508-5f9a305e70.jpg",
  },
  {
    quote:
      "Direkt, ehrlich und schnell. Wenn etwas nicht sinnvoll ist, hören wir das — und das ist Gold wert.",
    name: "Hans-Peter F.",
    role: "Country Manager",
    img: "/images/about-10061-083993b70c.jpg",
  },
];

export function AboutTestimonials() {
  const [i, setI] = useState(0);
  const t = ITEMS[i];
  const prev = () => setI((n) => (n - 1 + ITEMS.length) % ITEMS.length);
  const next = () => setI((n) => (n + 1) % ITEMS.length);

  return (
    <section className="bg-white text-[#050505]">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h2 className="font-sans font-semibold text-[32px] md:text-[40px] lg:text-[52px] leading-[1.1] tracking-[-0.02em] max-w-[20ch]">
            Was unsere Kunden über die Zusammenarbeit sagen
          </h2>
          <div className="flex gap-3">
            <button
              type="button"
              aria-label="Zurück"
              onClick={prev}
              className="w-11 h-11 rounded-full border border-black/15 flex items-center justify-center hover:bg-black hover:text-white transition"
            >
              <ArrowLeftIcon className="w-4 h-4" />
            </button>
            <button
              type="button"
              aria-label="Weiter"
              onClick={next}
              className="w-11 h-11 rounded-full border border-black/15 flex items-center justify-center hover:bg-black hover:text-white transition"
            >
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="text-[56px] md:text-[80px] leading-none text-[#050505]/15 font-serif">
              &ldquo;
            </div>
            <blockquote className="text-[20px] md:text-[26px] lg:text-[28px] leading-[1.4] tracking-[-0.01em] max-w-[38ch]">
              {t.quote}
            </blockquote>
            <div className="mt-8">
              <div className="font-sans font-semibold text-[17px] md:text-[18px]">
                {t.name}
              </div>
              <div className="text-[14px] md:text-[15px] text-[#050505]/70">
                {t.role}
              </div>
            </div>
            <div className="mt-6 flex gap-1.5">
              {ITEMS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  aria-label={`Testimonial ${idx + 1}`}
                  onClick={() => setI(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === i ? "w-8 bg-[#050505]" : "w-4 bg-black/20"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative aspect-[4/3] md:aspect-[3/2] rounded-2xl md:rounded-3xl overflow-hidden bg-[#F5F2EB]">
              <Image
                key={t.img}
                src={t.img}
                alt={t.name}
                fill
                sizes="(min-width:1024px) 640px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
