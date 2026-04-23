import Image from "next/image";
import { ArrowUpRightIcon } from "@/components/icons";

export function PartnersBanner() {
  return (
    <section id="process" className="bg-[#050505] text-white overflow-hidden">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-16 md:py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-6">
          <h2 className="font-sans font-semibold text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.02em] max-w-[18ch]">
            So entsteht Ihre Website.
          </h2>
          <p className="mt-6 md:mt-8 text-[16px] md:text-[18px] leading-[1.55] text-white/80 max-w-[52ch]">
            Vier klare Schritte vom Erstgespräch bis zur Übergabe – mit festen
            Meilensteinen, kurzen Abstimmungen und einem Ansprechpartner, der
            technisch tief im Projekt steckt.
          </p>
          <div className="mt-8">
            <a
              href="#process-cards"
              className="inline-flex items-center gap-1.5 rounded-full bg-white text-[#050505] text-[15px] font-semibold px-5 py-3 hover:bg-white/90 transition"
            >
              Prozess im Detail
              <ArrowUpRightIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="lg:col-span-6">
          <div className="relative aspect-[4/3] lg:aspect-[5/4]">
            <Image
              src="/images/fin-33264-x.png"
              alt="Ablauf Website-Projekt bei Nesani"
              fill
              sizes="(min-width:1024px) 640px, 100vw"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
