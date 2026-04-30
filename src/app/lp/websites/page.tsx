import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { LpChecklistForm } from "@/components/lp/LpChecklistForm";
import {
  ArrowUpRightIcon,
  ChecklistIcon,
  FlowIcon,
  LayersIcon,
  MagnifierIcon,
  StopwatchIcon,
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

const FEATURES = [
  {
    icon: LayersIcon,
    title: "Strategische Struktur",
    body: "Klare Architektur und Informationsführung – damit jede Seite den nächsten Schritt vorbereitet.",
  },
  {
    icon: StopwatchIcon,
    title: "Schnelle Ladezeiten",
    body: "Technisch sauber für Top-Performance, gute Core Web Vitals und besseres SEO.",
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
      <Header variant="transparent" />
      <main>
        {/* HERO — Mobile: 2-Block-Layout. Desktop: Bild als Full-Bleed-Hintergrund */}
        <section className="relative bg-[#050505] text-white overflow-hidden">
          {/* Desktop: Bild als full-bleed Hintergrund */}
          <div className="absolute inset-0 z-0 hidden lg:block">
            <Image
              src="/images/lp/websites-hero.webp"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/70 to-[#050505]/15" />
          </div>

          <div className="relative z-10 mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 pt-28 md:pt-32 lg:pt-44 pb-14 md:pb-16 lg:pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1">
                <Reveal>
                  <div className="text-[12px] uppercase tracking-[0.18em] font-semibold text-white/55">
                    Landingpage · Websites
                  </div>
                </Reveal>
                <Reveal delay={80}>
                  <h1 className="mt-5 font-sans font-semibold text-[36px] sm:text-[44px] md:text-[56px] lg:text-[68px] leading-[1.02] tracking-[-0.025em]">
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

              {/* Mobile: portrait-Bild als eigene Spalte (Desktop nutzt Hintergrund) */}
              <Reveal
                delay={120}
                direction="left"
                className="order-1 lg:hidden"
              >
                <div className="relative aspect-square sm:aspect-[19/10] rounded-2xl md:rounded-3xl overflow-hidden bg-[#050505]">
                  <Image
                    src="/images/lp/websites-hero-mobile.webp"
                    alt="Nesani Website auf Laptop und Smartphone"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* STATS-STRIP unter dem Hero */}
        <section className="relative bg-[#050505] text-white overflow-hidden">
          {/* Desktop: Bild läuft optisch weiter (gleicher Bg wie Hero) */}
          <div className="absolute inset-0 z-0 hidden lg:block">
            <Image
              src="/images/lp/websites-hero.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#050505]/80" />
          </div>
          <div className="relative z-10 mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 pb-20 md:pb-28">
            <Reveal>
              <div className="grid grid-cols-3 divide-x divide-white/10 rounded-2xl md:rounded-3xl bg-white/[0.04] border border-white/10 px-2 py-5 md:px-4 md:py-8 backdrop-blur-sm">
                <StatInline big="100%" label="Zufriedenheit" />
                <StatInline big="1:1" label="Direkter Kontakt" />
                <StatInline big="2–3×" label="Performance" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* FEATURES — white background, cream cards. Leicht über Hero gezogen. */}
        <section className="bg-white text-[#050505] -mt-8 md:-mt-12 lg:-mt-16 relative z-10 rounded-t-[28px] md:rounded-t-[40px]">
          <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 pt-16 md:pt-24 pb-20 md:pb-28 lg:pb-32">
            <Reveal>
              <div className="text-[12px] uppercase tracking-[0.18em] font-semibold text-[#050505]/60">
                Was Sie bekommen
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 font-sans font-semibold text-[32px] md:text-[44px] lg:text-[56px] leading-[1.05] tracking-[-0.02em] max-w-[22ch]">
                Vier Bausteine,<br />die zusammen wirken.
              </h2>
            </Reveal>
            <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
              {FEATURES.map((f, i) => (
                <Reveal key={f.title} delay={(i % 4) * 90}>
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

            <Reveal delay={120}>
              <div className="mt-10 md:mt-12 flex justify-center">
                <a
                  href="/leistungen/websites"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#050505]/15 text-[#050505] text-[15px] font-semibold px-6 py-3.5 hover:bg-[#050505] hover:text-white transition"
                >
                  Mehr Infos zur Leistung
                  <ArrowUpRightIcon className="w-4 h-4" />
                </a>
              </div>
            </Reveal>
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

        {/* FINAL CTA — image banner. Mobile: portrait-friendly Bild, Desktop: wide */}
        <section className="bg-white py-10 md:py-16">
          <div className="mx-auto max-w-[1344px] px-5 lg:px-12">
            <div className="relative overflow-hidden rounded-[20px] md:rounded-[28px] aspect-[4/5] sm:aspect-[16/9] md:aspect-[21/9] min-h-[460px] md:min-h-[520px]">
              {/* Mobile-Bild */}
              <Image
                src="/images/lp/websites-hero-mobile.webp"
                alt=""
                fill
                sizes="100vw"
                className="object-cover sm:hidden"
              />
              {/* Desktop-Bild */}
              <Image
                src="/images/lp/websites-hero.webp"
                alt=""
                fill
                sizes="100vw"
                className="object-cover hidden sm:block"
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

function StatInline({ big, label }: { big: string; label: string }) {
  return (
    <div className="px-2 md:px-6 text-center">
      <div className="font-sans font-semibold text-[28px] md:text-[40px] lg:text-[48px] leading-[1] tracking-[-0.02em]">
        {big}
      </div>
      <div className="mt-2 text-[11px] md:text-[13px] uppercase tracking-[0.14em] font-semibold text-white/55">
        {label}
      </div>
    </div>
  );
}
