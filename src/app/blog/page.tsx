import type { Metadata } from "next";
import { BASE_URL } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogFeatured } from "@/components/blog/BlogFeatured";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { BlogCta } from "@/components/blog/BlogCta";
import { POSTS } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog — KI, Digitale Präsenz & Automatisierung",
  description:
    "Artikel zu digitaler Präsenz, Prozessautomatisierung, KI und modernen Unternehmensstrukturen. Praxis statt Hype.",
  alternates: { canonical: `${BASE_URL}/blog` },
  openGraph: {
    title: "Blog — KI, Digitale Präsenz & Automatisierung | NESANI",
    description:
      "Praxisnahe Artikel zu Website, KI-Integration und autonomen Unternehmensprozessen.",
    url: `${BASE_URL}/blog`,
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
};

export default function BlogPage() {
  const featured = POSTS.filter((p) => p.available).slice(0, 2);
  const rest = POSTS.filter(
    (p) => !featured.some((f) => f.slug === p.slug),
  );

  return (
    <>
      <Header />
      <main>
        <BlogHero />
        {featured.length > 0 && <BlogFeatured posts={featured} />}
        <BlogGrid posts={rest} />
        <BlogCta />
      </main>
      <Footer />
    </>
  );
}
