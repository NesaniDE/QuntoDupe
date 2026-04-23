import { OrbitVisual } from "./OrbitVisual";

export function Integrations() {
  return (
    <section className="relative overflow-hidden bg-white text-[#050505]">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-14 md:py-20 lg:py-24">
        <div
          className="relative overflow-hidden rounded-[24px] md:rounded-[32px]"
          style={{
            background:
              "linear-gradient(180deg, #F4F1EA 0%, #ECE8DE 100%)",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center px-6 md:px-10 lg:px-16 py-14 md:py-20 lg:py-24 min-h-[460px] lg:min-h-[504px]">
            <div className="lg:col-span-5 lg:pl-4">
              <h2 className="font-sans font-semibold text-[36px] md:text-[44px] lg:text-[56px] leading-[1.05] tracking-[-0.02em]">
                Nahtlos verbunden
              </h2>
              <p className="mt-5 md:mt-6 text-[16px] md:text-[17px] leading-[1.55] text-[#050505]/80 max-w-md">
                Mit allen Tools, Systemen und Schnittstellen, die du brauchst —
                von Code und Deployment bis zu Kommunikation, Kalender und
                Cloud-Speicher. Wir arbeiten dort, wo deine Workflows leben.
              </p>
            </div>

            <div className="lg:col-span-7 relative flex items-center justify-center">
              <OrbitVisual />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
