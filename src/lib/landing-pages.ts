import type { LandingPage } from "@/types/landing";

// Daten für die /lp/[service]-Conversion-Pages der nicht-website-Dienstleistungen.
// /lp/websites bleibt eine eigenständige Page mit dedizierten Hero-Bildern.
export const landingPages: LandingPage[] = [
  {
    slug: "ki-workflows",
    metaTitle: "KI-Workflows, die Zeit zurückgeben",
    metaDescription:
      "Wiederkehrende Prozesse automatisieren, Engpässe lösen und Kapazität freisetzen – mit KI-Workflows, die im Alltag wirklich tragen.",
    hero: {
      eyebrow: "Landingpage · KI Workflows",
      headingLines: ["KI-Workflows,", "die Zeit zurückgeben."],
      subline:
        "Wiederkehrende Prozesse automatisieren, Engpässe lösen und Kapazität für das Kerngeschäft freisetzen – ohne Werkzeug-Chaos und ohne Hype.",
      primaryCta: { label: "Projekt anfragen", href: "/kontakt" },
      secondaryCta: { label: "Kostenlose Checkliste", href: "#checkliste" },
      image: "/images/services/leistung-ki-workflows.png",
      imageMobile: "/images/services/leistung-ki-workflows.png",
      layout: "split",
    },
    stats: [
      { big: "40%", label: "Weniger manuelle Arbeit" },
      { big: "24/7", label: "Workflow-Verfügbarkeit" },
      { big: "1×", label: "Setup, dauerhaft Wirkung" },
    ],
    features: {
      eyebrow: "Was Sie bekommen",
      headingLines: ["Vier Bausteine,", "die zusammen wirken."],
      items: [
        {
          icon: "clipboard",
          title: "Prozessaufnahme",
          body: "Bestehende Abläufe sauber dokumentiert – inklusive Übergaben, Tools und manueller Schritte.",
        },
        {
          icon: "flow",
          title: "Klare Logik",
          body: "Was wird automatisiert, was bleibt manuell, wo greifen Eskalationsregeln – nachvollziehbar entworfen.",
        },
        {
          icon: "plug",
          title: "Tool-Integration",
          body: "Anbindung an Ihre bestehenden Systeme – ohne Doppelpflege und ohne Datensilo.",
        },
        {
          icon: "activity",
          title: "Monitoring",
          body: "Live-Überwachung, Fehlerbehandlung und Alerts – damit Automatisierung im Alltag verlässlich bleibt.",
        },
      ],
      moreInfoHref: "/leistungen/ki-workflows",
    },
    checklist: {
      eyebrow: "Kostenlos",
      headingLines: ["Die Workflow-", "Checkliste", "für Ihren Betrieb."],
      body: "Eine kompakte Checkliste, mit der Sie Automatisierungspotenziale in Ihren Prozessen identifizieren – Schritt für Schritt, sofort anwendbar.",
      formSource: "lp-ki-workflows",
      sideTitle: "Direkt-Download",
      sideBody: "E-Mail eintragen, Checkliste herunterladen.",
    },
    finalCta: {
      heading: "Bereit, manuelle Arbeit gegen Wirkung zu tauschen?",
      body: "Ein unverbindliches Erstgespräch – wir schauen gemeinsam auf Ihre Prozesse und zeigen, wo Automatisierung sich wirklich lohnt.",
      ctaLabel: "Jetzt anfragen",
    },
  },

  {
    slug: "autonome-agenten",
    metaTitle: "Autonome Agenten, die Aufgaben übernehmen",
    metaDescription:
      "Systeme, die selbstständig beobachten, entscheiden und handeln – mit klaren Grenzen, vollständiger Beobachtbarkeit und ohne Black-Box-Effekt.",
    hero: {
      eyebrow: "Landingpage · Autonome Agenten",
      headingLines: ["Agenten,", "die wirklich arbeiten."],
      subline:
        "Systeme, die selbstständig handeln: beobachten, entscheiden, ausführen. Mit klaren Rollen, kontrollierter Autonomie und vollständigen Audit-Trails.",
      primaryCta: { label: "Projekt anfragen", href: "/kontakt" },
      secondaryCta: { label: "Kostenlose Checkliste", href: "#checkliste" },
      image: "/images/services/leistung-autonome-agenten.png",
      imageMobile: "/images/services/leistung-autonome-agenten.png",
      layout: "split",
    },
    stats: [
      { big: "0", label: "Black-Box-Entscheidungen" },
      { big: "100%", label: "Audit-Trail" },
      { big: "24/7", label: "Aktiver Betrieb" },
    ],
    features: {
      eyebrow: "Was Sie bekommen",
      headingLines: ["Vier Prinzipien,", "die Autonomie tragen."],
      items: [
        {
          icon: "compass",
          title: "Use-Case-Fokus",
          body: "Autonomie nur dort, wo sie echten Mehrwert stiftet – nicht überall, wo sie technisch möglich wäre.",
        },
        {
          icon: "shield",
          title: "Kontrollierte Autonomie",
          body: "Klare Rollen, Rechte und Eskalationswege – Agenten handeln innerhalb fest definierter Grenzen.",
        },
        {
          icon: "eye",
          title: "Beobachtbarkeit",
          body: "Logs, Metriken und Audit-Trails machen jede Aktion nachvollziehbar und überprüfbar.",
        },
        {
          icon: "checklist",
          title: "Stufenweise Freigabe",
          body: "Iterative Erweiterung des Handlungsspielraums – mit Tests, Reviews und kontrollierter Skalierung.",
        },
      ],
      moreInfoHref: "/leistungen/autonome-agenten",
    },
    checklist: {
      eyebrow: "Kostenlos",
      headingLines: ["Die Agenten-", "Checkliste", "für Ihren Use-Case."],
      body: "Eine kompakte Checkliste, mit der Sie prüfen, welche Aufgaben sich für autonome Agenten eignen – und welche besser klassisch automatisiert werden.",
      formSource: "lp-autonome-agenten",
      sideTitle: "Direkt-Download",
      sideBody: "E-Mail eintragen, Checkliste herunterladen.",
    },
    finalCta: {
      heading: "Bereit, Kapazität für strategische Arbeit freizusetzen?",
      body: "Ein unverbindliches Erstgespräch – wir prüfen, wo autonome Agenten Sinn ergeben und wo nicht. Ehrlich und ohne Aufschlag.",
      ctaLabel: "Jetzt anfragen",
    },
  },

  {
    slug: "social-media",
    metaTitle: "Social Media mit klarer Markenwirkung",
    metaDescription:
      "Strategische Online-Präsenz: konsistente Tonalität, klare Profilarchitektur und Inhalte, die ziehen statt nur sichtbar zu sein.",
    hero: {
      eyebrow: "Landingpage · Social Media",
      headingLines: ["Markenpräsenz,", "die Vertrauen schafft."],
      subline:
        "Keine klassischen Posting-Pläne. Stattdessen: Markenpräsenz, die durch klare Tonalität, konsistente Profilarchitektur und vertrauensaufbauende Inhalte funktioniert.",
      primaryCta: { label: "Projekt anfragen", href: "/kontakt" },
      secondaryCta: { label: "Kostenlose Checkliste", href: "#checkliste" },
      image: "/images/services/leistung-social-media.png",
      imageMobile: "/images/services/leistung-social-media.png",
      layout: "split",
    },
    stats: [
      { big: "1", label: "Klare Markenstimme" },
      { big: "100%", label: "Konsistenz" },
      { big: "0", label: "Posting-Akkord" },
    ],
    features: {
      eyebrow: "Was Sie bekommen",
      headingLines: ["Vier Bausteine,", "für klare Markenwirkung."],
      items: [
        {
          icon: "layout",
          title: "Profil-Architektur",
          body: "Plattformauswahl, technisches Setup und Bio-Optimierung – konsistent über alle Kanäle hinweg.",
        },
        {
          icon: "palette",
          title: "Tonalität & Bildsprache",
          body: "Eine erkennbare Stimme und visuelle Handschrift, die im Feed auffällt statt zu verschwinden.",
        },
        {
          icon: "calendar",
          title: "Redaktionsplan",
          body: "Themen, Formate, Rhythmus – dokumentiert, sodass Inhalte selbstständig entstehen können.",
        },
        {
          icon: "book",
          title: "Styleguide",
          body: "Klare Regeln zu Sprache, Bildsprache und Formaten – auch wenn neue Personen mitwirken.",
        },
      ],
      moreInfoHref: "/leistungen/social-media",
    },
    checklist: {
      eyebrow: "Kostenlos",
      headingLines: ["Die Markenstimm-", "Checkliste", "für Ihren Auftritt."],
      body: "Eine kompakte Checkliste, mit der Sie Ihren Social-Media-Auftritt auf Konsistenz, Tonalität und Wirkung prüfen – sofort umsetzbar.",
      formSource: "lp-social-media",
      sideTitle: "Direkt-Download",
      sideBody: "E-Mail eintragen, Checkliste herunterladen.",
    },
    finalCta: {
      heading: "Bereit für eine Marke, die im Feed auffällt?",
      body: "Ein unverbindliches Erstgespräch – wir klären Positionierung, Kanäle und Ziele. Antwort innerhalb von 24 Stunden.",
      ctaLabel: "Jetzt anfragen",
    },
  },

  {
    slug: "ki-assistenten",
    metaTitle: "KI-Assistenten, die für Sie kommunizieren",
    metaDescription:
      "Eigene KI-Assistenten und Chatbots: 24/7 verfügbar, dokumentiert, kontrolliert und sauber an Ihre Kanäle und Systeme angebunden.",
    hero: {
      eyebrow: "Landingpage · KI-Assistenten",
      headingLines: ["KI,", "die für Sie spricht."],
      subline:
        "Jede Anfrage, die manuell beantwortet werden muss, kostet Zeit. Jede Anfrage, die zu lange wartet, kostet Kunden. KI-Assistenten lösen beides – 24/7 und auf Markenniveau.",
      primaryCta: { label: "Projekt anfragen", href: "/kontakt" },
      secondaryCta: { label: "Kostenlose Checkliste", href: "#checkliste" },
      image: "/images/services/leistung-ki-assistenten.png",
      imageMobile: "/images/services/leistung-ki-assistenten.png",
      layout: "split",
    },
    stats: [
      { big: "24/7", label: "Erreichbarkeit" },
      { big: "<1s", label: "Antwortzeit" },
      { big: "100%", label: "Markenkonform" },
    ],
    features: {
      eyebrow: "Was Sie bekommen",
      headingLines: ["Vier Bausteine,", "für verlässliche Assistenten."],
      items: [
        {
          icon: "book",
          title: "Wissensbasis",
          body: "Antworten auf Basis Ihrer Inhalte – dokumentiert, kontrolliert und jederzeit aktualisierbar.",
        },
        {
          icon: "spark",
          title: "Tonalität & Logik",
          body: "Gesprächsführung und Eskalationswege klar definiert – damit der Assistent zur Marke passt.",
        },
        {
          icon: "plug",
          title: "Integration",
          body: "Einbindung in Website, CRM oder Messenger – mit sauberer Authentifizierung und Datenflusslogik.",
        },
        {
          icon: "users",
          title: "Handover",
          body: "Wenn’s wirklich Aufmerksamkeit braucht, übergibt der Assistent zuverlässig an Menschen.",
        },
      ],
      moreInfoHref: "/leistungen/ki-assistenten",
    },
    checklist: {
      eyebrow: "Kostenlos",
      headingLines: ["Die Assistenten-", "Checkliste", "für Ihre Inhalte."],
      body: "Eine kompakte Checkliste, mit der Sie prüfen, welche Anfragen ein KI-Assistent in Ihrem Betrieb abnehmen kann – und wo Mensch nötig bleibt.",
      formSource: "lp-ki-assistenten",
      sideTitle: "Direkt-Download",
      sideBody: "E-Mail eintragen, Checkliste herunterladen.",
    },
    finalCta: {
      heading: "Bereit, Kommunikation neu zu denken?",
      body: "Ein unverbindliches Erstgespräch – wir klären Anwendungsfall, Tonalität und Ziele. Antwort innerhalb von 24 Stunden.",
      ctaLabel: "Jetzt anfragen",
    },
  },

  {
    slug: "systemarchitektur",
    metaTitle: "Systemarchitektur, die trägt",
    metaDescription:
      "Maßgeschneiderte digitale Infrastruktur, wenn Standardlösungen an Grenzen stoßen – skalierbar, sicher, wartbar.",
    hero: {
      eyebrow: "Landingpage · Systemarchitektur",
      headingLines: ["Architektur,", "die mit Ihnen wächst."],
      subline:
        "Wenn Standardlösungen an Grenzen stoßen, braucht es eine Architektur, die zu Ihren Prozessen passt – skalierbar, sicher und wirklich wartbar.",
      primaryCta: { label: "Projekt anfragen", href: "/kontakt" },
      secondaryCta: { label: "Kostenlose Checkliste", href: "#checkliste" },
      image: "/images/services/leistung-systemarchitektur.png",
      imageMobile: "/images/services/leistung-systemarchitektur.png",
      layout: "split",
    },
    stats: [
      { big: "0", label: "Quick-Fix-Kultur" },
      { big: "100%", label: "Dokumentation" },
      { big: "1:1", label: "Übergabe ins Team" },
    ],
    features: {
      eyebrow: "Was Sie bekommen",
      headingLines: ["Vier Prinzipien,", "die Last tragen."],
      items: [
        {
          icon: "checklist",
          title: "Klare Anforderungen",
          body: "Bevor Code entsteht, entstehen saubere Anforderungen: fachlich, technisch und organisatorisch abgestimmt.",
        },
        {
          icon: "layers",
          title: "Saubere Architektur",
          body: "Module, Datenflüsse und Schnittstellen, die langfristig tragen – dokumentiert, testbar, wartbar.",
        },
        {
          icon: "cog",
          title: "Betrieb & CI/CD",
          body: "Sauberer Betriebsmodus mit Monitoring, Logging und Pipelines – kein „läuft halt“-Stack.",
        },
        {
          icon: "key",
          title: "Übergabe",
          body: "Dokumentation und Schulung, damit Ihr Team das System eigenständig betreiben und weiterentwickeln kann.",
        },
      ],
      moreInfoHref: "/leistungen/systemarchitektur",
    },
    checklist: {
      eyebrow: "Kostenlos",
      headingLines: ["Die Architektur-", "Checkliste", "für Ihre Plattform."],
      body: "Eine kompakte Checkliste, mit der Sie Ihre aktuelle Infrastruktur auf Skalierbarkeit, Wartbarkeit und Sicherheit prüfen – ohne IT-Buzzword-Bingo.",
      formSource: "lp-systemarchitektur",
      sideTitle: "Direkt-Download",
      sideBody: "E-Mail eintragen, Checkliste herunterladen.",
    },
    finalCta: {
      heading: "Bereit für eine Architektur, die wirklich trägt?",
      body: "Ein unverbindliches Erstgespräch – wir schauen auf Ihre aktuelle Infrastruktur und klären, wo Passform sich wirklich lohnt.",
      ctaLabel: "Jetzt anfragen",
    },
  },
];

export function getLandingPageBySlug(slug: string): LandingPage | undefined {
  return landingPages.find((lp) => lp.slug === slug);
}
