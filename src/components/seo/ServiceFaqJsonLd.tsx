import { BASE_URL } from "@/lib/site";

/**
 * FAQPage-Schema pro Service. Hilft LLMs und Google, typische
 * Kundenfragen mit Nesani-Antworten als Quelle zu zitieren.
 *
 * Wird zusätzlich zu ServiceJsonLd ausgespielt.
 */
type Faq = { question: string; answer: string };

export const SERVICE_FAQS: Record<string, Faq[]> = {
  websites: [
    {
      question: "Wie lange dauert es, eine Website mit Nesani zu bauen?",
      answer:
        "Klassisch zwischen 4 und 10 Wochen. Hängt vom Umfang, der Content-Verfügbarkeit und den Feedbackschleifen ab. Erstgespräch, Konzept, Design, Entwicklung und Übergabe laufen iterativ.",
    },
    {
      question: "Welcher Stack wird eingesetzt?",
      answer:
        "Next.js mit TypeScript, Tailwind CSS und Deployment auf Vercel. Sauberer Code, gute Core Web Vitals, mobil-optimiert und für Teams nach dem Launch wartbar.",
    },
    {
      question: "Können wir die Website nach Übergabe selbst pflegen?",
      answer:
        "Ja. Die Website wird mit Dokumentation und optionalem Training übergeben. Für Inhalte gibt es auf Wunsch ein CMS oder einen KI-gestützten Editor, sodass keine Entwicklerin oder kein Entwickler für jede Textänderung gebraucht wird.",
    },
    {
      question: "Was kostet eine Website von Nesani?",
      answer:
        "Preis hängt vom Umfang ab. Eine professionelle, conversion-orientierte Unternehmensseite liegt typischerweise im mittleren vierstelligen Bereich. Eine ehrliche Einschätzung gibt es im unverbindlichen Erstgespräch.",
    },
  ],
  "social-media": [
    {
      question: "Wieviel Posting-Aufwand fällt nach dem Projekt an?",
      answer:
        "Mit Redaktionsplan und Styleguide kann das Team selbstständig posten — typischerweise 2 bis 4 Beiträge pro Woche, abhängig von Plattform und Zielgruppe.",
    },
    {
      question: "Welche Plattformen empfehlt ihr?",
      answer:
        "Statt Gießkanne: gezielte Kanalauswahl auf Basis der Zielgruppe. Häufig Instagram, LinkedIn, TikTok oder YouTube — selten alle gleichzeitig.",
    },
    {
      question: "Übernimmt Nesani auch die Content-Produktion?",
      answer:
        "Der Schwerpunkt liegt auf Strategie, Profil-Architektur und Redaktionsstruktur. Laufende Content-Produktion ist optional und wird einzeln vereinbart.",
    },
  ],
  "ki-workflows": [
    {
      question: "Welche Prozesse eignen sich für KI-Workflows?",
      answer:
        "Wiederkehrende, manuelle Abläufe mit klarer Datenbasis: Lead-Bearbeitung, Angebotsvorbereitung, E-Mail-Routing, Datenextraktion aus Dokumenten, Reporting. Im Erstgespräch identifizieren wir die Prozesse mit dem größten Hebel.",
    },
    {
      question: "Welche Tools werden eingebunden?",
      answer:
        "Abhängig von Ihrem Stack. Häufig im Einsatz: n8n, Make, Zapier, eigene APIs, OpenAI- und Anthropic-Modelle, Datenbanken wie Supabase oder Postgres.",
    },
    {
      question: "Wie sicher sind die Workflows im Live-Betrieb?",
      answer:
        "Jeder Workflow bekommt Monitoring, Fehlerbehandlung und Logging. Bei Ausfall wird gewarnt, statt dass Aufgaben stillschweigend verloren gehen.",
    },
  ],
  "ki-assistenten": [
    {
      question: "Auf welcher Wissensbasis antwortet der Assistent?",
      answer:
        "Ausschließlich auf den von Ihnen bereitgestellten Inhalten — etwa Website-Texten, FAQ-Datenbanken, PDFs oder CRM-Inhalten. Außerhalb der Wissensbasis gibt es klare Grenzen und Eskalationsregeln.",
    },
    {
      question: "Wo wird der Assistent eingebunden?",
      answer:
        "Klassisch als Chat-Widget auf der Website, optional in WhatsApp Business, Microsoft Teams, Slack oder als API-Endpunkt für eigene Anwendungen.",
    },
    {
      question: "Was passiert, wenn der Assistent eine Frage nicht beantworten kann?",
      answer:
        "Klare Eskalationswege: Übergabe an Menschen per E-Mail, Ticket oder Live-Chat. Der Assistent wirft nie Antworten ins Blaue — wenn er etwas nicht weiß, sagt er es.",
    },
  ],
  "autonome-agenten": [
    {
      question: "Was unterscheidet einen autonomen Agenten von einem KI-Workflow?",
      answer:
        "Ein Workflow folgt festen Regeln, ein Agent trifft Entscheidungen. Agenten nutzen Tools, bewerten Zwischenergebnisse und passen ihr Vorgehen an. Sinnvoll, wenn Abläufe zu variabel für klassische Wenn-Dann-Regeln sind.",
    },
    {
      question: "Wie wird verhindert, dass Agenten unkontrolliert handeln?",
      answer:
        "Klare Rollen, Rechte, Tool-Grenzen und Eskalationswege. Jede Aktion ist über Logs und Audit-Trails nachvollziehbar. Stufenweise Freigabe statt großer Wurf.",
    },
    {
      question: "Welche Modelle setzt Nesani ein?",
      answer:
        "Aktuell überwiegend Claude (Anthropic) und GPT-Modelle (OpenAI), je nach Anwendungsfall. Modellauswahl ist Teil der Architektur und nicht in Beton gegossen.",
    },
  ],
  systemarchitektur: [
    {
      question: "Wann lohnt sich eine individuelle Systemarchitektur?",
      answer:
        "Wenn SaaS-Tools, Plug-ins oder Baukästen Prozesse mehr einschränken als ermöglichen. Typische Auslöser: spezielle Datenmodelle, hohe Lastanforderungen, regulatorische Vorgaben oder fehlende Schnittstellen am Markt.",
    },
    {
      question: "Welche Technologien werden eingesetzt?",
      answer:
        "Modernes, langfristig wartbares Set: TypeScript, Next.js, Node.js, Postgres/Supabase, Vercel oder eigene Cloud-Setups (AWS, Hetzner). Auswahl folgt den Anforderungen, nicht der Mode.",
    },
    {
      question: "Wer betreibt das System nach der Übergabe?",
      answer:
        "Ihr Team — mit Dokumentation, CI/CD, Monitoring und Schulung. Optional bleibt Nesani für laufende Betreuung an Bord, ist aber kein Lock-in.",
    },
  ],
};

export function ServiceFaqJsonLd({ slug }: { slug: keyof typeof SERVICE_FAQS }) {
  const faqs = SERVICE_FAQS[slug];
  if (!faqs?.length) return null;

  const url = `${BASE_URL}/leistungen/${slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    inLanguage: "de-DE",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
