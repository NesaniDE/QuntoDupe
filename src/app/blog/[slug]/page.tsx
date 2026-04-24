import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BASE_URL } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogArticle } from "@/components/blog/BlogArticle";
import { BlogCta } from "@/components/blog/BlogCta";
import { POSTS, getPost, getRelatedPosts } from "@/data/blog";

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
    title: `${post.title} – Nesani`,
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

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const related = getRelatedPosts(slug, 3);

  return (
    <>
      <Header />
      <main>
        <BlogArticle post={post} related={related} />
        <BlogCta />
      </main>
      <Footer />
    </>
  );
}
