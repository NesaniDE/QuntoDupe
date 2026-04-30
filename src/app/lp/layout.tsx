import type { Metadata } from "next";
import type { ReactNode } from "react";

// Landing Pages: nicht in Suche/Sitemap, aber öffentlich erreichbar.
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false, noarchive: true, nosnippet: true },
  },
};

export default function LpLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
