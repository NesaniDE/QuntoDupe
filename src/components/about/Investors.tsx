import Image from "next/image";

const LOGOS: { src: string; alt: string }[] = [
  { src: "/images/about-8701-0f5596d69d.svg", alt: "Valar" },
  { src: "/images/about-26255-38e0899237.svg", alt: "TCV" },
  { src: "/images/about-8705-d81c80a279.svg", alt: "Alven" },
  { src: "/images/about-33544-907c73345a.svg", alt: "Europäischer Investitionsfonds" },
  { src: "/images/about-8722-093bbe8819.svg", alt: "Tencent" },
  { src: "/images/about-8703-de9114e672.svg", alt: "DST Global" },
  { src: "/images/about-4567-983c14af33.svg", alt: "Tiger Global" },
  { src: "/images/about-4416-77211044b3.svg", alt: "Eurazeo" },
  { src: "/images/about-8698-1f246f81df.svg", alt: "KKR" },
  { src: "/images/about-8704-8d254d66b0.svg", alt: "Insight Partners" },
  { src: "/images/about-8702-859e193cae.svg", alt: "Exor Seeds" },
  { src: "/images/about-8699-8547c36ec9.svg", alt: "Gaingels" },
];

export function Investors() {
  return (
    <section className="bg-white text-[#050505]">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24 border-t border-black/5">
        <h3 className="text-center font-sans font-semibold text-[22px] md:text-[28px] lg:text-[32px] tracking-[-0.01em]">
          Sie investieren in Qonto.
        </h3>
        <div className="mt-10 md:mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-6 gap-y-10 items-center justify-items-center">
          {LOGOS.map((l) => (
            <div key={l.alt} className="h-10 md:h-12 flex items-center opacity-75">
              <Image
                src={l.src}
                alt={l.alt}
                width={120}
                height={40}
                className="h-8 md:h-10 w-auto max-w-[140px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
