type Step = {
  num: string;
  title: string;
  body: string;
  bullets: string[];
};

const STEPS: Step[] = [
  {
    num: "01",
    title: "Analyse & Strategie",
    body: "Wettbewerb, Zielgruppe und Positionierung werden gemeinsam geschärft – und daraus die Funktionen Ihrer Website abgeleitet.",
    bullets: [
      "Wettbewerbs- und Zielgruppen-Check",
      "Positionierung und Kernbotschaften",
      "Funktionsumfang und Seitenstruktur",
    ],
  },
  {
    num: "02",
    title: "Konzept & Design",
    body: "Wireframes, UI-Entwurf und Tonalität nach dem Prinzip: Design folgt Funktion. Nichts Dekoratives – alles mit Zweck.",
    bullets: [
      "Wireframes für klare Nutzerführung",
      "UI-Design mit Markenpersönlichkeit",
      "Tonalität, Bildsprache, Content-Struktur",
    ],
  },
  {
    num: "03",
    title: "Entwicklung",
    body: "Umsetzung mit Next.js und TypeScript. Performance-fokussiert, mobil-optimiert, sauber strukturiert.",
    bullets: [
      "Next.js-Stack, TypeScript, moderne Tools",
      "Core Web Vitals und saubere Architektur",
      "Integrationen und Schnittstellen",
    ],
  },
  {
    num: "04",
    title: "Launch & Übergabe",
    body: "Deployment, Dokumentation und optionales Training – die Website geht nicht nur live, sie bleibt auch betreibbar.",
    bullets: [
      "Deployment und Go-Live",
      "Dokumentation und Übergabe",
      "Optionales Training, laufende Betreuung",
    ],
  },
];

export function PartnerCards() {
  return (
    <section id="process-cards" className="bg-[#050505] text-white">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 pb-16 md:pb-24 lg:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {STEPS.map((s) => (
            <article
              key={s.num}
              className="rounded-2xl md:rounded-3xl bg-[#0F0F0F] border border-white/5 p-6 md:p-8 lg:p-10 flex flex-col gap-5"
            >
              <div className="flex items-center gap-4">
                <span className="font-sans font-semibold text-[44px] md:text-[56px] leading-none text-white/20">
                  {s.num}
                </span>
                <h3 className="font-sans font-semibold text-[22px] md:text-[26px] leading-[1.2]">
                  {s.title}
                </h3>
              </div>
              <p className="text-[14px] md:text-[15px] leading-[1.55] text-white/75">
                {s.body}
              </p>
              <ul className="mt-auto space-y-2 text-[13px] md:text-[14px] text-white/70">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-white/60" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
