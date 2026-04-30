import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { LpChecklistForm } from "@/components/lp/LpChecklistForm";
import {
  ArrowUpRightIcon,
  ChecklistIcon,
  CodeIcon,
  CompassIcon,
  FlowIcon,
  LayersIcon,
  MagnifierIcon,
  StopwatchIcon,
  TargetIcon,
  TrendingDownIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Websites, die verkaufen",
  description:
    "Modern, schnell und strategisch aufgebaut – für Unternehmen, die online professionell auftreten und mehr Anfragen gewinnen wollen.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false, noarchive: true, nosnippet: true },
  },
};

const PROBLEMS = [
  {
    num: "01",
    icon: TargetIcon,
    title: "Keine klare Positionierung",
    body: "Die Botschaft ist unklar und spricht die falsche Zielgruppe an – Besucher klicken weg statt anzufragen.",
  },
  {
    num: "02",
    icon: StopwatchIcon,
    title: "Zu langsam",
    body: "Lange Ladezeiten kosten Rankings, Vertrauen und Kunden – besonders auf Smartphones.",
  },
  {
    num: "03",
    icon: TrendingDownIcon,
    title: "Keine Conversion",
    body: "Viele Besucher, aber zu wenige Anfragen oder Abschlüsse – die Seite verkauft nicht.",
  },
];

const FEATURES = [
  {
    icon: LayersIcon,
    title: "Strategische Struktur",
    body: "Klare Architektur und Informationsführung – damit jede Seite den nächsten Schritt vorbereitet.",
  },
  {
    icon: CodeIcon,
    title: "Modernes Design",
    body: "Premium Look auf modernem Stack. Vertrauen baut sich in den ersten Sekunden auf.",
  },
  {
    icon: StopwatchIcon,
    title: "Schnelle Ladezeiten",
    body: "Technisch sauber für Top-Performance, gute Core Web Vitals und besseres SEO.",
  },
  {
    icon: CompassIcon,
    title: "Mobile Optimierung",
    body: "Perfekt auf allen Geräten – überall eine starke, klar lesbare Erfahrung.",
  },
  {
    icon: MagnifierIcon,
    title: "SEO-Basis",
    body: "Strukturierte Daten, Sitemap, Meta – sauber aufgebaut für Sichtbarkeit bei Google und KI-Suchen.",
  },
  {
    icon: FlowIcon,
    title: "Klare Conversion",
    body: "Durchdachte Nutzerführung mit klaren CTAs – Besucher werden zu qualifizierten Anfragen.",
  },
];

