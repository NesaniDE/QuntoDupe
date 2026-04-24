import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceHero } from "@/components/service/ServiceHero";
import { ServiceAudience } from "@/components/service/ServiceAudience";
import { ServiceFeatures } from "@/components/service/ServiceFeatures";
import { ServiceTestimonial } from "@/components/service/ServiceTestimonial";
import { ServiceProcessBanner } from "@/components/service/ServiceProcessBanner";
import { ServiceProcessCards } from "@/components/service/ServiceProcessCards";
import { ServiceCta } from "@/components/service/ServiceCta";

export const metadata: Metadata = {
  title: "KI-Assistenten & Chatbots – Nesani",
  description:
    "KI, die für Sie kommuniziert. Intelligente Assistenten übernehmen Erstanfragen, entlasten Teams und beantworten Kundenfragen rund um die Uhr.",
};

export default function KiAssistentenPage() {
  return (
    <>
      <Header />
      <main>
        <ServiceHero
          h1="KI, die für dich kommuniziert."
          subline="Jede Anfrage, die manuell beantwortet werden muss, kostet Zeit. Jede Anfrage, die zu lange wartet, kostet Kunden. KI-Assistenten lösen beides."
          card1={{
            title: "Wissensbasis",
            sub: "Antworten aus Ihren eigenen Inhalten",
            icon: "/images/fin-27326-57d34c54dd.svg",
          }}
          card2={{
            title: "24/7 Verfügbarkeit",
            sub: "Erstkontakt in Sekunden, nicht Stunden",
            icon: "/images/fin-33263-b199afab8b.svg",
          }}
          image={{
            src: "/images/services/leistung-ki-assistenten.png",
            alt: "KI-Assistent im Einsatz",
          }}
        />
        <ServiceAudience
          eyebrow="Für wen"
          h2="Erstkontakt ohne Wartezeit."
          body="Kunden erwarten schnelle Antworten – jederzeit. KI-Assistenten übernehmen wiederkehrende Anfragen, filtern qualifizierte Leads und schaffen Freiraum für das, worauf es wirklich ankommt."
          bullets={[
            "Dienstleister mit vielen Erstanfragen und FAQ-Themen.",
            "E-Commerce und Plattformen mit Support-Volumen.",
            "Teams, die 24/7-Verfügbarkeit ohne Schichtbetrieb brauchen.",
          ]}
          image={{
            src: "/images/fin-33386-x.avif",
            alt: "Kundenkommunikation automatisiert",
          }}
        />
        <ServiceFeatures
          h2="Was in jedem Projekt steckt"
          items={[
            {
              icon: "/images/fin-27326-57d34c54dd.svg",
              title: "Eigene Wissensbasis",
              body: "Der Assistent antwortet auf Basis Ihrer Inhalte – dokumentiert, kontrolliert und jederzeit aktualisierbar.",
            },
            {
              icon: "/images/fin-33263-b199afab8b.svg",
              title: "Design & Logik",
              body: "Gesprächsführung, Tonalität und Eskalationswege – klar definiert, damit der Assistent zur Marke passt.",
            },
            {
              icon: "/images/fin-25603-f87b244df0.svg",
              title: "Integration & Handover",
              body: "Anbindung an Website, CRM oder Messenger – mit sauberer Übergabe an Menschen, wenn es nötig ist.",
            },
          ]}
        />
        <ServiceTestimonial
          h2="So wirken Assistenten nach Nesani"
          quote="Unser Support beantwortet inzwischen nur noch die Fälle, die wirklich Aufmerksamkeit brauchen. Der Rest läuft zuverlässig über den Assistenten – und Kunden merken den Unterschied kaum."
          name="Tobias R."
          role="Head of Operations, SaaS"
        />
        <ServiceProcessBanner
          h2="So entsteht Ihr KI-Assistent."
          body="Vier Schritte vom Wissensaufbau bis zum produktiven Einsatz – mit klarer Tonalität, sauberen Grenzen und geregelter Übergabe an Menschen."
        />
        <ServiceProcessCards
          steps={[
            {
              num: "01",
              title: "Wissensbasis",
              body: "Aufbau einer kuratierten Wissensquelle – aus Website, Dokumenten und internem Know-how. Die Grundlage jeder verlässlichen Antwort.",
              bullets: [
                "Inhalte sammeln und strukturieren",
                "Qualität und Aktualität sichern",
                "Zugriffsrechte und Grenzen definieren",
              ],
            },
            {
              num: "02",
              title: "Design & Logik",
              body: "Definition von Tonalität, Gesprächsführung und Eskalationsregeln – damit der Assistent zur Marke passt und Grenzen kennt.",
              bullets: [
                "Tonalität und Gesprächsführung",
                "Eskalationswege zum Menschen",
                "Datenschutz- und Compliance-Regeln",
              ],
            },
            {
              num: "03",
              title: "Integration",
              body: "Der Assistent wird in bestehende Kanäle eingebunden – Website, CRM, Messenger – mit sauberer Anbindung an Ihre Systeme.",
              bullets: [
                "Einbindung in Website und Kanäle",
                "CRM- und Tool-Integration",
                "Authentifizierung und Datenschutz",
              ],
            },
            {
              num: "04",
              title: "Test & Optimierung",
              body: "Testläufe mit realen Anfragen, laufende Optimierung und Monitoring – damit die Qualität nicht nur am Tag 1 stimmt.",
              bullets: [
                "Testläufe mit echten Dialogen",
                "Qualitäts- und Sicherheitschecks",
                "Laufende Optimierung",
              ],
            },
          ]}
        />
        <ServiceCta
          h2="Bereit, Kommunikation neu zu denken?"
          body="Ein unverbindliches Erstgespräch – wir klären Anwendungsfall, Tonalität und Ziele. Antwort innerhalb von 24 Stunden."
        />
      </main>
      <Footer />
    </>
  );
}
