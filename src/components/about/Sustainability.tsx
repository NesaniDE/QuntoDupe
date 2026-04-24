import Image from "next/image";
import { ArrowUpRightIcon } from "@/components/icons";

export function Sustainability() {
  return (
    <section className="bg-white text-[#050505]">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-16 md:py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-6">
          <div className="relative overflow-hidden rounded-2xl md:rounded-3xl aspect-[4/3]">
            <Image
              src="/images/about-33672-37bafadfc7.jpg"
              alt="Langfristige Partnerschaft"
              fill
              sizes="(min-width:1024px) 640px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="lg:col-span-6 lg:pl-6">
          <h2 className="font-sans font-semibold text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.02em]">
            Partnerschaft statt Einzelprojekt.
          </h2>
          <p className="mt-6 text-[16px] md:text-[18px] leading-[1.55] text-[#050505]/80 max-w-[52ch]">
            Nesani baut keine Wegwerfprojekte. Systeme entstehen so, dass sie
            mitwachsen — mit klarer Dokumentation, wartbarem Code und einem
            Ansprechpartner, der auch nach dem Launch noch da ist. Langfristige
            Zusammenarbeit ist bei uns Standard, kein Add-on.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href="/kontakt"
              className="inline-flex items-center rounded-full bg-[#050505] text-white text-[15px] font-semibold px-5 py-3 hover:bg-black/90 transition"
            >
              Projekt anfragen
            </a>
            <a
              href="/open-account"
              className="inline-flex items-center gap-1.5 text-[15px] font-medium text-[#050505] hover:opacity-80 transition"
            >
              Leistungen ansehen
              <ArrowUpRightIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
