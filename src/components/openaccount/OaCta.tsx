export function OaCta() {
  return (
    <section className="relative bg-[#F4F1EA] text-[#050505] overflow-hidden">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-32">
        <div
          className="relative overflow-hidden rounded-2xl md:rounded-3xl px-8 md:px-14 lg:px-20 py-16 md:py-24 lg:py-28"
          style={{
            background: "linear-gradient(180deg,#ECE8DE 0%,#DDD6C3 100%)",
          }}
        >
          <h2 className="font-sans font-semibold text-[40px] md:text-[56px] lg:text-[72px] leading-[1.03] tracking-[-0.02em] max-w-[18ch]">
            Bereit, sichtbarer und leistungsfähiger zu werden?
          </h2>
          <p className="mt-6 md:mt-8 text-[16px] md:text-[18px] leading-[1.5] text-[#050505]/80 max-w-[52ch]">
            Ein unverbindliches Erstgespräch – wir schauen gemeinsam, wo Ihr
            Unternehmen digital steht und welche Stufe den größten Hebel bringt.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#"
              className="inline-flex items-center rounded-full bg-[#050505] text-white text-[15px] font-semibold px-5 py-3 hover:bg-black/90 transition"
            >
              Projekt anfragen
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center rounded-full border border-[#050505]/20 text-[#050505] text-[15px] font-semibold px-5 py-3 hover:bg-[#050505]/5 transition"
            >
              Leistungen ansehen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
