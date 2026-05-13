import { BASE_URL } from "@/lib/site";

export type Crumb = { name: string; path: string };

/**
 * Generisches BreadcrumbList-Schema. Path muss mit "/" beginnen.
 * Start ("/") wird automatisch vorangestellt.
 */
export function BreadcrumbJsonLd({ trail }: { trail: Crumb[] }) {
  const all: Crumb[] = [{ name: "Start", path: "/" }, ...trail];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.path === "/" ? BASE_URL : `${BASE_URL}${c.path}`,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
