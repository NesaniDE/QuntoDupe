import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  BlogArticle,
  BlogHeading,
  BlogList,
  BlogListItem,
  BlogQuote,
} from "@/components/blog/BlogArticle";
import { BlogCta } from "@/components/blog/BlogCta";
import { getPost, getRelatedPosts } from "@/data/blog";

const SLUG = "website-oder-ki-zuerst";

export const metadata: Metadata = {
  title:
    "Website oder KI zuerst? Die richtige Reihenfolge für Unternehmen – Nesani",
  description:
    "Wer Website, Sichtbarkeit und KI gleichzeitig bauen will, verschenkt Wirkung. Warum die Reihenfolge entscheidend ist – und wie sie aussieht.",
};

export default function BlogWebsiteOderKiZuerst() {
  const post = getPost(SLUG);
  if (!post) notFound();
  const related = getRelatedPosts(SLUG, 3);

  return (
    <>
      <Header />
      <main>
        <BlogArticle post={post} related={related}>
          <p>
            Die Entscheidung zwischen Website und KI ist eigentlich eine Frage
            nach digitaler Sequenzierung. Automatisierung auf wackliger
            Grundlage verschärft meist nur die bestehende Verwirrung. Wer nur
            Sichtbarkeit optimiert, aber operative Übergänge ignoriert, lässt
            Chancen liegen. Die gute Nachricht: Es gibt eine belastbare
            Reihenfolge.
          </p>

          <BlogHeading>Warum die Website häufig zuerst kommt</BlogHeading>
          <p>
            Die Website ist für die meisten Unternehmen der erste verlässliche
            Berührungspunkt. Sie vermittelt Positionierung, Angebote,
            Glaubwürdigkeit und den nächsten Handlungsschritt. Ohne diese
            Grundlage erzielt nachgelagerte KI-Integration selten die
            gewünschten Resultate – weil die Botschaft dahinter fehlt.
          </p>
          <BlogList>
            <BlogListItem>
              Klare Botschaft und Positionierung schaffen.
            </BlogListItem>
            <BlogListItem>
              Leistungsseiten mit echter Suchintention aufbauen.
            </BlogListItem>
            <BlogListItem>
              Kontaktwege und Anfrageprozesse strukturieren.
            </BlogListItem>
            <BlogListItem>
              Erst danach Automatisierung und KI sinnvoll aufsetzen.
            </BlogListItem>
          </BlogList>

          <BlogHeading>Wann KI trotzdem früh Sinn macht</BlogHeading>
          <p>
            Bei hohem Anfragevolumen oder intern blockierenden Prozessen kann
            ein frühes KI-Pilotprojekt wertvoll sein. Besonders dort, wo KI bei
            Qualifizierung, Zusammenfassung, Sortierung oder Wissenszugriff
            konkret entlastet. Entscheidend bleibt: Der Anwendungsfall muss
            klar umrissen sein, nicht diffus „wir wollen auch KI machen".
          </p>

          <BlogHeading>Die bessere Denkweise</BlogHeading>
          <p>
            Nicht die Frage „Website oder KI", sondern „welcher digitale
            Bereich bremst aktuell am meisten" führt zum Ziel. Üblicherweise
            folgt die Logik: Sichtbarkeit aufbauen → strukturierte
            Anfrageprozesse → intelligente Verarbeitung. Wer diesen Weg
            diszipliniert geht, erntet an jeder Stufe messbaren Nutzen –
            anstatt alles parallel halb fertigzubauen.
          </p>

          <BlogQuote>
            Wachstum entsteht nicht durch möglichst viele digitale Themen
            gleichzeitig, sondern durch die richtige Reihenfolge der richtigen
            Themen.
          </BlogQuote>

          <p>
            Die Reihenfolge ist dabei kein Dogma. Sie ist ein Arbeitsprinzip:
            zuerst das, was fehlt, dann das, was skaliert. In dieser Ordnung
            wird aus Digitalisierung kein Projekt mit offenem Ende, sondern ein
            System mit Hebel.
          </p>
        </BlogArticle>
        <BlogCta />
      </main>
      <Footer />
    </>
  );
}
