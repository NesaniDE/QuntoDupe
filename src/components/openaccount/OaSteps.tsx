import { Reveal } from "@/components/Reveal";

const STEPS = [
  {
    num: "Schritt 1",
    title: "Erstgespräch & Analyse",
    copy: "Wir klären Ziele, Rahmen und Engpässe – ehrlich, ohne Verkaufsshow und mit klarer Empfehlung, welche Stufe zu Ihnen passt.",
  },
  {
    num: "Schritt 2",
    title: "Umsetzung mit direktem Draht",
    copy: "Entwicklung mit kurzen Abstimmungen statt langer Briefings. Ein Ansprechpartner, klare Meilensteine, sichtbarer Fortschritt.",
  },
  {
    num: "Schritt 3",
    title: "Launch & Weiterbetrieb",
    copy: "Sauberer Go-Live mit Dokumentation, Übergabe und langfristiger Betreuung – damit das System mit Ihrem Unternehmen mitwächst.",
  },
];

export function OaSteps() {
  return (
    <section className="bg-[#050505] text-white">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-32">
        <Reveal as="h2" className="font-sans font-semibold text-[40px] md:text-[56px] lg:text-[64px] leading-[1.05] tracking-[-0.02em] max-w-[16ch]">
          In drei Schritten zum Ergebnis.
        </Reveal>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {STEPS.map((s, i) => (
            <Reveal
              key={s.num}
              direction="left"
              delay={i * 120}
              className="flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-sans font-semibold text-[56px] md:text-[72px] leading-none text-white/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="text-[13px] font-semibold uppercase tracking-wider text-white/60 mb-3">
                {s.num}
              </p>
              <h3 className="font-sans font-semibold text-[22px] md:text-[26px] leading-[1.2]">
                {s.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.55] text-white/70 max-w-[40ch]">
                {s.copy}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
