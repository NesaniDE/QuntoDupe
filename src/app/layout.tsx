import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nesani | Websites, KI-Workflows und autonome Agenten",
  description:
    "Nesani baut individuelle Websites, KI-Workflows und autonome Agenten für Unternehmen — sichtbar, effizient, autonom.",
  icons: {
    icon: "/seo/favicon.png",
    apple: "/seo/apple-touch-icon.png",
  },
  openGraph: {
    title: "Nesani – Sichtbarer. Effizienter. Autonomer.",
    description:
      "Websites, KI-Workflows und autonome Agenten aus einer Hand.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
