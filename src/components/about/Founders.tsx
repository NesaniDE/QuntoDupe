import Image from "next/image";

export function Founders() {
  return (
    <section className="bg-white text-[#050505]">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-16 md:py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-6">
          <div className="relative overflow-hidden rounded-2xl md:rounded-3xl aspect-[4/3]">
            <Image
              src="/images/about-33673-be1b677cce.avif"
              alt="Gründer Alexandre Prot und Steve Anavi"
              fill
              sizes="(min-width:1024px) 640px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="lg:col-span-6 lg:pl-6">
          <h2 className="font-sans font-semibold text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.02em]">
            Von Unternehmern.
            <br />
            Für Unternehmer.
          </h2>
          <p className="mt-6 text-[16px] md:text-[18px] leading-[1.55] text-[#050505]/80 max-w-[52ch]">
            Hinter Qonto steht ein Team um die Gründer Alexandre Prot und Steve
            Anavi, das Unternehmen geführt, Cashflow‑Herausforderungen
            gemeistert und die Hürden traditionellen Bankings erlebt hat. Wir
            haben die Lösung gebaut, die wir uns selbst gewünscht hätten:
            transparent, effizient und für unsere Bedürfnisse gemacht – nicht
            die der Banken.
          </p>
        </div>
      </div>
    </section>
  );
}
