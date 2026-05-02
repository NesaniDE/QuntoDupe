import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LpPageTemplate } from "@/components/lp/LpPageTemplate";
import { getLandingPageBySlug } from "@/lib/landing-pages";

const SLUG = "autonome-agenten";

const lp = getLandingPageBySlug(SLUG);

export const metadata: Metadata = {
  title: lp?.metaTitle ?? "Landingpage",
  description: lp?.metaDescription,
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noarchive: true,
      nosnippet: true,
    },
  },
  openGraph: lp
    ? {
        title: lp.metaTitle,
        description: lp.metaDescription,
        images: [lp.hero.image],
      }
    : undefined,
};

export default function Page() {
  const data = getLandingPageBySlug(SLUG);
  if (!data) notFound();
  return <LpPageTemplate lp={data} />;
}
