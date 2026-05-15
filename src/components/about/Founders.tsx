import Image from "next/image";

export function Founders() {
  return (
    <section className="bg-white text-[#050505]">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-16 md:py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-6">
          <div className="relative overflow-hidden rounded-2xl md:rounded-3xl aspect-square">
            <Image
              src="/images/nedim-portrait.webp"
              alt="Nedim Hasani — Gründer von Nesani"
              fill
              sizes="(min-width:1024px) 640px, 100vw"
              quality={92}
              className="object-cover object-center"
            />
          </div>
        </div>
        <div className="lg:col-span-6 lg:pl-6">
          <h2 className="font-sans font-semibold text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.02em]">
            Von einem Entwickler.
            <br />
            Für echte Unternehmen.
          </h2>
          <p className="mt-6 text-[16px] md:text-[18px] leading-[1.55] text-[#050505]/80 max-w-[52ch]">
            Hinter Nesani steht Nedim Hasani — Gründer, Geschäftsführer und
            Entwickler mit Fokus auf Automatisierung und KI. Aus Informatik,
            Softwareentwicklung und echter Projekterfahrung entsteht das, was
            Unternehmen heute brauchen: saubere Systeme, direkte Kommunikation
            und Lösungen, die wirtschaftlich funktionieren — statt ästhetischer
            Experimente ohne Wirkung.
          </p>
        </div>
      </div>
    </section>
  );
}
