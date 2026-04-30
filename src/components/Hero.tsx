import { Reveal } from "@/components/Reveal";
import { HeroVideo } from "@/components/HeroVideo";

export function Hero() {
  return (
    <section className="relative w-full min-h-[78svh] md:min-h-[100svh] overflow-hidden bg-[#050505] text-white">
      <HeroVideo
        desktop="/videos/hero.mp4"
        mobile="/videos/hero-mobile.mp4"
        poster="/images/hero-poster.jpg"
        className="absolute inset-0 z-10 w-full h-full object-cover [object-position:85%_center] md:[object-position:center]"
      />
      {/* Bottom scrim gradient (z-30) */}
      <div
        className="absolute inset-0 z-30 pointer-events-none"
        style={{
          background:
            "linear-gradient(rgba(5,5,5,0) 78.6%, rgb(5,5,5) 100%), linear-gradient(0deg, rgba(5,5,5,0.15) 0%, rgba(5,5,5,0.15) 100%)",
        }}
      />

      {/* Content grid */}
      <div className="relative z-40 flex h-full min-h-[78svh] md:min-h-[100svh] flex-col justify-end pb-12 pt-28 px-5 lg:px-12">
        <div className="flex-1" />

        {/* Headline + CTA */}
        <div className="flex flex-col gap-y-6 lg:max-w-[870px]">
          <Reveal
            as="h1"
            direction="up"
            distance={18}
            className="font-sans font-bold text-[44px] sm:text-[56px] lg:text-[72px] leading-[1.05] tracking-[-0.02em]"
          >
            Sichtbarer.<br />
            Effizienter.<br />
            Autonomer.
          </Reveal>

          <Reveal delay={200} className="mt-6 lg:mt-10">
            <a
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-full bg-white text-black text-[15px] font-semibold px-5 py-3 hover:bg-white/90 transition"
            >
              Projekt anfragen
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
