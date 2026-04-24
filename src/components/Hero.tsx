import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden bg-[#050505] text-white">
      {/* Background image fallback (z-10) */}
      <div className="absolute inset-0 z-10">
        <Image
          src="/images/asset-33449-ecc13c3565.avif"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      {/* Video overlay (z-20) */}
      <video
        className="absolute inset-0 z-20 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/asset-33449-ecc13c3565.avif"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      {/* Bottom scrim gradient (z-30) */}
      <div
        className="absolute inset-0 z-30 pointer-events-none"
        style={{
          background:
            "linear-gradient(rgba(5,5,5,0) 78.6%, rgb(5,5,5) 100%), linear-gradient(0deg, rgba(5,5,5,0.15) 0%, rgba(5,5,5,0.15) 100%)",
        }}
      />

      {/* Content grid */}
      <div className="relative z-40 flex h-full min-h-[100svh] flex-col justify-end pb-12 pt-28 px-5 lg:px-12">
        <div className="flex-1" />

        {/* Headline + CTA */}
        <div className="flex flex-col gap-y-6 lg:max-w-[870px]">
          <h1 className="font-sans font-bold text-[44px] sm:text-[56px] lg:text-[72px] leading-[1.05] tracking-[-0.02em]">
            Sichtbarer.<br />
            Effizienter.<br />
            Autonomer.
          </h1>

          <div className="mt-6 lg:mt-10">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-white text-black text-[15px] font-semibold px-5 py-3 hover:bg-white/90 transition"
            >
              Projekt anfragen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
