import type { Metadata } from "next";
import { BASE_URL } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GameSection } from "@/components/game/GameSection";

export const metadata: Metadata = {
  title: "Mini Game — Reflexe. Fokus. Fortschritt.",
  description:
    "Ein kurzer Run im Browser. Springe über Hindernisse, sammle Diamanten, erreiche das Ende. Nur du und das Timing.",
  alternates: { canonical: `${BASE_URL}/game` },
  openGraph: {
    title: "Mini Game — Reflexe. Fokus. Fortschritt. | NESANI",
    description:
      "Ein kurzer Run im Browser. Springe über Hindernisse, sammle Diamanten, erreiche das Ende.",
    url: `${BASE_URL}/game`,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  // Easter-egg / mini game — page is publicly reachable but kept out of
  // search indexes and AI crawlers so it doesn't dilute the brand SERP.
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      "max-snippet": -1,
      "max-image-preview": "none",
    },
  },
};

export default function GamePage() {
  return (
    <>
      <Header />
      <main>
        <GameSection />
      </main>
      <Footer />
    </>
  );
}
