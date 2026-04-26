"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRightIcon, ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  photo: string;
  logo: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Nesani denkt mit statt nur umzusetzen. Das Ergebnis war nicht nur technisch sauber, sondern wirtschaftlich spürbar – unsere Anfragen haben sich nach dem Relaunch merklich erhöht.",
    name: "Marc P.",
    role: "Beispielrezension",
    photo: "/images/oa-hero-nesani.png",
    logo: "/images/oa-hero-nesani.png",
  },
  {
    quote:
      "Direkt, ehrlich und schnell. Wenn etwas nicht sinnvoll ist, hören wir das – und das ist Gold wert.",
    name: "Hans-Peter F.",
    role: "Beispielrezension",
    photo: "/images/oa-hero-nesani.png",
    logo: "/images/oa-hero-nesani.png",
  },
  {
    quote:
      "Klare Architektur, keine unnötigen Features, sauberer Code. Unser Entwickler-Team kann die Systeme heute selbst weiterpflegen – genau wie versprochen.",
    name: "Klemens W.",
    role: "Beispielrezension",
    photo: "/images/oa-hero-nesani.png",
    logo: "/images/oa-hero-nesani.png",
  },
  {
    quote:
      "Unser interner Prozess zur Angebotserstellung dauerte 40 Minuten pro Kunde. Nach der Automatisierung durch Nesani sind es drei. Das ist der Unterschied, den wir gesucht haben.",
    name: "Charlotte P.",
    role: "Beispielrezension",
    photo: "/images/oa-hero-nesani.png",
    logo: "/images/oa-hero-nesani.png",
  },
  {
    quote:
      "Endlich jemand, der Automatisierung nicht als Buzzword verkauft, sondern als echtes Werkzeug einsetzt. Der gebaute Workflow läuft seit Monaten ohne Zwischenfälle.",
    name: "Madeleine v. H.",
    role: "Beispielrezension",
    photo: "/images/oa-hero-nesani.png",
    logo: "/images/oa-hero-nesani.png",
  },
  {
    quote:
      "Der KI-Assistent, den Nesani für uns gebaut hat, übernimmt heute Routinefragen unserer Kunden – unser Support-Team hat endlich wieder Kapazität für das, was wirklich zählt.",
    name: "Norman S.",
    role: "Beispielrezension",
    photo: "/images/oa-hero-nesani.png",
    logo: "/images/oa-hero-nesani.png",
  },
  {
    quote:
      "Wir haben vorher mit zwei Agenturen gearbeitet. Bei Nesani reicht ein Ansprechpartner – und die Geschwindigkeit ist ein anderes Level.",
    name: "Marius H.",
    role: "Beispielrezension",
    photo: "/images/oa-hero-nesani.png",
    logo: "/images/oa-hero-nesani.png",
  },
];

export function OaTestimonials() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  const prev = () => setI((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setI((p) => (p + 1) % TESTIMONIALS.length);

  return (
    <section className="bg-[#050505] text-white">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-32">
        <h2 className="font-sans font-semibold text-[32px] md:text-[40px] lg:text-[48px] leading-[1.1] tracking-[-0.02em] max-w-[26ch]">
          Was Unternehmen über die Zusammenarbeit mit Nesani sagen
        </h2>

        <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative aspect-[4/5] max-w-[420px] rounded-2xl md:rounded-3xl overflow-hidden">
              <Image
                key={t.photo}
                src={t.photo}
                alt={t.name}
                fill
                sizes="(min-width:1024px) 420px, 100vw"
                className="object-cover testimonial-image"
              />
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <div key={`oa-${i}`} className="testimonial-fade">
              <p className="text-[22px] md:text-[28px] lg:text-[32px] leading-[1.35] font-sans max-w-[40ch]">
                <span className="text-white/40">&ldquo;</span>
                {t.quote}
                <span className="text-white/40">&rdquo;</span>
              </p>

              <div className="mt-8 flex items-center gap-6">
                <div>
                  <p className="font-semibold text-[15px]">{t.name}</p>
                  <p className="text-[13px] text-white/60">{t.role}</p>
                </div>
                <div className="h-8 flex items-center">
                  <Image
                    key={t.logo}
                    src={t.logo}
                    alt=""
                    width={100}
                    height={32}
                    className="h-7 md:h-8 w-auto opacity-90"
                  />
                </div>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <a
                href="/kontakt"
                className="inline-flex items-center gap-1.5 text-[14px] font-medium text-white hover:text-white/80 transition"
              >
                Projekt anfragen
                <ArrowUpRightIcon className="w-4 h-4" />
              </a>
              <div className="ml-auto flex items-center gap-2">
                <button
                  onClick={prev}
                  aria-label="Vorheriger"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition"
                >
                  <ChevronLeftIcon className="w-4 h-4" />
                </button>
                <button
                  onClick={next}
                  aria-label="Nächster"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition"
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
