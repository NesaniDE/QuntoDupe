import Image from "next/image";

export function OaAllFinances() {
  return (
    <section className="bg-white text-[#050505]">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-32">
        <h2 className="font-sans font-semibold text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.02em] max-w-[22ch]">
          Analyse und Integration aus einer Hand
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <article className="rounded-2xl md:rounded-3xl bg-[#F4F1EA] p-6 md:p-10 flex flex-col">
            <h3 className="font-sans font-semibold text-[22px] md:text-[28px] leading-[1.2]">
              Prozess-Analyse
            </h3>
            <p className="mt-4 text-[15px] md:text-[16px] leading-[1.55] text-[#050505]/80 max-w-[42ch]">
              Bevor gebaut wird, wird verstanden. Wir identifizieren Engpässe,
              Doppelarbeit und manuelle Schritte – und entscheiden gemeinsam,
              was sich wirklich automatisieren lässt.
            </p>
            <div className="mt-8 relative aspect-[16/10] rounded-xl overflow-hidden">
              <Image
                src="/images/oa-33285-f045dd08ae.avif"
                alt="Prozess-Analyse"
                fill
                sizes="(min-width:768px) 640px, 100vw"
                className="object-contain"
              />
            </div>
          </article>

          <article className="rounded-2xl md:rounded-3xl bg-[#F4F1EA] p-6 md:p-10 flex flex-col">
            <h3 className="font-sans font-semibold text-[22px] md:text-[28px] leading-[1.2]">
              Tool-Integrationen
            </h3>
            <p className="mt-4 text-[15px] md:text-[16px] leading-[1.55] text-[#050505]/80 max-w-[42ch]">
              Neue Systeme werden an das angebunden, was bereits läuft – von
              CRM über Kommunikations-Tools bis zu Drittanbieter-APIs. Saubere
              Schnittstellen statt Insellösungen.
            </p>
            <div className="mt-8 relative aspect-[16/10] rounded-xl overflow-hidden">
              <Image
                src="/images/oa-33284-66a5090d64.avif"
                alt="Tool-Integrationen"
                fill
                sizes="(min-width:768px) 640px, 100vw"
                className="object-contain"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
