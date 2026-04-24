import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { KontaktHero } from "@/components/kontakt/KontaktHero";
import { KontaktForm } from "@/components/kontakt/KontaktForm";

export const metadata: Metadata = {
  title: "Kontakt – Nesani",
  description:
    "Schildere kurz dein Projekt. Antwort in der Regel innerhalb von 24 Stunden — klare Einschätzung statt Verkaufsdruck.",
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
