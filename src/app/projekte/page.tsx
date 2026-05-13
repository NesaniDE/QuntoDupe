import type { Metadata } from "next";
import { BASE_URL } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { ProjectsHero } from "@/components/projects/ProjectsHero";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { BlogCta } from "@/components/blog/BlogCta";

export const metadata: Metadata = {
  title: "Projekte — Echte Arbeit, sichtbare Ergebnisse",
  description:
    "Eine Auswahl aktueller Projekte aus Websites, Social Media, KI-Workflows, Assistenten, autonomen Agenten und Systemarchitektur.",
  alternates: { canonical: `${BASE_URL}/projekte` },
  openGraph: {
    title: "Projekte — Echte Arbeit, sichtbare Ergebnisse | NESANI",
    description:
      "Aktuelle und laufende Projekte: je ein Einblick pro Leistung aus der Nesani-Arbeit.",
    url: `${BASE_URL}/projekte`,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function ProjektePage() {
  return (
    <>
      <BreadcrumbJsonLd trail={[{"name":"Projekte","path":"/projekte"}]} />
      <Header />
      <main>
        <ProjectsHero />
        <ProjectsGrid />
        <BlogCta />
      </main>
      <Footer />
    </>
  );
}
