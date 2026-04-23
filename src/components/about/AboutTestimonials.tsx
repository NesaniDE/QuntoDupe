"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";

type T = { quote: string; name: string; role: string; img: string };

const ITEMS: T[] = [
  {
    quote:
      "Zu Qonto zu wechseln, war eine der besten Entscheidungen für unsere Finanzverwaltung. Qonto hat unseren Zahlungsverkehr rationalisiert und uns eine umfassende Kontrolle über unsere Finanzen gegeben.",
    name: "Marc Peter Dauter",
    role: "GF Le Wagon Germany",
    img: "/images/about-9896-325d93b61b.jpg",
  },
  {
    quote:
      "Ich würde Qonto jedem empfehlen, der eine einfache, moderne Finanzlösung sucht. Mit Qonto ist es einfach und übersichtlich. Es ist mein unkompliziertes Geschäftskonto.",
    name: "Madeleine von Hohenthal",
    role: "Mitgründerin Tatzenstreu",
    img: "/images/about-26236-a083e29e72.jpg",
  },
  {
    quote:
      "Wir verwalten all unsere Finanzen in der Qonto App. Das Dashboard zeigt unseren Cashflow und unsere Ausgaben an. Die leicht verständliche Benutzeroberfläche hilft mir, meine Finanzen unterwegs zu verwalten.",
    name: "Ege Gündüz",
    role: "Mitgründer & CEO liftOS",
    img: "/images/about-26191-efc8e6860b.jpg",
  },
  {
    quote:
      "Für mich ist Qonto die digitale Lösung, nach der wir gesucht haben. Qonto unterstützt uns dabei, unsere Einnahmen und Ausgaben einfach und effizient zu managen.",
    name: "Norman Simon",
    role: "Gründer onGRID",
    img: "/images/about-9511-a1c0fa9690.jpg",
  },
  {
    quote:
      "Wir empfehlen unseren Mandant:innen Qonto regelmäßig weiter. Der Hintergrund ist die einfache Anbindung für uns als Steuerberater. Wir bekommen leicht an die Daten und der Kontoeröffnungsprozess ist extrem schnell.",
    name: "Marius Hanke",
    role: "Steuerberater und GF Insight Tax",
    img: "/images/about-12132-1f45c09895.jpg",
  },
  {
    quote:
      "Qonto hilft uns dabei, nachhaltig zu wachsen. Durch die vereinfachten, optimierten Prozesse gewinnen wir jeden Tag wertvolle Zeit für unser Unternehmen.",
    name: "Charlotte Piller",
    role: "Mitgründerin Lotta Ludwigson",
    img: "/images/about-26195-eedb3091b7.jpg",
  },
  {
    quote:
      "Qonto unterstützt uns dabei, unsere Zahlungen und Ausgaben optimal zu verwalten. So gewinnen wir Zeit und behalten den Überblick über unsere Projekte.",
    name: "Klemens Witte",
    role: "Gründer & CEO GreenHomeNow",
    img: "/images/about-9508-5f9a305e70.jpg",
  },
  {
    quote:
      "Super Service, eine starke Präsenz in Deutschland und Europa und einfach ein tolles Produkt.",
    name: "Hans-Peter Frank",
    role: "Country Manager Germany Fleet",
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
            Was unsere Kunden zur Erfahrung mit Qonto sagen
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
