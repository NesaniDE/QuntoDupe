import Image from "next/image";
import { ArrowUpRightIcon } from "@/components/icons";

export function PayLater() {
  return (
    <section id="paylater" className="bg-white text-[#050505]">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <div className="text-[13px] font-semibold tracking-widest uppercase text-[#050505]/60">
              Für wen
            </div>
            <h2 className="mt-4 font-sans font-semibold text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.02em]">
              Websites, die Anfragen bringen.
            </h2>
            <p className="mt-6 text-[16px] md:text-[18px] leading-[1.55] text-[#050505]/80 max-w-[52ch]">
              Kein Templateshop, kein Agentur-Overhead. Ein{" "}
              <span className="font-semibold">Ansprechpartner</span>, der
              versteht, für wen gebaut wird – und{" "}
              <span className="font-semibold">sauberer Code</span>, den Ihr
              Team auch nach dem Launch noch versteht.
            </p>
            <ul className="mt-8 space-y-4 text-[15px] md:text-[16px] leading-[1.5] text-[#050505]/85">
              <li className="flex gap-3">
                <span className="mt-1.5 inline-block w-1.5 h-1.5 rounded-full bg-[#050505]" />
                Unternehmen mit veralteter oder fehlender Web-Präsenz.
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 inline-block w-1.5 h-1.5 rounded-full bg-[#050505]" />
                Dienstleister, die gezielt mehr qualifizierte Anfragen wollen.
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 inline-block w-1.5 h-1.5 rounded-full bg-[#050505]" />
                Marken, die professionell auftreten – ohne Agenturketten.
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href="#"
                className="inline-flex items-center rounded-full bg-[#050505] text-white text-[15px] font-semibold px-5 py-3 hover:bg-black/90 transition"
              >
                Projekt anfragen
              </a>
              <a
                href="#process"
                className="inline-flex items-center gap-1.5 text-[15px] font-medium text-[#050505] hover:opacity-80 transition"
              >
                Prozess ansehen
                <ArrowUpRightIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-2xl md:rounded-3xl aspect-[5/4] bg-[#F5F2EB]">
              <Image
                src="/images/fin-33386-x.avif"
                alt="Website-Entwicklung"
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
