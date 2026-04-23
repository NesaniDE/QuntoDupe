import Image from "next/image";

const CARDS: { img: string; title: string; body: string }[] = [
  {
    img: "/images/about-33623-f071588bee.avif",
    title: "Ihre Bedürfnisse im Blick",
    body: "Unser Deutschlandgeschäft wird von unserem Berliner Hauptsitz aus geführt – mit lokalen Teams, die Ihren Markt verstehen.",
  },
  {
    img: "/images/about-33365-9b1c555a2d.avif",
    title: "Persönlicher Support – 24/7",
    body: "Fragen zu DATEV? Zum Start mit Qonto? Wir sind für Sie da – 7 Tage die Woche, 24 Stunden am Tag.",
  },
  {
    img: "/images/about-33621-7a7d189539.avif",
    title: "Sicher & zuverlässig",
    body: "TÜV‑zertifiziert und mit höchsten Sicherheitsstandards – für Business‑Banking, auf das Sie sich verlassen können.",
  },
];

export function AtYourSide() {
  return (
    <section className="bg-[#050505] text-white">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-32">
        <h2 className="font-sans font-semibold text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.02em] max-w-[18ch]">
          An Ihrer Seite. Tag für Tag.
        </h2>

        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {CARDS.map((c) => (
            <article
              key={c.title}
              className="rounded-2xl md:rounded-3xl overflow-hidden bg-[#0F0F0F] border border-white/5 flex flex-col"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={c.img}
                  alt=""
                  fill
                  sizes="(min-width:768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-sans font-semibold text-[20px] md:text-[22px] leading-[1.2]">
                  {c.title}
                </h3>
                <p className="mt-3 text-[15px] md:text-[16px] leading-[1.55] text-white/75">
                  {c.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
