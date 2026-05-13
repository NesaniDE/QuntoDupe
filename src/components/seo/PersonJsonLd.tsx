import { BASE_URL } from "@/lib/site";

/**
 * Strukturierte Daten für Nedim Hasani als Gründer von Nesani.
 * Wird auf /ueber-uns ausgespielt. Stellt die Verbindung zwischen Person
 * und Organization über @id her (founder / employee).
 */
export function PersonJsonLd() {
  const personId = `${BASE_URL}/ueber-uns#nedim-hasani`;
  const url = `${BASE_URL}/ueber-uns`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: "Nedim Hasani",
        url,
        jobTitle: "Gründer & Inhaber",
        worksFor: { "@id": `${BASE_URL}/#organization` },
        affiliation: { "@id": `${BASE_URL}/#organization` },
        nationality: { "@type": "Country", name: "Deutschland" },
        knowsAbout: [
          "Webentwicklung",
          "Next.js",
          "TypeScript",
          "KI-Integration",
          "KI-Workflows",
          "KI-Assistenten",
          "Autonome Agenten",
          "Systemarchitektur",
          "Conversion-Optimierung",
          "SEO",
        ],
        knowsLanguage: ["de", "en"],
        sameAs: [
          "https://www.linkedin.com/company/nesani",
          "https://www.instagram.com/nesani.de",
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: "Über uns — Wer hinter Nesani steckt",
        inLanguage: "de-DE",
        isPartOf: { "@id": `${BASE_URL}/#website` },
        about: { "@id": personId },
        mainEntity: { "@id": personId },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
