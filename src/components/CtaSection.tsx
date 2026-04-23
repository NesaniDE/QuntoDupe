import Image from "next/image";

export function CtaSection() {
  return (
    <section className="bg-white py-10 md:py-16">
      <div className="mx-auto max-w-[1344px] px-5 lg:px-12">
        <div className="relative overflow-hidden rounded-[28px] aspect-[16/9] md:aspect-[21/9] min-h-[360px] md:min-h-[480px]">
          <Image
            src="/images/asset-33283-3dc84a708e.avif"
            alt="Qonto Karte in der Hand"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 lg:px-24 text-white max-w-2xl">
            <h2 className="font-sans font-semibold text-[40px] md:text-[56px] lg:text-[64px] leading-[1] tracking-[-0.02em]">
              Kompliziert?<br />Nicht mit uns.
            </h2>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center rounded-full bg-white text-[#050505] text-[15px] font-semibold px-5 py-3 hover:bg-white/90 transition"
              >
                Projekt anfragen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
