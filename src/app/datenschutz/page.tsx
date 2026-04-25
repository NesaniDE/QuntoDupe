import type { Metadata } from "next";
import { BASE_URL } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  LegalPage,
  LegalSection,
  LegalList,
} from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – Nesani",
  description:
    "Informationen zur Verarbeitung personenbezogener Daten auf nesani.de – nach DSGVO, transparent und verständlich.",
  alternates: { canonical: `${BASE_URL}/datenschutz` },
};

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <main>
        <LegalPage
          eyebrow="Rechtliches"
          title="Datenschutzerklärung"
          updated="April 2026"
        >
          <LegalSection heading="1. Verantwortlicher">
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website im
              Sinne der DSGVO ist:
            </p>
            <p>
              Nesani UG (haftungsbeschränkt) i.G.
              <br />
              Nedim Hasani
              <br />
              Basilikumweg 8
              <br />
              73527 Schwäbisch Gmünd
              <br />
              Deutschland
            </p>
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

          <LegalSection heading="2. Erhebung und Verarbeitung personenbezogener Daten">
            <p>
              Wir verarbeiten personenbezogene Daten ausschließlich auf
              Grundlage gesetzlicher Bestimmungen. Rechtsgrundlagen sind
              insbesondere:
            </p>
            <LegalList
              items={[
                "Art. 6 Abs. 1 lit. a DSGVO – Einwilligung",
                "Art. 6 Abs. 1 lit. b DSGVO – Vertragserfüllung oder vorvertragliche Maßnahmen",
                "Art. 6 Abs. 1 lit. f DSGVO – Berechtigte Interessen",
              ]}
            />
          </LegalSection>

          <LegalSection heading="3. Server-Logfiles">
            <p>
              Beim Aufruf dieser Website erfasst unser Hosting-Provider
              automatisch technische Zugriffsdaten. Dazu gehören:
            </p>
            <LegalList
              items={[
                "IP-Adresse",
                "Datum und Uhrzeit des Abrufs",
                "abgerufene Seite",
                "Browsertyp und Betriebssystem",
              ]}
            />
            <p>
              Diese Daten werden ausschließlich zur Sicherstellung des
              technischen Betriebs genutzt und spätestens nach 7 Tagen
              gelöscht. Eine Zusammenführung mit anderen Datenquellen findet
              nicht statt.
            </p>
          </LegalSection>

          <LegalSection heading="4. Kontaktformular">
            <p>
              Wenn Sie uns über ein Kontaktformular oder per E-Mail
              Anfragen zukommen lassen, werden Ihre Angaben (Name, E-Mail,
              Unternehmen, Nachricht) zur Bearbeitung der Anfrage gespeichert.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b und f DSGVO. Die Daten
              werden nicht ohne Ihre Einwilligung an Dritte weitergegeben. Die
              Speicherdauer beträgt maximal 6 Monate nach Abschluss der
              Bearbeitung, sofern keine gesetzlichen Aufbewahrungspflichten
              entgegenstehen.
            </p>
            <p>
              Für den technischen Versand der Formularnachrichten setzen wir
              den Dienstleister Resend (Resend, Inc., 2261 Market Street #5039,
              San Francisco, CA 94114, USA) als Auftragsverarbeiter ein. Dabei
              werden die im Formular eingegebenen Daten kurzzeitig auf
              Servern von Resend verarbeitet, um die E-Mail an uns zuzustellen.
              Eine Übermittlung in die USA erfolgt auf Grundlage der
              EU-Standardvertragsklauseln; Resend ist zudem unter dem
              EU-U.S. Data Privacy Framework zertifiziert.
            </p>
          </LegalSection>

          <LegalSection heading="5. Cookies und Einwilligungsbanner">
            <p>
              Technisch notwendige Cookies werden eingesetzt, um die
              grundlegenden Funktionen der Website bereitzustellen. Ihre
              Entscheidung im Einwilligungsbanner (Akzeptieren oder Ablehnen)
              wird lokal in Ihrem Browser gespeichert. Tracking-Cookies werden
              ausschließlich nach expliziter Zustimmung gesetzt.
            </p>
          </LegalSection>

          <LegalSection heading="6. Vercel Analytics">
            <p>
              Wir nutzen Vercel Analytics zur statistischen Auswertung der
              Website-Nutzung. Vercel Analytics verarbeitet keine
              personenbezogenen Daten und setzt keine Cookies. Es werden nur
              aggregierte, anonymisierte Daten erfasst.
            </p>
          </LegalSection>

          <LegalSection heading="7. Hosting">
            <p>
              Diese Website wird bei Vercel Inc. gehostet. Vercel ist unter
              dem EU-US Data Privacy Framework zertifiziert. Mit dem Anbieter
              besteht ein Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO.
            </p>
          </LegalSection>

          <LegalSection heading="8. Weitergabe an Dritte">
            <p>
              Eine Weitergabe personenbezogener Daten an Dritte erfolgt nur,
              soweit dies zur Leistungserbringung erforderlich ist, Sie
              eingewilligt haben oder eine gesetzliche Pflicht besteht. Wir
              verkaufen keine personenbezogenen Daten.
            </p>
          </LegalSection>

          <LegalSection heading="9. Betroffenenrechte">
            <p>Sie haben jederzeit das Recht auf:</p>
            <LegalList
              items={[
                "Auskunft über gespeicherte personenbezogene Daten (Art. 15 DSGVO)",
                "Berichtigung unrichtiger Daten (Art. 16 DSGVO)",
                "Löschung (Art. 17 DSGVO)",
                "Einschränkung der Verarbeitung (Art. 18 DSGVO)",
                "Datenübertragbarkeit (Art. 20 DSGVO)",
                "Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)",
                "Widerruf einer erteilten Einwilligung",
              ]}
            />
            <p>
              Zur Ausübung Ihrer Rechte genügt eine formlose Nachricht an{" "}
              <a
                href="mailto:info@nesani.de"
                className="underline underline-offset-4 hover:opacity-80"
              >
                info@nesani.de
              </a>
              .
            </p>
          </LegalSection>

          <LegalSection heading="10. Beschwerderecht">
            <p>
              Sie haben das Recht, sich bei einer Aufsichtsbehörde zu
              beschweren. Zuständig ist die Landesbeauftragte für den
              Datenschutz und die Informationsfreiheit Baden-Württemberg.
            </p>
          </LegalSection>

          <LegalSection heading="11. Änderungen dieser Datenschutzerklärung">
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung gelegentlich
              anzupassen, um Änderungen in den Diensten oder der Rechtslage
              widerzuspiegeln. Es gilt jeweils die aktuelle Fassung beim
              Besuch der Website.
            </p>
          </LegalSection>
        </LegalPage>
      </main>
      <Footer />
    </>
  );
}
