import Image from "next/image";
import Link from "next/link";

import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRightIcon, ChecklistIcon } from "@/components/icons";
import { LpChecklistForm } from "@/components/lp/LpChecklistForm";
import { LpHeader } from "@/components/lp/LpHeader";
import { LpIcon } from "@/components/lp/LpIconMap";
import type { LandingPage } from "@/types/landing";

export function LpPageTemplate({ lp }: { lp: LandingPage }) {
  const isBleed = lp.hero.layout === "bleed";

  return (
    <>
      <LpHeader variant="transparent" />
      <main>
        {isBleed ? <HeroBleed lp={lp} /> : <HeroSplit lp={lp} />}
        {isBleed ? <StatsBleed lp={lp} /> : <StatsSolid lp={lp} />}

        {/* FEATURES */}
        <section className="bg-white text-[#050505] -mt-8 md:-mt-12 lg:-mt-16 relative z-10 rounded-t-[28px] md:rounded-t-[40px]">
          <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 pt-16 md:pt-24 pb-20 md:pb-28 lg:pb-32">
            <Reveal>
              <div className="text-[12px] uppercase tracking-[0.18em] font-semibold text-[#050505]/60">
                {lp.features.eyebrow}
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 font-sans font-semibold text-[32px] md:text-[44px] lg:text-[56px] leading-[1.05] tracking-[-0.02em] max-w-[22ch]">
                {lp.features.headingLines[0]}
                <br />
                {lp.features.headingLines[1]}
              </h2>
            </Reveal>
            <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
              {lp.features.items.map((f, i) => (
                <Reveal key={f.title} delay={(i % 4) * 90}>
                  <article className="h-full rounded-2xl md:rounded-3xl bg-[#F5F2EB] p-7 md:p-8">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                      <LpIcon name={f.icon} className="w-6 h-6 text-[#050505]" />
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
                <Link
                  href={lp.features.moreInfoHref}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#050505]/15 text-[#050505] text-[15px] font-semibold px-6 py-3.5 hover:bg-[#050505] hover:text-white transition"
                >
                  Mehr Infos zur Leistung
                  <ArrowUpRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CHECKLIST */}
        <section
          id="checkliste"
          className="bg-[#FAF7F0] text-[#050505] scroll-mt-24"
        >
          <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-20 md:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              <div className="lg:col-span-7">
                <Reveal>
                  <div className="text-[12px] uppercase tracking-[0.18em] font-semibold text-[#050505]/60">
                    {lp.checklist.eyebrow}
                  </div>
                </Reveal>
                <Reveal delay={80}>
                  <h2 className="mt-5 font-sans font-semibold text-[32px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] max-w-[20ch]">
                    {lp.checklist.headingLines.map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < lp.checklist.headingLines.length - 1 ? <br /> : null}
                      </span>
                    ))}
                  </h2>
                </Reveal>
                <Reveal delay={160}>
                  <p className="mt-6 md:mt-8 text-[16px] md:text-[18px] leading-[1.55] text-[#050505]/75 max-w-[50ch]">
                    {lp.checklist.body}
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
                        {lp.checklist.sideTitle}
                      </div>
                    </div>
                    <p className="mt-5 text-[15px] leading-[1.55] text-white/75">
                      {lp.checklist.sideBody}
                    </p>
                    <div className="mt-6">
                      <LpChecklistForm source={lp.checklist.formSource} />
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        {isBleed ? <FinalCtaBleed lp={lp} /> : <FinalCtaSolid lp={lp} />}
      </main>
      <Footer />
    </>
  );
}

/* ---------------- HERO VARIANTS ---------------- */

function HeroBleed({ lp }: { lp: LandingPage }) {
  return (
    <section className="relative bg-[#050505] text-white overflow-hidden">
      <div className="absolute inset-0 z-0 hidden lg:block">
        <Image
          src={lp.hero.image}
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
            <HeroText lp={lp} />
          </div>
          <Reveal delay={120} direction="left" className="order-1 lg:hidden">
            <div className="relative aspect-square sm:aspect-[19/10] rounded-2xl md:rounded-3xl overflow-hidden bg-[#050505]">
              <Image
                src={lp.hero.imageMobile}
                alt={`${lp.hero.eyebrow} – Visual`}
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
  );
}

