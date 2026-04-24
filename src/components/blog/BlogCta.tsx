import { ArrowUpRightIcon } from "@/components/icons";

export function BlogCta() {
  return (
    <section className="bg-white text-[#050505]">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-20 md:py-24 lg:py-28">
        <div
          className="relative overflow-hidden rounded-2xl md:rounded-3xl px-8 md:px-14 lg:px-20 py-14 md:py-20"
          style={{
            background: "linear-gradient(180deg,#050505 0%,#121212 100%)",
          }}
        >
          <h2 className="font-sans font-semibold text-[32px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-white max-w-[18ch]">
            Ein Thema betrifft Sie? Dann sprechen wir.
          </h2>
          <p className="mt-5 text-[15px] md:text-[17px] leading-[1.55] text-white/75 max-w-[52ch]">
            Wenn einer dieser Beiträge zu Ihrer Situation passt, freuen wir uns
            auf ein Erstgespräch – kurz, konkret und ohne Vertriebsschleife.
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
              href="/open-account"
              className="inline-flex items-center rounded-full border border-white/25 text-white text-[15px] font-semibold px-5 py-3 hover:bg-white/10 transition"
            >
              Leistungen ansehen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
