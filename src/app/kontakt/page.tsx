import type { Metadata } from "next";
import { BASE_URL } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { KontaktHero } from "@/components/kontakt/KontaktHero";
import { KontaktForm } from "@/components/kontakt/KontaktForm";

export const metadata: Metadata = {
  title: "Kontakt — Projektanfrage stellen",
  description:
    "Projekt anfragen. Beschreiben Sie kurz Ihr Vorhaben — wir antworten innerhalb von 24 Stunden mit einer klaren Einschätzung. Nesani, Schwäbisch Gmünd.",
  alternates: { canonical: `${BASE_URL}/kontakt` },
  openGraph: {
    title: "Kontakt — Projektanfrage stellen | NESANI",
    description:
      "Beschreiben Sie Ihr Vorhaben und erhalten Sie innerhalb von 24 Stunden eine klare Einschätzung.",
    url: `${BASE_URL}/kontakt`,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function KontaktPage() {
  return (
    <>
      <BreadcrumbJsonLd trail={[{"name":"Kontakt","path":"/kontakt"}]} />
      <Header />
      <main>
        <KontaktHero />
        <KontaktForm />
      </main>
      <Footer />
    </>
  );
}
