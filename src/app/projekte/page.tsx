import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectsHero } from "@/components/projects/ProjectsHero";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { BlogCta } from "@/components/blog/BlogCta";

export const metadata: Metadata = {
  title: "Projekte – Nesani",
  description:
    "Eine Auswahl aktueller Projekte aus Websites, Social Media, KI-Workflows, Assistenten, autonomen Agenten und Systemarchitektur.",
};

export default function ProjektePage() {
  return (
    <>
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
