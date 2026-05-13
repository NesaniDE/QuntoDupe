import { BASE_URL } from "@/lib/site";

/**
 * HowTo-Schema pro Service. Beschreibt den 4-Schritte-Projektablauf.
 * Wird von LLMs gerne als Quelle für "Wie läuft ein Projekt bei Nesani ab?" zitiert.
 */
type Step = { name: string; text: string };

type HowTo = {
  name: string;
  description: string;
  totalTime?: string; // ISO 8601 duration, z.B. PT6W
  steps: Step[];
};

export const SERVICE_HOWTOS: Record<string, HowTo> = {
  websites: {
    name: "So entsteht Ihre Website mit Nesani",
    description:
      "Vom Erstgespräch bis zur Übergabe in 4 klar definierten Schritten.",
    totalTime: "PT6W",
    steps: [
      {
        name: "Analyse & Strategie",
        text: "Wettbewerb, Zielgruppe und Positionierung werden gemeinsam geschärft – und daraus die Funktionen Ihrer Website abgeleitet.",
      },
      {
        name: "Konzept & Design",
        text: "Wireframes, UI-Entwurf und Tonalität nach dem Prinzip: Design folgt Funktion. Nichts Dekoratives – alles mit Zweck.",
      },
      {
        name: "Entwicklung",
        text: "Umsetzung mit Next.js und TypeScript. Performance-fokussiert, mobil-optimiert, sauber strukturiert.",
      },
      {
        name: "Launch & Übergabe",
        text: "Deployment, Dokumentation und optionales Training – die Website geht nicht nur live, sie bleibt auch betreibbar.",
      },
    ],
  },
  "social-media": {
    name: "So entsteht Ihre Online-Präsenz mit Nesani",
    description:
      "Von der Positionierung bis zum laufenden Redaktionsplan in 4 Schritten.",
    steps: [
      {
        name: "Positionierung",
        text: "Klärung der Online-Identität und Zielgruppe – wofür steht die Marke, für wen, mit welcher Haltung.",
      },
      {
        name: "Kanal & Profil",
        text: "Plattformauswahl und technisches Profil-Setup – nur dort präsent sein, wo es wirklich Wirkung entfaltet.",
      },
      {
        name: "Content-Konzept",
        text: "Definition von Themen, Formaten und Tonalität – ein Konzept, das skaliert, ohne an Klarheit zu verlieren.",
      },
      {
        name: "Übergabe & Struktur",
        text: "Bereitstellung von Redaktionsplan und Styleguide – damit Inhalte auch ohne Agentur laufen.",
      },
    ],
  },
  "ki-workflows": {
    name: "So entsteht Ihr KI-Workflow mit Nesani",
    description:
      "Von der Prozessaufnahme bis zum überwachten Live-Betrieb in 4 Schritten.",
    steps: [
      {
        name: "Prozessaufnahme",
        text: "Erfassung bestehender Abläufe, Tools und Übergaben. Identifikation von Engpässen und Automatisierungspotenzialen.",
      },
      {
        name: "Automatisierungsdesign",
        text: "Konzepterstellung: Welche Schritte werden automatisiert, welche bleiben manuell, welche Tools werden angebunden.",
      },
      {
        name: "Aufbau & Test",
        text: "Workflow-Implementierung, Qualitätsprüfung und iterative Tests mit Echtdaten.",
      },
      {
        name: "Übergabe & Monitoring",
        text: "Dokumentation, Schulung, Live-Monitoring und optionale laufende Betreuung.",
      },
    ],
  },
  "ki-assistenten": {
    name: "So entsteht Ihr KI-Assistent mit Nesani",
    description:
      "Von der Wissensbasis bis zur laufenden Optimierung in 4 Schritten.",
    steps: [
      {
        name: "Wissensbasis",
        text: "Aufbau einer strukturierten, gepflegten Wissensbasis – damit der Assistent verlässlich und nachvollziehbar antwortet.",
      },
      {
        name: "Design & Logik",
        text: "Festlegen von Tonalität, Gesprächsführung und Eskalationspfaden – damit der Assistent menschlich wirkt, ohne Grenzen zu verlieren.",
      },
      {
        name: "Integration",
        text: "Einbindung in Ihre Kanäle und Systeme – mit sicherer Authentifizierung und sauberer Datenflusslogik.",
      },
      {
        name: "Test & Optimierung",
        text: "Iterative Tests mit echten Dialogen – damit der Assistent über Zeit nicht schlechter, sondern besser wird.",
      },
    ],
  },
  "autonome-agenten": {
    name: "So entsteht Ihr autonomer Agent mit Nesani",
    description:
      "Von der Use-Case-Definition bis zum überwachten Deployment in 4 Schritten.",
    steps: [
      {
        name: "Use-Case-Definition",
        text: "Wir klären, welche Aufgaben sich für autonome Agenten eignen – und welche nicht. Ohne Hype, mit klarem Fokus.",
      },
      {
        name: "Architektur",
        text: "Design der Agenten-Struktur: Rollen, Rechte, Tools, Gedächtnis und Eskalationswege als stabile Grundlage für den Betrieb.",
      },
      {
        name: "Entwicklung & Tests",
        text: "Iterativer Aufbau mit Testszenarien, Evaluations-Runden und kontrollierter Erweiterung des Handlungsspielraums.",
      },
      {
        name: "Deployment & Monitoring",
        text: "Produktiver Betrieb mit Monitoring, Audit-Trails und klar definierten Rückfallprozessen.",
      },
    ],
  },
  systemarchitektur: {
    name: "So entsteht Ihre individuelle Systemarchitektur",
    description:
      "Von Requirements bis Betrieb in 4 sauberen Schritten – keine Quick-Fix-Kultur.",
    steps: [
      {
        name: "Requirements",
        text: "Wir klären fachliche und technische Anforderungen – und trennen Muss von Kann, bevor Aufwand entsteht.",
      },
      {
        name: "Architektur-Design",
        text: "Entwurf der Systemarchitektur: Module, Schnittstellen, Datenmodell und Betriebsmodell – technisch fundiert und nachvollziehbar.",
      },
      {
        name: "Entwicklung",
        text: "Saubere Umsetzung mit Fokus auf Wartbarkeit, Testabdeckung und Performance – ohne versteckte Abhängigkeiten.",
      },
      {
        name: "Übergabe & Betrieb",
        text: "Dokumentation, CI/CD, Monitoring und Schulung – damit das System langfristig betrieben und weiterentwickelt werden kann.",
      },
    ],
  },
};

export function ServiceHowToJsonLd({
  slug,
}: {
  slug: keyof typeof SERVICE_HOWTOS;
}) {
  const data = SERVICE_HOWTOS[slug];
  if (!data) return null;

  const url = `${BASE_URL}/leistungen/${slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${url}#howto`,
    name: data.name,
    description: data.description,
    inLanguage: "de-DE",
    ...(data.totalTime ? { totalTime: data.totalTime } : {}),
    step: data.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
