import type { Metadata } from "next";
import { BASE_URL } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { KontaktHero } from "@/components/kontakt/KontaktHero";
import { KontaktForm } from "@/components/kontakt/KontaktForm";

export const metadata: Metadata = {
  title: "Kontakt — Projektanfrage stellen",
  description:
    "Projekt anfragen. Beschreib kurz dein Vorhaben — wir antworten innerhalb von 24 Stunden mit einer klaren Einschätzung. Nesani, Schwäbisch Gmünd.",
  alternates: { canonical: `${BASE_URL}/kontakt` },
  openGraph: {
    title: "Kontakt — Projektanfrage stellen | NESANI",
    description:
      "Beschreib dein Vorhaben und erhalte innerhalb von 24 Stunden eine klare Einschätzung.",
    url: `${BASE_URL}/kontakt`,
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
};

export default function KontaktPage() {
  return (
    <>
      <Header />
      <main>
        <KontaktHero />
        <KontaktForm />
      </main>
      <Footer />
    </>
  );
}
