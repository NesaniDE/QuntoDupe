import type { Metadata } from "next";
import { BASE_URL } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { OaHero } from "@/components/openaccount/OaHero";
import { OaAllInOne } from "@/components/openaccount/OaAllInOne";
import { OaPricing } from "@/components/openaccount/OaPricing";
import { OaFaqTop } from "@/components/openaccount/OaFaqTop";
import { OaSteps } from "@/components/openaccount/OaSteps";
import { OaIndividual } from "@/components/openaccount/OaIndividual";
import { OaAllFinances } from "@/components/openaccount/OaAllFinances";
import { OaAccounting } from "@/components/openaccount/OaAccounting";
import { Testimonials } from "@/components/Testimonials";
import { OaFaq } from "@/components/openaccount/OaFaq";
import { OaCta } from "@/components/openaccount/OaCta";

export const metadata: Metadata = {
  title: "Leistungen — Digitale Präsenz, KI & Autonome Systeme",
  description:
    "Drei Stufen. Sechs Leistungen. Website, Social Media, KI-Workflows, Chatbots, autonome Agenten und individuelle Systemarchitektur für Unternehmen.",
  alternates: { canonical: `${BASE_URL}/leistungen` },
  openGraph: {
    title: "Leistungen — Digitale Präsenz, KI & Autonome Systeme | NESANI",
    description:
      "Drei Stufen, sechs Leistungen: von digitaler Präsenz über KI-Integration bis zu autonomen Systemen.",
    url: `${BASE_URL}/leistungen`,
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
};

export default function OpenAccountPage() {
  return (
    <>
      <Header />
      <main>
        <OaHero />
        <OaAllInOne />
        <OaPricing />
        <OaFaqTop />
        <OaSteps />
        <OaIndividual />
        <OaAllFinances />
        <OaAccounting />
        <Testimonials />
        <OaFaq />
        <OaCta />
      </main>
      <Footer />
    </>
  );
}
