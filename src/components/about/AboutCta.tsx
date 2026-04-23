import Image from "next/image";

export function AboutCta() {
  return (
    <section className="bg-white py-10 md:py-16">
      <div className="mx-auto max-w-[1344px] px-5 lg:px-12">
        <div className="relative overflow-hidden rounded-[28px] aspect-[16/9] md:aspect-[21/9] min-h-[420px] md:min-h-[520px]">
          <Image
            src="/images/about-33407-bb82781e55.avif"
            alt="Gemeinsam stark"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-16 lg:px-24 text-white">
            <h2 className="font-sans font-semibold text-[44px] md:text-[64px] lg:text-[84px] leading-[1] tracking-[-0.02em]">
              Gemeinsam stark.
            </h2>
            <p className="mt-6 text-[15px] md:text-[18px] leading-[1.5] max-w-[52ch] text-white/90">
              KMU sind Europas wirtschaftlicher Motor. Qonto entwickelt
              Finanztools, die Prozesse vereinfachen und Kontrolle zurückgeben –
              in Ihre Hände.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="#"
                className="inline-flex items-center rounded-full bg-white text-[#050505] text-[15px] font-semibold px-5 py-3 hover:bg-white/90 transition"
              >
                Preise einsehen
              </a>
              <a
                href="#"
                className="inline-flex items-center rounded-full border border-white/60 text-white text-[15px] font-semibold px-5 py-3 hover:bg-white/10 transition"
              >
                Qonto in den Medien
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
