type Stat = {
  number: string;
  label: string;
};

const STATS: Stat[] = [
  { number: "100%", label: "Eigenentwicklung" },
  { number: "1:1", label: "Direkter Kontakt" },
  { number: "∞", label: "Wartbarkeit" },
  { number: "0", label: "Zwischenagenturen" },
];

export function StatsStrip() {
  return (
    <section className="bg-[#050505] text-white">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {STATS.map(({ number, label }) => (
            <div key={label} className="flex flex-col items-start gap-2">
              <div className="font-sans font-semibold text-[28px] md:text-[36px] lg:text-[44px] leading-[1.05] tracking-[-0.02em]">
                {number}
              </div>
              <div className="text-[16px] md:text-[18px] text-white/80">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
