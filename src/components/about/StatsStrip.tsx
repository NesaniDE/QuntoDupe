import Image from "next/image";

const STATS: { icon: string; number: string; label: string }[] = [
  { icon: "/images/about-33294-e5339e53fe.svg", number: "100%", label: "Eigenentwicklung" },
  { icon: "/images/about-26584-7025a75b1d.svg", number: "1:1", label: "Direkter Kontakt" },
  { icon: "/images/about-27327-75fc42b6a9.svg", number: "∞", label: "Wartbarkeit" },
  { icon: "/images/about-27326-9e1b56548d.svg", number: "0", label: "Zwischenagenturen" },
];

export function StatsStrip() {
  return (
    <section className="bg-[#050505] text-white">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col items-start gap-4">
              <Image
                src={s.icon}
                alt=""
                width={48}
                height={48}
                className="w-10 h-10 md:w-12 md:h-12 invert"
              />
              <div>
                <div className="font-sans font-semibold text-[28px] md:text-[36px] lg:text-[44px] leading-[1.05] tracking-[-0.02em]">
                  {s.number}
                </div>
                <div className="mt-1 text-[16px] md:text-[18px] text-white/80">
                  {s.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
