"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";

type TimelineItem = {
  badge: string;
  year: string;
  title: string;
  body: string;
};

const ITEMS: TimelineItem[] = [
  {
    badge: "/images/about-33681-347d549b5a.avif",
    year: "2025",
    title: "Gemeinsam auf Erfolgskurs",
    body: "Qonto unterstützt mehr als 600.000 Geschäftskund:innen und hat 250.000 Unternehmensgründungen ermöglicht.",
  },
  {
    badge: "/images/about-33680-945c2afc13.avif",
    year: "2024",
    title: "Neue Märkte",
    body: "Qonto wächst weiter in Europa und unterstützt Unternehmen jetzt auch in Österreich, Belgien, Portugal und den Niederlanden.",
  },
  {
    badge: "/images/about-33679-fd36962de3.avif",
    year: "2023",
    title: "Lokale Partnerschaften",
    body: "Qonto wird offizieller DATEV‑Partner und Kund:innen profitieren von nahtlosen DATEV‑Schnittstellen und lokalem Support.",
  },
  {
    badge: "/images/about-33678-8c36fcedb3.avif",
    year: "2022",
    title: "Für deutsche Unternehmen",
    body: "Qonto erhält die TÜV‑Zertifizierung und seinen ersten Deutschen B2B Award – und schließt sich mit Penta zusammen.",
  },
  {
    badge: "/images/about-33677-420388ac42.avif",
    year: "2021",
    title: "Wachstum in Europa",
    body: "Qonto unterstützt jetzt mehr als 100.000 Unternehmen in Frankreich, Deutschland, Italien und Spanien.",
  },
  {
    badge: "/images/about-33676-7204fa045a.avif",
    year: "2020",
    title: "Start in Deutschland",
    body: "Mit 20.000 Kund:innen in FR eröffnet Qonto den Standort Berlin und bringt effizientes Business-Banking nach Deutschland.",
  },
  {
    badge: "/images/about-33675-75a1e6d3fa.avif",
    year: "2017",
    title: "In Frankreich gegründet",
    body: "Qonto startete mit einer klaren Mission: europäischen KMU die Finanztools zu bieten, die sie verdienen.",
  },
];

export function Timeline() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLDivElement>("[data-card]");
    const step = (card?.offsetWidth ?? 360) + 24;
    el.scrollBy({ left: step * dir, behavior: "smooth" });
  };

  return (
    <section id="story" className="bg-white text-[#050505]">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h2 className="font-sans font-semibold text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.02em] max-w-[18ch]">
            Qonto in Deutschland: Unsere Geschichte
          </h2>
          <div className="flex gap-3">
            <button
              type="button"
              aria-label="Zurück"
              onClick={() => scrollBy(-1)}
              className="w-11 h-11 rounded-full border border-black/15 flex items-center justify-center hover:bg-black hover:text-white transition"
            >
              <ArrowLeftIcon className="w-4 h-4" />
            </button>
            <button
              type="button"
              aria-label="Weiter"
              onClick={() => scrollBy(1)}
              className="w-11 h-11 rounded-full border border-black/15 flex items-center justify-center hover:bg-black hover:text-white transition"
            >
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="mt-10 md:mt-12 flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar pb-4"
        >
          {ITEMS.map((it) => (
            <div
              key={it.year}
              data-card
              className="snap-start shrink-0 w-[82%] sm:w-[55%] md:w-[42%] lg:w-[31%] xl:w-[26%] rounded-2xl md:rounded-3xl bg-[#F5F2EB] p-6 md:p-8 flex flex-col"
            >
              <div className="h-14 md:h-16 flex items-start">
                <Image
                  src={it.badge}
                  alt={`Badge ${it.year}`}
                  width={128}
                  height={64}
                  className="h-14 md:h-16 w-auto"
                />
              </div>
              <h3 className="mt-6 font-sans font-semibold text-[22px] md:text-[26px] leading-[1.15] tracking-[-0.01em]">
                {it.title}
              </h3>
              <p className="mt-3 text-[15px] md:text-[16px] leading-[1.5] text-[#050505]/75">
                {it.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
