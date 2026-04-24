import Image from "next/image";

export function FinHero() {
  return (
    <section className="relative bg-white text-[#050505] pt-24 md:pt-28 lg:pt-32 pb-10 md:pb-14 lg:pb-16 overflow-hidden">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6">
            <h1 className="font-sans font-semibold text-[40px] md:text-[56px] lg:text-[72px] leading-[1.03] tracking-[-0.02em] max-w-[15ch]">
              Moderne, schnelle und konvertierende Websites.
            </h1>
            <p className="mt-6 md:mt-8 text-[17px] md:text-[19px] leading-[1.5] text-[#050505]/80 max-w-[54ch]">
              Die Website ist Ihr erster Eindruck.{" "}
              <span className="font-semibold">Technisch performant</span> und{" "}
              <span className="font-semibold">inhaltlich überzeugend</span> –
              zugeschnitten auf Zielgruppe und Positionierung, gebaut auf
              Next.js.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="#process"
                className="group rounded-2xl border border-black/10 bg-white p-5 flex items-center gap-4 hover:border-black/40 transition"
              >
                <div className="w-10 h-10 rounded-lg bg-[#F5F2EB] flex items-center justify-center shrink-0">
                  <Image
                    src="/images/fin-26585-82ff2130b4.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <div className="font-sans font-semibold text-[15px]">
                    Next.js-Stack
                  </div>
                  <div className="text-[13px] text-[#050505]/70 mt-0.5">
                    Performance und Core Web Vitals
                  </div>
                </div>
              </a>
              <a
                href="#process"
                className="group rounded-2xl border border-black/10 bg-white p-5 flex items-center gap-4 hover:border-black/40 transition"
              >
                <div className="w-10 h-10 rounded-lg bg-[#F5F2EB] flex items-center justify-center shrink-0">
                  <Image
                    src="/images/fin-25603-f87b244df0.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <div className="font-sans font-semibold text-[15px]">
                    Conversion-Design
                  </div>
                  <div className="text-[13px] text-[#050505]/70 mt-0.5">
                    Design folgt Funktion
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-2xl md:rounded-3xl aspect-[4/3] lg:aspect-[5/4]">
              <Image
                src="/images/services/leistung-websites.png"
                alt="Moderne Website in Entwicklung"
                fill
                priority
                sizes="(min-width:1024px) 640px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
