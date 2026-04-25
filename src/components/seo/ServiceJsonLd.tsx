import { BASE_URL } from "@/lib/site";

type Props = {
  name: string;
  description: string;
  slug: string;
};

export function ServiceJsonLd({ name, description, slug }: Props) {
  const url = `${BASE_URL}/leistungen/${slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name,
        description,
        url,
        provider: { "@id": `${BASE_URL}/#organization` },
        areaServed: { "@type": "Country", name: "Deutschland" },
        serviceType: name,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Start",
            item: BASE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Leistungen",
            item: `${BASE_URL}/leistungen`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name,
            item: url,
          },
        ],
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
