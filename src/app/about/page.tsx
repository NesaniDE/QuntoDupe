import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { StatsStrip } from "@/components/about/StatsStrip";
import { MissionBanner } from "@/components/about/MissionBanner";
import { Founders } from "@/components/about/Founders";
import { Timeline } from "@/components/about/Timeline";
import { AtYourSide } from "@/components/about/AtYourSide";
import { AboutTestimonials } from "@/components/about/AboutTestimonials";
import { Investors } from "@/components/about/Investors";
import { Sustainability } from "@/components/about/Sustainability";
import { AboutCta } from "@/components/about/AboutCta";

export const metadata: Metadata = {
  title: "Über uns – Qonto",
  description:
    "Kleine Unternehmen schaffen Großes. Wir unterstützen Sie dabei. Erfahren Sie mehr über Qonto.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <StatsStrip />
        <MissionBanner />
        <Founders />
        <Timeline />
        <AtYourSide />
        <AboutTestimonials />
        <Investors />
        <Sustainability />
        <AboutCta />
      </main>
      <Footer />
    </>
  );
}
