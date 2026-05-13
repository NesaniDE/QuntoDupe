import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BASE_URL } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogArticle } from "@/components/blog/BlogArticle";
import { BlogCta } from "@/components/blog/BlogCta";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { POSTS, getPost, getRelatedPosts, type BlogPost } from "@/data/blog";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const url = `${BASE_URL}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: `${post.title} | NESANI`,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.dateIso,
      authors: [post.author],
      images: [{ url: post.image }],
    },
  };
}

/** Extrahiert Klartext aus den Sections (für articleBody/wordCount). */
function extractText(post: BlogPost): string {
  return post.sections
    .map((s) => {
      if (s.type === "paragraph") return s.content;
      if (s.type === "heading") return s.content;
      if (s.type === "list") return s.items.join(" ");
      if (s.type === "quote") return s.content;
      return "";
    })
    .filter(Boolean)
    .join("\n\n");
}

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const related = getRelatedPosts(slug, 3);

  const url = `${BASE_URL}/blog/${post.slug}`;
  const articleBody = extractText(post);
  const wordCount = countWords(articleBody);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    headline: post.title,
    name: post.title,
    description: post.excerpt,
    abstract: post.excerpt,
    image: `${BASE_URL}${post.image}`,
    datePublished: post.dateIso,
    dateModified: post.dateIso,
    author: {
      "@type": "Person",
      "@id": `${BASE_URL}/ueber-uns#nedim-hasani`,
      name: post.author,
      url: `${BASE_URL}/ueber-uns`,
    },
    publisher: { "@id": `${BASE_URL}/#organization` },
    articleSection: post.category,
    keywords: [post.category, "Nesani", "Schwäbisch Gmünd"].join(", "),
    wordCount,
    timeRequired: `PT${post.readingTime.replace(/[^0-9]/g, "")}M`,
    articleBody,
    inLanguage: "de-DE",
    isAccessibleForFree: true,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", "p"],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbJsonLd
        trail={[
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />
      <Header />
      <main>
        <BlogArticle post={post} related={related} />
        <BlogCta />
      </main>
      <Footer />
    </>
  );
}
