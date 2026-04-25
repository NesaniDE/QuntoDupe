export type BlogSection =
  | { type: "paragraph"; content: string }
  | { type: "heading"; content: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; content: string }
  | { type: "cta"; href: string; label: string; external?: boolean };

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  dateIso: string;
  readingTime: string;
  excerpt: string;
  image: string;
  author: string;
  available: boolean;
  sections: BlogSection[];
};

const AUTHOR = "Nedim Hasani";

export const POSTS: BlogPost[] = [
  {
    slug: "starke-leistungsseite-bessere-leads",
    title:
      "Wie Unternehmen mit einer starken Leistungsseite bessere Leads statt nur mehr Klicks bekommen",
    category: "Websites",
    date: "26. April 2026",
    dateIso: "2026-04-26",
    readingTime: "8 min",
    excerpt:
      "Mehr Traffic allein löst selten ein Vertriebsproblem. Entscheidender ist, ob eine Leistungsseite echte Relevanz aufbaut, Einwände beantwortet und den nächsten Schritt vorbereitet.",
    image: "/images/blog/starke-leistungsseite-bessere-leads.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Viele Unternehmen investieren zuerst in Reichweite und merken später, dass zusätzliche Besucher kaum bessere Anfragen bringen. Genau dort zeigt sich die strategische Rolle einer guten Leistungsseite: Sie muss nicht nur sichtbar sein, sondern die richtige Zielgruppe in einen qualifizierten Kontakt überführen.",
      },
      { type: "heading", content: "Warum Klicks alleine wenig bedeuten" },
      {
        type: "paragraph",
        content:
          "Eine Seite kann Rankings und Traffic aufbauen und trotzdem schwach performen, wenn sie zu allgemein bleibt. Wer nach einer konkreten Lösung sucht, erwartet klare Aussagen zu Problem, Vorgehen, Nutzen und nächstem Schritt. Fehlt diese Präzision, entsteht Aufmerksamkeit ohne Abschluss.",
      },
      { type: "heading", content: "Was eine starke Leistungsseite leisten muss" },
      {
        type: "list",
        items: [
          "Ein konkretes Problem präzise benennen.",
          "Die angebotene Lösung nachvollziehbar erklären.",
          "Vertrauen durch Prozessklarheit, Referenzen oder Qualitätsmerkmale aufbauen.",
          "Den Kontakt so vorbereiten, dass der Lead bereits qualifiziert eintritt.",
        ],
      },
      { type: "heading", content: "Warum das auch SEO verbessert" },
      {
        type: "paragraph",
        content:
          "Suchmaschinen und LLM Systeme bevorzugen Seiten, die klar zeigen, für wen sie relevant sind und welches Thema sie belastbar abdecken. Gute Leistungsseiten gewinnen deshalb doppelt: Sie werden besser eingeordnet und konvertieren Besucher deutlich sauberer.",
      },
      {
        type: "quote",
        content:
          "Die beste Leistungsseite holt nicht maximal viele Klicks ab. Sie zieht die richtigen Anfragen an und macht sie vertrieblich nutzbar.",
      },
    ],
  },
  {
    slug: "ki-im-vertrieb-sinnvoll-einsetzen",
    title: "KI im Vertrieb: Welche Aufgaben sinnvoll unterstützt werden können",
    category: "KI & Automatisierung",
    date: "25. April 2026",
    dateIso: "2026-04-25",
    readingTime: "8 min",
    excerpt:
      "KI ist im Vertrieb vor allem dort sinnvoll, wo Vorbereitung, Struktur und Geschwindigkeit zählen. Gute Systeme entlasten, ohne den Beziehungsaufbau zu mechanisieren.",
    image: "/images/blog/ki-im-vertrieb-sinnvoll-einsetzen.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Im Vertrieb wird KI oft entweder überschätzt oder vorschnell abgelehnt. Die sinnvollere Perspektive ist operativ: Welche Aufgaben kosten täglich Zeit, folgen klaren Mustern und profitieren von schneller Vorarbeit. Genau dort kann KI echte Entlastung schaffen.",
      },
      { type: "heading", content: "Geeignete Aufgaben im Vertriebsalltag" },
      {
        type: "list",
        items: [
          "Leads vorqualifizieren und nach Relevanz sortieren.",
          "Gesprächsnotizen zusammenfassen und nächste Schritte ableiten.",
          "Antwortentwürfe für häufige Rückfragen vorbereiten.",
          "Angebotsinformationen strukturieren und für CRM Prozesse aufbereiten.",
        ],
      },
      { type: "heading", content: "Was KI im Vertrieb nicht ersetzen sollte" },
      {
        type: "paragraph",
        content:
          "Vertrauen, Verhandlung, Timing und situatives Gespür bleiben menschlich geprägt. Gerade in komplexen B2B Kontexten funktioniert KI am besten als vorbereitende Schicht, nicht als unkontrollierter Ersatz für Beziehung und Urteilskraft.",
      },
      { type: "heading", content: "Der wirtschaftliche Hebel" },
      {
        type: "paragraph",
        content:
          "Die größte Wirkung entsteht meist nicht in spektakulären Demos, sondern in kürzeren Reaktionszeiten, besserer Übergabe und saubererem Informationsfluss. Wenn Vertriebsteams schneller vorbereitet sind, steigt die Qualität der Gespräche und sinkt der operative Aufwand im Hintergrund.",
      },
      {
        type: "quote",
        content:
          "Gute KI im Vertrieb verkauft nicht anstelle von Menschen. Sie sorgt dafür, dass Menschen besser vorbereitet verkaufen können.",
      },
    ],
  },
  {
    slug: "langsame-reaktionszeiten-kosten-umsatz",
    title:
      "Warum langsame Reaktionszeiten online mehr Umsatz kosten als viele denken",
    category: "Prozesse",
    date: "24. April 2026",
    dateIso: "2026-04-24",
    readingTime: "7 min",
    excerpt:
      "Viele Unternehmen unterschätzen nicht die Zahl ihrer Anfragen, sondern die verlorene Wirkung zwischen Eingang und Antwort. Genau dort geht oft mehr Umsatz verloren als durch zu wenig Sichtbarkeit.",
    image: "/images/blog/langsame-reaktionszeiten-kosten-umsatz.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Wer online eine Anfrage stellt, bewertet nicht nur das Angebot, sondern auch die Geschwindigkeit der Reaktion. Lange Wartezeiten erzeugen Unsicherheit, verringern Kaufimpulse und öffnen Wettbewerbern ein unnötig großes Zeitfenster.",
      },
      { type: "heading", content: "Warum Geschwindigkeit Vertrauen beeinflusst" },
      {
        type: "paragraph",
        content:
          "Schnelle Rückmeldung signalisiert Struktur, Erreichbarkeit und Professionalität. Langsame Rückmeldung wirkt dagegen wie interne Überlastung oder fehlende Priorität, selbst wenn die Leistung fachlich stark wäre.",
      },
      { type: "heading", content: "Typische Ursachen für träge Reaktion" },
      {
        type: "list",
        items: [
          "Anfragen landen unsortiert in allgemeinen Postfächern.",
          "Es fehlen Verantwortlichkeiten und klare Übergaben.",
          "Wichtige Informationen kommen unstrukturiert an.",
          "Rückfragen verlängern den Prozess unnötig.",
        ],
      },
      { type: "heading", content: "Was Unternehmen konkret verbessern können" },
      {
        type: "paragraph",
        content:
          "Bereits einfache Maßnahmen wirken stark: bessere Formulare, automatische Kategorisierung, CRM Übergaben, Benachrichtigungen und vorbereitete Antwortlogik. Reaktionsgeschwindigkeit ist oft kein Personalproblem, sondern ein Strukturproblem.",
      },
      {
        type: "quote",
        content:
          "Zwischen Anfrage und Antwort entscheidet sich online häufig schon, ob ein Lead näher kommt oder innerlich abspringt.",
      },
    ],
  },
  {
    slug: "digitale-sichtbarkeit-fuer-erklaerungsbeduerftige-dienstleistungen",
    title:
      "Digitale Sichtbarkeit für erklärungsbedürftige Dienstleistungen richtig aufbauen",
    category: "Strategie",
    date: "23. April 2026",
    dateIso: "2026-04-23",
    readingTime: "9 min",
    excerpt:
      "Komplexe Leistungen brauchen online nicht mehr Lautstärke, sondern bessere Übersetzung. Wer komplizierte Angebote klar erklärt, wird eher gefunden und eher angefragt.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Erklärungsbedürftige Dienstleistungen haben online ein besonderes Problem: Die Leistung ist oft wertvoll, aber für Außenstehende nicht sofort greifbar. Genau deshalb reicht generisches Marketing selten aus. Sichtbarkeit entsteht hier über Klarheit, Struktur und die Fähigkeit, Komplexität verständlich zu machen.",
      },
      { type: "heading", content: "Was Interessenten zuerst verstehen müssen" },
      {
        type: "list",
        items: [
          "Welches Problem konkret gelöst wird.",
          "Für wen die Leistung relevant ist.",
          "Wie der Weg zur Lösung ungefähr aussieht.",
          "Woran sich Qualität und Seriosität erkennen lassen.",
        ],
      },
      { type: "heading", content: "Warum einfache Sprache strategisch wirkt" },
      {
        type: "paragraph",
        content:
          "Einfache Sprache bedeutet nicht inhaltliche Vereinfachung, sondern bessere Übersetzung. Wer fachlich präzise und zugleich verständlich kommuniziert, hilft Suchmaschinen, LLM Systemen und echten Entscheidern gleichzeitig. Genau das erhöht Auffindbarkeit und Vertrauen.",
      },
      { type: "heading", content: "Welche Inhalte besonders tragen" },
      {
        type: "paragraph",
        content:
          "Starke Leistungsseiten, problemorientierte Blogartikel, klare FAQ Strukturen und konkrete Use Cases sind besonders wirksam. Sie decken unterschiedliche Suchintentionen ab und führen Interessenten schrittweise vom Verständnis zur Anfrage.",
      },
      {
        type: "quote",
        content:
          "Komplexe Dienstleistungen werden online nicht dadurch sichtbar, dass man sie vereinfacht. Sie werden sichtbar, wenn man sie verständlich macht.",
      },
    ],
  },
  {
    slug: "wann-automatisierung-chaos-beschleunigt",
    title:
      "Wann Automatisierung Prozesse verbessert und wann sie nur Chaos beschleunigt",
    category: "Prozesse",
    date: "22. April 2026",
    dateIso: "2026-04-22",
    readingTime: "8 min",
    excerpt:
      "Automatisierung ist kein Selbstzweck. Sie verbessert Prozesse nur dann, wenn Eingaben, Verantwortlichkeiten und Ausnahmen bereits ausreichend klar definiert sind.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Automatisierung gilt schnell als Effizienzversprechen. In der Praxis zeigt sich aber oft das Gegenteil: Ein unklarer Prozess wird durch Automatisierung nicht besser, sondern lediglich schneller chaotisch. Deshalb ist die Qualität des Ausgangsprozesses entscheidender als die Zahl der eingesetzten Tools.",
      },
      { type: "heading", content: "Wann Automatisierung wirklich wirkt" },
      {
        type: "list",
        items: [
          "Wenn ein Ablauf regelmäßig nach ähnlichen Mustern abläuft.",
          "Wenn Zuständigkeiten klar verteilt sind.",
          "Wenn Eingaben konsistent und verwertbar ankommen.",
          "Wenn Ausnahmen erkennbar und begrenzbar bleiben.",
        ],
      },
      { type: "heading", content: "Warnsignale für zu frühen Einsatz" },
      {
        type: "paragraph",
        content:
          "Wenn Teams ständig improvisieren, Informationen mehrfach korrigieren oder Sonderfälle den Alltag dominieren, ist die Basis noch nicht stabil genug. Automatisierung würde hier vor allem Fehler schneller verteilen und Rückfragen vervielfachen.",
      },
      { type: "heading", content: "Die bessere Reihenfolge" },
      {
        type: "paragraph",
        content:
          "Zuerst Prozesslogik klären, dann Übergaben sauber definieren, danach Automatisierung einsetzen und erst zuletzt mehr Autonomie zulassen. Genau diese Reihenfolge reduziert Risiko und sorgt dafür, dass Systeme tatsächlich entlasten statt zusätzliche Komplexität zu erzeugen.",
      },
      {
        type: "quote",
        content:
          "Automatisierung ist nur dann ein Fortschritt, wenn sie Ordnung skaliert und nicht Unklarheit.",
      },
    ],
  },
  {
    slug: "nesani-platz-1-webagenturen-schwaebisch-gmuend",
    title:
      "Platz 1 bei den Webagenturen in Schwäbisch Gmünd – laut GD-Listen",
    category: "Auszeichnung",
    date: "25. April 2026",
    dateIso: "2026-04-25",
    readingTime: "5 min",
    excerpt:
      "Laut der aktuellen Top-10-Auswertung von gd-listen.de steht Nesani auf Platz 1 der Webagenturen in Schwäbisch Gmünd. Was hinter der Position steckt – und was sie für Unternehmen vor Ort bedeutet.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Auf der lokalen Übersichtsplattform gd-listen.de wird Nesani in der aktuellen Top-10-Auswertung der Webagenturen in Schwäbisch Gmünd auf Platz 1 geführt (Stand: April 2026). Solche Listen sind keine offiziellen Auszeichnungen, aber sie zeigen, wie der lokale Markt von außen wahrgenommen wird – und welche Anbieter überhaupt sichtbar sind.",
      },
      { type: "heading", content: "Was die Liste konkret schreibt" },
      {
        type: "quote",
        content:
          "Digitalagentur aus Schwäbisch Gmünd für Websites, KI-Workflows, Automatisierung und digitale Transformation.",
      },
      {
        type: "paragraph",
        content:
          "Diese Beschreibung trifft den Schwerpunkt gut: Nesani versteht eine Website nicht als isoliertes Marketing-Asset, sondern als Knotenpunkt zwischen Markenpräsenz, Vertrieb und Automatisierung.",
      },
      { type: "heading", content: "Warum Position 1 bei Webagenturen relevant ist" },
      {
        type: "paragraph",
        content:
          "Schwäbisch Gmünd hat eine lebendige Agenturlandschaft. Etablierte Anbieter wie Achtender, freitagundhäussermann oder Ihlenfeldt Online-Marketing decken große Teile des klassischen Webdesign-Marktes ab. Die Tatsache, dass Nesani in dieser Liste aktuell vor diesen Anbietern geführt wird, hängt vermutlich weniger mit Größe oder Bekanntheit zusammen, sondern mit einem klaren Profil: moderner Stack (Next.js, TypeScript, Tailwind), ein Ansprechpartner statt Projektleiter-Pingpong, und Websites, die nach dem Launch wartbar bleiben.",
      },
      { type: "heading", content: "Was Kunden in dieser Kategorie erwarten dürfen" },
      {
        type: "list",
        items: [
          "Websites, die auf Performance und Conversion optimiert sind, nicht nur auf Optik.",
          "Sauberen, dokumentierten Code, der vom eigenen Team oder einem anderen Entwickler weitergeführt werden kann.",
          "SEO-Grundlagen ab Tag 1: technisches Setup, Strukturdaten, Sitemap, Meta-Daten.",
          "Direkter Draht zur entwickelnden Person – kein Account-Manager dazwischen.",
        ],
      },
      { type: "heading", content: "Wer sonst in der Liste steht" },
      {
        type: "paragraph",
        content:
          "Auf den weiteren Plätzen folgen unter anderem Achtender GmbH, freitagundhäussermann, Ihlenfeldt Online-Marketing und S.G.I. Design. Jede dieser Agenturen hat einen eigenen Schwerpunkt – wer eher klassisches Markendesign sucht oder einen langjährigen lokalen Partner mit großem Team, sollte sich diese genauso ansehen. Die Listen-Position bedeutet nicht zwingend besser oder schlechter, sondern beschreibt eine Momentaufnahme der Sichtbarkeit zu einem bestimmten Profil.",
      },
      { type: "heading", content: "Was der nächste Schritt sein kann" },
      {
        type: "paragraph",
        content:
          "Ob Nesani für ein konkretes Vorhaben passt, lässt sich nicht aus einer Liste ablesen, sondern nur aus einem konkreten Gespräch. In einem unverbindlichen Erstgespräch klären wir Umfang, Ziele und Rahmenbedingungen – ohne Verkaufsdruck und mit ehrlicher Einschätzung, ob das Projekt überhaupt zu unserem Profil passt.",
      },
      {
        type: "cta",
        href: "https://www.gd-listen.de/top10/top-10-webagenturen-in-schwaebisch-gmuend",
        label: "Liste auf gd-listen.de ansehen",
        external: true,
      },
    ],
  },
  {
    slug: "nesani-platz-1-it-dienstleister-schwaebisch-gmuend",
    title:
      "Platz 1 bei den IT-Dienstleistern in Schwäbisch Gmünd – laut GD-Listen",
    category: "Auszeichnung",
    date: "25. April 2026",
    dateIso: "2026-04-25",
    readingTime: "5 min",
    excerpt:
      "Auch in der IT-Dienstleister-Auswertung von gd-listen.de steht Nesani aktuell auf Platz 1. Hier zählt etwas anderes als bei reinem Webdesign – nämlich Architektur, Wartbarkeit und Übergabe.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Neben den Webagenturen führt gd-listen.de auch eine separate Top 10 der IT-Dienstleister in Schwäbisch Gmünd. Nesani steht dort aktuell auf Platz 1 (Stand: April 2026). Diese Kategorie hat ein anderes Profil als reines Webdesign – hier geht es um Systeme, die im Hintergrund tragen müssen.",
      },
      { type: "heading", content: "Was die Liste konkret schreibt" },
      {
        type: "quote",
        content:
          "Digitalagentur aus Schwäbisch Gmünd für Websites, KI-Workflows, Automatisierung und digitale Transformation.",
      },
      { type: "heading", content: "Warum diese Kategorie etwas anderes verlangt" },
      {
        type: "paragraph",
        content:
          "Klassische IT-Dienstleister in der Region kommen oft aus der Systemhaus-Tradition: Hardware, Netzwerk, Wartung. Nesani positioniert sich daneben mit einem anderen Schwerpunkt – individuelle Systemarchitektur und Automatisierung dort, wo Standardlösungen wie SaaS-Tools, Plug-ins oder Baukästen an Grenzen stoßen.",
      },
      {
        type: "paragraph",
        content:
          "Das ist kein Ersatz für ein klassisches Systemhaus, sondern eine Ergänzung: Wer einen Fileserver einrichten oder Notebooks administrieren lassen will, ist bei den weiter unten gelisteten Anbietern wie L+S IT Services, BITPORT-IT oder MOTEC-IT besser aufgehoben. Wer eine maßgeschneiderte Datenintegration, einen automatisierten Prozess oder eine eigene digitale Plattform braucht, landet eher bei Nesani.",
      },
      { type: "heading", content: "Was Kunden in dieser Kategorie erwarten dürfen" },
      {
        type: "list",
        items: [
          "Architektur-Design vor Code: Module, Schnittstellen und Datenmodell werden durchdacht, bevor Aufwand entsteht.",
          "Wartbare Systeme statt Blackbox: Dokumentation, Tests und CI/CD gehören zum Standardlieferumfang.",
          "Saubere Übergabe – das System bleibt auch ohne Nesani betreibbar.",
          "Pragmatischer Tech-Stack: bewährte Werkzeuge statt experimenteller Frameworks.",
        ],
      },
      { type: "heading", content: "Wo eine Nesani-Lösung sich besonders lohnt" },
      {
        type: "paragraph",
        content:
          "Die typischen Auslöser sind erkennbar: Der SaaS-Stack wird unübersichtlich, wiederkehrende Excel-Schritte fressen Zeit, Daten liegen in drei Systemen, oder eine Standardlösung passt einfach nicht mehr zum gewachsenen Prozess. In all diesen Fällen geht es nicht um mehr IT, sondern um die richtige Architektur darunter.",
      },
      {
        type: "quote",
        content:
          "Eine gute IT-Lösung erkennt man daran, dass das Team danach weniger über IT redet – nicht mehr.",
      },
      {
        type: "cta",
        href: "https://www.gd-listen.de/top10/top-10-it-dienstleister-in-schwaebisch-gmuend",
        label: "Liste auf gd-listen.de ansehen",
        external: true,
      },
    ],
  },
  {
    slug: "nesani-platz-1-werbeagenturen-schwaebisch-gmuend",
    title:
      "Platz 1 bei den Werbeagenturen in Schwäbisch Gmünd – laut GD-Listen",
    category: "Auszeichnung",
    date: "25. April 2026",
    dateIso: "2026-04-25",
    readingTime: "5 min",
    excerpt:
      "Drittes Listing, dritter Platz 1: Auch bei den Werbeagenturen in Schwäbisch Gmünd führt gd-listen.de Nesani aktuell auf Position 1. Was das in einer klassisch Print-geprägten Kategorie bedeutet.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "In der Top 10 der Werbeagenturen auf gd-listen.de wird Nesani aktuell ebenfalls auf Platz 1 geführt (Stand: April 2026). Auf den ersten Blick überrascht das, weil der Begriff Werbeagentur historisch eine sehr breite Kategorie ist – von Außenwerbung über Print bis zu klassischen Kampagnen. Bei näherer Betrachtung ergibt es Sinn: Werbung ist heute zu einem großen Teil digital geworden.",
      },
      { type: "heading", content: "Was die Liste konkret schreibt" },
      {
        type: "quote",
        content:
          "Digitalagentur aus Schwäbisch Gmünd für Websites, KI-Workflows, Automatisierung und digitale Transformation.",
      },
      { type: "heading", content: "Wo Nesani in dieser Kategorie wirklich liefert" },
      {
        type: "paragraph",
        content:
          "Nesani ist kein klassischer Print-Anbieter. Wer Plakate, Visitenkarten, Messewände oder Außenwerbung sucht, ist bei Anbietern wie EBERLE Werbeagentur, Blanz Werbung oder Sieber Rudolf Werbeagentur deutlich besser aufgehoben – das sind etablierte Häuser mit großer Erfahrung in genau diesem Bereich.",
      },
      {
        type: "paragraph",
        content:
          "Was Nesani anders macht: digitale Markenpräsenz und Online-Sichtbarkeit als zusammenhängendes System. Eine Website ist dabei kein isoliertes Werbemittel, sondern der zentrale Konversionspunkt, auf den Social Media, KI-gestützte Kommunikation und Content-Marketing einzahlen.",
      },
      { type: "heading", content: "Was Kunden in dieser Kategorie erwarten dürfen" },
      {
        type: "list",
        items: [
          "Strategische Positionierung statt Posting-Plan: klare Tonalität und konsistente Profil-Architektur.",
          "Online-Präsenz, die Vertrauen aufbaut, nicht nur Reichweite produziert.",
          "Saubere Verzahnung mit der Website – damit Aufmerksamkeit auch in Anfragen umschlägt.",
          "Optional: KI-Assistenten, die Erstanfragen rund um die Uhr aufnehmen.",
        ],
      },
      { type: "heading", content: "Was der nächste Schritt sein kann" },
      {
        type: "paragraph",
        content:
          "Wer sich die drei Listen nebeneinander ansieht – Webagenturen, IT-Dienstleister und Werbeagenturen – erkennt das Profil: Nesani arbeitet nicht in einer dieser Schubladen, sondern an deren Schnittstelle. Genau das ist der Wert für Unternehmen, die digitale Präsenz, Automatisierung und Systemarchitektur nicht in drei separaten Verträgen mit drei verschiedenen Anbietern lösen wollen.",
      },
      {
        type: "paragraph",
        content:
          "Ob das im konkreten Fall passt, lässt sich am ehrlichsten in einem kurzen Erstgespräch klären – ohne Verkaufsdruck, mit klarer Einschätzung statt vager Versprechen.",
      },
      {
        type: "cta",
        href: "https://www.gd-listen.de/top10/top-10-werbeagenturen-in-schwaebisch-gmuend",
        label: "Liste auf gd-listen.de ansehen",
        external: true,
      },
    ],
  },
  {
    slug: "webdesign-schwaebisch-gmuend-2026",
    title:
      "Webdesign in Schwäbisch Gmünd 2026: Was Mittelständler heute wirklich brauchen",
    category: "Lokale Sichtbarkeit",
    date: "25. April 2026",
    dateIso: "2026-04-25",
    readingTime: "6 min",
    excerpt:
      "Eine Website ist in Schwäbisch Gmünd längst kein Visitenkarten-Ersatz mehr. Was Mittelständler 2026 erwarten dürfen – und was sich beim Stack, beim Prozess und beim Ergebnis verschoben hat.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Wer in Schwäbisch Gmünd oder im Ostalbkreis eine neue Unternehmenswebsite plant, wird mit einem deutlich anderen Markt konfrontiert als noch vor fünf Jahren. Kunden recherchieren mobil, vergleichen schneller, und entscheiden in den ersten Sekunden, ob ein Anbieter überhaupt seriös wirkt. Eine Website ist heute kein Marketing-Asset, sondern Vertriebskanal Nummer eins.",
      },
      { type: "heading", content: "Was sich verschoben hat" },
      {
        type: "paragraph",
        content:
          "Drei Entwicklungen haben das Niveau für regionale Websites massiv angehoben: Google bewertet Performance über die Core Web Vitals härter denn je, KI-Suchmaschinen wie ChatGPT Search und Perplexity ziehen Inhalte direkt aus strukturierten Seiten, und Mobile-First ist nicht mehr Best Practice, sondern technisches Pflichtprogramm.",
      },
      { type: "heading", content: "Was eine Mittelstandswebsite in der Region heute leisten muss" },
      {
        type: "list",
        items: [
          "Ladezeit unter 2 Sekunden auch auf 4G – sonst verliert man Besucher, bevor sie das erste Wort gelesen haben.",
          "Klare Leistungsseiten, die ein konkretes Problem lösen – generische Imagetexte werden seltener gelesen.",
          "Lokale Verankerung: Stadt, Region, Kontakt müssen für Google und Menschen sofort sichtbar sein.",
          "Saubere Strukturdaten (Schema.org), damit KI-Suchmaschinen die Inhalte überhaupt korrekt zitieren können.",
          "Wartbarer Code – damit ein neuer Eintrag nicht zwei Wochen Entwicklerzeit kostet.",
        ],
      },
      { type: "heading", content: "Häufige Stolpersteine bei lokalen Webprojekten" },
      {
        type: "paragraph",
        content:
          "Viele regionale Anbieter setzen weiterhin auf WordPress-Themes mit großem Plugin-Stack. Das funktioniert kurzfristig, wird langfristig aber fragil: Plugin-Updates kollidieren, Performance leidet, und nach drei Jahren spricht niemand mehr vom Originalentwickler. Wer eine Website plant, sollte deshalb nicht nur das fertige Ergebnis bewerten, sondern auch die Übergabe – also: Wer kann das System in zwei Jahren noch sinnvoll weiterführen?",
      },
      {
        type: "quote",
        content:
          "Eine gute Mittelstandswebsite erkennt man daran, dass sie nach dem Launch nicht das Ende der Arbeit markiert, sondern den Anfang von messbarer Wirkung.",
      },
    ],
  },
  {
    slug: "ki-workflows-mittelstand-ostalbkreis-einstieg",
    title:
      "KI-Workflows im Mittelstand Ostalbkreis: Drei realistische Einstiegspunkte",
    category: "Lokale Sichtbarkeit",
    date: "25. April 2026",
    dateIso: "2026-04-25",
    readingTime: "5 min",
    excerpt:
      "KI-Beratung wird gerade flächendeckend angeboten – meistens generisch. Worauf es im Mittelstand zwischen Aalen und Schwäbisch Gmünd wirklich ankommt: kleine Anwendungsfälle, die Zeit sparen, ohne Prozesse zu verkomplizieren.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Im Ostalbkreis ist der Mittelstand traditionell pragmatisch: Es wird investiert, wenn der Nutzen klar ist, nicht weil ein Buzzword durch die Wirtschaftspresse geht. Das ist auch bei KI gut so. Die Frage ist nicht, ob ein Unternehmen KI braucht, sondern wo der erste Einsatz spürbar Zeit oder Fehler reduziert.",
      },
      { type: "heading", content: "Typische Auslöser, die wir vor Ort regelmäßig sehen" },
      {
        type: "list",
        items: [
          "Kundenanfragen kommen über vier Kanäle und werden manuell ins CRM übertragen.",
          "Angebote werden aus alten Word-Vorlagen kopiert und individuell angepasst – jedes Mal von Grund auf.",
          "Stundenzettel landen am Monatsende auf dem Schreibtisch der Buchhaltung und werden händisch eingetippt.",
          "Wiederkehrende Kundenfragen binden Zeit, obwohl die Antwort in jedem Fall identisch ist.",
        ],
      },
      { type: "heading", content: "Drei realistische Einstiegspunkte" },
      {
        type: "paragraph",
        content:
          "Erstens: strukturierte Erstanfragen. Eine kleine KI-gestützte Pipeline kann eingehende Mails klassifizieren, Pflichtfelder ergänzen und ins CRM ablegen. Zweitens: Angebotsentwürfe. Mit Wissensbasis und Templates lassen sich erste Versionen von Angeboten in Minuten statt Stunden erzeugen, die letzte Hand bleibt beim Vertrieb. Drittens: interne Recherche. Statt durch fünf Ordner zu klicken, fragt das Team einen Assistenten, der ausschließlich auf eigene Dokumente zugreift.",
      },
      { type: "heading", content: "Worauf es bei der Auswahl ankommt" },
      {
        type: "list",
        items: [
          "Klare Prozesse vorher: KI ersetzt keinen unklaren Workflow, sie beschleunigt ihn nur.",
          "Datenhoheit: Die Lösung muss DSGVO-konform laufen, idealerweise mit Daten in der EU.",
          "Wartbarkeit: Wer betreut das System in 12 Monaten, wenn sich Modelle oder Tools ändern?",
        ],
      },
      {
        type: "quote",
        content:
          "Der größte Hebel ist nicht die spektakulärste Demo, sondern der unscheinbare Schritt, der jeden Tag dreimal ausfällt.",
      },
    ],
  },
  {
    slug: "online-praesenz-handwerk-schwaebisch-gmuend",
    title:
      "Online-Präsenz für Handwerksbetriebe in Schwäbisch Gmünd: Was Anfragen bringt – und was nicht",
    category: "Lokale Sichtbarkeit",
    date: "25. April 2026",
    dateIso: "2026-04-25",
    readingTime: "5 min",
    excerpt:
      "Im Handwerk in Schwäbisch Gmünd ist die Auftragslage selten das Problem – die Kommunikation oft schon. Was eine kleine, wartbare Online-Präsenz wirklich bringt und welche Mittel überschätzt werden.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Handwerksbetriebe in Schwäbisch Gmünd haben in den letzten Jahren in fast jeder Sparte volle Auftragsbücher. Trotzdem lohnt sich eine moderne Online-Präsenz – nicht für mehr Anfragen, sondern für die richtigen Anfragen, klare Prozesse und weniger Telefonat-Erklärrunden.",
      },
      { type: "heading", content: "Was klassische Handwerks-Websites oft falsch machen" },
      {
        type: "list",
        items: [
          "Startseite mit Stockfoto und Slogan, aber ohne klares Leistungsversprechen.",
          "Kontaktformular versteckt im Footer, ohne Hinweis auf Reaktionszeit.",
          "Keine sichtbare Adresse, kein Einzugsgebiet – Google rätselt, wo der Betrieb tätig ist.",
          "Eine Bilderflut ohne Struktur: schöne Fotos, aber keine erkennbare Spezialisierung.",
        ],
      },
      { type: "heading", content: "Was wirklich Anfragen aus der Region bringt" },
      {
        type: "list",
        items: [
          "Konkrete Leistungsseiten: pro Kerngewerk eine Seite mit Beispielen, Ablauf und Preisrahmen.",
          "Lokale Sichtbarkeit: Adresse, Stadtteile, Telefonnummer prominent, Strukturdaten dahinter.",
          "Reaktionszeit-Versprechen: Das schafft Vertrauen und filtert unseriöse Anfragen.",
          "Ein vollständig gepflegtes Google Business Profile mit aktuellen Bildern und Bewertungen.",
        ],
      },
      { type: "heading", content: "Was überschätzt wird" },
      {
        type: "paragraph",
        content:
          "Hochglanz-Imagefilm, aufwendige Animationen oder Social-Media-Daueraktivität sind im Handwerk selten der entscheidende Hebel. Was tatsächlich zählt, ist Erreichbarkeit, Klarheit und Vertrauen. Eine schlanke, schnelle Website mit guten lokalen SEO-Grundlagen schlägt fast immer das opulente Schaufenster, das niemand findet.",
      },
    ],
  },
  {
    slug: "chatbots-lokale-dienstleister-schwaebisch-gmuend",
    title:
      "Chatbots für lokale Dienstleister: Wann sich der Aufwand für Betriebe in Schwäbisch Gmünd rechnet",
    category: "Lokale Sichtbarkeit",
    date: "25. April 2026",
    dateIso: "2026-04-25",
    readingTime: "5 min",
    excerpt:
      "Nicht jeder lokale Dienstleister braucht einen KI-Assistenten. Wann er sich rechnet, wann er nur Aufwand verursacht – und welche Vorbedingungen für einen sinnvollen Einsatz in Schwäbisch Gmünd gegeben sein sollten.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Chatbots haben einen Ruf zwischen Heilsversprechen und Spielzeug. Beides wird der Realität nicht gerecht. Für lokale Dienstleister in Schwäbisch Gmünd kann ein gut konzipierter Assistent durchaus Anfragen abfangen und filtern – aber nicht in jedem Fall lohnt sich der Aufwand.",
      },
      { type: "heading", content: "Wann ein Chatbot sinnvoll ist" },
      {
        type: "list",
        items: [
          "Es gibt 5 bis 15 Standardfragen, die täglich mehrfach gestellt werden.",
          "Die Antworten lassen sich aus bestehenden Dokumenten oder einer FAQ ableiten.",
          "Erstanfragen sollen vorqualifiziert werden, bevor sie das Vertriebsteam erreichen.",
          "Die Website hat genug Traffic, dass sich der Einsatz statistisch bemerkbar macht.",
        ],
      },
      { type: "heading", content: "Wann es eher Geldverschwendung ist" },
      {
        type: "paragraph",
        content:
          "Wer pro Woche eine Handvoll Anfragen bekommt und ohnehin alles persönlich beantworten möchte, braucht keinen Chatbot. Auch dort, wo Vertrauen und Beziehungspflege das Verkaufsargument sind – etwa bei Beratung, Therapie oder Coaching – kann ein Bot eher kalt wirken als unterstützend.",
      },
      { type: "heading", content: "Was vor dem Einsatz geklärt sein sollte" },
      {
        type: "list",
        items: [
          "Klare Wissensbasis: Was darf der Bot sagen, was nicht?",
          "Eskalationspfad: Wann übergibt er an einen Menschen?",
          "DSGVO-Setup: Wo werden Daten verarbeitet, wer ist Auftragsverarbeiter?",
          "Erfolgskriterien: Welche Kennzahl beweist nach 3 Monaten den Nutzen?",
        ],
      },
    ],
  },
  {
    slug: "webdesign-kosten-schwaebisch-gmuend",
    title:
      "Webdesign-Kosten in Schwäbisch Gmünd: Was Mittelständler für welches Budget bekommen",
    category: "Lokale Sichtbarkeit",
    date: "25. April 2026",
    dateIso: "2026-04-25",
    readingTime: "6 min",
    excerpt:
      "Was kostet eine professionelle Website in Schwäbisch Gmünd 2026? Drei realistische Budgetbereiche, was sie tatsächlich enthalten, und welche Faktoren den Preis nach oben oder unten drücken.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Die Frage nach den Kosten kommt früh – und sie ist berechtigt. Pauschalantworten verbieten sich, weil eine Website nichts Standardisiertes ist. Trotzdem lassen sich für Schwäbisch Gmünd und den Ostalbkreis ehrliche Größenordnungen benennen. Drei Budgetbereiche, drei Erwartungshaltungen.",
      },
      { type: "heading", content: "Drei realistische Budgetbereiche" },
      {
        type: "list",
        items: [
          "Unter 2.000 € – Template-basiert, oft selbstgebaut oder über Baukasten. Funktioniert für sehr kleine Betriebe ohne komplexe Anforderungen, ist aber selten SEO-stark oder langfristig wartbar.",
          "2.000 bis 8.000 € – Solide individuelle Umsetzung mit klarer Struktur, lokaler Optimierung, drei bis sechs Leistungsseiten. Für die meisten Mittelständler in der Region die realistische Größenordnung.",
          "8.000 € + – Maßgeschneiderte Plattform mit speziellen Anforderungen: Buchungssysteme, CRM-Integration, mehrsprachig, individuelle Datenstrukturen.",
        ],
      },
      { type: "heading", content: "Was die Preisspanne wirklich beeinflusst" },
      {
        type: "list",
        items: [
          "Anzahl und Tiefe der Inhaltsseiten – 5 vs. 25 Seiten ist ein Faktor.",
          "Individuelle Designarbeit oder Template-Anpassung.",
          "Integrationen: CRM, Newsletter-System, Buchung, Zahlung.",
          "Texterstellung: Wer liefert die Inhalte?",
          "Wartung und Support nach dem Launch.",
        ],
      },
      { type: "heading", content: "Worauf bei Angeboten zu achten ist" },
      {
        type: "paragraph",
        content:
          "Ein gutes Angebot listet Aufwände nicht nur summarisch, sondern macht klar, was im Preis enthalten ist und was nicht. Texterstellung, Bildlizenzen, spätere Änderungen, Hosting und SSL sind klassische Posten, die in zu günstigen Angeboten gerne fehlen – und später nachverhandelt werden.",
      },
    ],
  },
  {
    slug: "edelmetallindustrie-digitalisierung-schwaebisch-gmuend",
    title:
      "Edelmetallindustrie und Digitalisierung: Was Schwäbisch Gmünd der Branche voraus hat",
    category: "Branchen",
    date: "25. April 2026",
    dateIso: "2026-04-25",
    readingTime: "5 min",
    excerpt:
      "Schwäbisch Gmünd ist historisch ein Zentrum der Edelmetallverarbeitung. Was diese Tradition heute für die digitale Wettbewerbsfähigkeit der Branche bedeutet – und wo Mittelständler den Anschluss halten können.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Die Edelmetallverarbeitung ist seit dem Mittelalter ein prägender Wirtschaftszweig in Schwäbisch Gmünd. Schmuck, Bestecke, technische Komponenten – ein Großteil der lokalen Industrie hat tiefe Wurzeln in dieser Tradition. Was sich verändert, sind nicht die Produkte, sondern die Prozesse rundherum.",
      },
      { type: "heading", content: "Was den Standort besonders macht" },
      {
        type: "paragraph",
        content:
          "Konzentrierte Fertigungstiefe, Spezialisten in unmittelbarer Nähe, eine Designhochschule vor Ort und ein etablierter Zulieferer-Cluster – das ist eine Kombination, die anderswo schwer zu replizieren ist. Diese Dichte erlaubt schnelle, gemeinsame Innovationsprozesse, wenn Unternehmen sie aktiv nutzen.",
      },
      { type: "heading", content: "Wo Digitalisierung in dieser Branche wirklich wirkt" },
      {
        type: "list",
        items: [
          "Digitale Produktdokumentation: Echtzeitausrichtung von Werkstoffen, Prüfprotokollen und Lieferketten.",
          "Visualisierung und Konfiguration: Kunden konfigurieren Schmuck oder Komponenten online und sehen das Ergebnis dreidimensional.",
          "Vertrieb über Spezialplattformen statt klassischem Messegeschäft.",
          "Automatisierte Auftragsbearbeitung zwischen Zulieferer und Endhersteller.",
        ],
      },
      { type: "heading", content: "Was Mittelständler aus dem Cluster verlangen sollten" },
      {
        type: "paragraph",
        content:
          "Eine Website, die nur Bilder von Produkten zeigt, reicht in dieser Branche längst nicht mehr. Wer im internationalen Wettbewerb sichtbar bleiben will, braucht digital aufbereitete Fachkompetenz: technische Datenblätter, Materialwissen, Referenzen, alles auch für Suchmaschinen und LLMs lesbar.",
      },
      {
        type: "quote",
        content:
          "Wer aus Schwäbisch Gmünd liefert, hat bei Edelmetall traditionell einen Vertrauensvorschuss – aber den muss man heute auch online sichtbar machen.",
      },
    ],
  },
  {
    slug: "gastronomie-schwaebisch-gmuend-digitale-bausteine",
    title:
      "Gastronomie in Schwäbisch Gmünd: Welche digitalen Bausteine wirklich Gäste bringen",
    category: "Branchen",
    date: "25. April 2026",
    dateIso: "2026-04-25",
    readingTime: "5 min",
    excerpt:
      "Restaurants, Cafés und Bars in Schwäbisch Gmünd brauchen kein Hochglanz-Marketing. Aber sehr wohl ein paar verlässliche digitale Bausteine, ohne die Gäste den Weg zur Tür gar nicht erst finden.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Wer in Schwäbisch Gmünd ein gutes Lokal eröffnet, lebt zu großen Teilen von Stammgästen, Empfehlungen und der Innenstadt-Laufkundschaft. Digital wird oft erst dann investiert, wenn die Auslastung schwankt. Dabei liegen die Hebel meist nicht in spektakulärer Werbung, sondern in vier verlässlichen Bausteinen.",
      },
      { type: "heading", content: "Was Gäste in der Stadt heute erwarten" },
      {
        type: "list",
        items: [
          "Eine aktuelle Speisekarte, die auf dem Handy gut lesbar ist – ohne PDF-Download.",
          "Klare Öffnungszeiten und Feiertage, die mit Google übereinstimmen.",
          "Eine Reservierungsmöglichkeit per Klick oder mindestens per Telefon mit klarer Reaktionszeit.",
          "Aktuelle Bilder von Innenraum und Speisen – nicht Stockfotos.",
        ],
      },
      { type: "heading", content: "Häufiger Trugschluss" },
      {
        type: "paragraph",
        content:
          "Viele Gastronomen halten die eigene Instagram-Präsenz für die Kernarbeit und vernachlässigen Google. Tatsächlich entscheiden die meisten Gäste in Schwäbisch Gmünd über die Google-Suche oder Google Maps, nicht über Instagram. Die Reihenfolge sollte deshalb lauten: erst Profil, Website und Bewertungen, dann Social Media.",
      },
      { type: "heading", content: "Was sich auszahlt" },
      {
        type: "list",
        items: [
          "Ein vollständiges Google Business Profile mit allen aktuellen Bildern.",
          "Eine schlanke, schnelle Website mit Speisekarte und Reservierung.",
          "Eine Strategie, wie nach jedem Besuch um eine Bewertung gebeten wird.",
          "Saisonale Updates: Sommerterrasse, Wochenkarte, Feiertage.",
        ],
      },
      {
        type: "quote",
        content:
          "Der erste Tisch wird heute bei Google reserviert, nicht am Telefon.",
      },
    ],
  },
  {
    slug: "handwerk-ostalbkreis-online-sichtbarkeit",
    title:
      "Handwerk im Ostalbkreis: Wie Betriebe aus Bettringen, Herlikofen und Lorch sichtbarer werden",
    category: "Branchen",
    date: "25. April 2026",
    dateIso: "2026-04-25",
    readingTime: "5 min",
    excerpt:
      "Ein gut geführter Handwerksbetrieb im Ostalbkreis findet auch ohne Online-Marketing seine Aufträge. Aber: Sichtbarkeit hilft, die richtigen Aufträge zu wählen statt jeden Anruf annehmen zu müssen.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Der typische Handwerksbetrieb im Ostalbkreis – ob in Bettringen, Herlikofen, Lorch, Waldstetten oder Mutlangen – hat oft mehr Anfragen als Kapazitäten. Trotzdem ist Online-Sichtbarkeit kein Luxus: Sie verändert, welche Anfragen kommen, in welchem Tempo und mit welcher Zahlungsbereitschaft.",
      },
      { type: "heading", content: "Drei Hebel mit echter Wirkung" },
      {
        type: "list",
        items: [
          "Ein vollständiges Google Business Profile mit Bildern, Bewertungen und Einzugsgebiet.",
          "Eine kleine, schnelle Website mit klaren Leistungsseiten – Heizung, Sanitär, Fenster, Dach, je nach Spezialisierung.",
          "Lokale Verzeichniseinträge in einigen wenigen, wirklich relevanten Plattformen.",
        ],
      },
      { type: "heading", content: "Was nicht funktioniert" },
      {
        type: "paragraph",
        content:
          "Komplexe Werbekampagnen, Daily-Posting auf vier Social-Media-Kanälen, oder bezahlte Klicks ohne klare Landingpage – das verbrennt im Handwerk fast immer Geld. Wer im Familienbetrieb arbeitet, hat selten Zeit für Postings, und die Zielgruppe sucht ohnehin auf Google nach 'Heizungsbauer Bettringen' oder 'Schreiner Lorch'.",
      },
      { type: "heading", content: "Worauf zu achten ist" },
      {
        type: "list",
        items: [
          "Die Stadtteile und Nachbargemeinden müssen auf der Website sichtbar genannt sein.",
          "Anfragen sollten ohne Formular-Akrobatik möglich sein – idealerweise auch per WhatsApp.",
          "Antwortzeit klar kommunizieren, sonst wirkt der Betrieb unzuverlässig.",
          "Bilder von echten Projekten, nicht aus Bildagenturen.",
        ],
      },
    ],
  },
  {
    slug: "tourismus-schwaebisch-gmuend-digitale-praesenz",
    title:
      "Tourismus Schwäbisch Gmünd: Wie digitale Präsenz Gäste in die Stadt zieht",
    category: "Branchen",
    date: "25. April 2026",
    dateIso: "2026-04-25",
    readingTime: "5 min",
    excerpt:
      "Schwäbisch Gmünd hat Heilig-Kreuz-Münster, Stauferzeit, Remstal-Tor und eine sehenswerte Innenstadt. Was lokale Tourismus-Akteure tun können, damit das auch online ankommt.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Schwäbisch Gmünd ist als älteste Stauferstadt mit Heilig-Kreuz-Münster, malerischer Altstadt und Remstal-Lage ein touristisches Pfund – das digital aber nicht überall ausgespielt wird. Hotels, Pensionen, Stadtführungen, Restaurants und Erlebnisanbieter tun gut daran, ihre Online-Präsenz an die heutige Gäste-Recherche anzupassen.",
      },
      { type: "heading", content: "Wo Gäste heute recherchieren" },
      {
        type: "list",
        items: [
          "Google-Suche nach 'Hotel Schwäbisch Gmünd' oder 'Was tun in Schwäbisch Gmünd am Wochenende'.",
          "Google Maps für Bewertungen, Bilder und Verfügbarkeit.",
          "Booking.com, Trivago und andere Aggregatoren.",
          "Instagram und TikTok für visuelle Inspiration.",
          "Zunehmend ChatGPT und Perplexity, wenn Gäste Tagesausflüge planen.",
        ],
      },
      { type: "heading", content: "Was lokale Anbieter daraus machen können" },
      {
        type: "list",
        items: [
          "Eine eigene Website mit klaren Inhalten, schnell und mobil zuerst.",
          "Detaillierte Beschreibungen, die Suchmaschinen und KI-Tools zitieren können.",
          "Lokale Verzeichnisse und Tourismusportale aktiv pflegen.",
          "Aktuelle Bilder, die das Besondere zeigen statt Standardmotive.",
        ],
      },
      { type: "heading", content: "Was die Stadt als Ganzes braucht" },
      {
        type: "paragraph",
        content:
          "Die wirkungsvollste Tourismus-Sichtbarkeit entsteht im Verbund. Einzelne Anbieter, die ihre Website pflegen, sind wertvoll – aber wenn die touristischen Akteure der Stadt sich gegenseitig verlinken und auf gemeinsame Inhalte verweisen, profitieren alle davon. Das ist klassische lokale Vernetzung mit modernen Werkzeugen.",
      },
    ],
  },
  {
    slug: "lokale-seo-schwaebisch-gmuend",
    title:
      "Lokale SEO für Schwäbisch Gmünd: Wie Unternehmen in Google Maps und der Suche sichtbar werden",
    category: "Lokale SEO",
    date: "25. April 2026",
    dateIso: "2026-04-25",
    readingTime: "6 min",
    excerpt:
      "Wer in Schwäbisch Gmünd bei Google gefunden werden will, braucht keine Tricks. Aber die richtige Reihenfolge: Profil, Website, Bewertungen, Verzeichnisse – und konsistente Daten überall.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Lokale SEO ist kein Geheimnis und kein dunkler Trick. Es ist die saubere, geduldige Arbeit an drei Säulen: dem Google Business Profile, der eigenen Website und externen Bewertungen oder Verzeichnissen. Wer diese drei konsistent pflegt, taucht in Schwäbisch Gmünd-spezifischen Suchen oft binnen Wochen sichtbar auf.",
      },
      { type: "heading", content: "Säule 1: Google Business Profile" },
      {
        type: "paragraph",
        content:
          "Ohne ein vollständig ausgefülltes Profil kein lokales Ranking. Adresse, Telefon, Öffnungszeiten, Kategorien, Beschreibung und mindestens 10 aktuelle Bilder sind Pflicht. Bewertungen aktiv anregen, sachlich beantworten – auch die kritischen.",
      },
      { type: "heading", content: "Säule 2: Eigene Website mit lokalen Signalen" },
      {
        type: "list",
        items: [
          "Adresse und Stadt im Footer und Impressum, identisch wie im Google-Profil.",
          "LocalBusiness-Strukturdaten (Schema.org), damit Google den Standort erkennt.",
          "Eigene Seiten oder Abschnitte für die wichtigsten Stadtteile und Nachbargemeinden, sofern relevant.",
          "Inhalte, die regionale Suchanfragen aufgreifen, ohne Keyword-Stuffing.",
        ],
      },
      { type: "heading", content: "Säule 3: Bewertungen und Verzeichnisse" },
      {
        type: "paragraph",
        content:
          "Externe Quellen senden Trust-Signale an Google. Lokale Plattformen wie gd-listen.de, GelbeSeiten oder Branchenverzeichnisse zählen mehr, als viele denken – sofern die Daten überall identisch sind. Inkonsistente Adressen oder Telefonnummern in unterschiedlichen Verzeichnissen schaden mehr, als sie nützen.",
      },
      { type: "heading", content: "Häufige Fehler" },
      {
        type: "list",
        items: [
          "Profile angelegt, aber nie aktualisiert.",
          "Website ohne klare Standortangabe.",
          "Bewertungen werden nicht beantwortet.",
          "Adresse oder Name unterscheiden sich zwischen Profil, Impressum und Verzeichnissen.",
        ],
      },
      {
        type: "quote",
        content:
          "Lokale SEO ist Geduld plus Konsistenz – keine Magie, kein Hack.",
      },
    ],
  },
  {
    slug: "google-business-profile-schwaebisch-gmuend",
    title:
      "Google Business Profile für Unternehmen aus Schwäbisch Gmünd: Schritt-für-Schritt",
    category: "Lokale SEO",
    date: "25. April 2026",
    dateIso: "2026-04-25",
    readingTime: "6 min",
    excerpt:
      "Das Google Business Profile ist für lokale Unternehmen oft der wichtigste digitale Touchpoint überhaupt. Was es leisten muss, wie es eingerichtet wird und was viele Unternehmen falsch machen.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Wer in Schwäbisch Gmünd nach einer Dienstleistung sucht, sieht zuerst die lokale Box mit drei Anbietern – das sogenannte Local Pack. Wer dort nicht auftaucht, hat den ersten und entscheidenden Eindruck verschenkt. Grundlage für die Box ist immer das Google Business Profile.",
      },
      { type: "heading", content: "Schritt-für-Schritt-Setup" },
      {
        type: "list",
        items: [
          "Profil unter business.google.com anlegen und Eigentümerschaft per Postkarte oder Telefon verifizieren.",
          "Vollständige Pflichtangaben: exakte Firmierung, Adresse, Telefon, Website-URL, Öffnungszeiten.",
          "Hauptkategorie und bis zu 9 Nebenkategorien sorgfältig auswählen.",
          "Beschreibung mit klarem Leistungsangebot, ohne Keyword-Stuffing.",
          "10 bis 20 hochwertige Bilder hochladen: Außen, Innen, Team, Produkte, Logo.",
          "Beiträge regelmäßig pflegen: Aktuelles, Angebote, Veranstaltungen.",
        ],
      },
      { type: "heading", content: "Was viele Unternehmen unterschätzen" },
      {
        type: "paragraph",
        content:
          "Das Profil ist kein Set-and-Forget-Eintrag. Bewertungen sollten beantwortet, neue Bilder regelmäßig hochgeladen, Öffnungszeiten an Feiertagen aktualisiert werden. Google bewertet aktive Profile sichtbar besser als statische. Wer das einmalig einrichtet und dann nie wieder anfasst, verliert mit der Zeit Sichtbarkeit.",
      },
      { type: "heading", content: "Häufige Fehler" },
      {
        type: "list",
        items: [
          "Mehrfache Profile derselben Firma – führt zu Sperren oder Ranking-Schaden.",
          "Adresse ohne korrekte Hausnummer oder mit Postfach.",
          "Veraltete Telefonnummern, die niemand mehr abnimmt.",
          "Ignorierte Bewertungen – auch positive wirken, wenn man sich bedankt.",
        ],
      },
    ],
  },
  {
    slug: "branchenverzeichnisse-ostalbkreis-2026",
    title:
      "Branchenverzeichnisse 2026: Wo sich Unternehmen aus dem Ostalbkreis kostenlos eintragen sollten",
    category: "Lokale SEO",
    date: "25. April 2026",
    dateIso: "2026-04-25",
    readingTime: "5 min",
    excerpt:
      "Nicht jedes Branchenverzeichnis lohnt sich. Welche Plattformen für Unternehmen aus Schwäbisch Gmünd und dem Ostalbkreis 2026 wirklich Trust-Signale an Google senden – und welche Zeitfresser sind.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Branchenverzeichnisse sind aus dem Web nie verschwunden – aber ihre Wirkung hat sich verschoben. Heute zählt weniger die schiere Zahl der Einträge, sondern die Konsistenz und Qualität der Quellen. Drei bis fünf gut gepflegte Profile bringen mehr als 30 schludrige.",
      },
      { type: "heading", content: "Plattformen mit echtem Wert" },
      {
        type: "list",
        items: [
          "gd-listen.de – kuratierte Top-10-Listen für Schwäbisch Gmünd, hohe lokale Relevanz.",
          "GelbeSeiten und Das Örtliche – etabliert, gut indexiert, in der Region weiterhin verbreitet.",
          "11880, Cylex, GoYellow – sinnvoll als zusätzliche Verzeichnisse, wenn Daten konsistent gepflegt werden.",
          "Industrie- und Handelskammer Ostwürttemberg – seriöse Quelle für B2B-Sichtbarkeit.",
          "Branchenspezifische Verzeichnisse: Handwerkskammer, Berufsverbände, Innungen.",
        ],
      },
      { type: "heading", content: "Plattformen, die Zeit fressen, ohne zu bringen" },
      {
        type: "paragraph",
        content:
          "Generische Internationale Verzeichnisse, Eintragsdienste, die hundert Listings gegen einmalige Bezahlung versprechen, oder dubiose Bewertungsportale ohne lokale Relevanz – die meisten dieser Angebote haben keinerlei messbare SEO-Wirkung. Lieber wenige Plattformen, dafür mit identischen Angaben überall.",
      },
      { type: "heading", content: "Was vor jedem Eintrag gelten muss" },
      {
        type: "list",
        items: [
          "Firmenname identisch wie im Impressum.",
          "Adresse mit korrekter Schreibweise (Straße, Hausnummer, PLZ, Stadt).",
          "Telefonnummer im einheitlichen Format.",
          "Website-URL mit https:// und www.",
        ],
      },
    ],
  },
  {
    slug: "lokale-bewertungen-schwaebisch-gmuend",
    title:
      "Lokale Bewertungen aufbauen: Welche Plattformen für Schwäbisch Gmünd wirklich zählen",
    category: "Lokale SEO",
    date: "25. April 2026",
    dateIso: "2026-04-25",
    readingTime: "5 min",
    excerpt:
      "Bewertungen sind das wirksamste Trust-Signal lokaler Sichtbarkeit. Wo sie für Schwäbisch Gmünder Betriebe wirklich gelesen werden, wie man sie sauber aufbaut und welche Fehler die meisten machen.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Wer einen Anbieter in Schwäbisch Gmünd vergleicht, schaut nicht nur auf die Sterne – sondern auch darauf, wie der Anbieter mit Bewertungen umgeht. Eine 4,2-Bewertung mit gutem Antwortverhalten wirkt stärker als eine 4,9 ohne jede Reaktion.",
      },
      { type: "heading", content: "Welche Plattformen wirklich zählen" },
      {
        type: "list",
        items: [
          "Google Business Profile – mit Abstand die wichtigste Quelle, fließt direkt ins lokale Ranking ein.",
          "Branchenspezifisch: ProvenExpert für Beratung und Dienstleistung, Trustpilot vor allem für Online-Geschäfte.",
          "Plattformen für Gastronomie und Tourismus: TripAdvisor, OpenTable, Booking.com.",
          "Berufsverbände: Handwerkskammer-Plattformen, ärzteverbände-Plattformen.",
        ],
      },
      { type: "heading", content: "Wie man Bewertungen aktiv aufbaut" },
      {
        type: "list",
        items: [
          "Nach jedem abgeschlossenen Auftrag um eine kurze Bewertung bitten – per Mail mit Direktlink.",
          "Anlässe schaffen: Auftragsabschluss, Lieferung, Feedback-Meeting.",
          "Niemals Bewertungen kaufen oder Mitarbeiter zu Bewertungen zwingen – das fliegt schnell auf.",
          "Negative Bewertungen sachlich, freundlich, lösungsorientiert beantworten.",
        ],
      },
      { type: "heading", content: "Häufige Fehler" },
      {
        type: "paragraph",
        content:
          "Gar keine Antworten zu geben, schlechte Bewertungen löschen lassen zu wollen, oder gefälschte Bewertungen zu kaufen – jeder dieser Wege führt mittelfristig in Probleme. Glaubwürdiger und nachhaltiger ist die offene, ehrliche Reaktion auf Kritik.",
      },
      {
        type: "quote",
        content:
          "Eine schlechte Bewertung kostet weniger Vertrauen als eine fehlende Antwort.",
      },
    ],
  },
  {
    slug: "lokale-agentur-vs-stuttgart",
    title:
      "Lokale Agentur oder Stuttgarter Großagentur? Eine ehrliche Einordnung für Unternehmen im Ostalbkreis",
    category: "Markt & Vergleich",
    date: "25. April 2026",
    dateIso: "2026-04-25",
    readingTime: "5 min",
    excerpt:
      "Eine schnellere Antwort, ein günstigerer Preis, ein Ansprechpartner um die Ecke – oder doch das größere Team in Stuttgart? Wann sich was lohnt, ohne Pauschalurteil.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Mittelständler aus dem Ostalbkreis stehen oft vor der Wahl: Beauftrage ich eine etablierte Stuttgarter Agentur mit großem Team, oder einen kleineren Anbieter aus der Region? Beides hat seine Berechtigung – und beide Wege werden falsch gewählt, wenn das Profil nicht zur Anforderung passt.",
      },
      { type: "heading", content: "Wann eine Stuttgarter Großagentur sinnvoll ist" },
      {
        type: "list",
        items: [
          "Komplexe Projekte mit fünfstelligem Budget und mehreren Gewerken.",
          "Internationaler Anspruch, Mehrsprachigkeit, große Zielgruppen.",
          "Anforderungen, die viele Spezialisten gleichzeitig brauchen: SEO, Design, Texter, Frontend, Backend.",
          "Marken mit hoher Sichtbarkeit, bei denen Markenführung über alles geht.",
        ],
      },
      { type: "heading", content: "Wann eine lokale Agentur überlegen ist" },
      {
        type: "list",
        items: [
          "Mittelstand mit klarem Fokus, der einen Ansprechpartner statt Account-Manager-Pingpong will.",
          "Anforderungen, die regionale Marktkenntnis voraussetzen.",
          "Projekte, die schnelle Iterationen brauchen – kurze Wege, schnelle Entscheidungen.",
          "Budgetbewusste Vorhaben, bei denen Overhead-Kosten direkt sichtbar werden.",
        ],
      },
      { type: "heading", content: "Was selten genannt wird" },
      {
        type: "paragraph",
        content:
          "Die größten Probleme entstehen meistens nicht durch die Größe der Agentur, sondern durch unklare Erwartungen. Wer nicht weiß, was am Ende rauskommen soll, hat in jeder Konstellation Reibung. Wer es weiß, kann beides erfolgreich ansteuern – und wählt dann nach Profil, nicht nach Postleitzahl.",
      },
    ],
  },
  {
    slug: "webagentur-it-werbeagentur-unterschied",
    title:
      "Webagentur, IT-Dienstleister, Werbeagentur: Wer macht was in Schwäbisch Gmünd",
    category: "Markt & Vergleich",
    date: "25. April 2026",
    dateIso: "2026-04-25",
    readingTime: "5 min",
    excerpt:
      "Die Begriffe verschwimmen, die Anbieter überschneiden sich, die Kunden suchen oft den Falschen. Eine klare Einordnung der drei Kategorien – und wo Schnittmengen entstehen.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Wer in Schwäbisch Gmünd einen Anbieter sucht, stolpert schnell über überlappende Begriffe. Webagentur, IT-Dienstleister, Werbeagentur, Digitalagentur – die Übergänge sind fließend, aber nicht beliebig. Drei Kernprofile, drei unterschiedliche Stärken.",
      },
      { type: "heading", content: "Webagentur" },
      {
        type: "paragraph",
        content:
          "Schwerpunkt: Konzeption, Design und Umsetzung von Websites. Stärke meist in UX, Frontend, Conversion-Optimierung. Web-Agenturen sind oft eher gestalterisch geprägt, mit Schwerpunkt auf Kundenkommunikation und visueller Identität.",
      },
      { type: "heading", content: "IT-Dienstleister" },
      {
        type: "paragraph",
        content:
          "Schwerpunkt: Hardware, Netzwerk, Infrastruktur, Wartung von Servern und PCs. Klassische IT-Dienstleister kommen aus dem Systemhaus-Bereich und sind die richtige Adresse, wenn es um Serverbetrieb, Backups oder Office-Setup geht.",
      },
      { type: "heading", content: "Werbeagentur" },
      {
        type: "paragraph",
        content:
          "Schwerpunkt: klassische und digitale Werbung – Anzeigen, Plakate, Kampagnen, Markenführung. Werbeagenturen denken oft kampagnengetrieben und arbeiten häufig mit größeren Werbebudgets in Print, Out-of-Home und Online-Werbung.",
      },
      { type: "heading", content: "Wo die Grenzen verschwimmen" },
      {
        type: "paragraph",
        content:
          "Digitalagenturen wie Nesani sitzen genau in der Mitte: Web-Entwicklung mit Architektur-Tiefe, KI-Integration und Automatisierung. Wer eine Website plus angeschlossene Prozesse will, ist hier oft besser aufgehoben als bei klassischen Vertretern eines der drei Profile. Wer Plakate für eine Stadtfest-Kampagne braucht, sicher nicht.",
      },
    ],
  },
  {
    slug: "mythen-webagenturen-schwaebisch-gmuend",
    title:
      "Drei Mythen über Webagenturen aus Schwäbisch Gmünd – und was wirklich stimmt",
    category: "Markt & Vergleich",
    date: "25. April 2026",
    dateIso: "2026-04-25",
    readingTime: "4 min",
    excerpt:
      "Lokal, deshalb teurer? Kleine Agentur, deshalb weniger Qualität? Stuttgart, deshalb professioneller? Drei Annahmen, die sich in der Praxis selten bestätigen.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Rund um regionale Webagenturen halten sich ein paar Annahmen, die selbst in 2026 noch häufig auftauchen. Drei davon lohnt sich kurz zu sortieren – nicht aus Eigenwerbung, sondern weil sie Auftragsentscheidungen verzerren.",
      },
      { type: "heading", content: "Mythos 1: Lokale Agenturen sind teurer als Online-Anbieter" },
      {
        type: "paragraph",
        content:
          "Stimmt selten. Lokale Anbieter haben oft schlankere Strukturen als spezialisierte Online-Marktplätze, und die Mehrkosten in Stuttgart oder München sind eher Overhead-bedingt. Was mehr kostet, ist Komplexität, nicht Postleitzahl.",
      },
      { type: "heading", content: "Mythos 2: Kleine Agentur, kleine Qualität" },
      {
        type: "paragraph",
        content:
          "Die Qualität hängt am einzelnen Bearbeiter, nicht an der Mitarbeiterzahl. Eine spezialisierte kleine Agentur liefert in ihrem Fokus oft präziser als ein 30-Personen-Generalist. Entscheidend ist, ob die jeweilige Kompetenz wirklich am Projekt arbeitet – nicht der Junior, der eingelernt wird.",
      },
      { type: "heading", content: "Mythos 3: Stuttgarter Agenturen sind automatisch professioneller" },
      {
        type: "paragraph",
        content:
          "Auch das ist Postleitzahl-Magie. Professionalität entsteht durch Prozesse, Klarheit, Dokumentation und Erreichbarkeit – nicht durch das Bürofoto vor Stuttgarter Skyline. Fragen Sie sich vor jeder Beauftragung: Wer arbeitet konkret an meinem Projekt, und wie kann ich diese Person nach dem Launch erreichen?",
      },
      {
        type: "quote",
        content:
          "Der wichtigste Faktor in Webprojekten ist Verbindlichkeit – die hat keine Postleitzahl.",
      },
    ],
  },
  {
    slug: "designstadt-schwaebisch-gmuend-hfg",
    title:
      "Designstadt Schwäbisch Gmünd: Was die HfG-Tradition für moderne Webentwicklung bedeutet",
    category: "Standort",
    date: "25. April 2026",
    dateIso: "2026-04-25",
    readingTime: "5 min",
    excerpt:
      "Die Hochschule für Gestaltung Schwäbisch Gmünd prägt die Stadt seit Jahrzehnten. Was diese Designtradition für moderne Webentwicklung bedeutet – und warum sie mehr als ein Werbespruch ist.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Die Hochschule für Gestaltung Schwäbisch Gmünd (HfG) ist eine der ältesten Designhochschulen Deutschlands. Sie hat über Jahrzehnte ein gestalterisches Niveau in die Stadt gebracht, das in der Region selbstverständlich geworden ist. Wer hier aufwächst oder arbeitet, hat einen anderen Blick auf Form, Struktur und Klarheit.",
      },
      { type: "heading", content: "Was Designstadt konkret bedeutet" },
      {
        type: "paragraph",
        content:
          "Eine HfG-geprägte Designkultur ist nicht laut. Sie äußert sich in einem hohen Anspruch an Lesbarkeit, Reduktion, Funktion und Konsequenz. Das ist genau das Gegenteil von verspielter Buntheit, die in vielen lokalen Auftritten anderer Regionen dominiert.",
      },
      { type: "heading", content: "Übertragung auf moderne Webentwicklung" },
      {
        type: "list",
        items: [
          "Saubere Typografie schlägt visuelle Effekte.",
          "Reduzierte Farbpalette schlägt zehn Farbverläufe.",
          "Klare Informationsarchitektur schlägt animierte Übersicht ohne Inhalt.",
          "Konsistente Komponenten schlagen Einzelfall-Layouts.",
        ],
      },
      { type: "heading", content: "Warum das ein Wettbewerbsvorteil ist" },
      {
        type: "paragraph",
        content:
          "Websites, die aus einem Designstadt-Verständnis heraus entstehen, halten oft länger und altern besser. Das ist kein lokales Klischee, sondern eine kulturelle Prägung, die sich in der Arbeit zeigt – und in den Ergebnissen.",
      },
      {
        type: "quote",
        content:
          "Gutes Design ist so wenig Design wie möglich – ein Satz, der in Schwäbisch Gmünd nie aus der Mode gekommen ist.",
      },
    ],
  },
  {
    slug: "regional-verwurzelt-dach-raum",
    title:
      "Aus Schwäbisch Gmünd für den DACH-Raum: Warum regional verwurzelt heute kein Nachteil ist",
    category: "Standort",
    date: "25. April 2026",
    dateIso: "2026-04-25",
    readingTime: "4 min",
    excerpt:
      "Lokal heißt nicht klein. Was sich seit der Pandemie und der Reife digitaler Tools verschoben hat – und warum Anbieter aus dem Ostalbkreis heute mit denen aus Berlin und Hamburg auf Augenhöhe arbeiten.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Vor zehn Jahren war es ein Nachteil, in der Provinz zu sitzen. Kunden erwarteten zentrale Standorte, Termine vor Ort, persönliche Anwesenheit. Das hat sich grundlegend verschoben – nicht weil die Provinz aufgeholt hätte, sondern weil sich der Arbeitsmodus überall verändert hat.",
      },
      { type: "heading", content: "Was sich verändert hat" },
      {
        type: "paragraph",
        content:
          "Verteiltes Arbeiten ist Standard, Videokonferenzen sind professionell, Tools wie Linear, Notion und Figma machen Standortunterschiede irrelevant. Was zählt, ist Reaktionszeit, Klarheit und Lieferqualität – nicht die Bürostraße.",
      },
      { type: "heading", content: "Was regionale Verwurzelung leistet" },
      {
        type: "list",
        items: [
          "Verbindlichkeit: Wer in der Region lebt, ist nicht morgen in Berlin.",
          "Geringere Strukturkosten: weniger Overhead, mehr Wert für den Auftraggeber.",
          "Verständnis für regionale Märkte und Mentalitäten.",
          "Möglichkeit, persönlich vorbeizukommen, wenn es wirklich nötig ist.",
        ],
      },
      { type: "heading", content: "Was sich nicht ändert" },
      {
        type: "paragraph",
        content:
          "Qualität bleibt Qualität. Das eine schließt das andere nicht aus: Wer regional verwurzelt arbeitet, kann digital genauso anspruchsvoll liefern wie ein Anbieter aus Berlin – und in der Regel schneller, persönlicher und mit klareren Strukturen.",
      },
    ],
  },
  {
    slug: "warum-nesani-schwaebisch-gmuend",
    title:
      "Warum Nesani aus Schwäbisch Gmünd kommt – und nicht aus Stuttgart oder München",
    category: "Standort",
    date: "25. April 2026",
    dateIso: "2026-04-25",
    readingTime: "4 min",
    excerpt:
      "Eine bewusste Standortentscheidung in Zeiten, in denen alle nach Berlin oder München blicken. Drei Gründe, warum Schwäbisch Gmünd der richtige Ort für eine Digitalagentur ist – ohne Pathos.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Nesani ist bewusst in Schwäbisch Gmünd entstanden, nicht im nahen Stuttgart und nicht im sichtbareren München. Diese Entscheidung wird oft nachgefragt – und sie hat klare Gründe, die nichts mit Heimatverliebtheit zu tun haben.",
      },
      { type: "heading", content: "Drei Gründe für den Standort" },
      {
        type: "list",
        items: [
          "Klarere Wirtschaftsstrukturen: Mittelstand und Handwerk sind hier prägend, nicht der Konzern. Diese Nähe zur Realwirtschaft prägt, was wir bauen.",
          "Designkultur durch die Hochschule für Gestaltung: ein Niveau, das in der Region selbstverständlich, anderswo nicht.",
          "Geringerer Overhead: niedrigere Standortkosten heißen, mehr Wert pro investiertem Euro für unsere Kunden.",
        ],
      },
      { type: "heading", content: "Was wir damit nicht meinen" },
      {
        type: "paragraph",
        content:
          "Wir behaupten nicht, Stuttgart oder München seien schlechter. Wir behaupten, dass es für unsere Art zu arbeiten – mit Mittelstand, mit klarer Architektur, mit Verbindlichkeit – hier mehr Sinn ergibt. Und dass die Reichweite digital ohnehin nicht von der Postleitzahl abhängt.",
      },
      {
        type: "quote",
        content:
          "Wir wollen näher an unseren Kunden sein, nicht näher am Hype.",
      },
    ],
  },
  {
    slug: "digitalfoerderung-baden-wuerttemberg-2026",
    title:
      "Digitalförderung in Baden-Württemberg 2026: Welche Programme für Schwäbisch Gmünder Mittelständler relevant sind",
    category: "Förderung",
    date: "25. April 2026",
    dateIso: "2026-04-25",
    readingTime: "5 min",
    excerpt:
      "Förderprogramme ändern sich häufig. Welche Richtungen 2026 für Mittelständler und Handwerksbetriebe in Baden-Württemberg relevant sind und was vor jeder Antragstellung geklärt werden sollte.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Es gibt regelmäßig Bundes- und Landesprogramme zur Digitalisierung von Mittelstand und Handwerk. Die konkreten Modalitäten ändern sich häufig – Programme werden neu aufgelegt, Förderhöhen angepasst, Antragsfristen verschoben. Dieser Beitrag ist eine Orientierung, keine Rechts- oder Förderberatung.",
      },
      { type: "heading", content: "Förderrichtungen, die 2026 relevant sind" },
      {
        type: "list",
        items: [
          "Bundesweite Programme zur Digitalisierung von KMU – häufig mit Schwerpunkt auf konkreten Investitionen wie Software, Hardware oder Beratung.",
          "Landesförderung Baden-Württemberg über die L-Bank oder das Wirtschaftsministerium.",
          "Förderprogramme der Industrie- und Handelskammer Ostwürttemberg.",
          "EU-kofinanzierte Programme über ESF Plus für bestimmte Innovations- und Qualifizierungsthemen.",
        ],
      },
      { type: "heading", content: "Was vor der Antragstellung geklärt sein sollte" },
      {
        type: "list",
        items: [
          "Welches konkrete Investitionsvorhaben wird gefördert? Förderprogramme verlangen meist klare Maßnahmenpläne.",
          "Wer ist antragsberechtigt? Die Definition von KMU variiert.",
          "Wann darf das Projekt starten? Manche Programme verlangen Antragstellung vor jeder Beauftragung.",
          "Welcher Eigenanteil wird erwartet, und wie ist die Auszahlungslogik?",
        ],
      },
      { type: "heading", content: "Konkreter Hinweis" },
      {
        type: "paragraph",
        content:
          "Genaue Programmnamen, Höhen, Fristen und Bedingungen können sich seit Veröffentlichung dieses Beitrags geändert haben. Wir empfehlen vor jeder Entscheidung Rücksprache mit der IHK Ostwürttemberg, dem Steuerberater oder einer auf Fördermittel spezialisierten Beratungsstelle. Wir sind keine Fördermittelberater und übernehmen keine Gewähr für Aktualität oder Vollständigkeit.",
      },
    ],
  },
  {
    slug: "nextjs-astro-wordpress-stack-vergleich",
    title:
      "Next.js, Astro oder WordPress: Welcher Stack passt zu welchem Mittelstand?",
    category: "Websites",
    date: "25. April 2026",
    dateIso: "2026-04-25",
    readingTime: "6 min",
    excerpt:
      "Drei beliebte Web-Stacks – drei sehr unterschiedliche Profile. Wann sich Next.js wirklich lohnt, wo Astro punktet und warum WordPress trotz allem nicht tot ist.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Die Wahl des Web-Stacks ist selten eine technische Entscheidung allein – sie ist eine Entscheidung über Wartbarkeit, Geschwindigkeit, Kosten und langfristige Unabhängigkeit. Drei Stacks decken aktuell den Großteil ernsthafter Mittelstands-Websites ab: Next.js, Astro und WordPress.",
      },
      { type: "heading", content: "Next.js – wenn Performance und Logik zählen" },
      {
        type: "paragraph",
        content:
          "Next.js ist das React-Framework, das hinter sehr vielen modernen Websites steht. Stark bei dynamischen Inhalten, Integrationen, sehr guter Performance ab Werk und einer extrem aktiven Community. Schwächer bei reiner Inhaltspflege durch Nicht-Entwickler – ohne Headless-CMS landet die Redaktion schnell beim Code.",
      },
      { type: "heading", content: "Astro – wenn die Website primär Inhalt ist" },
      {
        type: "paragraph",
        content:
          "Astro liefert HTML, das fast komplett statisch ist und nur dort JavaScript lädt, wo wirklich Interaktion stattfindet. Ideal für Inhalts-getriebene Websites, Blogs und Dokumentationen. Kein React-Overhead, exzellente Lighthouse-Werte, einfaches Mental Model.",
      },
      { type: "heading", content: "WordPress – wenn Redaktion und Plugins entscheiden" },
      {
        type: "paragraph",
        content:
          "WordPress ist nicht tot, aber häufig falsch eingesetzt. Stark, wenn Mehrere Personen ohne Entwicklerkenntnisse Inhalte pflegen sollen oder ein E-Commerce-Plugin wie WooCommerce gefragt ist. Schwächer bei Performance, Sicherheit und langfristiger Codequalität.",
      },
      { type: "heading", content: "Faustregel zur Auswahl" },
      {
        type: "list",
        items: [
          "Hoher Anteil an dynamischen Funktionen, KI-Integration, individuelle Logik → Next.js.",
          "Reine Inhalts-/Marketing-Site mit Fokus auf Performance → Astro.",
          "Mehrere redaktionelle Stakeholder ohne Entwickler-Backup → WordPress mit gepflegter Architektur.",
        ],
      },
      {
        type: "quote",
        content:
          "Der beste Stack ist der, den das Team in zwei Jahren noch sinnvoll betreiben kann.",
      },
    ],
  },
  {
    slug: "conversion-orientierte-leistungsseiten",
    title:
      "Conversion-orientierte Leistungsseiten: Vier Bausteine, die jede Anfrage qualifizieren",
    category: "Websites",
    date: "25. April 2026",
    dateIso: "2026-04-25",
    readingTime: "5 min",
    excerpt:
      "Eine Leistungsseite ist mehr als eine schöne Beschreibung. Vier strukturelle Bausteine, die aus Besuchern qualifizierte Anfragen machen – ohne Verkaufsdruck.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Eine Leistungsseite hat eine einzige Aufgabe: einen Besucher mit einem konkreten Bedarf in eine qualifizierte Anfrage zu überführen. Das gelingt nicht über Hochglanz-Texte, sondern über vier strukturelle Bausteine, die meistens fehlen.",
      },
      { type: "heading", content: "Baustein 1: Klares Problemversprechen ganz oben" },
      {
        type: "paragraph",
        content:
          "Innerhalb von 5 Sekunden muss klar sein, welches Problem die Seite löst – nicht welches Produkt sie beschreibt. Eine Headline wie 'Websites, die Anfragen bringen' funktioniert besser als 'Professionelles Webdesign mit Liebe zum Detail'.",
      },
      { type: "heading", content: "Baustein 2: Sichtbarer Prozess" },
      {
        type: "paragraph",
        content:
          "Wer einen Anbieter beauftragen will, will wissen, was passiert. Eine Schritt-für-Schritt-Übersicht in drei bis fünf Phasen reduziert die Unsicherheit. Wichtig: Realistisch bleiben, keine Marketing-Phrasen ('Wir hören zu, wir gestalten, wir liefern' ist zu generisch).",
      },
      { type: "heading", content: "Baustein 3: Echte Referenzen oder Zitate" },
      {
        type: "paragraph",
        content:
          "Konkrete, nachprüfbare Hinweise schlagen jede Selbstbeschreibung. Wenige echte Stimmen mit Name, Funktion und Branche wirken stärker als zehn anonyme Sterne-Bewertungen.",
      },
      { type: "heading", content: "Baustein 4: Vorqualifizierte Kontaktstrecke" },
      {
        type: "list",
        items: [
          "Drei kurze Felder reichen oft: Name, Mail, Vorhaben in zwei Sätzen.",
          "Reaktionszeit-Versprechen ('Antwort innerhalb 24 Stunden') reduziert Absprung.",
          "Eine ehrliche 'Was wir nicht machen'-Liste qualifiziert vor.",
        ],
      },
      {
        type: "quote",
        content:
          "Eine gute Leistungsseite filtert in beide Richtungen – sie zieht passende Anfragen an und schreckt unpassende ab.",
      },
    ],
  },
  {
    slug: "headless-cms-2026-mittelstand",
    title:
      "Headless CMS in 2026: Wann Mittelständler tatsächlich profitieren – und wann nicht",
    category: "Websites",
    date: "25. April 2026",
    dateIso: "2026-04-25",
    readingTime: "5 min",
    excerpt:
      "Headless CMS ist die Standardantwort vieler Agenturen – aber nicht jede Mittelstandswebsite profitiert. Eine ehrliche Einordnung, ohne Hype.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Headless CMS – also die Trennung von Inhaltsverwaltung und Frontend-Auslieferung – ist seit Jahren in den Web-Diskussionen prominent. Sanity, Strapi, Contentful, Storyblok, Payload: die Optionen sind zahlreich. Trotzdem brauchen viele Mittelständler kein Headless CMS.",
      },
      { type: "heading", content: "Wann ein Headless CMS sich wirklich lohnt" },
      {
        type: "list",
        items: [
          "Mehrere Frontends greifen auf dieselben Inhalte zu (Web, App, Newsletter).",
          "Mehrsprachigkeit mit komplexer Übersetzungs-Workflow.",
          "Ein größeres redaktionelles Team mit Rollen und Freigabeprozessen.",
          "Inhalte werden außerhalb des Webs auch maschinell weiterverwendet.",
        ],
      },
      { type: "heading", content: "Wann es nur Komplexität ohne Nutzen bringt" },
      {
        type: "paragraph",
        content:
          "Eine klassische Mittelstands-Website mit 5 bis 15 Seiten, einer Person für die Inhaltspflege und keinerlei App-Anbindung braucht kein Headless CMS. Der Setup-Aufwand, die Wartung, das zweite Login, die Wissensaufteilung – das alles bringt operativ nichts ein, wenn der Use-Case ein Editor und eine Seite sind.",
      },
      { type: "heading", content: "Pragmatische Alternativen" },
      {
        type: "paragraph",
        content:
          "Markdown-Dateien im Repo plus saubere Architektur reichen für viele Mittelstands-Websites. Wer dennoch Komfort möchte, kann mit einem Lite-CMS oder einer kleinen Admin-Oberfläche arbeiten – ohne den vollen Headless-Stack zu installieren.",
      },
    ],
  },
  {
    slug: "wie-viel-inhalt-mittelstandswebsite",
    title:
      "Wie viel Inhalt braucht eine Mittelstandswebsite? Der 3-Seiten-Mythos",
    category: "Websites",
    date: "25. April 2026",
    dateIso: "2026-04-25",
    readingTime: "4 min",
    excerpt:
      "Drei Seiten? Dreißig? Drei pro Leistung? Eine ehrliche Einordnung, wie viel Inhalt 2026 wirklich gebraucht wird – ohne Padding und ohne Marketing-Floskeln.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Die alte Faustregel 'Drei Seiten reichen für Mittelständler' stimmt 2026 nicht mehr. Aber das Gegenteil – möglichst viele Seiten für SEO – stimmt auch nicht. Es kommt auf die Substanz an, nicht auf die Anzahl.",
      },
      { type: "heading", content: "Was unbedingt eigene Seiten verdient" },
      {
        type: "list",
        items: [
          "Jede Kernleistung mit klarem Suchvolumen-Profil.",
          "Eine echte Über-uns-Seite, die mehr ist als Stockfoto und drei Sätze.",
          "Eine Kontaktseite mit klarem Anfrage-Prozess.",
          "Ein Blog-Bereich für fachliche Tiefe und Suchanfragen jenseits der Markenkeywords.",
          "Pflicht: Impressum und Datenschutz.",
        ],
      },
      { type: "heading", content: "Was selten zusätzliche Seiten braucht" },
      {
        type: "paragraph",
        content:
          "Künstliche Spaltung von Themen führt zu dünnen Seiten und schwacher Autorität. 'Über uns', 'Unsere Werte', 'Unsere Vision', 'Unsere Geschichte' als vier Einzelseiten ist klassisches Padding – Google bewertet sowas eher kritisch.",
      },
      { type: "heading", content: "Die richtige Frage" },
      {
        type: "paragraph",
        content:
          "Statt 'Wie viele Seiten brauche ich?' lohnt es sich zu fragen: 'Welche Suchanfragen hat meine Zielgruppe – und für welche habe ich substanziellen Inhalt?' Daraus ergibt sich die richtige Anzahl, oft zwischen 8 und 25.",
      },
    ],
  },
  {
    slug: "mobile-reality-2026",
    title:
      "Mobile First ist nicht mehr genug – was Mobile Reality 2026 bedeutet",
    category: "Websites",
    date: "25. April 2026",
    dateIso: "2026-04-25",
    readingTime: "4 min",
    excerpt:
      "Mobile First ist seit zehn Jahren Best Practice. 2026 reicht das nicht mehr. Was sich verschoben hat – und was Mittelständler bei jeder neuen Website beachten sollten.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Mobile First war die Antwort auf die Smartphone-Revolution: Designe zuerst für die kleine Bildschirmgröße, danach skalierst du nach oben. Heute reicht das nicht mehr. Die Realität auf mobilen Geräten ist komplexer als die Größe des Bildschirms.",
      },
      { type: "heading", content: "Was Mobile Reality 2026 ausmacht" },
      {
        type: "list",
        items: [
          "Variable Netzqualität: 5G in der Stadt, 3G im Pendlerzug – die Website muss überall funktionieren.",
          "Touch-Targets, die fingerfreundlich sind, auch bei kleinen Bildschirmen.",
          "Energieeffizienz: aufwendige Animationen verkürzen die Akkulaufzeit, wenn sie unkontrolliert laufen.",
          "Kontextspezifisches Verhalten: ein Restaurant-Besucher abends will Reservierung, kein Imagefilm.",
        ],
      },
      { type: "heading", content: "Was zu prüfen ist" },
      {
        type: "list",
        items: [
          "Performance auf einer simulierten 4G-Verbindung, nicht im WLAN.",
          "Lesbarkeit ohne Zoom auch bei kleinen Schriften.",
          "Anrufe und Mails aus der Website sollten mit einem Tap funktionieren.",
          "Layout-Shifts während des Ladens vermeiden – Cumulative Layout Shift bleibt eine zentrale Metrik.",
        ],
      },
    ],
  },
  {
    slug: "technische-seo-2026",
    title:
      "Technische SEO 2026: Welche Hebel heute wirklich Wirkung zeigen",
    category: "SEO",
    date: "25. April 2026",
    dateIso: "2026-04-25",
    readingTime: "6 min",
    excerpt:
      "Technische SEO hat sich in den letzten Jahren stark verschoben. Was 2026 Pflichtprogramm ist, was zur Kür gehört – und welche Hebel überschätzt werden.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Technische SEO war früher gleichbedeutend mit Meta-Tags, Sitemap und ein paar serverseitigen Tricks. 2026 ist die Disziplin breiter geworden – und gleichzeitig wieder pragmatischer. Drei Bereiche zählen wirklich.",
      },
      { type: "heading", content: "Pflichtprogramm: Foundation" },
      {
        type: "list",
        items: [
          "HTTPS überall, mit gültigem Zertifikat und korrekten Redirects.",
          "Saubere URL-Struktur ohne überflüssige Parameter.",
          "Korrekte canonical-Tags – jede Seite verweist auf ihre eigene URL.",
          "robots.txt und sitemap.xml gepflegt und in der Search Console eingereicht.",
          "Mobile Usability ohne kritische Fehler.",
        ],
      },
      { type: "heading", content: "Wichtig: Performance" },
      {
        type: "paragraph",
        content:
          "Core Web Vitals sind kein Ranking-Wundermittel, aber sie sind ein klares Signal. LCP unter 2,5 Sekunden, CLS unter 0,1, INP unter 200 Millisekunden. Wer diese Werte erreicht, hat einen messbaren Vorteil gegenüber Anbietern, die sich auf Optik konzentriert haben.",
      },
      { type: "heading", content: "Aufkommend: Strukturierte Daten" },
      {
        type: "paragraph",
        content:
          "JSON-LD wird wichtiger, nicht nur für Rich Results, sondern für KI-Suchmaschinen. Organization, LocalBusiness, BlogPosting, BreadcrumbList und Service sind die Schemas, die für Mittelständler den größten Hebel bringen.",
      },
      { type: "heading", content: "Überschätzt" },
      {
        type: "list",
        items: [
          "Keyword-Density als Stellschraube – Google rechnet längst anders.",
          "Massen-Linkbuilding aus Verzeichnissen.",
          "Mikro-Optimierungen an Meta-Descriptions, wenn die Substanz fehlt.",
        ],
      },
    ],
  },
  {
    slug: "core-web-vitals-2026",
    title:
      "Core Web Vitals nach 2025: Was sich für Mittelständler geändert hat",
    category: "SEO",
    date: "25. April 2026",
    dateIso: "2026-04-25",
    readingTime: "5 min",
    excerpt:
      "INP hat FID 2024 abgelöst, die Schwellenwerte werden härter. Was Mittelständler 2026 zu Core Web Vitals wissen müssen – ohne Tech-Jargon.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Core Web Vitals sind drei Messwerte, mit denen Google die wahrgenommene Qualität einer Website beurteilt: wie schnell sie lädt, wie reaktiv sie wirkt, wie stabil sie sich aufbaut. Seit März 2024 hat INP den älteren FID-Messwert abgelöst – das hat viele Websites kalt erwischt.",
      },
      { type: "heading", content: "Die drei Messwerte heute" },
      {
        type: "list",
        items: [
          "LCP (Largest Contentful Paint) – wie schnell das größte Element sichtbar ist. Ziel: unter 2,5 Sekunden.",
          "INP (Interaction to Next Paint) – wie schnell die Seite auf Klicks oder Eingaben reagiert. Ziel: unter 200 Millisekunden.",
          "CLS (Cumulative Layout Shift) – wie stabil das Layout während des Ladens ist. Ziel: unter 0,1.",
        ],
      },
      { type: "heading", content: "Wo Mittelständler typisch scheitern" },
      {
        type: "paragraph",
        content:
          "Schlechtes LCP liegt fast immer an unkomprimierten Hero-Bildern. Schlechtes INP an überladenen JavaScript-Bundles, oft durch Tracking- und Plugin-Wirrwarr. Schlechtes CLS an spät geladenen Webfonts oder Bildern ohne festgelegte Größen.",
      },
      { type: "heading", content: "Drei Quick-Wins" },
      {
        type: "list",
        items: [
          "Hero-Bild als WebP/AVIF, mit width/height und priority eingebunden.",
          "Tracking-Skripte und Plugins regelmäßig ausmisten – jeder Schnipsel kostet INP.",
          "Webfonts mit font-display: swap und vorgewählten Fallbacks einbinden.",
        ],
      },
      {
        type: "quote",
        content:
          "Die Core Web Vitals sind kein Ranking-Wundermittel – aber sie sind das ehrlichste Frühwarnsystem für eine technisch verschleppte Website.",
      },
    ],
  },
  {
    slug: "strukturierte-daten-json-ld",
    title:
      "Strukturierte Daten richtig einsetzen: Vom JSON-LD zum Rich Result",
    category: "SEO",
    date: "25. April 2026",
    dateIso: "2026-04-25",
    readingTime: "6 min",
    excerpt:
      "JSON-LD ist Pflichtprogramm für moderne Websites – aber die meisten Implementierungen sind Stückwerk. Welche Schemas wirklich Wirkung zeigen und wie man sie sauber einsetzt.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Strukturierte Daten sind das Format, in dem eine Website Suchmaschinen und KI-Modellen sagt, was eine Seite konkret ist. Statt nur Text zu liefern, deklariert man: Das hier ist ein Unternehmen mit dieser Adresse, das hier ist ein Blogartikel von diesem Autor, das hier ist eine Dienstleistung mit diesem Anbieter. JSON-LD ist das empfohlene Format, weil es im head separat platziert wird und nicht den Inhalt verschmutzt.",
      },
      { type: "heading", content: "Schemas mit hohem Hebel für Mittelständler" },
      {
        type: "list",
        items: [
          "Organization oder LocalBusiness – Pflicht für jede Unternehmenswebsite.",
          "Service – pro Leistungsseite, mit Beschreibung und Anbieter-Verknüpfung.",
          "BlogPosting bzw. Article – pro Blogartikel, mit Autor, Datum und Bild.",
          "BreadcrumbList – verbessert Navigation in den Suchergebnissen.",
          "FAQPage – wenn Frage-Antwort-Blöcke vorhanden sind.",
          "Review oder AggregateRating – nur, wenn echte Bewertungen vorliegen.",
        ],
      },
      { type: "heading", content: "Häufige Fehler" },
      {
        type: "list",
        items: [
          "Schema, das nicht zur Seite passt – z. B. Product-Schema auf einer Service-Seite.",
          "Felder mit falschen Datenformaten – Datum als String statt ISO-8601.",
          "Mehrere widersprüchliche Schemas auf derselben Seite.",
          "AggregateRating ohne reale Bewertungsbasis – verstößt gegen Google-Richtlinien.",
        ],
      },
      { type: "heading", content: "Verifikation" },
      {
        type: "paragraph",
        content:
          "Google bietet das Rich Results Tool an, das Schemas in Echtzeit prüft. Wer mehrere Schemas einsetzt, sollte zusätzlich den Schema.org-Validator verwenden – der ist strenger und findet Probleme, die das Google-Tool durchwinkt.",
      },
    ],
  },
  {
    slug: "content-cluster-aufbauen",
    title:
      "Content-Cluster bauen: Wie thematische Tiefe Ranking-Sprünge auslöst",
    category: "SEO",
    date: "25. April 2026",
    dateIso: "2026-04-25",
    readingTime: "6 min",
    excerpt:
      "Einzelne Blogartikel ranken selten dauerhaft. Content-Cluster – also thematisch verknüpfte Artikelgruppen mit Hub-Seite – sind 2026 die wirksamste SEO-Architektur.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Ein einzelner gut geschriebener Blogpost rankt selten langfristig stabil – Google bewertet inzwischen das Themenfeld einer Website. Wer zu einem Thema zwanzig substanzielle Artikel veröffentlicht, signalisiert Autorität, die einzelne Artikel niemals erreichen.",
      },
      { type: "heading", content: "Was ein Cluster ist" },
      {
        type: "paragraph",
        content:
          "Ein Cluster besteht aus einer zentralen Hub-Seite zum übergeordneten Thema und mehreren detaillierten Artikeln zu Unterthemen. Alle verlinken untereinander – die Hub-Seite verlinkt zu allen Artikeln, jeder Artikel zur Hub-Seite. Das erzeugt eine deutliche thematische Architektur.",
      },
      { type: "heading", content: "Beispiel" },
      {
        type: "list",
        items: [
          "Hub: Lokale SEO für Schwäbisch Gmünd.",
          "Sub: Google Business Profile für Schwäbisch Gmünd.",
          "Sub: Branchenverzeichnisse im Ostalbkreis.",
          "Sub: Lokale Bewertungen aufbauen.",
          "Alle Subs verlinken zurück zum Hub, der Hub bündelt sie.",
        ],
      },
      { type: "heading", content: "Was beim Aufbau zählt" },
      {
        type: "list",
        items: [
          "Klare Hub-Seite mit Übersicht und Verlinkung zu allen Cluster-Artikeln.",
          "Subartikel mit echter Substanz, nicht oberflächliche Wiederholungen.",
          "Konsistente interne Links – jeder Artikel führt zurück zum Hub.",
          "Über die Zeit stetig erweitern – Cluster zeigen Wirkung nach 6 bis 12 Monaten.",
        ],
      },
      {
        type: "quote",
        content:
          "Einzelne Artikel ranken auf Glück. Cluster ranken auf System.",
      },
    ],
  },
  {
    slug: "internal-linking-architektur",
    title:
      "Internal Linking: Die unsichtbare Architektur erfolgreicher Websites",
    category: "SEO",
    date: "25. April 2026",
    dateIso: "2026-04-25",
    readingTime: "5 min",
    excerpt:
      "Externe Backlinks bekommen die Aufmerksamkeit, interne Links bekommen das Ranking. Wie eine bewusste Verlinkungsarchitektur Suchmaschinen zeigt, was wirklich wichtig ist.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Interne Verlinkung ist eines der unterschätztesten SEO-Werkzeuge. Sie verteilt Autorität innerhalb der Website, signalisiert thematische Schwerpunkte und hilft Google beim Crawlen. Trotzdem entstehen die meisten internen Links zufällig statt strategisch.",
      },
      { type: "heading", content: "Drei Prinzipien" },
      {
        type: "list",
        items: [
          "Wichtige Seiten bekommen mehr eingehende Links als unwichtige.",
          "Anchor-Texte beschreiben das Linkziel – kein 'hier klicken' oder 'mehr erfahren'.",
          "Jede neue Seite wird in mindestens drei bestehende Seiten eingebunden.",
        ],
      },
      { type: "heading", content: "Häufige Fehler" },
      {
        type: "list",
        items: [
          "Hauptnavigation als einzige interne Verlinkung.",
          "Wichtigste Leistungsseiten haben weniger Links als der Datenschutz.",
          "Verwaiste Seiten – nirgendwo verlinkt, nur über die Sitemap auffindbar.",
          "Zu viele Links pro Seite – ab 100 internen Links wird der Effekt verwässert.",
        ],
      },
      { type: "heading", content: "Pragmatischer Workflow" },
      {
        type: "paragraph",
        content:
          "Vor jedem neuen Beitrag eine kurze Suche: Welche bestehenden Inhalte passen thematisch? Mindestens drei davon im neuen Artikel verlinken, und in mindestens zwei dieser bestehenden Artikel einen Link zum neuen einbauen. Das ist mühsam, aber wirksam.",
      },
    ],
  },
  {
    slug: "seo-audit-checkliste",
    title:
      "SEO-Audit selbst durchführen: Eine Checkliste in 30 Minuten",
    category: "SEO",
    date: "25. April 2026",
    dateIso: "2026-04-25",
    readingTime: "5 min",
    excerpt:
      "Ein vollständiges SEO-Audit kostet leicht vierstellig. Eine ehrliche Selbst-Prüfung in 30 Minuten findet 80 % der typischen Probleme – ohne Tool-Abo.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Ein professionelles SEO-Audit hat seinen Wert – aber für die ersten Aufräumarbeiten reicht eine strukturierte Selbst-Prüfung. Diese Checkliste deckt die wichtigsten Punkte ab, die auf einer Mittelstandswebsite typisch problematisch sind.",
      },
      { type: "heading", content: "Crawling und Indexierung (10 min)" },
      {
        type: "list",
        items: [
          "robots.txt aufrufen: Erreichbar? Keine wichtigen Pfade gesperrt?",
          "sitemap.xml aufrufen: Aktuell? Alle wichtigen Seiten enthalten?",
          "Search Console: Anzahl indexierter Seiten plausibel?",
          "Per site:domain.de in Google: Sind die wichtigsten Seiten gelistet?",
        ],
      },
      { type: "heading", content: "On-Page-Grundlagen (10 min)" },
      {
        type: "list",
        items: [
          "Hat jede wichtige Seite einen einzigartigen Title und Description?",
          "Heading-Struktur (H1 einmal, H2/H3 logisch verschachtelt)?",
          "Bilder mit alt-Text und sinnvollen Dateinamen?",
          "Canonical-Tags vorhanden und korrekt?",
        ],
      },
      { type: "heading", content: "Performance und Mobile (10 min)" },
      {
        type: "list",
        items: [
          "Pagespeed Insights für Homepage und 2-3 wichtige Unterseiten – Werte über 80?",
          "Core Web Vitals im Search-Console-Bericht überwiegend grün?",
          "Auf dem Smartphone alle Inhalte gut lesbar, Touch-Targets groß genug?",
          "Mobiles Menü funktioniert in der Praxis?",
        ],
      },
      { type: "heading", content: "Wann externe Hilfe sinnvoll ist" },
      {
        type: "paragraph",
        content:
          "Wenn diese 30 Minuten viele rote Punkte aufdecken – und wenn die Website wirtschaftlich relevant ist – lohnt sich danach ein professionelles Audit, das tiefer in Technik, Content und Wettbewerb einsteigt.",
      },
    ],
  },
  {
    slug: "long-tail-seo-dienstleister",
    title:
      "Long-Tail-SEO für Dienstleister: Die ehrliche Anleitung",
    category: "SEO",
    date: "25. April 2026",
    dateIso: "2026-04-25",
    readingTime: "5 min",
    excerpt:
      "Konkurrenz auf den Hauptbegriffen ist oft erdrückend. Long-Tail-Keywords sind der realistische Weg für mittelständische Dienstleister – mit klarem Fokus statt Massenstrategie.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Auf 'Webdesign Stuttgart' gegen 50 etablierte Anbieter zu kämpfen ist als kleiner Mittelständler verlorene Zeit. Long-Tail-Keywords – also längere, spezifischere Suchanfragen – sind der pragmatische Weg, sichtbar zu werden, wo die Konkurrenz dünner ist.",
      },
      { type: "heading", content: "Was ein gutes Long-Tail-Keyword ist" },
      {
        type: "list",
        items: [
          "Drei oder mehr Wörter, oft eine konkrete Frage.",
          "Klare Suchintention erkennbar (Informieren, Vergleichen, Kaufen).",
          "Suchvolumen niedrig, aber konstant.",
          "Zielgruppe schon weit im Entscheidungsprozess.",
        ],
      },
      { type: "heading", content: "Beispiele für Dienstleister" },
      {
        type: "list",
        items: [
          "Statt 'Webagentur' – 'Webagentur für Handwerksbetriebe Schwäbisch Gmünd'.",
          "Statt 'KI-Beratung' – 'KI-Workflow für Familienbetrieb'.",
          "Statt 'Steuerberater' – 'Steuerberater für freiberufliche Designer Stuttgart'.",
        ],
      },
      { type: "heading", content: "Wie man sie findet" },
      {
        type: "list",
        items: [
          "Google-Autocomplete: Typischen Begriff eintippen und Vorschläge sammeln.",
          "Bereich 'Verwandte Suchanfragen' am Ende der Google-Ergebnisse.",
          "AnswerThePublic, Search Console-Berichte, eigene Kundenfragen.",
          "Wettbewerber-Inhalte: Welche spezifischen Themen behandeln sie?",
        ],
      },
      {
        type: "quote",
        content:
          "Zehn Long-Tail-Keywords mit jeweils 50 Suchen im Monat schlagen ein einziges Hauptkeyword, an dem man nie rankt.",
      },
    ],
  },
  {
    slug: "page-speed-optimierung-praxis",
    title:
      "Page-Speed-Optimierung: 5 technische Hebel jenseits der Bildoptimierung",
    category: "SEO",
    date: "25. April 2026",
    dateIso: "2026-04-25",
    readingTime: "5 min",
    excerpt:
      "Bildoptimierung ist nur die offensichtliche Page-Speed-Maßnahme. Fünf weniger bekannte Hebel, die bei Mittelstands-Websites oft den größten Sprung bringen.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Page-Speed-Optimierung beginnt fast immer bei den Bildern – zu Recht. Aber wer dort fertig ist, lässt oft noch deutliches Potenzial liegen. Fünf technische Hebel, die für Mittelstands-Websites typisch unterausgenutzt sind.",
      },
      { type: "heading", content: "1. Webfont-Strategie überarbeiten" },
      {
        type: "paragraph",
        content:
          "Drei verschiedene Webfonts mit jeweils vier Schnitten ergeben zwölf Dateien – und blockieren das initiale Rendering. Lösung: Auf maximal zwei Schriften reduzieren, font-display: swap setzen, Fallback-Fonts vorab passend skalieren.",
      },
      { type: "heading", content: "2. Tracking-Skripte konsolidieren" },
      {
        type: "paragraph",
        content:
          "Google Analytics, Tag Manager, Facebook Pixel, Hotjar, Cookie-Banner-Skript: jedes davon kostet Performance. Welche tatsächlich genutzt werden? Welche lassen sich serverside einbauen? Oft halbiert sich der JavaScript-Footprint allein durch das Aufräumen alter Tracker.",
      },
      { type: "heading", content: "3. Render-blocking CSS reduzieren" },
      {
        type: "paragraph",
        content:
          "Riesige globale Stylesheets blockieren das First Paint. Critical-CSS-Inlining oder ein moderner Build-Prozess mit echtem Code-Splitting bringen messbare Verbesserung. Tailwind in Verbindung mit Tree-Shaking erzeugt typischerweise CSS unter 30 KB.",
      },
      { type: "heading", content: "4. JavaScript-Bundling überprüfen" },
      {
        type: "paragraph",
        content:
          "Viele Mittelstands-Websites laden 500 KB JavaScript für Funktionen, die 50 KB benötigen würden. Bundle-Analyse macht sichtbar, welche Bibliotheken den größten Anteil haben – und welche entfernt oder ersetzt werden können.",
      },
      { type: "heading", content: "5. Caching und Preloading nutzen" },
      {
        type: "list",
        items: [
          "HTTP-Cache-Header für statische Assets auf 1 Jahr setzen.",
          "rel='preload' für kritische Ressourcen wie Schriften und Hero-Bild.",
          "rel='preconnect' für Drittanbieter-Domains, die früh geladen werden.",
        ],
      },
    ],
  },
  {
    slug: "llm-optimierung-grundlagen",
    title:
      "LLM-Optimierung: Wie Websites in ChatGPT, Perplexity & Claude zitiert werden",
    category: "LLM-Optimierung",
    date: "25. April 2026",
    dateIso: "2026-04-25",
    readingTime: "7 min",
    excerpt:
      "Suchverhalten verschiebt sich Richtung KI-Assistenten. Wer dort zitiert werden will, muss seine Inhalte anders strukturieren als für klassisches Google-SEO. Eine ehrliche Einführung.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "ChatGPT Search, Perplexity, Claude, Google AI Overviews – KI-Assistenten beantworten zunehmend Fragen direkt, statt zu zehn Suchergebnissen zu führen. Wer als Unternehmen zitiert oder erwähnt werden will, muss seine Website anders aufbauen als nur für klassisches Google-SEO.",
      },
      { type: "heading", content: "Was sich gegenüber klassischer SEO unterscheidet" },
      {
        type: "list",
        items: [
          "KI-Modelle ziehen kurze, klar formulierte Aussagen vor – keine SEO-aufgeplusterten Texte.",
          "Strukturierte Inhalte (Listen, FAQ, Zwischenüberschriften) werden bevorzugt zitiert.",
          "Quellen mit Autorität (eigene Domain, klares Unternehmensprofil) erscheinen häufiger.",
          "JSON-LD-Schemas helfen Modellen, Inhalte korrekt zuzuordnen.",
        ],
      },
      { type: "heading", content: "Drei konkrete Maßnahmen für Websites" },
      {
        type: "paragraph",
        content:
          "Erstens: Eine llms.txt im Root anlegen, die Schlüsselseiten und Themen kuratiert auflistet. Zweitens: Wichtige Antworten in einem Satz formulieren und mit klarer Überschrift ankündigen. Drittens: Eine Über-uns-Seite mit klarer Beschreibung des Unternehmens, der Standorte und der Spezialisierung – Modelle nutzen das als Reverenzpunkt.",
      },
      { type: "heading", content: "Was nicht funktioniert" },
      {
        type: "list",
        items: [
          "Versteckte Texte oder Keyword-Spam – KI-Modelle erkennen das mittlerweile zuverlässig.",
          "AI-generierter Massentext ohne menschliche Substanz wird abgewertet.",
          "Behauptungen ohne Belege – Modelle bevorzugen Quellen, die ihre Aussagen einordnen.",
        ],
      },
      { type: "heading", content: "Wie man Wirkung misst" },
      {
        type: "paragraph",
        content:
          "Klassische Analytics-Tools zeigen LLM-Traffic noch unzuverlässig. Pragmatisch: regelmäßig in ChatGPT, Perplexity und Google AI Overviews die typischen Suchanfragen der eigenen Branche stellen und prüfen, ob und wie die eigene Marke auftaucht.",
      },
      {
        type: "quote",
        content:
          "LLM-Optimierung ist nicht das nächste SEO – sie ist eine ergänzende Disziplin mit eigenen Regeln.",
      },
    ],
  },
  {
    slug: "geo-generative-engine-optimization",
    title:
      "Was ist GEO (Generative Engine Optimization) – und für wen lohnt sich das?",
    category: "LLM-Optimierung",
    date: "25. April 2026",
    dateIso: "2026-04-25",
    readingTime: "5 min",
    excerpt:
      "GEO ist das Schlagwort der Stunde. Was sich dahinter verbirgt, wie es sich von SEO unterscheidet und welche Mittelständler sich aktiv damit beschäftigen sollten.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "GEO – Generative Engine Optimization – ist die Disziplin, Inhalte für KI-Modelle so aufzubereiten, dass sie als Quelle in deren Antworten zitiert oder genutzt werden. Klingt wie SEO, ist aber strukturell anders.",
      },
      { type: "heading", content: "Die wichtigsten Unterschiede" },
      {
        type: "list",
        items: [
          "Ziel: nicht der Klick, sondern die Erwähnung in der KI-Antwort.",
          "Optimiert wird auf Verständlichkeit für Modelle, nicht für Crawler.",
          "Erfolg lässt sich schwer messen – keine klassischen Position-Tracker.",
          "Inhalt zählt mehr als Backlinks oder klassische technische Tricks.",
        ],
      },
      { type: "heading", content: "Wer GEO ernst nehmen sollte" },
      {
        type: "list",
        items: [
          "Marken im B2B, deren Käufer LLM-gestützt recherchieren.",
          "Anbieter spezieller Leistungen, bei denen Konsumenten Vergleichsfragen stellen.",
          "Unternehmen mit fachlicher Tiefe, die in komplexen Antworten zitiert werden können.",
        ],
      },
      { type: "heading", content: "Wer es vorerst ignorieren kann" },
      {
        type: "paragraph",
        content:
          "Lokale Dienstleister mit klarem geografischem Fokus profitieren weiterhin mehr von Google Business Profile und klassischer lokaler SEO als von GEO. Das wird sich ändern, aber in 2026 ist die Priorität noch klar.",
      },
      { type: "heading", content: "Konkrete Einstiegspunkte" },
      {
        type: "list",
        items: [
          "llms.txt im Root anlegen.",
          "FAQ-Bereiche aufbauen mit kurzen, präzisen Antworten.",
          "Strukturierte Daten konsequent einsetzen.",
          "Über-uns-Seite konkret und faktenreich gestalten.",
        ],
      },
    ],
  },
  {
    slug: "llms-txt-erklaert",
    title:
      "llms.txt: Die kommende Standard-Datei für KI-Suchmaschinen erklärt",
    category: "LLM-Optimierung",
    date: "25. April 2026",
    dateIso: "2026-04-25",
    readingTime: "5 min",
    excerpt:
      "llms.txt ist das, was sitemap.xml für Google war: ein simpler, kuratiertes Inhaltsindex – aber für KI-Modelle. Was drin steht, wo es hingehört, und welche Wirkung es schon zeigt.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "llms.txt ist ein vorgeschlagener Standard, vergleichbar mit sitemap.xml oder robots.txt. Eine simple Markdown-Datei im Root einer Domain, die KI-Modellen einen kuratierten Überblick über die wichtigsten Inhalte gibt – ohne sie durch tausende Seiten Webseiten-HTML kämpfen zu lassen.",
      },
      { type: "heading", content: "Was die Datei enthält" },
      {
        type: "list",
        items: [
          "Eine Kurzbeschreibung des Unternehmens oder der Website.",
          "Eine kuratierte Liste der wichtigsten Seiten mit Beschreibungen.",
          "Optional: Hinweise zur Nutzung, Lizenz oder Kontaktdaten.",
        ],
      },
      { type: "heading", content: "Wo sie liegt" },
      {
        type: "paragraph",
        content:
          "Im Root der Domain unter /llms.txt – also analog zu /robots.txt oder /sitemap.xml. Manche Implementierungen verweisen zusätzlich aus der robots.txt auf die Datei.",
      },
      { type: "heading", content: "Welche Modelle sie nutzen" },
      {
        type: "paragraph",
        content:
          "Stand April 2026 ist llms.txt noch nicht universell etabliert. Anthropic, OpenAI und Perplexity haben Interesse signalisiert, eine offizielle Spezifikation ist von verschiedenen Seiten in Arbeit. Vorhandene Dateien werden bereits ausgelesen, der Effekt auf Zitationen ist messbar – wenn auch noch nicht riesig.",
      },
      { type: "heading", content: "Pragmatische Empfehlung" },
      {
        type: "paragraph",
        content:
          "Eine llms.txt anzulegen kostet eine halbe Stunde und schadet nichts. Wer eine Website mit klarem Profil hat, kann den frühen Aufwand investieren – die Wahrscheinlichkeit, dass sich der Standard etabliert, ist hoch.",
      },
    ],
  },
  {
    slug: "strukturierte-inhalte-fuer-llms",
    title:
      "Strukturierte Inhalte für LLMs: Welche Formate KI-Modelle wirklich bevorzugen",
    category: "LLM-Optimierung",
    date: "25. April 2026",
    dateIso: "2026-04-25",
    readingTime: "5 min",
    excerpt:
      "KI-Modelle lesen anders als Menschen. Welche Inhaltsformate sie zuverlässig erfassen, welche sie überspringen – und wie man Texte beidseitig optimiert.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Wer Inhalte für KI-Modelle optimiert, denkt zuerst an Schlüsselwörter. Tatsächlich entscheidet aber die Struktur. Modelle erfassen klare, hierarchische Texte deutlich besser als wandartige Absätze – und zitieren sie öfter.",
      },
      { type: "heading", content: "Formate, die Modelle bevorzugen" },
      {
        type: "list",
        items: [
          "Fragen mit klaren Ein-Satz-Antworten direkt darunter.",
          "Listen mit kurzen, eigenständigen Punkten.",
          "Definitorische Sätze: 'X ist ...' oder 'X bedeutet ...'.",
          "Tabellen mit Vergleichsdaten.",
          "Klare Zwischenüberschriften, die das Thema benennen.",
        ],
      },
      { type: "heading", content: "Formate, die Modelle übersehen" },
      {
        type: "list",
        items: [
          "Lange Absätze mit verschachtelten Gedankengängen.",
          "Absatz-erste Sätze, die nichts inhaltlich sagen ('Lassen Sie uns zunächst betrachten ...').",
          "Inhalte, die nur in Bildern stehen, ohne alt-Text oder Beschreibung.",
          "Erzähltexte ohne klare Faktenträger.",
        ],
      },
      { type: "heading", content: "Praktische Anpassungen" },
      {
        type: "list",
        items: [
          "Zwischenüberschrift formulieren wie eine direkte Frage, die der Leser stellen würde.",
          "Pro Absatz nur ein Hauptgedanke.",
          "Der erste Satz eines Abschnitts sollte die Kernaussage bereits enthalten.",
          "Wo möglich, Zahlen oder konkrete Beispiele einbauen.",
        ],
      },
      {
        type: "quote",
        content:
          "Texte für Mensch und Maschine zu schreiben heißt: jeden Absatz so beginnen, als wäre er ein eigener Tweet.",
      },
    ],
  },
  {
    slug: "citations-statt-klicks",
    title:
      "Citations statt Klicks: Was sich ändert, wenn die KI antwortet statt zu verlinken",
    category: "LLM-Optimierung",
    date: "25. April 2026",
    dateIso: "2026-04-25",
    readingTime: "5 min",
    excerpt:
      "Wenn Nutzer ihre Antwort in der KI-Oberfläche bekommen, klicken sie nicht mehr auf zehn Suchergebnisse. Was das für Mittelständler bedeutet – und welche Strategie 2026 funktioniert.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Klassische SEO hat ein klares Erfolgskriterium: ein Klick auf das Suchergebnis. KI-Antworten verändern dieses Modell grundlegend. Der Nutzer bekommt seine Antwort direkt in der Oberfläche von ChatGPT, Perplexity oder Google AI Overviews – und klickt oft gar nicht mehr auf eine Quelle.",
      },
      { type: "heading", content: "Was das praktisch bedeutet" },
      {
        type: "list",
        items: [
          "Reichweite ohne Traffic: die Marke wird gesehen, generiert aber keinen Website-Besuch.",
          "Vertrauensaufbau verlagert sich vor den Klick: zitiert zu werden zählt mehr als Klickraten.",
          "Klassische Tracking-Tools werden blind – LLM-Erwähnungen erscheinen nicht in Analytics.",
        ],
      },
      { type: "heading", content: "Wie Mittelständler darauf reagieren" },
      {
        type: "list",
        items: [
          "Zitationsfähige Inhalte produzieren: kurze, präzise, faktenstarke Aussagen.",
          "Markenpräsenz aufbauen, die in der Antwort erkennbar ist – nicht nur als beiläufige Quelle.",
          "Branchen-Reports oder eigene Daten veröffentlichen, die Modelle gerne zitieren.",
          "Klare Über-uns-Seite, damit das Modell die Quelle einordnen kann.",
        ],
      },
      { type: "heading", content: "Was unverändert bleibt" },
      {
        type: "paragraph",
        content:
          "Gute Inhalte sind weiterhin gute Inhalte. Wer Substanz liefert, wird sowohl in Google als auch in KI-Antworten Wirkung haben. Was sich verändert hat, ist der Hebel: Sichtbarkeit zählt jetzt nicht mehr nur über Klicks, sondern auch über Zitationen.",
      },
    ],
  },
  {
    slug: "brand-sichtbarkeit-ki-antworten",
    title:
      "Brand-Sichtbarkeit in KI-Antworten: Wie Unternehmen erwähnt werden – oder eben nicht",
    category: "LLM-Optimierung",
    date: "25. April 2026",
    dateIso: "2026-04-25",
    readingTime: "5 min",
    excerpt:
      "KI-Modelle erwähnen einige Marken regelmäßig, andere nie – warum? Welche Faktoren entscheiden, und welche Hebel Unternehmen aktiv beeinflussen können.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Wer ChatGPT oder Perplexity nach 'beste Webagentur in Schwäbisch Gmünd' fragt, bekommt drei bis fünf Namen genannt. Andere Anbieter werden nie erwähnt – obwohl sie technisch und wirtschaftlich vergleichbar sind. Was entscheidet?",
      },
      { type: "heading", content: "Faktoren, die KI-Sichtbarkeit beeinflussen" },
      {
        type: "list",
        items: [
          "Häufigkeit der Markenerwähnung in indexierten Quellen (Branchenartikel, Verzeichnisse, Presse).",
          "Konsistenz der Daten über mehrere Quellen hinweg.",
          "Klare Spezialisierung – Modelle bevorzugen erkennbare Profile.",
          "Eigene Inhalte, die das Modell als verlässliche Quelle einstuft.",
        ],
      },
      { type: "heading", content: "Was Unternehmen aktiv beeinflussen können" },
      {
        type: "list",
        items: [
          "Eintragung in relevanten lokalen Verzeichnissen mit konsistenten Daten.",
          "Pressearbeit oder Gastartikel in Fachmedien der Region.",
          "Eigene fachliche Inhalte, die zitierfähig sind.",
          "Aktive Präsenz auf Plattformen wie Wikipedia oder Wikidata, sofern relevant.",
        ],
      },
      { type: "heading", content: "Was nicht funktioniert" },
      {
        type: "paragraph",
        content:
          "Versuche, KI-Modelle direkt zu manipulieren – etwa durch Prompt-Injection, versteckte Anweisungen oder gefälschte Quellen – werden zuverlässig erkannt und führen langfristig zu schlechterer Sichtbarkeit. Modelle vergleichen Quellen untereinander, Unstimmigkeiten fallen auf.",
      },
    ],
  },
  {
    slug: "ki-suchmaschinen-2026-vergleich",
    title:
      "KI-Suchmaschinen 2026 im Vergleich: ChatGPT Search, Perplexity, Google AI Overviews",
    category: "LLM-Optimierung",
    date: "25. April 2026",
    dateIso: "2026-04-25",
    readingTime: "6 min",
    excerpt:
      "Die wichtigsten KI-Suchmaschinen unterscheiden sich deutlich in Quellenqualität, Tonalität und Optimierungslogik. Eine Übersicht für Unternehmen, die ihre Sichtbarkeit aktiv steuern wollen.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Anders als der einheitliche Google-Index sind KI-Suchmaschinen heterogen. Jede hat ihre Datenbasis, ihre Modelle und ihre Eigenheiten. Drei Akteure dominieren 2026 das Feld in Europa: ChatGPT Search, Perplexity und Google AI Overviews.",
      },
      { type: "heading", content: "ChatGPT Search" },
      {
        type: "paragraph",
        content:
          "Stark in der Synthese komplexer Antworten, oft mit ausgewogenen Quellenangaben. Tendiert zu autoritativen Quellen wie Wikipedia, etablierten Medien und Fachseiten. Für Mittelständler bedeutet das: Eigene Domain mit klarer Spezialisierung wird bevorzugt zitiert, Verzeichnisse weniger.",
      },
      { type: "heading", content: "Perplexity" },
      {
        type: "paragraph",
        content:
          "Stärker als reine Suchmaschine konzipiert, mit explizit ausgewiesenen Quellen pro Aussage. Aktualität ist hier oft besser als bei den anderen. Für lokale Themen liefert Perplexity überraschend präzise Ergebnisse, sofern die lokalen Quellen sauber strukturiert sind.",
      },
      { type: "heading", content: "Google AI Overviews" },
      {
        type: "paragraph",
        content:
          "Der direkte Konkurrent zur klassischen Google-Suche – die KI-Antwort steht oben, die zehn blauen Links darunter. Die Quellenwahl gleicht oft den Top-3-Suchergebnissen. Wer in der klassischen Google-Suche stark ist, wird auch in den AI Overviews überdurchschnittlich oft zitiert.",
      },
      { type: "heading", content: "Was sich für die Optimierung ergibt" },
      {
        type: "list",
        items: [
          "Klassische SEO bleibt die Basis – Google AI Overviews zitiert in den Top-3-Ergebnissen.",
          "Klare Markenpositionierung wirkt in ChatGPT besonders.",
          "Aktualität der Inhalte ist für Perplexity wichtig.",
          "Strukturierte Daten und FAQ-Blöcke wirken plattformübergreifend.",
        ],
      },
    ],
  },
  {
    slug: "eeat-2026-was-google-erwartet",
    title:
      "E-E-A-T 2026: Was Google heute wirklich von Unternehmenswebsites erwartet",
    category: "Authority",
    date: "25. April 2026",
    dateIso: "2026-04-25",
    readingTime: "6 min",
    excerpt:
      "Experience, Expertise, Authoritativeness, Trust – die vier Buchstaben hinter Googles Qualitätsbewertung. Was sie für Mittelständler bedeuten und welche Signale 2026 wirklich zählen.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "E-E-A-T ist kein direkter Ranking-Faktor, aber das Raster, mit dem Google Qualität bewertet. Vier Buchstaben, die in den Quality Rater Guidelines stehen: Experience, Expertise, Authoritativeness, Trust. Und sie werden 2026 wichtiger denn je.",
      },
      { type: "heading", content: "Experience: Erfahrung mit dem Thema" },
      {
        type: "paragraph",
        content:
          "Hat der Autor das Thema selbst erlebt? Eigene Praxis schlägt allgemeines Wissen. Für Mittelständler heißt das: Eigene Erfahrungen, konkrete Projekte, persönliche Stimme. Generische Texte ohne Erlebnis-Spuren werden abgewertet.",
      },
      { type: "heading", content: "Expertise: Fachliche Tiefe" },
      {
        type: "paragraph",
        content:
          "Verfügt die Quelle über echte fachliche Tiefe? Erkennbare Spezialisierung, sichtbarer Autor, konkrete Belege. Wer einen Themenbereich mit zwanzig substanziellen Artikeln abdeckt, signalisiert Expertise – wer drei oberflächliche Seiten zum Thema hat, signalisiert das Gegenteil.",
      },
      { type: "heading", content: "Authoritativeness: Autorität" },
      {
        type: "paragraph",
        content:
          "Wird die Quelle von anderen anerkannt? Backlinks von relevanten Seiten, Erwähnungen in Fachmedien, Einträge in seriösen Verzeichnissen. Eine kleine Site mit einem Backlink von einer renommierten Quelle wirkt autoritativer als eine große Site mit hundert Verzeichniseinträgen.",
      },
      { type: "heading", content: "Trust: Vertrauen" },
      {
        type: "list",
        items: [
          "Vollständiges Impressum mit Verantwortlichen.",
          "HTTPS, ohne unsichere Eingaben.",
          "Echte Kontaktangaben, kein Webformular ohne Adresse.",
          "Transparente Datenschutzerklärung.",
          "Saubere Bewertungen ohne offensichtliche Manipulation.",
        ],
      },
      {
        type: "quote",
        content:
          "E-E-A-T entscheidet sich nicht durch ein Plugin, sondern durch konsistente Substanz – und die kann man nicht über Nacht aufbauen.",
      },
    ],
  },
  {
    slug: "trust-signale-author-bylines",
    title:
      "Author Bylines, Über-uns-Seiten, Trust-Signale: Was zählt, was nicht",
    category: "Authority",
    date: "25. April 2026",
    dateIso: "2026-04-25",
    readingTime: "5 min",
    excerpt:
      "Trust-Signale sind oft Bauchgefühl statt Wissenschaft. Welche Signale Google und KI-Modelle wirklich auswerten – und welche eher Eitelkeit als Wirkung sind.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Trust-Signale sind oft das letzte Aufräumen vor dem Launch – oder werden komplett ignoriert. Dabei entscheiden sie nicht selten, ob ein Besucher konvertiert und ob Google die Seite überhaupt als seriös bewertet. Was zählt, was ist Schmuck?",
      },
      { type: "heading", content: "Signale mit echter Wirkung" },
      {
        type: "list",
        items: [
          "Author Byline auf Blogartikeln, mit Foto und Bio – signalisiert eine echte Person dahinter.",
          "Über-uns-Seite mit Adresse, Personen, Geschichte – nicht generisch.",
          "Klare Kontaktdaten im Footer und auf jeder Seite.",
          "Echte Referenzen mit Namen, nicht anonyme Sterne.",
          "Vollständiges Impressum mit Verantwortlichen.",
        ],
      },
      { type: "heading", content: "Signale ohne messbaren Effekt" },
      {
        type: "list",
        items: [
          "Drittanbieter-Trust-Badges ohne tatsächliche Verifikation.",
          "Stockfoto-Teamfotos – sie wirken eher abschreckend als vertrauensbildend.",
          "Marketing-Phrasen ohne Substanz ('Wir sind führend in ...').",
          "Endlose Auflistungen von Auszeichnungen, die niemand kennt.",
        ],
      },
      { type: "heading", content: "Eine pragmatische Reihenfolge" },
      {
        type: "list",
        items: [
          "Erst Über-uns-Seite konkret machen.",
          "Dann Author Bylines auf jedem Blogartikel ergänzen.",
          "Dann echte Stimmen oder Fallbeispiele aufbauen.",
          "Dann erst über externe Auszeichnungen nachdenken.",
        ],
      },
    ],
  },
  {
    slug: "wikipedia-wikidata-knowledge-graph",
    title:
      "Wikipedia, Wikidata, Knowledge Graph: Wie Marken digital echt werden",
    category: "Authority",
    date: "25. April 2026",
    dateIso: "2026-04-25",
    readingTime: "5 min",
    excerpt:
      "Eine Marke wird für Google und KI-Modelle erst dann eindeutig, wenn sie in strukturierten Quellen wie Wikidata oder Knowledge Graph existiert. Was Mittelständler dort tun können – und was nicht.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Eine Marke ist für Suchmaschinen erst dann eindeutig, wenn sie in mehreren strukturierten Quellen existiert. Wikipedia ist die bekannteste, aber nur eine von mehreren Stellen, an denen Identität digital verankert wird. Knowledge Graph, Wikidata und einige Fachregister entscheiden mit, ob eine Marke als Entität anerkannt wird.",
      },
      { type: "heading", content: "Wikipedia – streng, aber wirkungsvoll" },
      {
        type: "paragraph",
        content:
          "Wikipedia hat klare Relevanzkriterien. Kleine Mittelständler erfüllen sie in der Regel nicht – und das ist auch in Ordnung. Wer einen eigenen Wikipedia-Artikel rechtfertigen kann (öffentliches Interesse, mediale Berichterstattung, historische Bedeutung), profitiert deutlich. Wer es erzwingt, scheitert meistens.",
      },
      { type: "heading", content: "Wikidata – pragmatischer Einstieg" },
      {
        type: "paragraph",
        content:
          "Wikidata hat niedrigere Hürden als Wikipedia. Hier können auch kleinere Organisationen einen Eintrag mit strukturierten Daten anlegen: Standort, Gründungsjahr, Branche, offizielle Website. KI-Modelle und Google nutzen Wikidata aktiv als Quelle.",
      },
      { type: "heading", content: "Knowledge Graph" },
      {
        type: "paragraph",
        content:
          "Der Knowledge Graph ist Googles eigene Wissensdatenbank. Einträge entstehen, wenn Google eine Marke aus mehreren Quellen konsistent als Entität erkennt. Direkten Edit-Zugang gibt es nicht – aber konsistente Daten in Schema.org, Google Business Profile und Wikidata erhöhen die Wahrscheinlichkeit.",
      },
      { type: "heading", content: "Pragmatische Schritte" },
      {
        type: "list",
        items: [
          "Konsistente Stammdaten: Firmenname, Adresse, Gründungsjahr überall identisch.",
          "Wikidata-Eintrag anlegen, wenn eigene Substanz dafür reicht.",
          "Eine eigene Marken-FAQ auf der Website, die Modellen klare Fakten liefert.",
        ],
      },
    ],
  },
  {
    slug: "texte-fuer-google-und-chatgpt",
    title:
      "Texte, die Google UND ChatGPT lieben: Drei Prinzipien für 2026",
    category: "Content",
    date: "25. April 2026",
    dateIso: "2026-04-25",
    readingTime: "5 min",
    excerpt:
      "Klassisches SEO und LLM-Optimierung sind keine Gegensätze. Drei Prinzipien, die Texte sowohl in der Google-Suche als auch in KI-Antworten sichtbar machen.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Es kursiert die Idee, dass man Texte entweder für Google oder für KI-Suchmaschinen schreibt. Das ist falsch. Beide Systeme honorieren am Ende dieselbe Substanz – sie haben nur unterschiedliche Hebel, mit denen sie Qualität erkennen.",
      },
      { type: "heading", content: "Prinzip 1: Hauptaussage in den ersten Satz" },
      {
        type: "paragraph",
        content:
          "Suchmaschinen und KI-Modelle erfassen den Anfang eines Absatzes überproportional stark. Wer dort die Kernaussage platziert, wird häufiger zitiert und besser zusammengefasst. Erzählerische Vorbemerkungen kosten Sichtbarkeit.",
      },
      { type: "heading", content: "Prinzip 2: Strukturen statt Wortwüsten" },
      {
        type: "paragraph",
        content:
          "Listen, klare Zwischenüberschriften, kurze Absätze – beide Systeme bevorzugen das. Auf der menschlichen Seite ist Lesbarkeit der Effekt, auf der technischen Seite die bessere Erfassbarkeit der Inhaltsstruktur.",
      },
      { type: "heading", content: "Prinzip 3: Konkrete Beispiele und Zahlen" },
      {
        type: "paragraph",
        content:
          "Allgemeine Aussagen werden seltener zitiert als belegbare Fakten. Wer Zahlen oder Beispiele hat, sollte sie einbauen – auch wenn es konservativer ist als 'wir sind die schnellste Agentur Deutschlands'. Modelle bevorzugen Aussagen, die sich bestätigen lassen.",
      },
      { type: "heading", content: "Was zu vermeiden ist" },
      {
        type: "list",
        items: [
          "Keyword-Stuffing – wirkt unnatürlich und wird sowohl von Google als auch von Modellen abgewertet.",
          "Generische Eröffnungssätze ('In der heutigen schnelllebigen Zeit ...').",
          "Fluff-Wörter ohne Inhalt.",
          "Recycelte AI-Texte ohne menschliche Substanz.",
        ],
      },
      {
        type: "quote",
        content:
          "Was Menschen klar lesen, lesen Maschinen meistens auch klar.",
      },
    ],
  },
  {
    slug: "themen-cluster-architektur",
    title:
      "Themen-Cluster statt Keyword-Liste: Die neue Inhalts-Architektur",
    category: "Content",
    date: "25. April 2026",
    dateIso: "2026-04-25",
    readingTime: "5 min",
    excerpt:
      "Keyword-Listen waren das Werkzeug der 2010er. Themen-Cluster sind die Inhalts-Architektur der 2020er. Was sich konkret verändert hat – und wie eine moderne Content-Planung aussieht.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "In den 2010er-Jahren begann jede SEO-Strategie mit einer Keyword-Liste in einer Tabelle. Heute ist das Werkzeug zwar noch da, aber es taugt nicht mehr als Strategie-Grundlage. Suchmaschinen denken in Themen, nicht mehr in einzelnen Suchbegriffen – und Content-Planung sollte sich entsprechend anpassen.",
      },
      { type: "heading", content: "Was ein Themen-Cluster ist" },
      {
        type: "paragraph",
        content:
          "Ein Themenfeld – etwa 'Lokale SEO' – wird durch eine Hub-Seite und mehrere zugeordnete Detailartikel beschrieben. Suchmaschinen erkennen die Verknüpfung, bewerten die Tiefe und ranken die Hub-Seite und ihre Subartikel im Verbund.",
      },
      { type: "heading", content: "Wie man von Keywords zu Themen kommt" },
      {
        type: "list",
        items: [
          "Liste der wichtigsten Suchbegriffe weiterhin erstellen.",
          "Begriffe nach inhaltlicher Verwandtschaft gruppieren.",
          "Pro Gruppe ein zentrales Thema definieren – das wird zur Hub-Seite.",
          "Subartikel pro Gruppe planen und schrittweise veröffentlichen.",
        ],
      },
      { type: "heading", content: "Was sich konkret verändert" },
      {
        type: "list",
        items: [
          "Statt 30 isolierter Artikel zu zusammenhanglosen Begriffen entstehen 5 starke Cluster.",
          "Internal Linking wird Teil der Strategie, nicht Nebeneffekt.",
          "Autorität baut sich pro Themenfeld auf, nicht pro Keyword.",
          "Erfolge werden langsamer, aber nachhaltiger.",
        ],
      },
    ],
  },
  {
    slug: "ai-generierte-texte-und-seo",
    title:
      "AI-generierte Texte und SEO: Wann sie helfen, wann sie schaden",
    category: "Content",
    date: "25. April 2026",
    dateIso: "2026-04-25",
    readingTime: "5 min",
    excerpt:
      "AI-Texte sind weder Wundermittel noch Tabu. Wann sie SEO-mäßig helfen, wann sie aktiv schaden – und welche Mischform sich bewährt hat.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Seit ChatGPT und ähnliche Modelle massenmarktfähig sind, fluten AI-Texte das Web. Google hat klargestellt: AI-generierte Inhalte werden nicht pauschal abgewertet – aber AI-generierter Massenmüll schon. Die Linie verläuft entlang der Substanz, nicht der Erstellungsmethode.",
      },
      { type: "heading", content: "Wann AI-Texte helfen" },
      {
        type: "list",
        items: [
          "Als Strukturentwurf, der dann fachlich überarbeitet wird.",
          "Als Übersetzung mit menschlicher Endkontrolle.",
          "Als Zusammenfassung längerer Texte.",
          "Als Variation einer schon vorhandenen Aussage.",
        ],
      },
      { type: "heading", content: "Wann sie schaden" },
      {
        type: "list",
        items: [
          "Reine Keyword-Farmen ohne menschliche Tiefe.",
          "Inhalte, die nur 'irgendwas' zu einem Thema sagen, ohne echte Position.",
          "Endlose Listen-Wiederholungen ohne neuen Mehrwert.",
          "Posts, die mit AI generiert und ohne Prüfung veröffentlicht werden.",
        ],
      },
      { type: "heading", content: "Bewährte Mischform" },
      {
        type: "paragraph",
        content:
          "Erst die These, die Position oder das eigene Argument – dann AI als Werkzeug zum Strukturieren, Glätten oder Variieren. Niemals umgekehrt. Wer einen AI-Text nimmt und sich überlegt, ob er die Aussage wirklich teilt, hat fast immer einen schwächeren Beitrag als jemand, der seine Position vorher klar hatte.",
      },
      {
        type: "quote",
        content:
          "AI ist ein Verstärker. Wer Substanz hat, multipliziert sie. Wer keine hat, verstärkt das Fehlen.",
      },
    ],
  },
  {
    slug: "microcopy-ux-text",
    title:
      "Microcopy: Die unterschätzte Disziplin zwischen Text und UX",
    category: "Content",
    date: "25. April 2026",
    dateIso: "2026-04-25",
    readingTime: "4 min",
    excerpt:
      "Buttons, Fehlermeldungen, Bestätigungen, Hinweise – die kleinen Texte einer Website entscheiden überproportional über Conversion. Was Microcopy ist und warum sie so oft vernachlässigt wird.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Microcopy sind die kleinen Textbausteine zwischen den großen Inhalten: Button-Beschriftungen, Fehlermeldungen, Bestätigungen, Hinweistexte, Platzhalter in Formularfeldern. Sie machen oft 5 % des Wortvolumens aus – und 50 % der Conversion-Wirkung.",
      },
      { type: "heading", content: "Was gute Microcopy auszeichnet" },
      {
        type: "list",
        items: [
          "Klar formuliert, ohne Marketing-Phrase.",
          "Aktiv statt passiv: 'Anfrage senden' statt 'Anfrage wird gesendet'.",
          "Konkret statt allgemein: 'Antwort innerhalb 24 Stunden' statt 'Wir melden uns'.",
          "Empathisch bei Fehlern: erklären, was passiert ist und was zu tun ist.",
        ],
      },
      { type: "heading", content: "Häufig übersehene Stellen" },
      {
        type: "list",
        items: [
          "Bestätigungs-Seiten nach dem Absenden eines Formulars.",
          "Fehlermeldungen bei falsch ausgefüllten Feldern.",
          "Tooltip-Texte in Formularen.",
          "404-Seiten – oft nur ein 'Seite nicht gefunden' statt einer hilfreichen Weiterführung.",
        ],
      },
      { type: "heading", content: "Wer Microcopy schreiben sollte" },
      {
        type: "paragraph",
        content:
          "Idealerweise jemand, der sowohl die Marke als auch die Nutzungsabläufe kennt. Designer schreiben Microcopy oft nebenbei, Texter erstellen sie isoliert – beide Wege führen zu Reibung. Ein gemeinsamer Workflow zwischen UX und Text ist deshalb der einzige, der konsistent gute Ergebnisse liefert.",
      },
    ],
  },
  {
    slug: "website-fuer-lokale-suchanfragen",
    title:
      "Wie Unternehmen ihre Website für lokale Suchanfragen strategisch nutzen können",
    category: "Websites",
    date: "21. April 2026",
    dateIso: "2026-04-21",
    readingTime: "8 min",
    excerpt:
      "Lokale Sichtbarkeit entsteht nicht nur durch einen Google Eintrag. Wer regional gefunden werden will, braucht auf der Website klare Ortsbezüge, saubere Leistungsseiten und nachvollziehbare Relevanz.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Viele Unternehmen verlassen sich lokal fast ausschließlich auf Branchenprofile oder Kartenansichten. Diese sind relevant, ersetzen aber keine strategische Website. Gerade bei Dienstleistungen entscheidet die eigene Seite darüber, ob eine lokale Suche nur Sichtbarkeit erzeugt oder tatsächlich in eine Anfrage übergeht.",
      },
      { type: "heading", content: "Was lokale Suchintention wirklich braucht" },
      {
        type: "list",
        items: [
          "Klare Verbindung zwischen Leistung und Region.",
          "Saubere Kontakt und Standortinformationen.",
          "Leistungsseiten mit Ortsbezug statt bloßer Aufzählung von Städten.",
          "Vertrauenssignale, die regionale Relevanz glaubhaft machen.",
        ],
      },
      { type: "heading", content: "Warum reine Ortsseiten oft nicht reichen" },
      {
        type: "paragraph",
        content:
          "Seiten, die nur Standortnamen aneinanderreihen, wirken austauschbar und bieten kaum Mehrwert. Besser sind Inhalte, die zeigen, welche Leistung in welchem Kontext vor Ort relevant ist. Dadurch steigt die thematische Qualität und die Seite wird sowohl für Suchmaschinen als auch für Nutzer nachvollziehbarer.",
      },
      { type: "heading", content: "Die strategische Rolle lokaler Inhalte" },
      {
        type: "paragraph",
        content:
          "Regionale Referenzen, konkrete Einsatzfelder, lokale Prozessvorteile und klare Kontaktwege stärken nicht nur Rankings, sondern auch Vertrauen. Lokales SEO ist deshalb kein separater Trick, sondern Teil einer sauberen digitalen Positionierung.",
      },
      {
        type: "quote",
        content:
          "Lokal sichtbar wird nicht das Unternehmen, das am häufigsten einen Städtenamen erwähnt, sondern das Unternehmen, dessen Relevanz vor Ort glaubwürdig erkennbar ist.",
      },
    ],
  },
  {
    slug: "gute-unternehmensinhalte-statt-agentur-content",
    title:
      "Was gute Unternehmensinhalte von austauschbarem Agentur-Content unterscheidet",
    category: "Strategie",
    date: "20. April 2026",
    dateIso: "2026-04-20",
    readingTime: "8 min",
    excerpt:
      "Viele Unternehmensseiten klingen professionell, sagen aber wenig Belastbares. Gute Inhalte unterscheiden sich nicht durch Lautstärke, sondern durch Substanz, Präzision und echte Einordnung.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Austauschbarer Agentur Content erkennt man meist sofort: moderne Formulierungen, generische Versprechen, wenig konkrete Aussage. Für Nutzer, Suchmaschinen und LLM Systeme ist das gleichermaßen problematisch, weil Relevanz und Fachlichkeit schwer erkennbar bleiben.",
      },
      { type: "heading", content: "Woran starke Inhalte erkennbar sind" },
      {
        type: "list",
        items: [
          "Sie benennen Probleme konkret statt nur Leistungen abstrakt aufzuzählen.",
          "Sie zeigen ein nachvollziehbares Verständnis für Zielgruppe und Kontext.",
          "Sie ordnen Begriffe sauber ein, statt nur Trendwörter zu stapeln.",
          "Sie helfen bei einer Entscheidung und nicht nur beim oberflächlichen Eindruck.",
        ],
      },
      { type: "heading", content: "Warum Substanz auch maschinell belohnt wird" },
      {
        type: "paragraph",
        content:
          "Je klarer und spezifischer Inhalte formuliert sind, desto besser können Systeme sie einordnen, zitieren und thematisch zuordnen. Genau deshalb profitieren gute Inhalte heute gleichzeitig von SEO und GEO: Sie beantworten reale Fragen mit belastbaren Aussagen.",
      },
      { type: "heading", content: "Was Unternehmen vermeiden sollten" },
      {
        type: "paragraph",
        content:
          "Überdehnte Claims, austauschbare Floskeln und vage Innovationssprache wirken auf den ersten Blick hochwertig, bauen aber selten Vertrauen auf. Wer sich digital differenzieren will, muss erkennbar denken, nicht nur sauber formulieren.",
      },
      {
        type: "quote",
        content:
          "Starke Unternehmensinhalte beeindrucken nicht zuerst. Sie machen ein Unternehmen glaubwürdig verständlich.",
      },
    ],
  },
  {
    slug: "anfrageprozesse-ohne-medienbrueche",
    title:
      "Anfrageprozesse ohne Medienbrüche: So entsteht ein sauberer digitaler Ablauf",
    category: "Prozesse",
    date: "19. April 2026",
    dateIso: "2026-04-19",
    readingTime: "8 min",
    excerpt:
      "Viele Anfragen scheitern nicht an fehlendem Interesse, sondern an brüchigen Übergängen. Ein sauberer digitaler Ablauf reduziert Verluste, Rückfragen und operative Reibung deutlich.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Medienbrüche entstehen dort, wo Informationen zwischen Formular, Postfach, Telefon, CRM und internem Team mehrfach übertragen oder neu interpretiert werden müssen. Genau diese Reibung verlangsamt Reaktion, senkt Transparenz und verschlechtert oft schon die erste Kundenerfahrung.",
      },
      { type: "heading", content: "Woran ein sauberer Anfrageprozess erkennbar ist" },
      {
        type: "list",
        items: [
          "Anfragen kommen strukturiert und vollständig an.",
          "Zuständigkeiten sind direkt nachvollziehbar.",
          "Informationen werden nicht mehrfach manuell übertragen.",
          "Der Status der Anfrage bleibt für das Team sichtbar.",
        ],
      },
      { type: "heading", content: "Wo Medienbrüche typischerweise entstehen" },
      {
        type: "paragraph",
        content:
          "Häufig beginnt das Problem bereits beim Eingang: Freitext ohne Struktur, Weiterleitung per Copy Paste, fehlende CRM Anbindung oder parallele Kommunikation über mehrere Kanäle. Jeder zusätzliche Bruch erhöht Fehlerwahrscheinlichkeit und Antwortzeit.",
      },
      { type: "heading", content: "Wie Unternehmen das sauber lösen" },
      {
        type: "paragraph",
        content:
          "Sinnvoll ist eine klare Kette aus Kontaktpunkt, Vorqualifizierung, Systemübergabe, Verantwortlichkeit und Rückmeldung. Schon einfache Integrationen und definierte Datenfelder können hier einen deutlichen Unterschied machen. Erst auf dieser Basis lohnt sich weitergehende Automatisierung oder KI Unterstützung.",
      },
      {
        type: "quote",
        content:
          "Ein sauberer Anfrageprozess fühlt sich außen schnell und professionell an, weil er innen klar und verbunden aufgebaut ist.",
      },
    ],
  },
  {
    slug: "ki-im-mittelstand-prozesse-automatisieren",
    title:
      "KI im Mittelstand: Welche Prozesse sich 2026 wirklich automatisieren lassen",
    category: "KI & Automatisierung",
    date: "18. April 2026",
    dateIso: "2026-04-18",
    readingTime: "9 min",
    excerpt:
      "Nicht jeder Prozess eignet sich sofort für KI. Besonders lohnend sind wiederkehrende Abläufe mit klaren Eingaben, hohem Zeitaufwand und spürbarer Reibung.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Viele mittelständische Unternehmen fragen sich nicht mehr, ob KI relevant ist, sondern wo sie operativ zuerst Sinn ergibt. Genau an diesem Punkt entscheidet sich, ob aus Interesse ein produktiver Hebel wird oder nur ein weiteres internes Experiment.",
      },
      { type: "heading", content: "Welche Prozesse sich besonders gut eignen" },
      {
        type: "paragraph",
        content:
          "Geeignet sind vor allem Prozesse, die häufig auftreten, klar beschreibbar sind und heute bereits manuell nach festen Mustern bearbeitet werden. Dort kann KI unterstützen, vorbereiten oder ganze Zwischenschritte übernehmen.",
      },
      {
        type: "list",
        items: [
          "Erste Bearbeitung eingehender Anfragen.",
          "Vorstrukturierung von E Mails und Formularinhalten.",
          "Erstellung von Gesprächszusammenfassungen und Protokollen.",
          "Wissensbasierte Beantwortung wiederkehrender Standardfragen.",
          "Aufbereitung von Daten für CRM, Vertrieb oder Projektstart.",
        ],
      },
      { type: "heading", content: "Woran viele Unternehmen zu früh scheitern" },
      {
        type: "paragraph",
        content:
          "Oft wird direkt über Modelle oder Tools gesprochen, obwohl der eigentliche Engpass im Prozess liegt. Wenn Zuständigkeiten, Datenquellen oder gewünschte Ergebnisse unklar sind, entsteht keine belastbare Automatisierung, sondern nur neue Unsicherheit.",
      },
      { type: "heading", content: "Ein sinnvoller Auswahlfilter" },
      {
        type: "paragraph",
        content:
          "Für den Start lohnt sich eine einfache Prüfung: Tritt der Prozess häufig auf, kostet er spürbar Zeit, lässt er sich klar beschreiben und erzeugt eine schnell messbare Verbesserung. Wenn diese vier Punkte erfüllt sind, ist die Chance auf einen nützlichen KI Einsatz hoch.",
      },
      {
        type: "quote",
        content:
          "Im Mittelstand lohnt sich KI nicht dort zuerst, wo sie am futuristischsten klingt, sondern dort, wo sie operative Reibung konkret reduziert.",
      },
    ],
  },
  {
    slug: "website-oder-ki-zuerst",
    title:
      "Website oder KI zuerst? Die richtige Reihenfolge für Unternehmen mit Wachstumspotenzial",
    category: "Strategie",
    date: "17. April 2026",
    dateIso: "2026-04-17",
    readingTime: "8 min",
    excerpt:
      "Viele Unternehmen wollen gleichzeitig an Website, Sichtbarkeit und KI arbeiten. Wirklich wirksam wird die Reihenfolge aber erst dann, wenn die digitale Grundlage sauber steht.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Die Frage nach Website oder KI ist in Wahrheit eine Frage nach digitaler Reihenfolge. Wer auf instabiler Grundlage automatisiert, beschleunigt oft nur Unklarheit. Wer nur an Sichtbarkeit arbeitet, aber operative Übergänge nicht mitdenkt, verschenkt Potenzial.",
      },
      { type: "heading", content: "Warum die Website häufig zuerst kommt" },
      {
        type: "paragraph",
        content:
          "Die Website ist für viele Unternehmen der erste belastbare Kontaktpunkt. Sie erklärt Positionierung, Leistungen, Vertrauen und den nächsten Schritt. Wenn diese Basis unklar ist, bringt auch eine nachgelagerte KI Integration selten die gewünschte Wirkung.",
      },
      {
        type: "list",
        items: [
          "Klare Botschaft und Positionierung schaffen.",
          "Leistungsseiten mit echter Suchintention aufbauen.",
          "Kontaktwege und Anfrageprozesse strukturieren.",
          "Erst danach Automatisierung und KI sinnvoll aufsetzen.",
        ],
      },
      { type: "heading", content: "Wann KI trotzdem früh Sinn macht" },
      {
        type: "paragraph",
        content:
          "Wenn bereits viele Anfragen eingehen oder interne Abläufe deutlich bremsen, kann ein früher KI Pilot sinnvoll sein. Das gilt besonders für Bereiche wie Qualifizierung, Zusammenfassung, Sortierung oder Wissenszugriff.",
      },
      { type: "heading", content: "Die bessere Denkweise" },
      {
        type: "paragraph",
        content:
          "Nicht Website oder KI zuerst ist die beste Frage, sondern welche digitale Schicht aktuell den größten Engpass erzeugt. Meist lautet die sinnvolle Reihenfolge: sichtbar werden, strukturiert anfragen lassen, danach intelligent verarbeiten.",
      },
      {
        type: "quote",
        content:
          "Wachstum entsteht nicht durch möglichst viele digitale Themen gleichzeitig, sondern durch die richtige Reihenfolge der richtigen Themen.",
      },
    ],
  },
  {
    slug: "ki-agent-im-unternehmen",
    title:
      "Was ein KI-Agent im Unternehmen wirklich bringt und wo die Grenzen liegen",
    category: "KI & Automatisierung",
    date: "16. April 2026",
    dateIso: "2026-04-16",
    readingTime: "9 min",
    excerpt:
      "KI Agenten werden oft überhöht dargestellt. Wirklich relevant sind sie dort, wo sie klar definierte Aufgaben übernehmen, vorbereiten oder eigenständig nach Regeln handeln dürfen.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Der Begriff KI Agent wird derzeit für sehr unterschiedliche Systeme verwendet. Für Unternehmen ist nicht das Schlagwort entscheidend, sondern die praktische Frage: Welche Aufgabe soll das System konkret übernehmen und welche Verantwortung darf es dabei tragen.",
      },
      { type: "heading", content: "Was ein KI Agent sinnvoll leisten kann" },
      {
        type: "paragraph",
        content:
          "Ein nützlicher Agent arbeitet nicht magisch, sondern entlang klarer Ziele, Eingaben und Regeln. Er kann Informationen sammeln, priorisieren, Antworten vorbereiten oder definierte Aktionen auslösen.",
      },
      {
        type: "list",
        items: [
          "Anfragen vorqualifizieren und kategorisieren.",
          "Informationen aus mehreren Quellen zusammenführen.",
          "Standardkommunikation vorbereiten.",
          "Termine, Übergaben oder CRM Schritte anstoßen.",
        ],
      },
      { type: "heading", content: "Wo die Grenzen liegen" },
      {
        type: "paragraph",
        content:
          "Sobald Ziele unklar, Daten unzuverlässig oder Ausnahmen zu zahlreich sind, sinkt die Verlässlichkeit deutlich. Auch sensible Entscheidungen, haftungsrelevante Freigaben oder strategische Kommunikation sollten nicht unkontrolliert delegiert werden.",
      },
      { type: "heading", content: "Wie Unternehmen realistisch starten" },
      {
        type: "paragraph",
        content:
          "Sinnvoll ist ein enger Aufgabenbereich mit klaren Grenzen. Erst wenn Qualität, Geschwindigkeit und Stabilität passen, wird der Verantwortungsraum schrittweise erweitert. Genau so entsteht aus einem Pilot ein belastbarer Agent statt einer Demo.",
      },
      {
        type: "quote",
        content:
          "Ein guter KI Agent ersetzt nicht pauschal Menschen. Er übernimmt klar umrissene Arbeit so, dass Menschen weniger Reibung und mehr Übersicht haben.",
      },
    ],
  },
  {
    slug: "website-bringt-keine-anfragen",
    title:
      "Warum viele Unternehmenswebsites keine Anfragen bringen und wie man das ändert",
    category: "Websites",
    date: "15. April 2026",
    dateIso: "2026-04-15",
    readingTime: "8 min",
    excerpt:
      "Viele Unternehmensseiten sind online, aber nicht vertriebswirksam. Fehlende Anfragen sind oft kein Traffic Problem, sondern ein Problem aus Botschaft, Struktur und Vertrauen.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Wenn eine Website kaum Anfragen erzeugt, wird schnell über Werbung, Suchvolumen oder Reichweite gesprochen. Häufig liegt die Ursache aber tiefer: Die Seite erzeugt keine klare Relevanz, keine eindeutige Führung und keinen belastbaren Anlass für den nächsten Schritt.",
      },
      { type: "heading", content: "Die häufigsten Gründe für schwache Conversion" },
      {
        type: "list",
        items: [
          "Die Headline erklärt nicht klar, welchen Nutzen das Unternehmen bietet.",
          "Leistungsseiten bleiben zu allgemein und beantworten keine konkreten Probleme.",
          "Die Seite wirkt optisch ordentlich, baut aber wenig Vertrauen auf.",
          "Call to Actions sind vorhanden, aber nicht überzeugend eingebettet.",
          "Der Anfrageweg ist unnötig unklar oder zu unverbindlich formuliert.",
        ],
      },
      { type: "heading", content: "Was stattdessen passieren muss" },
      {
        type: "paragraph",
        content:
          "Eine anfragestarke Website führt Besucher vom ersten Eindruck bis zur Kontaktaufnahme. Dafür braucht sie eine klare Positionierung, gut strukturierte Leistungsseiten, reale Entscheidungsargumente und einen nächsten Schritt, der niedrigschwellig, aber verbindlich wirkt.",
      },
      { type: "heading", content: "Warum Suchmaschinen und Nutzer ähnlich denken" },
      {
        type: "paragraph",
        content:
          "Auch SEO profitiert von Klarheit. Seiten, die sauber benennen, welches Problem sie für wen lösen, sind für Suchmaschinen besser verständlich und für Nutzer schneller einzuordnen. Genau diese Verbindung aus Verständlichkeit und Relevanz steigert oft Sichtbarkeit und Conversion zugleich.",
      },
      {
        type: "quote",
        content:
          "Eine Website bringt nicht mehr Anfragen, weil sie lauter wird. Sie bringt mehr Anfragen, wenn sie klarer, glaubwürdiger und einfacher zu handeln ist.",
      },
    ],
  },
  {
    slug: "digitale-praesenz-drei-stufen",
    title: "Digitale Präsenz aufbauen: Die drei Stufen von sichtbar zu autonom",
    category: "Strategie",
    date: "14. April 2026",
    dateIso: "2026-04-14",
    readingTime: "8 min",
    excerpt:
      "Digitale Entwicklung verläuft nicht chaotisch, sondern in klaren Reifestufen. Wer sichtbar, effizient und autonom sauber voneinander trennt, baut deutlich sinnvoller auf.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Viele Unternehmen versuchen gleichzeitig sichtbarer, moderner und automatisierter zu werden. Das Problem ist nicht das Ziel, sondern die Vermischung der Ebenen. Deutlich besser funktioniert eine Entwicklung in drei klaren Stufen.",
      },
      { type: "heading", content: "Stufe 1: Sichtbar" },
      {
        type: "paragraph",
        content:
          "Zuerst geht es darum, digital verständlich und professionell wahrgenommen zu werden. Dazu gehören eine überzeugende Website, klare Botschaften, saubere Leistungsseiten und eine konsistente Außenwirkung.",
      },
      { type: "heading", content: "Stufe 2: Effizient" },
      {
        type: "paragraph",
        content:
          "In der zweiten Stufe werden Übergänge optimiert. Anfragewege, interne Abläufe, Datenflüsse und Routinen werden strukturiert, damit weniger Reibung, weniger Doppelarbeit und schnellere Reaktionszeiten entstehen.",
      },
      { type: "heading", content: "Stufe 3: Autonom" },
      {
        type: "paragraph",
        content:
          "Erst auf dieser Grundlage werden Systeme wirklich intelligent und teilautonom. KI, Integrationen und Agenten können dann nicht nur unterstützen, sondern innerhalb definierter Grenzen eigenständig handeln.",
      },
      {
        type: "list",
        items: [
          "Sichtbar bedeutet klar wahrnehmbar.",
          "Effizient bedeutet sauber organisiert.",
          "Autonom bedeutet sinnvoll delegierbar.",
        ],
      },
      {
        type: "quote",
        content:
          "Wer die drei Stufen trennt, baut nicht einfach digitaler. Er baut belastbarer.",
      },
    ],
  },
  {
    slug: "digitale-praesenz-b2b",
    title: "Was eine starke digitale Präsenz im B2B heute ausmacht",
    category: "Präsenz",
    date: "13. April 2026",
    dateIso: "2026-04-13",
    readingTime: "7 min",
    excerpt:
      "Digitale Präsenz bedeutet nicht nur sichtbar zu sein. Entscheidend ist, ob ein Unternehmen klar, vertrauenswürdig und relevant wahrgenommen wird.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Viele B2B-Unternehmen sind online auffindbar, aber nicht wirklich präsent. Zwischen Sichtbarkeit und Wirkung liegt ein großer Unterschied.",
      },
      { type: "heading", content: "Präsenz beginnt bei Klarheit" },
      {
        type: "paragraph",
        content:
          "Wer eine Website, ein LinkedIn-Profil und ein paar Unterseiten hat, ist noch nicht automatisch stark aufgestellt. Eine überzeugende digitale Präsenz beantwortet in wenigen Sekunden, wofür das Unternehmen steht und warum es relevant ist.",
      },
      {
        type: "paragraph",
        content:
          "Gerade im B2B prüfen Interessenten oft zunächst digital, bevor ein erstes Gespräch stattfindet. Der digitale Eindruck ist damit Teil des Vertriebs, nicht nur Teil des Marketings.",
      },
      { type: "heading", content: "Drei Elemente, die zusammenwirken müssen" },
      {
        type: "paragraph",
        content:
          "Wirkungsvolle Präsenz entsteht selten durch einen einzelnen Kanal. Sie entsteht durch die saubere Verzahnung mehrerer Kontaktpunkte.",
      },
      {
        type: "list",
        items: [
          "Eine Website mit klarer Struktur und verständlichem Nutzenversprechen.",
          "Profile und Plattformen, die das gleiche Bild transportieren.",
          "Inhalte und Signale, die Kompetenz und Verlässlichkeit stützen.",
        ],
      },
      { type: "heading", content: "Warum Konsistenz mehr wert ist als Lautstärke" },
      {
        type: "paragraph",
        content:
          "Viele Unternehmen versuchen, digitale Wirkung über Frequenz zu erzeugen. Häufig ist aber nicht die Menge das Problem, sondern die Uneinheitlichkeit. Wenn Website, Präsentation und Social Media unterschiedlich wirken, verliert der Markt Vertrauen statt es aufzubauen.",
      },
      {
        type: "quote",
        content:
          "Eine starke digitale Präsenz fühlt sich nicht nach Marketing an. Sie fühlt sich nach Klarheit, Professionalität und Relevanz an.",
      },
    ],
  },
  {
    slug: "moderne-unternehmenswebsite",
    title:
      "Warum viele Unternehmenswebsites professionell aussehen, aber nicht funktionieren",
    category: "Websites",
    date: "12. April 2026",
    dateIso: "2026-04-12",
    readingTime: "8 min",
    excerpt:
      "Saubere Gestaltung allein macht noch keine wirkungsvolle Website. Entscheidend ist, ob die Seite Vertrauen aufbaut, Orientierung gibt und Anfragen auslöst.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      { type: "heading", content: "Gutes Design ersetzt keine klare Botschaft" },
      {
        type: "paragraph",
        content:
          "Viele Websites sehen auf den ersten Blick modern aus: große Bilder, schöne Typografie, aufgeräumte Layouts. Trotzdem bleibt nach wenigen Sekunden unklar, was das Unternehmen konkret anbietet, für wen es arbeitet und warum es die bessere Wahl sein soll.",
      },
      {
        type: "paragraph",
        content:
          "Besucher bewerten eine Seite nicht wie ein Designer. Sie suchen Orientierung. Wenn die Kernaussage nicht sofort verständlich ist, verliert die Seite trotz guter Gestaltung an Wirkung.",
      },
      { type: "heading", content: "Die häufigsten funktionalen Schwächen" },
      {
        type: "paragraph",
        content:
          "In der Praxis scheitern viele Seiten nicht am Design, sondern an grundlegenden strategischen Fehlern. Die Struktur ist unklar, wichtige Informationen sind versteckt oder der nächste Schritt ist nicht sauber vorbereitet.",
      },
      {
        type: "list",
        items: [
          "Die Startseite kommuniziert keine klare Positionierung.",
          "Leistungen werden zu allgemein beschrieben.",
          "Es fehlt eine logische Nutzerführung bis zur Anfrage.",
          "Vertrauenssignale wie Referenzen, Prozesse oder echte Argumente fehlen.",
          "Kontaktmöglichkeiten sind vorhanden, aber nicht prominent genug eingebunden.",
        ],
      },
      {
        type: "heading",
        content:
          "Professionell wirken heißt Vertrauen aufbauen, nicht nur beeindrucken",
      },
      {
        type: "paragraph",
        content:
          "Eine funktionierende Website beantwortet ungesagte Fragen. Kann dieses Unternehmen mein Problem lösen? Arbeitet es strukturiert? Ist es modern genug, um professionell zu liefern?",
      },
      {
        type: "paragraph",
        content:
          "Vertrauen entsteht durch eine Kombination aus Tonalität, Klarheit, visueller Qualität und technischer Sauberkeit. Genau diese Mischung fehlt vielen Seiten, obwohl das Unternehmen selbst gute Arbeit leistet.",
      },
      { type: "heading", content: "Was eine wirksame Seite stattdessen leisten muss" },
      {
        type: "paragraph",
        content:
          "Eine gute Unternehmenswebsite führt. Sie priorisiert Inhalte, reduziert Reibung und macht den nächsten Schritt offensichtlich. Dadurch wird sie nicht nur zu einem schönen Aushängeschild, sondern zu einem echten Vertriebswerkzeug.",
      },
      {
        type: "list",
        items: [
          "Klare Headline mit verständlichem Nutzenversprechen.",
          "Saubere Seitenstruktur statt Informationsüberladung.",
          "Leistungsseiten mit konkretem Problembezug.",
          "Klare Call to Actions an den richtigen Stellen.",
          "Mobil starke Darstellung und kurze Ladezeiten.",
        ],
      },
      {
        type: "quote",
        content:
          "Der Unterschied zwischen einer hübschen Website und einer starken Website ist Wirkung. Genau dort beginnt professionelle digitale Präsenz.",
      },
    ],
  },
  {
    slug: "ki-einstieg-unternehmen",
    title: "Wie Unternehmen den Einstieg in KI sinnvoll gestalten können",
    category: "KI & Automatisierung",
    date: "11. April 2026",
    dateIso: "2026-04-11",
    readingTime: "10 min",
    excerpt:
      "Der größte Fehler beim KI-Einstieg ist nicht fehlende Technik, sondern fehlende Fokussierung.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Viele Unternehmen spüren, dass KI relevant wird. Gleichzeitig fehlt oft ein realistischer Startpunkt. Wer ohne Priorisierung beginnt, produziert schnell Aufwand ohne echten Nutzen.",
      },
      {
        type: "heading",
        content: "Nicht mit dem größten, sondern mit dem klarsten Hebel beginnen",
      },
      {
        type: "paragraph",
        content:
          "KI muss am Anfang kein Transformationsprojekt sein. Häufig reicht ein einziger Prozess, der oft wiederkehrt, Zeit kostet und klare Eingaben hat. Genau dort ist der Einstieg am sinnvollsten.",
      },
      {
        type: "paragraph",
        content:
          "Typische Beispiele sind Anfragen klassifizieren, wiederkehrende E-Mails vorstrukturieren, Gesprächsnotizen zusammenfassen oder Informationen aus Formularen aufbereiten.",
      },
      {
        type: "heading",
        content: "Drei Kriterien für einen guten ersten Anwendungsfall",
      },
      {
        type: "paragraph",
        content:
          "Ein guter KI-Use-Case ist nicht spektakulär. Er ist verständlich, messbar und in den bestehenden Alltag integrierbar.",
      },
      {
        type: "list",
        items: [
          "Der Prozess tritt regelmäßig auf.",
          "Die Aufgabe ist heute bereits manuell lösbar und klar beschrieben.",
          "Der Nutzen lässt sich an Zeit, Qualität oder Reaktionsgeschwindigkeit erkennen.",
        ],
      },
      { type: "heading", content: "Warum viele KI-Projekte zu früh scheitern" },
      {
        type: "paragraph",
        content:
          "In vielen Unternehmen wird zuerst über Tools gesprochen. Tatsächlich müsste zuerst über Prozesslogik gesprochen werden. Wenn Eingaben unsauber, Zuständigkeiten unklar oder Datenquellen chaotisch sind, hilft auch das beste Modell nur begrenzt.",
      },
      {
        type: "paragraph",
        content:
          "KI entfaltet Wirkung dort, wo ein Prozess bereits zumindest grob strukturiert ist. Deshalb geht erfolgreicher Einstieg fast immer mit Prozessklarheit einher.",
      },
      { type: "heading", content: "Ein pragmatischer Einführungsweg" },
      {
        type: "paragraph",
        content:
          "Sinnvoll ist ein schrittweiser Aufbau. Zuerst ein klar begrenzter Pilot. Danach Messung. Erst wenn Nutzen sichtbar ist, folgt die Ausweitung auf weitere Abläufe oder Systeme.",
      },
      {
        type: "list",
        items: [
          "Pilotprozess auswählen.",
          "Eingaben und gewünschte Ergebnisse definieren.",
          "KI in einen bestehenden Ablauf integrieren.",
          "Ergebnisse mit menschlicher Kontrolle prüfen.",
          "Erst dann weitere Schritte automatisieren.",
        ],
      },
      {
        type: "quote",
        content:
          "Der richtige KI-Einstieg fühlt sich selten futuristisch an. Er fühlt sich vor allem sinnvoll an: weniger Aufwand, schnellere Reaktion, bessere Struktur.",
      },
    ],
  },
  {
    slug: "ki-integration-ohne-chaos",
    title:
      "KI-Integration ohne Chaos: So führen Unternehmen neue Systeme sauber ein",
    category: "KI & Automatisierung",
    date: "10. April 2026",
    dateIso: "2026-04-10",
    readingTime: "9 min",
    excerpt:
      "Neue KI Systeme scheitern selten an der Technik allein. Meist fehlt ein sauberer Einführungsweg, der Prozesse, Rollen und Qualität von Anfang an mitdenkt.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Viele KI Einführungen starten mit Begeisterung und enden in Unsicherheit. Nicht weil das Potenzial fehlt, sondern weil niemand sauber definiert hat, wo das System eingebunden wird, wer verantwortlich ist und wie Ergebnisse bewertet werden.",
      },
      { type: "heading", content: "Was vor dem Go live geklärt sein muss" },
      {
        type: "list",
        items: [
          "Welcher Prozess konkret verbessert werden soll.",
          "Welche Eingaben das System erhält.",
          "Welche Ergebnisse erwartet werden.",
          "Wer kontrolliert, korrigiert und freigibt.",
          "Wie Nutzen und Qualität gemessen werden.",
        ],
      },
      { type: "heading", content: "Warum Schnittstellen wichtiger sind als Features" },
      {
        type: "paragraph",
        content:
          "In der Praxis entscheidet selten das Modell allein über Erfolg, sondern die Einbettung in echte Abläufe. Ein KI System muss an der richtigen Stelle Informationen erhalten, Ergebnisse zurückgeben und in bestehende Rollen passen. Genau an diesen Übergängen entstehen sonst Chaos und Doppelarbeit.",
      },
      { type: "heading", content: "Wie eine saubere Einführung aussieht" },
      {
        type: "paragraph",
        content:
          "Sinnvoll ist ein begrenzter Start mit wenigen Beteiligten, klarer Verantwortung und messbaren Qualitätskriterien. Erst wenn der Ablauf stabil ist, werden Umfang, Datenquellen und Handlungsfreiheit erweitert.",
      },
      {
        type: "quote",
        content:
          "Gute KI Integration wirkt im Alltag nicht spektakulär. Sie wirkt vor allem ruhig, sauber und verlässlich.",
      },
    ],
  },
  {
    slug: "kontaktformulare-die-anfragen-besser-machen",
    title:
      "Warum gute Kontaktformulare oft mehr bewirken als ein weiterer Sales-Call",
    category: "Prozesse",
    date: "09. April 2026",
    dateIso: "2026-04-09",
    readingTime: "6 min",
    excerpt:
      "Viele Anfragen scheitern nicht am Interesse, sondern an Reibung. Ein gutes Formular kann genau diese Reibung reduzieren.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Kontaktformulare werden oft als Pflichtbaustein behandelt. Dabei sind sie in vielen Unternehmen ein zentrales Übergabestück zwischen Aufmerksamkeit und echtem Vertrieb.",
      },
      { type: "heading", content: "Zu wenig Struktur erzeugt Folgeaufwand" },
      {
        type: "paragraph",
        content:
          "Wenn Formulare nur Name, E-Mail und Freitext abfragen, fehlt dem Team später fast immer wichtige Information. Das führt zu Rückfragen, längeren Reaktionszeiten und schwächerer Qualifizierung.",
      },
      { type: "heading", content: "Das Ziel ist nicht Länge, sondern Relevanz" },
      {
        type: "paragraph",
        content:
          "Ein gutes Formular fragt nicht viel ab, sondern das Richtige. Es strukturiert den ersten Kontakt so, dass die Weiterverarbeitung einfacher wird, ohne den Nutzer unnötig auszubremsen.",
      },
      {
        type: "list",
        items: [
          "Anliegen und Kontext früh erfassen.",
          "Relevante Auswahlfelder gezielt einsetzen.",
          "Den nächsten Schritt bereits im Formular vorbereiten.",
        ],
      },
      { type: "heading", content: "Formulare können Teil eines Prozesses sein" },
      {
        type: "paragraph",
        content:
          "Besonders wirksam werden Formulare dann, wenn sie nicht isoliert enden. Eine automatische Zuordnung, Vorqualifizierung oder direkte Terminlogik spart intern Zeit und verbessert extern das Erlebnis.",
      },
      {
        type: "quote",
        content:
          "Ein gutes Kontaktformular ist kein Detail. Es ist oft der Anfang eines besseren Vertriebsprozesses.",
      },
    ],
  },
  {
    slug: "leads-automatisieren-website-crm-ki",
    title:
      "Leads automatisieren: Wie Website, CRM und KI zusammenarbeiten sollten",
    category: "Prozesse",
    date: "08. April 2026",
    dateIso: "2026-04-08",
    readingTime: "8 min",
    excerpt:
      "Leadgenerierung endet nicht beim Formular. Erst wenn Website, CRM und KI sauber zusammenspielen, entstehen schnelle Reaktion, bessere Qualifizierung und weniger manueller Aufwand.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Viele Unternehmen investieren in Sichtbarkeit, verlieren aber Wirkung zwischen Anfrage und Bearbeitung. Genau dort entsteht ein großer Hebel: Wenn Website, CRM und KI als zusammenhängender Prozess gedacht werden, sinken Reaktionszeiten und die Qualität der Übergabe steigt.",
      },
      { type: "heading", content: "Die Rolle der Website" },
      {
        type: "paragraph",
        content:
          "Die Website muss den Erstkontakt nicht nur einsammeln, sondern sinnvoll strukturieren. Gute Formulare, klare Leistungsseiten und passende Handlungsaufforderungen sorgen dafür, dass Anfragen bereits mit Kontext eintreffen.",
      },
      { type: "heading", content: "Die Rolle des CRM" },
      {
        type: "paragraph",
        content:
          "Das CRM wird dann zur operativen Schaltstelle. Kontakte, Status, Verantwortlichkeiten und nächste Schritte müssen sauber nachvollziehbar sein. Fehlt diese Struktur, verpufft selbst ein hoher Anfrageeingang schnell.",
      },
      { type: "heading", content: "Die Rolle der KI" },
      {
        type: "paragraph",
        content:
          "KI kann Anfragen vorqualifizieren, zusammenfassen, priorisieren oder passende Reaktionsentwürfe vorbereiten. Damit unterstützt sie nicht irgendeinen abstrakten Innovationsgedanken, sondern einen konkreten Vertriebsfluss.",
      },
      {
        type: "list",
        items: [
          "Anfrage kommt strukturiert über die Website hinein.",
          "CRM übernimmt Zuordnung und Nachverfolgung.",
          "KI bereitet Kontext, Priorität und Antwort vor.",
          "Das Team reagiert schneller und konsistenter.",
        ],
      },
      {
        type: "quote",
        content:
          "Leads werden nicht durch ein einzelnes Tool gut verarbeitet, sondern durch ein System, in dem Übergänge sauber funktionieren.",
      },
    ],
  },
  {
    slug: "autonome-systeme-im-unternehmen",
    title:
      "Autonome Systeme im Unternehmen: Wann sie sinnvoll sind und wann nicht",
    category: "Systeme",
    date: "07. April 2026",
    dateIso: "2026-04-07",
    readingTime: "8 min",
    excerpt:
      "Autonome Systeme klingen attraktiv, sind aber nicht in jedem Kontext sinnvoll. Entscheidend ist, ob Regeln, Daten und Verantwortung klar genug definiert sind.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Autonomie ist in Unternehmen kein Selbstzweck. Sie lohnt sich nur dort, wo Aufgaben häufig auftreten, Entscheidungen entlang klarer Kriterien getroffen werden können und Risiken beherrschbar bleiben.",
      },
      { type: "heading", content: "Wann autonome Systeme Sinn ergeben" },
      {
        type: "list",
        items: [
          "Bei wiederkehrenden operativen Abläufen.",
          "Wenn Eingaben und Ausnahmen gut beschreibbar sind.",
          "Wenn Geschwindigkeit einen echten Wettbewerbsvorteil erzeugt.",
          "Wenn menschliche Kontrolle an definierten Punkten erhalten bleibt.",
        ],
      },
      { type: "heading", content: "Wann Vorsicht sinnvoll ist" },
      {
        type: "paragraph",
        content:
          "Sobald Entscheidungen rechtlich, finanziell oder reputationsseitig hohe Folgen haben, sollte Autonomie eng begrenzt bleiben. Das gilt auch dann, wenn Datenlage, Prozessqualität oder Verantwortlichkeiten intern noch nicht stabil sind.",
      },
      { type: "heading", content: "Die realistische Zielperspektive" },
      {
        type: "paragraph",
        content:
          "Für viele Unternehmen ist teilautonome Unterstützung der richtige Schritt. Systeme übernehmen Vorbereitung, Einordnung oder Auslösung, während Menschen Freigaben, Ausnahmen und sensible Kommunikation behalten. Genau daraus kann später kontrollierte Autonomie entstehen.",
      },
      {
        type: "quote",
        content:
          "Autonomie ist dann wertvoll, wenn sie nicht blind ersetzt, sondern verlässlich entlastet.",
      },
    ],
  },
  {
    slug: "inhalte-fuer-google-und-llms",
    title:
      "Inhalte für Google und LLMs: Wie Unternehmensseiten verständlich und zitierbar werden",
    category: "Strategie",
    date: "06. April 2026",
    dateIso: "2026-04-06",
    readingTime: "8 min",
    excerpt:
      "Gute Unternehmensinhalte müssen heute nicht nur für Suchmaschinen, sondern auch für KI Systeme verständlich sein. Klarheit, Struktur und inhaltliche Präzision werden damit noch wichtiger.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Content wird nicht mehr nur von Menschen und klassischen Suchmaschinen gelesen. Auch KI Systeme ziehen Inhalte heran, um Antworten zu formulieren, Themen einzuordnen und Quellen zu bewerten. Dadurch ändern sich die Anforderungen an gute Unternehmensseiten spürbar.",
      },
      { type: "heading", content: "Was Inhalte maschinenverständlich macht" },
      {
        type: "list",
        items: [
          "Klare Seitenstruktur mit eindeutigen Überschriften.",
          "Konkrete Aussagen statt vager Marketingphrasen.",
          "Saubere Begriffe für Leistungen, Probleme und Zielgruppen.",
          "Antworten auf echte Fragen entlang klarer Suchintention.",
        ],
      },
      { type: "heading", content: "Warum das auch klassisches SEO verbessert" },
      {
        type: "paragraph",
        content:
          "Was für LLMs verständlich ist, ist meist auch für Nutzer und Suchmaschinen besser nutzbar. Seiten mit klaren Aussagen, nachvollziehbarer Gliederung und konkretem Nutzen werden leichter eingeordnet, häufiger zitiert und schneller verstanden.",
      },
      { type: "heading", content: "Was Unternehmen vermeiden sollten" },
      {
        type: "paragraph",
        content:
          "Unpräzise Schlagworte, überladene Leistungsbeschreibungen und austauschbare Claim Sprache wirken modern, liefern aber oft wenig belastbare Information. Genau das schwächt Sichtbarkeit und reduziert die Chance, als relevante Quelle wahrgenommen zu werden.",
      },
      {
        type: "quote",
        content:
          "Gute Inhalte gewinnen heute doppelt: Sie helfen Menschen schneller und sie helfen Systemen, ein Unternehmen richtig einzuordnen.",
      },
    ],
  },
  {
    slug: "was-moderne-website-leisten-muss",
    title: "Was eine moderne Website heute wirklich leisten muss",
    category: "Websites",
    date: "04. April 2026",
    dateIso: "2026-04-04",
    readingTime: "7 min",
    excerpt:
      "Moderne Websites werden nicht an Effekten gemessen, sondern an Klarheit, Geschwindigkeit und ihrer Fähigkeit, Besucher in konkrete nächste Schritte zu führen.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Der Begriff modern wird oft rein visuell verstanden. Für Unternehmen ist aber entscheidend, ob eine Website technisch sauber, strategisch klar und langfristig wartbar ist.",
      },
      { type: "heading", content: "Geschwindigkeit ist kein Extra" },
      {
        type: "paragraph",
        content:
          "Ladezeit beeinflusst den ersten Eindruck massiv. Eine langsame Seite wirkt veraltet, selbst wenn das Design hochwertig ist.",
      },
      {
        type: "paragraph",
        content:
          "Moderne Websites müssen schnell laden, sauber auf mobilen Geräten funktionieren und auch bei schwächerer Verbindung stabil bleiben.",
      },
      { type: "heading", content: "Mobile Nutzung ist der Normalfall" },
      {
        type: "paragraph",
        content:
          "Viele Unternehmensseiten werden mobil geprüft, noch bevor ein Desktop zum Einsatz kommt. Wer mobil nur verkleinert statt wirklich gestaltet, verschenkt Vertrauen.",
      },
      { type: "heading", content: "Klarheit schlägt Vollständigkeit" },
      {
        type: "paragraph",
        content:
          "Nicht jede Information gehört sofort auf die Startseite. Gute Websites priorisieren. Sie zeigen zuerst Relevanz und vertiefen Details erst dort, wo echtes Interesse besteht.",
      },
      {
        type: "list",
        items: [
          "Startseite für Orientierung.",
          "Leistungsseiten für Argumentation.",
          "Kontaktseite für reibungsarmen Abschluss.",
        ],
      },
      { type: "heading", content: "Wartbarkeit wird oft unterschätzt" },
      {
        type: "paragraph",
        content:
          "Eine Website ist kein einmaliges Designobjekt. Inhalte ändern sich, neue Seiten kommen hinzu, technische Anforderungen wachsen. Deshalb muss die Grundlage sauber aufgebaut sein.",
      },
      {
        type: "paragraph",
        content:
          "Komponentenlogik, klare Inhaltsstruktur und technisch wartbarer Code sind keine Luxusfragen, sondern betriebliche Vernunft.",
      },
      {
        type: "quote",
        content:
          "Modern ist eine Website dann, wenn sie heute überzeugt und morgen noch sauber weiterentwickelt werden kann.",
      },
    ],
  },
  {
    slug: "standardtools-oder-individuelle-loesung",
    title:
      "Wann sich eine individuelle digitale Lösung mehr lohnt als ein Standardtool",
    category: "Systeme",
    date: "30. März 2026",
    dateIso: "2026-03-30",
    readingTime: "8 min",
    excerpt:
      "Wann reicht ein fertiges Tool — und wann braucht es eine eigene Lösung? Eine ehrliche Einschätzung ohne Verkaufsinteresse.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Nicht jedes Problem braucht eigene Software. Aber manche Unternehmensrealitäten lassen sich auf Dauer nur unnatürlich in bestehende Tools pressen.",
      },
      { type: "heading", content: "Der Wendepunkt kommt meist schleichend" },
      {
        type: "paragraph",
        content:
          "Zu Beginn wirken Standardlösungen schnell und pragmatisch. Später häufen sich Workarounds, Zusatztools und manuelle Zwischenschritte. Genau dann kippt das Verhältnis von Einfachheit zu Aufwand.",
      },
      { type: "heading", content: "Drei typische Warnsignale" },
      {
        type: "paragraph",
        content:
          "Eine individuelle Lösung lohnt sich selten aus Prestigegründen, sondern aus betrieblicher Notwendigkeit.",
      },
      {
        type: "list",
        items: [
          "Das Team umgeht das Tool regelmäßig mit eigenen Ersatzprozessen.",
          "Wichtige Abläufe lassen sich nicht sauber abbilden.",
          "Daten müssen mehrfach übertragen oder gepflegt werden.",
        ],
      },
      { type: "heading", content: "Nicht alles neu bauen" },
      {
        type: "paragraph",
        content:
          "Oft ist nicht ein komplettes eigenes System nötig, sondern ein gezielter digitaler Baustein: eine Integrationsschicht, ein internes Dashboard oder ein klarer Spezialprozess. Genau diese Zwischenebene wird häufig unterschätzt.",
      },
      {
        type: "quote",
        content:
          "Individuelle Lösungen lohnen sich dann, wenn sie Komplexität nicht erhöhen, sondern endlich sinnvoll ordnen.",
      },
    ],
  },
  {
    slug: "prozesse-zuerst-optimieren",
    title:
      "Welche digitalen Prozesse in Unternehmen zuerst optimiert werden sollten",
    category: "Prozesse",
    date: "28. März 2026",
    dateIso: "2026-03-28",
    readingTime: "9 min",
    excerpt:
      "Prozessoptimierung beginnt nicht mit Tools, sondern mit dem Verständnis, welche Schritte tatsächlich Wert erzeugen — und welche nur Zeit kosten.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "quote",
        content:
          "Digitalisierung scheitert selten daran, dass es keine Tools gibt. Sie scheitert viel häufiger daran, dass die falschen Prozesse zuerst angegangen werden.",
      },
      {
        type: "heading",
        content: "Mit Prozessen starten, die täglich Reibung erzeugen",
      },
      {
        type: "paragraph",
        content:
          "Der beste Startpunkt ist selten der spannendste, sondern der nervigste. Prozesse mit vielen Wiederholungen, Rückfragen oder Medienbrüchen sind meist die wirtschaftlich sinnvollsten Kandidaten.",
      },
      {
        type: "list",
        items: [
          "Terminabstimmung",
          "Anfrageannahme und Weiterleitung",
          "Standardkommunikation per E-Mail",
          "Datenübertragung zwischen Tools",
        ],
      },
      { type: "heading", content: "Sichtbarkeit vor Komplexität" },
      {
        type: "paragraph",
        content:
          "Wer zuerst interne Spezialfälle digitalisiert, baut oft im Verborgenen. Besser ist ein Prozess, bei dem das Team den Nutzen schnell spürt. Das schafft Akzeptanz und Momentum.",
      },
      {
        type: "heading",
        content: "Nicht jeden manuellen Schritt sofort abschaffen",
      },
      {
        type: "paragraph",
        content:
          "Gerade am Anfang ist teilautomatisierte Unterstützung oft besser als Vollautomatisierung. Ein sauber vorbereiteter Entwurf, eine Vorauswahl oder eine automatische Sortierung kann bereits einen großen Unterschied machen.",
      },
      { type: "heading", content: "Eine sinnvolle Reihenfolge" },
      {
        type: "paragraph",
        content:
          "In vielen Unternehmen bewährt sich eine einfache Priorisierung: zuerst Kommunikation, dann Koordination, danach Datentransfer und erst später komplexe Entscheidungslogik.",
      },
      {
        type: "paragraph",
        content:
          "So entsteht eine belastbare Grundlage, auf der später auch KI-Funktionen wirklich sinnvoll aufsetzen können.",
      },
      {
        type: "quote",
        content:
          "Wer die Reihenfolge richtig wählt, erlebt Digitalisierung nicht als Projektlast, sondern als spürbare operative Entlastung.",
      },
    ],
  },
  {
    slug: "digitalisierung-jenseits-social-media",
    title: "Warum Digitalisierung nicht bei Social Media aufhört",
    category: "Strategie",
    date: "20. März 2026",
    dateIso: "2026-03-20",
    readingTime: "6 min",
    excerpt:
      "Viele Unternehmen setzen Digitalisierung mit Social Media gleich. Dabei ist das nur die sichtbarste Schicht eines viel tieferen Prozesses.",
    image: "/images/projects/demnaechst.png",
    author: AUTHOR,
    available: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Viele Unternehmen setzen Digitalisierung mit Reichweite gleich. Dabei entsteht echter Fortschritt meist nicht nur dort, wo man sichtbar ist, sondern dort, wo man intern klarer und effizienter arbeitet.",
      },
      { type: "heading", content: "Sichtbarkeit ist nur die Oberfläche" },
      {
        type: "paragraph",
        content:
          "Social Media kann Aufmerksamkeit erzeugen. Es ersetzt aber weder eine starke Website noch saubere Prozesse. Wer außen modern wirkt, innen aber manuell und unstrukturiert arbeitet, verliert schnell an Effizienz.",
      },
      { type: "heading", content: "Digitale Reife zeigt sich in Übergängen" },
      {
        type: "paragraph",
        content:
          "Entscheidend ist, was nach der Aufmerksamkeit passiert. Wie wird eine Anfrage aufgenommen? Wie schnell wird reagiert? Wie sauber werden Informationen weiterverarbeitet?",
      },
      {
        type: "paragraph",
        content:
          "Genau in diesen Übergängen trennt sich digitale Inszenierung von digitaler Substanz.",
      },
      { type: "heading", content: "Vier Ebenen echter Digitalisierung" },
      {
        type: "paragraph",
        content:
          "Ein belastbarer digitaler Auftritt entsteht erst dann, wenn mehrere Ebenen zusammenspielen.",
      },
      {
        type: "list",
        items: [
          "Sichtbarkeit: Website, Suchbarkeit, Social Media.",
          "Vertrauen: klare Botschaft, Referenzen, Professionalität.",
          "Prozess: strukturierte Anfragewege und saubere Abläufe.",
          "System: verknüpfte Tools, Datenfluss und Automatisierung.",
        ],
      },
      { type: "heading", content: "Warum das strategisch relevant ist" },
      {
        type: "paragraph",
        content:
          "Unternehmen, die Digitalisierung nur als Marketingkanal verstehen, verschenken den größten Hebel. Die eigentliche Skalierung entsteht dort, wo Außenwirkung und operative Struktur ineinandergreifen.",
      },
      {
        type: "quote",
        content:
          "Social Media kann ein guter Anfang sein. Eine digitale Unternehmensstruktur beginnt aber erst dort, wo Sichtbarkeit in funktionierende Prozesse übergeht.",
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(currentSlug: string, count = 3): BlogPost[] {
  return POSTS.filter((p) => p.slug !== currentSlug).slice(0, count);
}
