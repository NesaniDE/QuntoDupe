import { ArrowUpRightIcon } from "@/components/icons";

export function FinTestimonial() {
  return (
    <section className="bg-white text-[#050505]">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-16 md:py-24 lg:py-28">
        <h2 className="font-sans font-semibold text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] tracking-[-0.02em] max-w-[24ch]">
          So erleben Kunden eine Website von Nesani
        </h2>

        <div className="mt-10 md:mt-14 rounded-2xl md:rounded-3xl bg-[#F5F2EB] p-8 md:p-12 lg:p-16">
          <div className="text-[56px] md:text-[72px] leading-none text-[#050505]/20 font-serif">
            &ldquo;
          </div>
          <blockquote className="text-[20px] md:text-[26px] lg:text-[30px] leading-[1.35] tracking-[-0.01em] max-w-[40ch]">
            Nedim denkt mit statt nur umzusetzen. Das Ergebnis war nicht nur
            technisch sauber, sondern wirtschaftlich spürbar – unsere Anfragen
            haben sich nach dem Relaunch merklich erhöht.
          </blockquote>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="font-sans font-semibold text-[17px]">
                Marc P.
              </div>
              <div className="text-[14px] text-[#050505]/70">
                Beispielrezension
              </div>
            </div>
            <a
              href="/kontakt"
              className="inline-flex items-center gap-1.5 text-[15px] font-medium text-[#050505] hover:opacity-80 transition"
            >
              Projekt anfragen
              <ArrowUpRightIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
