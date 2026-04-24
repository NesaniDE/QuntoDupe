export type Project = {
  slug: string;
  title: string;
  client: string;
  service: string;
  year: string;
  summary: string;
  image: string;
  href?: string;
  available: boolean;
};

export const PROJECTS: Project[] = [
  {
    slug: "nesani-website",
    title: "nesani.de – eigene Plattform",
    client: "Nesani",
    service: "Websites",
    year: "2026",
    summary:
      "Eigene Marken- und Leistungsseite: performant, SEO-ready, auf Conversion ausgerichtet. Entwickelt mit Next.js, Tailwind und sauberer Komponentenarchitektur.",
    image: "/images/services/leistung-websites.png",
    href: "https://www.nesani.de",
    available: true,
  },
  {
    slug: "christian-jungwirt",
    title: "Christian Jungwirt – Online-Präsenz",
    client: "Christian Jungwirt",
    service: "Social Media & Online-Präsenz",
    year: "2026",
    summary:
      "Aufbau einer konsistenten Online-Präsenz und Content-Strategie über mehrere Kanäle – mit Fokus auf Wiedererkennung, Reichweite und echten Berührungspunkten mit der Zielgruppe.",
    image: "/images/breit/portrait-2.png",
    available: true,
  },
  {
    slug: "ki-workflows-case",
    title: "KI-Workflow Case Study",
    client: "In Vorbereitung",
    service: "KI-Workflows & Automatisierung",
    year: "2026",
    summary:
      "Ein Kundenprojekt zu automatisierten Abläufen und integrierten KI-Workflows. Details folgen nach Freigabe durch den Kunden.",
    image: "/images/services/leistung-ki-workflows.png",
    available: false,
  },
  {
    slug: "ki-assistent-case",
    title: "KI-Assistent Case Study",
    client: "In Vorbereitung",
    service: "KI-Assistenten & Chatbots",
    year: "2026",
    summary:
      "Ein eigener Assistent, der Routineanfragen übernimmt und das Team spürbar entlastet. Details folgen nach Freigabe durch den Kunden.",
    image: "/images/services/leistung-ki-assistenten.png",
    available: false,
  },
  {
    slug: "autonome-agenten-case",
    title: "Autonome Agenten Case Study",
    client: "In Vorbereitung",
    service: "Autonome Agenten",
    year: "2026",
    summary:
      "Ein System, das beobachtet, entscheidet und eigenständig handelt. Details folgen nach Freigabe durch den Kunden.",
    image: "/images/services/leistung-autonome-agenten.png",
    available: false,
  },
  {
    slug: "systemarchitektur-case",
    title: "Systemarchitektur Case Study",
    client: "In Vorbereitung",
    service: "Individuelle Systemarchitektur",
    year: "2026",
    summary:
      "Maßgeschneiderte Software mit klarer Architektur, sauberer Dokumentation und langfristiger Wartbarkeit. Details folgen nach Freigabe durch den Kunden.",
    image: "/images/services/leistung-systemarchitektur.png",
    available: false,
  },
];
