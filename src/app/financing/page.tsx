import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FinHero } from "@/components/financing/FinHero";
import { PayLater } from "@/components/financing/PayLater";
import { FlexibleSolutions } from "@/components/financing/FlexibleSolutions";
import { FinTestimonial } from "@/components/financing/FinTestimonial";
import { PartnersBanner } from "@/components/financing/PartnersBanner";
import { PartnerCards } from "@/components/financing/PartnerCards";
import { FinCta } from "@/components/financing/FinCta";

export const metadata: Metadata = {
  title: "Websites – Nesani",
  description:
    "Moderne, schnelle und konvertierende Websites auf Next.js. Performance, Core Web Vitals, Conversion-Design und saubere Übergabe – von einem Ansprechpartner.",
};

export default function FinancingPage() {
  return (
    <>
      <Header />
      <main>
        <FinHero />
        <PayLater />
        <FlexibleSolutions />
        <FinTestimonial />
        <PartnersBanner />
        <PartnerCards />
        <FinCta />
      </main>
      <Footer />
    </>
  );
}
