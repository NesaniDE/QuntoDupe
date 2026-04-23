import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogFeatured } from "@/components/blog/BlogFeatured";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { BlogCta } from "@/components/blog/BlogCta";
import { POSTS } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog – Nesani",
  description:
    "Perspektiven zu Websites, KI und digitaler Reife. Klare Beiträge ohne Buzzwords – für Unternehmen, die digital substanzvoll wachsen wollen.",
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
