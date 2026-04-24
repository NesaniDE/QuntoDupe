import Image from "next/image";

export function AboutHero() {
  return (
    <section className="relative h-svh min-h-[640px] lg:h-screen lg:min-h-[780px] bg-[#050505] text-white overflow-hidden">
      <Image
        src="/images/about-33406-9d70fb11c8.avif"
        alt="Nesani Kundenportraits"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 z-10 object-cover"
      />
      <video
        className="absolute inset-0 z-20 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/about-33406-9d70fb11c8.avif"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 z-30 bg-gradient-to-t from-black/70 via-black/15 to-black/30" />

      <div className="relative z-40 h-full mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 flex flex-col justify-end pb-16 md:pb-20 lg:pb-24">
        <h1 className="font-sans font-semibold text-[40px] md:text-[64px] lg:text-[88px] leading-[1.03] tracking-[-0.02em] max-w-[18ch]">
          Unternehmen digital sichtbarer
          <br />
          und leistungsfähiger machen.
        </h1>
        <div className="mt-8">
          <a
            href="#story"
            className="inline-flex items-center rounded-full bg-white text-[#050505] text-[15px] font-semibold px-5 py-3 hover:bg-white/90 transition"
          >
            Unsere Story
          </a>
        </div>
      </div>
    </section>
  );
}
