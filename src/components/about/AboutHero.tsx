import { HeroVideo } from "@/components/HeroVideo";

export function AboutHero() {
  return (
    <section className="relative h-svh min-h-[640px] lg:h-screen lg:min-h-[780px] bg-[#050505] text-white overflow-hidden">
      <HeroVideo
        desktop="/videos/hero.mp4"
        mobile="/videos/hero-mobile.mp4"
        poster="/images/hero-poster.jpg"
        className="absolute inset-0 z-10 w-full h-full object-cover [object-position:85%_center] md:[object-position:center]"
      />

      <div
        className="absolute inset-0 z-30 pointer-events-none"
        style={{
          background:
            "linear-gradient(rgba(5,5,5,0) 78.6%, rgb(5,5,5) 100%), linear-gradient(0deg, rgba(5,5,5,0.15) 0%, rgba(5,5,5,0.15) 100%)",
        }}
      />

      <div className="relative z-40 h-full px-5 md:px-8 lg:px-12 flex flex-col justify-end pb-16 md:pb-20 lg:pb-24">
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
