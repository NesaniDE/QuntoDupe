import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LpChecklistForm } from "@/components/lp/LpChecklistForm";
import {
  ArrowUpRightIcon,
  ChecklistIcon,
  CodeIcon,
  CompassIcon,
  FlowIcon,
  LayersIcon,
  MagnifierIcon,
  RocketIcon,
  StopwatchIcon,
  TargetIcon,
  TrendingDownIcon,
  UsersIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Websites, die verkaufen",
  description:
    "Modern, schnell und strategisch aufgebaut – für Unternehmen, die online professionell auftreten und mehr Anfragen gewinnen wollen.",
  // Doppelte Sicherung: page-level noindex zusätzlich zum Layout
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false, noarchive: true, nosnippet: true },
  },
};

const PROBLEMS = [
  {
    icon: TargetIcon,
    title: "Keine klare Positionierung",
    body: "Die Botschaft ist unklar und spricht die falsche Zielgruppe an.",
  },
  {
    icon: StopwatchIcon,
    title: "Zu langsam",
    body: "Lange Ladezeiten kosten Rankings, Vertrauen und Kunden.",
  },
  {
    icon: TrendingDownIcon,
    title: "Keine Conversion",
    body: "Viele Besucher, aber zu wenige Anfragen oder Abschlüsse.",
  },
];

const FEATURES = [
  {
    icon: LayersIcon,
    title: "Strategische Struktur",
    body: "Klare Architektur für maximale Wirkung.",
  },
  {
    icon: CodeIcon,
    title: "Modernes Design",
    body: "Premium Look, der Vertrauen schafft und überzeugt.",
  },
  {
    icon: StopwatchIcon,
    title: "Schnelle Ladezeiten",
    body: "Technisch sauber für Top-Performance und SEO.",
  },
  {
    icon: CompassIcon,
    title: "Mobile Optimierung",
    body: "Perfekt auf allen Geräten – überall eine starke Erfahrung.",
  },
  {
    icon: MagnifierIcon,
    title: "SEO-Basis",
    body: "Sauber aufgebaut für bessere Sichtbarkeit bei Google.",
  },
  {
    icon: FlowIcon,
    title: "Klare Conversion",
    body: "Durchdachte Nutzerführung für mehr Anfragen.",
  },
];

