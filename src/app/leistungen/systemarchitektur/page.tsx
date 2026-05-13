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
  LayersIcon,
  CodeIcon,
  ClipboardIcon,
  FlowIcon,
  KeyIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Individuelle Systemarchitektur",
  description:
    "Maßgeschneiderte digitale Infrastruktur. Wenn Standardlösungen an ihre Grenzen stoßen, entwerfen wir Architekturen, die zu Ihren Prozessen passen – nicht umgekehrt.",
  alternates: { canonical: `${BASE_URL}/leistungen/systemarchitektur` },
};

export default function SystemarchitekturPage() {
  return (
    <>
      <ServiceJsonLd
        name="Individuelle Systemarchitektur"
        description="Maßgeschneiderte digitale Infrastruktur. Wenn Standardlösungen an ihre Grenzen stoßen, entwerfen wir Architekturen, die zu Ihren Prozessen passen – nicht umgekehrt."
        slug="systemarchitektur"
      />
      <ServiceFaqJsonLd slug="systemarchitektur" />
      <Header />
      <main>
        <ServiceHero
          h1="Maßgeschneiderte digitale Infrastruktur."
          subline="Wenn Standardlösungen an Grenzen stoßen, braucht es eine Architektur, die zu Ihren Prozessen passt – skalierbar, sicher und wartbar."
          card1={{
            title: "Architektur-Design",
            sub: "Struktur, die zu Ihren Prozessen passt",
            icon: LayersIcon,
          }}
          card2={{
            title: "Individuelle Entwicklung",
            sub: "Kein generisches Tooling, sondern Passform",
            icon: CodeIcon,
          }}
          image={{
            src: "/images/services/leistung-systemarchitektur.png",
            alt: "Individuelle Systemarchitektur",
          }}
        />
        <ServiceAudience
          eyebrow="Für wen"
          h2="Wenn Standard nicht mehr ausreicht."
          body="Viele Unternehmen erreichen einen Punkt, an dem SaaS-Tools, Plug-ins und Baukästen ihre Prozesse eher einschränken als ermöglichen. Dann braucht es eine eigene, saubere Architektur."
          bullets={[
            "Unternehmen an den Grenzen von Standardlösungen.",
            "Spezielle Daten-, Prozess- oder Integrationsanforderungen.",
            "Teams, die Skalierbarkeit und Wartbarkeit langfristig sichern wollen.",
          ]}
        />
        <ServiceFeatures
          h2="Was in jedem Projekt steckt"
          items={[
            {
              icon: ClipboardIcon,
              title: "Klare Anforderungen",
              body: "Bevor Code entsteht, entstehen saubere Anforderungen: fachlich, technisch und organisatorisch abgestimmt.",
            },
            {
              icon: FlowIcon,
              title: "Saubere Architektur",
              body: "Module, Datenflüsse und Schnittstellen, die langfristig tragen – dokumentiert, testbar, wartbar.",
            },
            {
              icon: KeyIcon,
              title: "Betrieb & Übergabe",
              body: "Sauberer Betriebsmodus: CI/CD, Monitoring, Logging und eine Übergabe, bei der Ihr Team nicht ratlos bleibt.",
            },
          ]}
        />
        <ServiceTestimonial
          h2="So wirkt Architektur nach Nesani"
          quote="Unsere Plattform trägt heute Lasten, bei denen die alte Lösung längst gescheitert wäre – und unser Team kann sie wirklich selbst betreiben. Das war uns am wichtigsten."
          name="Daniela K."
          role="Beispielrezension"
        />
        <ServiceProcessBanner
          h2="So entsteht Ihre Architektur."
          body="Vier Schritte vom Requirement bis zum Live-Betrieb – mit klarem Zielbild, technischer Passform und dokumentierter Übergabe."
        />
        <ServiceProcessCards
          steps={[
            {
              num: "01",
              title: "Requirements",
              body: "Wir klären fachliche und technische Anforderungen – und trennen Muss-Kriterien von Kann-Kriterien, bevor Aufwand entsteht.",
              bullets: [
                "Fachliche Anforderungen",
                "Technische Rahmenbedingungen",
                "Priorisierung und Zielbild",
              ],
            },
            {
              num: "02",
              title: "Architektur-Design",
              body: "Entwurf der Systemarchitektur: Module, Schnittstellen, Datenmodell und Betriebsmodell – technisch fundiert und nachvollziehbar.",
              bullets: [
                "Modul- und Schichtenmodell",
                "Schnittstellen und Datenmodell",
                "Sicherheits- und Skalierungskonzept",
              ],
            },
            {
              num: "03",
              title: "Entwicklung",
              body: "Saubere Umsetzung mit Fokus auf Wartbarkeit, Testabdeckung und Performance – keine versteckten Abhängigkeiten, keine Quick-Fix-Kultur.",
              bullets: [
                "Iterative Umsetzung",
                "Qualität und Testabdeckung",
                "Performance- und Sicherheitschecks",
              ],
            },
            {
              num: "04",
              title: "Übergabe & Betrieb",
              body: "Dokumentation, CI/CD, Monitoring und Schulung – damit das System nicht nur läuft, sondern langfristig betrieben und weiterentwickelt werden kann.",
              bullets: [
                "CI/CD und Monitoring",
                "Dokumentation und Schulung",
                "Optionale laufende Betreuung",
              ],
            },
          ]}
        />
        <ServiceCta
          h2="Bereit für eine Architektur, die trägt?"
          body="Ein unverbindliches Erstgespräch – wir schauen auf Ihre aktuelle Infrastruktur und klären, wo Passform sich wirklich lohnt."
        />
      </main>
      <Footer />
    </>
  );
}
