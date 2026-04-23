import Image from "next/image";
import { ArrowUpRightIcon, CheckIcon } from "@/components/icons";

const BULLETS = [
  "Wiederkehrende Aufgaben in automatisierte Workflows überführen.",
  "KI-Assistenten übernehmen Routineanfragen und entlasten Ihr Team.",
  "Prozesse werden dokumentiert, messbar und nachvollziehbar.",
  "Klare Schnittstellen zu CRM, Kommunikations-Tools und bestehenden Systemen – ohne Insellösungen oder Datenmüll.",
];

export function OaAccounting() {
  return (
    <section className="bg-[#F4F1EA] text-[#050505]">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-6">
          <p className="text-[13px] font-semibold uppercase tracking-wider text-[#050505]/60">
            KI & Automatisierung
          </p>
          <h2 className="mt-4 font-sans font-semibold text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.02em] max-w-[18ch]">
            Weniger Fleißarbeit, mehr Kapazität.
          </h2>
          <ul className="mt-8 space-y-4">
            {BULLETS.map((b) => (
              <li key={b} className="flex items-start gap-3 text-[15px] leading-[1.55] text-[#050505]/85">
                <CheckIcon className="w-4 h-4 mt-1 shrink-0 text-[#050505]" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-[#050505] text-white text-[15px] font-semibold px-5 py-3 hover:bg-black/90 transition"
          >
            Projekt anfragen
            <ArrowUpRightIcon className="w-4 h-4" />
          </a>
        </div>

        <div className="lg:col-span-6">
          <div className="relative aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden">
            <Image
              src="/images/asset-33557-6af108a220.avif"
              alt="KI-Workflows und Automatisierung"
              fill
              sizes="(min-width:1024px) 640px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
