import { ArrowUpRightIcon } from "@/components/icons";

export function AboutHero() {
  return (
    <section className="relative bg-[#050505] text-white overflow-hidden">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-24 lg:pb-28">
        <div className="max-w-[900px]">
          <div className="text-[13px] uppercase tracking-[0.18em] font-semibold text-white/55">
            Über uns
          </div>

          <h1 className="mt-5 font-sans font-semibold text-[40px] sm:text-[52px] md:text-[64px] lg:text-[80px] leading-[1.03] tracking-[-0.02em] max-w-[18ch]">
            Unternehmen digital sichtbarer und leistungsfähiger machen.
          </h1>

          <p className="mt-6 md:mt-8 text-[16px] md:text-[18px] leading-[1.55] text-white/75 max-w-[58ch]">
            Wer hinter Nesani steht, wie wir denken, was bei uns Standard ist.
            Eine Digitalagentur aus Schwäbisch Gmünd – mit klarem Stack,
            wartbarem Code und einem Ansprechpartner.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/kontakt"
              className="inline-flex items-center gap-1.5 rounded-full bg-white text-[#050505] text-[15px] font-semibold px-5 py-3 hover:bg-white/90 transition"
            >
              Projekt anfragen
              <ArrowUpRightIcon className="w-4 h-4" />
            </a>
            <a
              href="#story"
              className="inline-flex items-center rounded-full border border-white/25 text-white text-[15px] font-semibold px-5 py-3 hover:bg-white/10 transition"
            >
              Unsere Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