export default function LpWebsitesPage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO — dark */}
        <section className="relative bg-[#050505] text-white overflow-hidden">
          <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 pt-28 md:pt-36 lg:pt-44 pb-20 md:pb-28 lg:pb-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1">
                <Reveal>
                  <div className="text-[12px] uppercase tracking-[0.18em] font-semibold text-white/55">
                    Landingpage · Websites
                  </div>
                </Reveal>
                <Reveal delay={80}>
                  <h1 className="mt-5 font-sans font-semibold text-[44px] sm:text-[56px] md:text-[68px] lg:text-[80px] leading-[1.02] tracking-[-0.025em]">
                    Websites,<br />die verkaufen.
                  </h1>
                </Reveal>
                <Reveal delay={160}>
                  <p className="mt-7 md:mt-9 text-[16px] md:text-[18px] leading-[1.55] text-white/75 max-w-[52ch]">
                    Modern, schnell und strategisch aufgebaut – für
                    Unternehmen, die online professionell auftreten und mehr
                    Anfragen gewinnen wollen.
                  </p>
                </Reveal>
                <Reveal delay={240}>
                  <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3">
                    <a
                      href="/kontakt"
                      className="inline-flex items-center justify-center gap-1.5 rounded-full bg-white text-[#050505] text-[15px] font-semibold px-6 py-3.5 hover:bg-white/90 transition"
                    >
                      Projekt anfragen
                      <ArrowUpRightIcon className="w-4 h-4" />
                    </a>
                    <a
                      href="#checkliste"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 text-white text-[15px] font-semibold px-6 py-3.5 hover:bg-white/10 transition"
                    >
                      <ChecklistIcon className="w-4 h-4" />
                      Kostenlose Checkliste
                    </a>
                  </div>
                </Reveal>
              </div>

              <Reveal
                delay={120}
                direction="left"
                className="lg:col-span-6 order-1 lg:order-2"
              >
                <div className="relative aspect-[19/10] rounded-2xl md:rounded-3xl overflow-hidden bg-[#050505]">
                  <Image
                    src="/images/lp/websites-hero.webp"
                    alt="Nesani Website auf Laptop und Smartphone"
                    fill
                    priority
                    sizes="(min-width:1024px) 640px, 100vw"
                    className="object-contain object-center"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* PROBLEMS — beige/cream for warmth */}
        <section className="bg-[#F4F1EA] text-[#050505]">
          <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-32">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <Reveal>
                  <div className="text-[12px] uppercase tracking-[0.18em] font-semibold text-[#050505]/60">
                    Das Problem
                  </div>
                </Reveal>
                <Reveal delay={80}>
                  <h2 className="mt-5 font-sans font-semibold text-[32px] md:text-[44px] lg:text-[56px] leading-[1.05] tracking-[-0.02em] max-w-[22ch]">
                    Warum viele Websites<br />nicht funktionieren.
                  </h2>
                </Reveal>
              </div>
            </div>

            <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              {PROBLEMS.map((p, i) => (
                <Reveal key={p.title} delay={i * 100}>
                  <article className="h-full rounded-2xl md:rounded-3xl bg-white p-7 md:p-9 border border-[#050505]/5">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex w-12 h-12 rounded-xl bg-[#F4F1EA] items-center justify-center">
                        <p.icon className="w-6 h-6 text-[#050505]" />
                      </span>
                      <span className="font-sans font-semibold text-[28px] md:text-[32px] text-[#050505]/15 tracking-tight">
                        {p.num}
                      </span>
                    </div>
                    <h3 className="mt-7 font-sans font-semibold text-[20px] md:text-[22px] leading-[1.2]">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-[1.55] text-[#050505]/70 max-w-[30ch]">
                      {p.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES — white background, cream cards */}
        <section className="bg-white text-[#050505]">
          <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-32">
            <Reveal>
              <div className="text-[12px] uppercase tracking-[0.18em] font-semibold text-[#050505]/60">
                Was Sie bekommen
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 font-sans font-semibold text-[32px] md:text-[44px] lg:text-[56px] leading-[1.05] tracking-[-0.02em] max-w-[22ch]">
                Sechs Bausteine,<br />die zusammen wirken.
              </h2>
            </Reveal>
            <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {FEATURES.map((f, i) => (
                <Reveal key={f.title} delay={(i % 3) * 90}>
                  <article className="h-full rounded-2xl md:rounded-3xl bg-[#F5F2EB] p-7 md:p-8">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                      <f.icon className="w-6 h-6 text-[#050505]" />
                    </div>
                    <h3 className="mt-7 font-sans font-semibold text-[20px] md:text-[22px] leading-[1.2]">
                      {f.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-[1.55] text-[#050505]/75 max-w-[34ch]">
                      {f.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* STATS — dark moment with big numbers */}
        <section className="bg-[#050505] text-white">
          <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-20 md:py-28">
            <Reveal>
              <div className="text-center text-[12px] uppercase tracking-[0.18em] font-semibold text-white/55">
                So arbeiten wir
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 text-center font-sans font-semibold text-[32px] md:text-[44px] lg:text-[56px] leading-[1.05] tracking-[-0.02em]">
                Klar. Schnell. Messbar.
              </h2>
            </Reveal>
            <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              <Stat label="Zufriedenheit" big="100%" small="unserer Kunden" />
              <Stat
                label="Direkter Kontakt"
                big="1:1"
                small="kein Agentur-Pingpong"
                accent
              />
              <Stat
                label="Performance"
                big="2–3×"
                small="schnellere Ladezeiten"
              />
            </div>
          </div>
        </section>

        {/* CHECKLIST — warmer beige with dark form card */}
        <section
          id="checkliste"
          className="bg-[#FAF7F0] text-[#050505] scroll-mt-24"
        >
          <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-20 md:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              <div className="lg:col-span-7">
                <Reveal>
                  <div className="text-[12px] uppercase tracking-[0.18em] font-semibold text-[#050505]/60">
                    Kostenlos
                  </div>
                </Reveal>
                <Reveal delay={80}>
                  <h2 className="mt-5 font-sans font-semibold text-[32px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] max-w-[20ch]">
                    Die Website-<br />Checkliste<br />zum Mitnehmen.
                  </h2>
                </Reveal>
                <Reveal delay={160}>
                  <p className="mt-6 md:mt-8 text-[16px] md:text-[18px] leading-[1.55] text-[#050505]/75 max-w-[50ch]">
                    Eine kompakte Checkliste für Websites, die professionell
                    wirken und Anfragen bringen. Zwei Minuten Lesezeit, klare
                    Prüfpunkte, sofort anwendbar.
                  </p>
                </Reveal>
              </div>
              <div className="lg:col-span-5">
                <Reveal delay={120}>
                  <div className="rounded-2xl md:rounded-3xl bg-[#050505] text-white p-7 md:p-9">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex w-11 h-11 rounded-xl bg-white/[0.08] border border-white/10 items-center justify-center">
                        <ChecklistIcon className="w-5 h-5 text-white/85" />
                      </span>
                      <div className="text-[13px] uppercase tracking-[0.18em] font-semibold text-white/60">
                        Direkt-Download
                      </div>
                    </div>
                    <p className="mt-5 text-[15px] leading-[1.55] text-white/75">
                      E-Mail eintragen, Checkliste herunterladen.
                    </p>
                    <div className="mt-6">
                      <LpChecklistForm source="lp-websites" />
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA — image banner */}
        <section className="bg-white py-10 md:py-16">
          <div className="mx-auto max-w-[1344px] px-5 lg:px-12">
            <div className="relative overflow-hidden rounded-[20px] md:rounded-[28px] aspect-[4/5] sm:aspect-[16/9] md:aspect-[21/9] min-h-[460px] md:min-h-[520px]">
              <Image
                src="/images/lp/websites-hero.webp"
                alt=""
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/30 md:bg-gradient-to-t md:from-black/70 md:via-black/30 md:to-black/30" />
              <div className="absolute inset-0 flex flex-col justify-end md:justify-center items-center text-center px-5 md:px-16 lg:px-24 pb-10 md:pb-0 text-white">
                <Reveal>
                  <h2 className="font-sans font-semibold text-[28px] md:text-[56px] lg:text-[72px] leading-[1.05] md:leading-[1.03] tracking-[-0.02em] max-w-[18ch]">
                    Bereit für eine Website, die mehr kann als nur gut
                    aussehen?
                  </h2>
                </Reveal>
                <Reveal delay={120}>
                  <p className="mt-4 md:mt-6 text-[14px] md:text-[18px] leading-[1.5] max-w-[52ch] text-white/85">
                    Ein unverbindliches Erstgespräch – wir klären Ziele, Umfang
                    und Zeitrahmen. Antwort innerhalb von 24 Stunden.
                  </p>
                </Reveal>
                <Reveal delay={200}>
                  <div className="mt-6 md:mt-8 flex flex-wrap justify-center gap-3">
                    <a
                      href="/kontakt"
                      className="inline-flex items-center gap-1.5 rounded-full bg-white text-[#050505] text-[14px] md:text-[15px] font-semibold px-5 py-2.5 md:py-3 hover:bg-white/90 transition"
                    >
                      Jetzt anfragen
                      <ArrowUpRightIcon className="w-4 h-4" />
                    </a>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Stat({
  label,
  big,
  small,
  accent,
}: {
  label: string;
  big: string;
  small: string;
  accent?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-2xl md:rounded-3xl p-7 md:p-9 text-center md:text-left transition",
        accent
          ? "bg-white text-[#050505]"
          : "bg-white/[0.04] border border-white/10 text-white",
      ].join(" ")}
    >
      <div
        className={[
          "text-[12px] uppercase tracking-[0.18em] font-semibold",
          accent ? "text-[#050505]/60" : "text-white/55",
        ].join(" ")}
      >
        {label}
      </div>
      <div className="mt-3 font-sans font-semibold text-[44px] md:text-[60px] lg:text-[72px] leading-[1] tracking-[-0.025em]">
        {big}
      </div>
      <div
        className={[
          "mt-3 text-[14px] md:text-[15px]",
          accent ? "text-[#050505]/70" : "text-white/65",
        ].join(" ")}
      >
        {small}
      </div>
    </div>
  );
}
