import type { Metadata } from "next";
import { BASE_URL } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LegalPage, LegalSection } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Rechtliche Angaben und Anbieterkennzeichnung der Nesani UG (haftungsbeschränkt).",
  alternates: { canonical: `${BASE_URL}/impressum` },
};

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main>
        <LegalPage
          eyebrow="Rechtliches"
          title="Impressum"
          updated="Mai 2026"
        >
          <LegalSection heading="Angaben gemäß § 5 TMG">
            <p>
              Nesani UG (haftungsbeschränkt)
              <br />
              Nedim Hasani
              <br />
              Basilikumweg 8
              <br />
              73527 Schwäbisch Gmünd
              <br />
              Deutschland
            </p>
          </LegalSection>

          <LegalSection heading="Vertreten durch">
            <p>Nedim Hasani (Geschäftsführer)</p>
          </LegalSection>

          <LegalSection heading="Registereintrag">
            <p>
              Eintragung im Handelsregister.
              <br />
              Registergericht: Amtsgericht Ulm
              <br />
              Registernummer: HRB 751868
            </p>
          </LegalSection>

          <LegalSection heading="Kontakt">
            <p>
              E-Mail:{" "}
              <a
                href="mailto:info@nesani.de"
                className="underline underline-offset-4 hover:opacity-80"
              >
                info@nesani.de
              </a>
            </p>
          </LegalSection>

          <LegalSection heading="Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV">
            <p>
              Nedim Hasani
              <br />
              Schwäbisch Gmünd
            </p>
          </LegalSection>

          <LegalSection heading="Haftung für Inhalte">
            <p>
              Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
              können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter
              sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen
              Seiten nach den allgemeinen Gesetzen verantwortlich.
            </p>
          </LegalSection>

          <LegalSection heading="Haftung für Links">
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Für diese fremden
              Inhalte können wir keine Gewähr übernehmen. Die jeweiligen
              Anbieter oder Betreiber der verlinkten Seiten sind stets für
              deren Inhalte verantwortlich.
            </p>
          </LegalSection>

          <LegalSection heading="Urheberrecht">
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht.
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </LegalSection>

          <LegalSection heading="Verbraucherstreitbeilegung">
            <p>
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen (§ 36 VSBG).
            </p>
            <p className="mt-3 text-[13px] opacity-70">
              Hinweis: Die Online-Streitbeilegungsplattform der Europäischen
              Kommission (OS-Plattform) wurde zum 20. Juli 2025 eingestellt.
              Eine Verlinkung ist daher nicht mehr möglich.
            </p>
          </LegalSection>
        </LegalPage>
      </main>
      <Footer />
    </>
  );
}
