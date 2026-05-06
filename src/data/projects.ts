export type Project = {
  slug: string;
  title: string;
  client: string;
  service: string;
  year: string;
  summary: string;
  image: string;
  href?: string;
  /** Spezial-Aktion: bei Klick öffnet/wackelt das Chat-Widget statt zu navigieren. */
  action?: "open-chat";
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
    image: "/images/projects/nesani.webp",
    href: "https://www.nesani.de",
    available: true,
  },
  {
    slug: "handwerk-urim",
    title: "Handwerk Urim – Website",
    client: "Urim Hasani",
    service: "Websites",
    year: "2026",
    summary:
      "Moderne Handwerks-Website mit klarer Positionierung – performant, mobil-optimiert und auf lokale Anfragen aus Schwäbisch Gmünd und Umgebung ausgerichtet. Entwickelt mit Next.js, sauber strukturiert und übergabefähig.",
    image: "/images/projects/handwerk-urim.webp",
    href: "https://www.handwerk-urim.de",
    available: true,
  },
  {
    slug: "christian-jungwirth",
    title: "Christian Jungwirth – Online-Präsenz",
    client: "Christian Jungwirth",
    service: "Social Media & Online-Präsenz",
    year: "2026",
    summary:
      "Aufbau einer konsistenten Online-Präsenz und Content-Strategie über mehrere Kanäle – mit Fokus auf Wiedererkennung, Reichweite und echten Berührungspunkten mit der Zielgruppe.",
    image: "/images/projects/christian-jungwirth.webp",
    href: "https://www.instagram.com/chris_the_kelt_mma/",
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
    image: "/images/projects/demnaechst.png",
    available: false,
  },
  {
    slug: "nesani-chatbot",
    title: "Nesani Chatbot – Live auf dieser Seite",
    client: "Nesani",
    service: "KI-Assistenten & Chatbots",
    year: "2026",
    summary:
      "Eigener KI-Assistent, der Erstanfragen direkt im Browser beantwortet – auf Basis unserer Inhalte, in unserer Tonalität, mit klarer Übergabe an Menschen. Klicken Sie auf die Karte: das Widget unten rechts meldet sich.",
    image: "/images/services/leistung-ki-assistenten.png",
    action: "open-chat",
    available: true,
  },
  {
    slug: "autonome-agenten-case",
    title: "Autonome Agenten Case Study",
    client: "In Vorbereitung",
    service: "Autonome Agenten",
    year: "2026",
    summary:
      "Ein System, das beobachtet, entscheidet und eigenständig handelt. Details folgen nach Freigabe durch den Kunden.",
    image: "/images/projects/demnaechst.png",
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
    image: "/images/projects/demnaechst.png",
    available: false,
  },
];
