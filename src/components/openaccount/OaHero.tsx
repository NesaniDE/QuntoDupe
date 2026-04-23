import Image from "next/image";
import { StarIcon } from "@/components/icons";

const RATINGS = [
  { name: "Eigenentwicklung", value: "100 %" },
  { name: "Direkter Kontakt", value: "1:1" },
  { name: "Zwischenagenturen", value: "0" },
];

export function OaHero() {
  return (
    <section className="relative bg-white text-[#050505] overflow-hidden">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-24 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-8 text-[13px] text-[#050505]/75">
              {RATINGS.map((r) => (
                <div key={r.name} className="flex items-center gap-1.5">
                  <span className="font-semibold text-[#050505]">
                    {r.value}
                  </span>
                  <StarIcon className="w-4 h-4 text-[#050505]" />
                  <span className="font-medium">{r.name}</span>
                </div>
              ))}
            </div>

            <h1 className="font-sans font-semibold text-[44px] md:text-[60px] lg:text-[80px] leading-[1.02] tracking-[-0.025em] max-w-[15ch]">
              Drei Stufen. Sechs Leistungen.
            </h1>
            <p className="mt-6 md:mt-8 text-[16px] md:text-[18px] leading-[1.55] text-[#050505]/80 max-w-[52ch]">
              Von der{" "}
              <span className="font-semibold">
                digitalen Präsenz bis zu autonomen Systemen
              </span>
              . Websites, KI-Workflows und maßgeschneiderte Software – gebaut
              von einem Ansprechpartner, direkt aus Schwäbisch Gmünd. Klarer
              Stack, wartbarer Code, messbare Wirkung.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center rounded-full bg-[#050505] text-white text-[15px] font-semibold px-5 py-3 hover:bg-black/90 transition"
              >
                Projekt anfragen
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center rounded-full border border-[#050505]/20 text-[#050505] text-[15px] font-semibold px-5 py-3 hover:bg-[#050505]/5 transition"
              >
                Leistungen ansehen
              </a>
            </div>

            <div className="mt-10 flex items-center gap-3 text-[13px] text-[#050505]/70">
              <Image
                src="/images/oa-33279-a0d1dc7b5b.png"
                alt="Nesani Qualitätsversprechen"
                width={120}
                height={36}
                className="h-8 w-auto object-contain"
              />
              <span>Sauberer Code, klare Architektur, langfristig wartbar.</span>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative aspect-[5/4]">
              <Image
                src="/images/oa-33411-7f630c368e.avif"
                alt="Nesani Leistungen"
                fill
                priority
                sizes="(min-width:1024px) 640px, 100vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
