import { GlobeIcon, HeadsetIcon, StopwatchIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";

const STEPS = [
  {
    icon: GlobeIcon,
    title: "Digital skalierbar",
    body: "Wir bauen Lösungen, die online sichtbar sind und mit deinem Business mitwachsen — ohne technisches Ballast.",
  },
  {
    icon: HeadsetIcon,
    title: "Persönliche Begleitung",
    body: "Du bekommst einen festen Ansprechpartner, der deine Ziele versteht und dich durch jeden Schritt begleitet.",
  },
  {
    icon: StopwatchIcon,
    title: "Schnell umgesetzt",
    body: "Vom ersten Gespräch bis zur Livestellung in Wochen statt Monaten — fokussiert auf das, was wirklich wirkt.",
  },
];

export function FoundationSteps() {
  return (
    <section className="bg-white text-[#050505] py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-12">
        <Reveal
          as="h2"
          className="font-sans font-semibold text-center text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.02em] max-w-[1000px] mx-auto"
        >
          Ihr Business auf die nächste Stufe bringen
        </Reveal>

        <div className="mt-14 md:mt-20 grid md:grid-cols-3 gap-10 md:gap-8 text-center">
          {STEPS.map(({ icon: Icon, title, body }, i) => (
            <Reveal
              key={title}
              direction="left"
              delay={i * 120}
              className="flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-xl bg-[#f5f3ec] flex items-center justify-center">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="mt-6 font-sans font-semibold text-[22px] leading-tight">
                {title}
              </h3>
              <p className="mt-4 text-[#050505]/75 text-[16px] leading-relaxed max-w-xs">
                {body}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300} className="mt-14 flex justify-center">
          <a
            href="/kontakt"
            className="inline-flex items-center rounded-full border border-black/20 text-[15px] font-semibold px-6 py-3 hover:bg-black/5 transition"
          >
            Projekt anfragen
          </a>
        </Reveal>
      </div>
    </section>
  );
}
