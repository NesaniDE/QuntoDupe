import type { Metadata } from "next";
import { BASE_URL } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { AboutHero } from "@/components/about/AboutHero";
import { StatsStrip } from "@/components/about/StatsStrip";
import { MissionBanner } from "@/components/about/MissionBanner";
import { Founders } from "@/components/about/Founders";
import { AtYourSide } from "@/components/about/AtYourSide";
import { AboutTestimonials } from "@/components/about/AboutTestimonials";
import { Sustainability } from "@/components/about/Sustainability";
import { AboutCta } from "@/components/about/AboutCta";
import { PersonJsonLd } from "@/components/seo/PersonJsonLd";

export const metadata: Metadata = {
  title: "Über uns — Wer hinter Nesani steckt",
  description:
    "Digitale Klarheit ist kein Luxus mehr. Wer Nesani ist, wie wir denken, und was bei uns Standard ist. Digitalagentur aus Schwäbisch Gmünd.",
  alternates: { canonical: `${BASE_URL}/ueber-uns` },
  openGraph: {
    title: "Über uns — Wer hinter Nesani steckt | NESANI",
    description:
      "Wer Nesani ist, wie wir denken, und was bei uns Standard ist. Digitalagentur aus Schwäbisch Gmünd.",
    url: `${BASE_URL}/ueber-uns`,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function AboutPage() {
  return (
    <>
      <PersonJsonLd />
      <BreadcrumbJsonLd trail={[{"name":"Über uns","path":"/ueber-uns"}]} />
      <Header variant="transparent" />
      <main>
        <AboutHero />
        <StatsStrip />
        <MissionBanner />
        <Founders />
        <AtYourSide />
        <AboutTestimonials />
        <Sustainability />
        <AboutCta />
      </main>
      <Footer />
    </>
  );
}
