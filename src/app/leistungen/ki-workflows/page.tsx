import type { Metadata } from "next";
import { BASE_URL } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceHero } from "@/components/service/ServiceHero";
import { ServiceAudience } from "@/components/service/ServiceAudience";
import { ServiceFeatures } from "@/components/service/ServiceFeatures";
import { ServiceTestimonial } from "@/components/service/ServiceTestimonial";
import { ServiceProcessBanner } from "@/components/service/ServiceProcessBanner";
import { ServiceProcessCards } from "@/components/service/ServiceProcessCards";
import { ServiceCta } from "@/components/service/ServiceCta";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import {
  MagnifierIcon,
  CogIcon,
  ClipboardIcon,
  FlowIcon,
  ActivityIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "KI-Workflows & Automatisierung",
  description:
    "Intelligente Prozesse, die Zeit zurückgeben. Wiederkehrende Abläufe automatisieren, Teams entlasten und Wachstum ohne Mehraufwand ermöglichen.",
  alternates: { canonical: `${BASE_URL}/leistungen/ki-workflows` },
};

export default function KiWorkflowsPage() {
  return (
    <>
      <ServiceJsonLd
        name="KI-Workflows & Automatisierung"
        description="Intelligente Prozesse, die Zeit zurückgeben. Wiederkehrende Abläufe automatisieren, Teams entlasten und Wachstum ohne Mehraufwand ermöglichen."
        slug="ki-workflows"
      />
      <Header />
      <main>
        <ServiceHero
          h1="Intelligente Prozesse, die Zeit zurückgeben."
          subline="Wachstum ohne Skalierung des Aufwands ist das Ziel – und KI-Automatisierung ist der Weg. Wir analysieren, entlasten und digitalisieren wiederkehrende Abläufe."
          card1={{
            title: "Prozess-Analyse",
            sub: "Engpässe und Potenziale sichtbar machen",
            icon: MagnifierIcon,
          }}
          card2={{
            title: "Automatisierung",
            sub: "Wiederkehrende Abläufe digitalisieren",
            icon: CogIcon,
          }}
          image={{
            src: "/images/services/leistung-ki-workflows.png",
            alt: "KI-Workflows und Automatisierung",
          }}
        />
        <ServiceAudience
          eyebrow="Für wen"
          h2="Mehr schaffen, ohne mehr zu tun."
          body="Viele Unternehmen wachsen – aber die Prozesse wachsen mit. Jede zusätzliche Anfrage, jedes zusätzliche Projekt bedeutet mehr manuelle Arbeit. KI-Workflows durchbrechen diesen Zusammenhang."
          bullets={[
            "Unternehmen mit wiederkehrenden, manuellen Abläufen.",
            "Teams, die an Kapazitätsgrenzen stoßen.",
            "Betriebe, die KI-Potenziale nutzen wollen – ohne Komplexität.",
          ]}
        />
        <ServiceFeatures
          h2="Was in jedem Projekt steckt"
          items={[
            {
              icon: ClipboardIcon,
              title: "Prozessaufnahme",
              body: "Bestehende Abläufe werden sauber dokumentiert – inklusive aller Übergaben, Tools und manuellen Schritte.",
            },
            {
              icon: FlowIcon,
              title: "Automatisierungsdesign",
              body: "Statt Werkzeug-Chaos eine klare Logik: Was wird wie automatisiert, und wo bleibt der Mensch im Prozess.",
            },
            {
              icon: ActivityIcon,
              title: "Integration & Monitoring",
              body: "Anbindung an bestehende Tools, saubere Fehlerbehandlung und transparente Überwachung im Betrieb.",
            },
          ]}
        />
        <ServiceTestimonial
          h2="So wirken KI-Workflows nach Nesani"
          quote="Wir haben rund 40 % unserer manuellen Arbeit automatisiert – ohne, dass Kunden etwas davon merken. Nur die Reaktionszeit ist deutlich kürzer."
          name="Jens B."
          role="Beispielrezension"
        />
        <ServiceProcessBanner
          h2="So entsteht Ihre Automatisierung."
          body="Vier Schritte von der Prozessaufnahme bis zum stabilen Betrieb – mit klarer Empfehlung, was sich wirklich zu automatisieren lohnt."
        />
        <ServiceProcessCards
          steps={[
            {
              num: "01",
              title: "Prozessaufnahme",
              body: "Wir erfassen bestehende Abläufe, Tools und Übergaben – und identifizieren Engpässe sowie Automatisierungspotenziale.",
              bullets: [
                "Ist-Analyse der Prozesse",
                "Engpass- und Potenzialerhebung",
                "Priorisierung nach Wirkung",
              ],
            },
            {
              num: "02",
              title: "Automatisierungsdesign",
              body: "Auf Basis der Analyse entsteht ein Konzept – welche Schritte werden automatisiert, welche bleiben manuell, welche Tools binden wir an.",
              bullets: [
                "Workflow- und Logik-Design",
                "Tool- und Schnittstellenwahl",
                "Definition klarer Übergaben",
              ],
            },
            {
              num: "03",
              title: "Aufbau & Test",
              body: "Der Workflow wird sauber gebaut, in einer Testumgebung geprüft und iterativ auf reale Fälle abgestimmt.",
              bullets: [
                "Implementierung Workflows",
                "Qualitäts- und Fehlerhandling",
                "Iterative Tests mit Echtdaten",
              ],
            },
            {
              num: "04",
              title: "Übergabe & Monitoring",
              body: "Dokumentation, Schulung und Monitoring – damit das Team die Automatisierung versteht, nutzt und weiterentwickeln kann.",
              bullets: [
                "Dokumentation und Schulung",
                "Monitoring im Live-Betrieb",
                "Optionale laufende Betreuung",
              ],
            },
          ]}
        />
        <ServiceCta
          h2="Bereit, Zeit zurückzugewinnen?"
          body="Ein unverbindliches Erstgespräch – wir schauen gemeinsam auf Ihre Prozesse und zeigen, wo Automatisierung sich wirklich lohnt."
        />
      </main>
      <Footer />
    </>
  );
}
