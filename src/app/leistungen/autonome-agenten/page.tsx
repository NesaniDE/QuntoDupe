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
import { ServiceFaqJsonLd } from "@/components/seo/ServiceFaqJsonLd";
import {
  NetworkIcon,
  PlugIcon,
  TargetIcon,
  ShieldIcon,
  EyeIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Autonome Agenten",
  description:
    "Systeme, die selbstständig arbeiten. Autonome Agenten planen, entscheiden und handeln innerhalb klar definierter Grenzen – nicht nur nach festen Regeln.",
  alternates: { canonical: `${BASE_URL}/leistungen/autonome-agenten` },
};

export default function AutonomeAgentenPage() {
  return (
    <>
      <ServiceJsonLd
        name="Autonome Agenten"
        description="Systeme, die selbstständig arbeiten. Autonome Agenten planen, entscheiden und handeln innerhalb klar definierter Grenzen – nicht nur nach festen Regeln."
        slug="autonome-agenten"
      />
      <ServiceFaqJsonLd slug="autonome-agenten" />
      <Header />
      <main>
        <ServiceHero
          h1="Systeme, die selbstständig arbeiten."
          subline="Automatisierung führt Regeln aus. Autonome Agenten denken. Sie treffen Entscheidungen, passen sich an Situationen an und übernehmen Aufgaben eigenständig."
          card1={{
            title: "Agenten-Architektur",
            sub: "Rollen, Grenzen und Entscheidungslogik",
            icon: NetworkIcon,
          }}
          card2={{
            title: "Tool- und Systemzugriff",
            sub: "Handeln über reale Schnittstellen",
            icon: PlugIcon,
          }}
          image={{
            src: "/images/services/leistung-autonome-agenten.png",
            alt: "Autonome Agenten",
          }}
        />
        <ServiceAudience
          eyebrow="Für wen"
          h2="Wenn Regeln nicht mehr reichen."
          body="Viele Abläufe sind zu variabel für klassische Automatisierung. Autonome Agenten übernehmen Aufgaben, die Kontext, Einschätzung und Handlungsspielraum erfordern – zuverlässig und nachvollziehbar."
          bullets={[
            "Unternehmen mit bereits etablierten KI- und Prozesslösungen.",
            "Komplexe, variable Abläufe jenseits einfacher Wenn-Dann-Regeln.",
            "Teams, die Kapazität für strategische Arbeit freisetzen wollen.",
          ]}
        />
        <ServiceFeatures
          h2="Was in jedem Projekt steckt"
          items={[
            {
              icon: TargetIcon,
              title: "Use-Case-Fokus",
              body: "Nicht jeder Prozess braucht einen Agenten. Wir klären, wo Autonomie echten Mehrwert stiftet – und wo klassische Automatisierung reicht.",
            },
            {
              icon: ShieldIcon,
              title: "Kontrollierte Autonomie",
              body: "Agenten handeln innerhalb definierter Grenzen: klare Rollen, Rechte und Eskalationswege – keine Black-Box-Entscheidungen.",
            },
            {
              icon: EyeIcon,
              title: "Beobachtbarkeit",
              body: "Jede Aktion ist nachvollziehbar: Logs, Metriken und Audit-Trails, damit Systeme kontrollierbar bleiben.",
            },
          ]}
        />
        <ServiceTestimonial
          h2="So wirken Agenten nach Nesani"
          quote="Unsere Agenten übernehmen Aufgaben, bei denen wir vorher immer einen Mitarbeitenden brauchten – und liefern in einer Konsistenz, die vorher gar nicht möglich war."
          name="Philipp M."
          role="Beispielrezension"
        />
        <ServiceProcessBanner
          h2="So entsteht Ihr Agenten-System."
          body="Vier Schritte vom Use-Case bis zum Live-Betrieb – mit klarer Architektur, kontrollierter Autonomie und transparentem Monitoring."
        />
        <ServiceProcessCards
          steps={[
            {
              num: "01",
              title: "Use-Case-Definition",
              body: "Wir klären gemeinsam, welche Aufgaben sich für autonome Agenten eignen – und welche nicht. Ohne Hype, mit klarem Fokus.",
              bullets: [
                "Aufgaben- und Wertschöpfungsanalyse",
                "Risiko- und Grenzbewertung",
                "Eindeutige Zielbilder",
              ],
            },
            {
              num: "02",
              title: "Architektur",
              body: "Design der Agenten-Struktur: Rollen, Rechte, Tools, Gedächtnis und Eskalationswege – als stabile Grundlage für den Betrieb.",
              bullets: [
                "Agenten- und Rollenmodell",
                "Tool- und System-Anbindung",
                "Sicherheits- und Governance-Ebene",
              ],
            },
            {
              num: "03",
              title: "Entwicklung & Tests",
              body: "Iterativer Aufbau mit Testszenarien, Evaluations-Runden und kontrollierter Erweiterung des Handlungsspielraums.",
              bullets: [
                "Prototyp und Iterationen",
                "Evaluations- und Sicherheitstests",
                "Stufenweise Freigabe",
              ],
            },
            {
              num: "04",
              title: "Deployment & Monitoring",
              body: "Produktiver Betrieb mit Monitoring, Audit-Trails und klar definierten Rückfallprozessen – damit Autonomie nicht zu Undurchschaubarkeit wird.",
              bullets: [
                "Live-Deployment",
                "Monitoring und Alerts",
                "Audit- und Review-Prozesse",
              ],
            },
          ]}
        />
        <ServiceCta
          h2="Bereit, Kapazität freizusetzen?"
          body="Ein unverbindliches Erstgespräch – wir prüfen, wo autonome Agenten Sinn ergeben und wo nicht. Ehrlich und ohne Aufschlag."
        />
      </main>
      <Footer />
    </>
  );
}