function HeroSplit({ lp }: { lp: LandingPage }) {
  return (
    <section className="relative bg-[#050505] text-white overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 pt-28 md:pt-32 lg:pt-40 pb-14 md:pb-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <HeroText lp={lp} />
          </div>
          <Reveal
            delay={120}
            direction="left"
            className="order-1 lg:order-2 lg:col-span-6"
          >
            <div className="relative aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden bg-white/[0.04] border border-white/10">
              <Image
                src={lp.hero.image}
                alt={`${lp.hero.eyebrow} – Visual`}
                fill
                priority
                sizes="(min-width:1024px) 640px, 100vw"
                className="object-cover object-center"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function HeroText({ lp }: { lp: LandingPage }) {
  return (
    <>
      <Reveal>
        <div className="text-[12px] uppercase tracking-[0.18em] font-semibold text-white/55">
          {lp.hero.eyebrow}
        </div>
      </Reveal>
      <Reveal delay={80}>
        <h1 className="mt-5 font-sans font-semibold text-[36px] sm:text-[44px] md:text-[56px] lg:text-[68px] leading-[1.02] tracking-[-0.025em]">
          {lp.hero.headingLines[0]}
          <br />
          {lp.hero.headingLines[1]}
        </h1>
      </Reveal>
      <Reveal delay={160}>
        <p className="mt-7 md:mt-9 text-[16px] md:text-[18px] leading-[1.55] text-white/75 max-w-[52ch]">
          {lp.hero.subline}
        </p>
      </Reveal>
      <Reveal delay={240}>
        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3">
          <Link
            href={lp.hero.primaryCta.href}
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-white text-[#050505] text-[15px] font-semibold px-6 py-3.5 hover:bg-white/90 transition"
          >
            {lp.hero.primaryCta.label}
            <ArrowUpRightIcon className="w-4 h-4" />
          </Link>
          <a
            href={lp.hero.secondaryCta.href}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 text-white text-[15px] font-semibold px-6 py-3.5 hover:bg-white/10 transition"
          >
            <ChecklistIcon className="w-4 h-4" />
            {lp.hero.secondaryCta.label}
          </a>
        </div>
      </Reveal>
    </>
  );
}

/* ---------------- STATS VARIANTS ---------------- */

function StatsBleed({ lp }: { lp: LandingPage }) {
  return (
    <section className="relative bg-[#050505] text-white overflow-hidden">
      <div className="absolute inset-0 z-0 hidden lg:block">
        <Image
          src={lp.hero.image}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#050505]/80" />
      </div>
      <StatsContent lp={lp} />
    </section>
  );
}

function StatsSolid({ lp }: { lp: LandingPage }) {
  return (
    <section className="relative bg-[#050505] text-white overflow-hidden">
      <StatsContent lp={lp} />
    </section>
  );
}

function StatsContent({ lp }: { lp: LandingPage }) {
  return (
    <div className="relative z-10 mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 pb-20 md:pb-28">
      <Reveal>
        <div className="grid grid-cols-3 divide-x divide-white/10 rounded-2xl md:rounded-3xl bg-white/[0.04] border border-white/10 px-2 py-5 md:px-4 md:py-8 backdrop-blur-sm">
          {lp.stats.map((s) => (
            <div key={s.label} className="px-2 md:px-6 text-center">
              <div className="font-sans font-semibold text-[28px] md:text-[40px] lg:text-[48px] leading-[1] tracking-[-0.02em]">
                {s.big}
              </div>
              <div className="mt-2 text-[11px] md:text-[13px] uppercase tracking-[0.14em] font-semibold text-white/55">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}

/* ---------------- FINAL CTA VARIANTS ---------------- */

function FinalCtaBleed({ lp }: { lp: LandingPage }) {
  return (
    <section className="bg-white py-10 md:py-16">
      <div className="mx-auto max-w-[1344px] px-5 lg:px-12">
        <div className="relative overflow-hidden rounded-[20px] md:rounded-[28px] aspect-[4/5] sm:aspect-[16/9] md:aspect-[21/9] min-h-[460px] md:min-h-[520px]">
          <Image
            src={lp.hero.imageMobile}
            alt=""
            fill
            sizes="100vw"
            className="object-cover sm:hidden"
          />
          <Image
            src={lp.hero.image}
            alt=""
            fill
            sizes="100vw"
            className="object-cover hidden sm:block"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/30 md:bg-gradient-to-t md:from-black/70 md:via-black/30 md:to-black/30" />
          <FinalCtaContent lp={lp} />
        </div>
      </div>
    </section>
  );
}

function FinalCtaSolid({ lp }: { lp: LandingPage }) {
  return (
    <section className="bg-white py-10 md:py-16">
      <div className="mx-auto max-w-[1344px] px-5 lg:px-12">
        <div className="relative overflow-hidden rounded-[20px] md:rounded-[28px] bg-[#050505] min-h-[420px] md:min-h-[480px] grid grid-cols-1 md:grid-cols-2 items-stretch">
          <div className="relative order-2 md:order-1 flex flex-col justify-center text-center md:text-left text-white px-6 md:px-12 lg:px-16 py-12 md:py-16">
            <Reveal>
              <h2 className="font-sans font-semibold text-[28px] md:text-[40px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] max-w-[18ch] mx-auto md:mx-0">
                {lp.finalCta.heading}
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-4 md:mt-6 text-[14px] md:text-[18px] leading-[1.5] max-w-[52ch] text-white/85 mx-auto md:mx-0">
                {lp.finalCta.body}
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-6 md:mt-8 flex flex-wrap justify-center md:justify-start gap-3">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-1.5 rounded-full bg-white text-[#050505] text-[14px] md:text-[15px] font-semibold px-5 py-2.5 md:py-3 hover:bg-white/90 transition"
                >
                  {lp.finalCta.ctaLabel}
                  <ArrowUpRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          </div>
          <div className="relative order-1 md:order-2 min-h-[260px] md:min-h-0">
            <Image
              src={lp.hero.image}
              alt=""
              fill
              sizes="(min-width:768px) 50vw, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-[#050505]/80 via-[#050505]/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCtaContent({ lp }: { lp: LandingPage }) {
  return (
    <div className="absolute inset-0 flex flex-col justify-end md:justify-center items-center text-center px-5 md:px-16 lg:px-24 pb-10 md:pb-0 text-white">
      <Reveal>
        <h2 className="font-sans font-semibold text-[28px] md:text-[56px] lg:text-[72px] leading-[1.05] md:leading-[1.03] tracking-[-0.02em] max-w-[18ch]">
          {lp.finalCta.heading}
        </h2>
      </Reveal>
      <Reveal delay={120}>
        <p className="mt-4 md:mt-6 text-[14px] md:text-[18px] leading-[1.5] max-w-[52ch] text-white/85">
          {lp.finalCta.body}
        </p>
      </Reveal>
      <Reveal delay={200}>
        <div className="mt-6 md:mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-1.5 rounded-full bg-white text-[#050505] text-[14px] md:text-[15px] font-semibold px-5 py-2.5 md:py-3 hover:bg-white/90 transition"
          >
            {lp.finalCta.ctaLabel}
            <ArrowUpRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