export default function LpWebsitesPage() {
  return (
    <>
      <Header />
      <main className="bg-[#050505] text-white">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 pt-28 md:pt-36 lg:pt-44 pb-16 md:pb-24 lg:pb-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1">
                <h1 className="font-sans font-semibold text-[40px] sm:text-[52px] md:text-[64px] lg:text-[80px] leading-[1.02] tracking-[-0.025em]">
                  Websites,<br />die verkaufen.
                </h1>
                <p className="mt-6 md:mt-8 text-[16px] md:text-[18px] leading-[1.55] text-white/75 max-w-[52ch]">
                  Modern, schnell und strategisch aufgebaut – für Unternehmen,
                  die online professionell auftreten und mehr Anfragen
                  gewinnen wollen.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
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
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2">
                <div className="relative aspect-[4/3] md:aspect-[16/10] rounded-2xl md:rounded-3xl overflow-hidden">
                  <Image
                    src="/images/lp/websites-hero.webp"
                    alt="Nesani Website auf Laptop und Smartphone"
                    fill
                    priority
                    sizes="(min-width:1024px) 640px, 100vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEMS */}
        <section className="border-t border-white/5">
          <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24">
            <h2 className="font-sans font-semibold text-[26px] md:text-[36px] lg:text-[44px] leading-[1.1] tracking-[-0.02em] max-w-[24ch]">
              Warum viele Websites nicht funktionieren
            </h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {PROBLEMS.map((p) => (
                <article
                  key={p.title}
                  className="rounded-2xl bg-white/[0.04] border border-white/10 p-6 md:p-8"
                >
                  <span className="inline-flex w-11 h-11 rounded-full bg-white/[0.06] border border-white/10 items-center justify-center">
                    <p.icon className="w-5 h-5 text-white/85" />
                  </span>
                  <h3 className="mt-5 font-sans font-semibold text-[18px] md:text-[20px] leading-[1.2]">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[14px] md:text-[15px] leading-[1.55] text-white/65">
                    {p.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="border-t border-white/5">
          <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24">
            <h2 className="font-sans font-semibold text-[26px] md:text-[36px] lg:text-[44px] leading-[1.1] tracking-[-0.02em]">
              Was Sie bekommen
            </h2>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {FEATURES.map((f) => (
                <article
                  key={f.title}
                  className="rounded-2xl bg-white/[0.04] border border-white/10 p-6"
                >
                  <span className="inline-flex w-10 h-10 rounded-full bg-white/[0.06] border border-white/10 items-center justify-center">
                    <f.icon className="w-4 h-4 text-white/85" />
                  </span>
                  <h3 className="mt-4 font-sans font-semibold text-[17px] md:text-[18px] leading-[1.25]">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.55] text-white/65">
                    {f.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="border-t border-white/5">
          <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-16 md:py-20">
            <div className="rounded-2xl md:rounded-3xl bg-white/[0.04] border border-white/10 p-6 md:p-10">
              <h3 className="text-center font-sans font-semibold text-[22px] md:text-[28px] tracking-[-0.01em]">
                Klar. Schnell. Messbar.
              </h3>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
                <Stat
                  Icon={LayersIcon}
                  value="Projekte"
                  big="50+"
                  small="erfolgreich umgesetzt"
                />
                <Stat
                  Icon={UsersIcon}
                  value="Zufriedenheit"
                  big="98%"
                  small="unserer Kunden"
                />
                <Stat
                  Icon={RocketIcon}
                  value="Performance"
                  big="2–3x"
                  small="schnellere Ladezeiten"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CHECKLIST */}
        <section id="checkliste" className="border-t border-white/5 scroll-mt-24">
          <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-16 md:py-20">
            <div className="rounded-2xl md:rounded-3xl bg-white/[0.04] border border-white/10 p-6 md:p-10 lg:p-12">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-1 flex justify-center md:justify-start">
                  <span className="inline-flex w-12 h-12 rounded-full bg-white/[0.06] border border-white/10 items-center justify-center">
                    <ChecklistIcon className="w-5 h-5 text-white/85" />
                  </span>
                </div>
                <div className="md:col-span-11">
                  <h3 className="font-sans font-semibold text-[22px] md:text-[28px] leading-[1.2] tracking-[-0.01em]">
                    Kostenlose Website-Checkliste
                  </h3>
                  <p className="mt-3 text-[14px] md:text-[15px] leading-[1.55] text-white/70 max-w-[60ch]">
                    Erhalten Sie per E-Mail eine kompakte Checkliste für
                    Websites, die professionell wirken und Anfragen bringen.
                  </p>
                  <div className="mt-6">
                    <LpChecklistForm source="lp-websites" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="border-t border-white/5">
          <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-16 md:py-24 lg:py-28">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7">
                <h2 className="font-sans font-semibold text-[28px] md:text-[40px] lg:text-[52px] leading-[1.05] tracking-[-0.02em]">
                  Bereit für eine Website,<br />
                  die mehr kann als nur gut aussehen?
                </h2>
                <div className="mt-8">
                  <a
                    href="/kontakt"
                    className="inline-flex items-center gap-1.5 rounded-full bg-white text-[#050505] text-[15px] font-semibold px-6 py-3.5 hover:bg-white/90 transition"
                  >
                    Jetzt anfragen
                    <ArrowUpRightIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="relative aspect-square max-w-[320px] mx-auto">
                  <Image
                    src="/images/lp/websites-hero.webp"
                    alt=""
                    fill
                    sizes="320px"
                    className="object-cover rounded-2xl"
                  />
                </div>
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
  Icon,
  value,
  big,
  small,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  value: string;
  big: string;
  small: string;
}) {
  return (
    <div className="flex items-center gap-4 md:gap-5 justify-center md:justify-start">
      <span className="inline-flex w-12 h-12 rounded-full bg-white/[0.06] border border-white/10 items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-white/85" />
      </span>
      <div>
        <div className="text-[12px] uppercase tracking-[0.18em] text-white/55 font-semibold">
          {value}
        </div>
        <div className="font-sans font-semibold text-[28px] md:text-[32px] leading-none tracking-[-0.02em] mt-1">
          {big}
        </div>
        <div className="text-[12px] md:text-[13px] text-white/60 mt-1">
          {small}
        </div>
      </div>
    </div>
  );
}
