import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { BASE_URL } from "@/lib/site";
import { CookieBanner } from "@/components/CookieBanner";
import { RouteTransition } from "@/components/RouteTransition";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "NESANI — Digitale Strukturen für moderne Unternehmen",
    template: "%s | NESANI",
  },
  description:
    "Nesani entwickelt digitale Präsenz, KI-Integration und autonome Systeme für Unternehmen mit Anspruch. Aus Schwäbisch Gmünd — für den deutschsprachigen Raum.",
  keywords: [
    "NESANI",
    "digitale Präsenz",
    "Website erstellen",
    "KI-Integration",
    "KI-Automatisierung",
    "autonome Systeme",
    "Webdesign Schwäbisch Gmünd",
    "KI-Agentur",
    "Digitalagentur Baden-Württemberg",
    "Social Media",
    "Chatbot",
    "AI Workflow",
  ],
  authors: [{ name: "Nesani", url: BASE_URL }],
  creator: "Nesani",
  publisher: "Nesani",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "NESANI — Digitale Strukturen für moderne Unternehmen",
    description:
      "Von digitaler Präsenz über KI-Integration bis zu autonomen Systemen: Nesani baut Strukturen, die Unternehmen sichtbarer, effizienter und zukunftsfähiger machen.",
    url: BASE_URL,
    siteName: "NESANI",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "NESANI — Digitale Strukturen für moderne Unternehmen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NESANI — Digitale Strukturen für moderne Unternehmen",
    description:
      "Von digitaler Präsenz über KI-Integration bis zu autonomen Systemen — Nesani baut Strukturen, die Unternehmen sichtbarer machen.",
    images: ["/og-image.svg"],
    creator: "@nesani_de",
    site: "@nesani_de",
  },
  icons: {
    icon: [
      { url: "/icon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#organization`,
  name: "Nesani",
  alternateName: "NESANI",
  url: BASE_URL,
  logo: `${BASE_URL}/icon-512.png`,
  image: `${BASE_URL}/og-image.svg`,
  description:
    "Nesani entwickelt digitale Präsenz, KI-Integration und autonome Systeme für Unternehmen mit Anspruch.",
  email: "info@nesani.de",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Schwäbisch Gmünd",
    postalCode: "73527",
    addressCountry: "DE",
    addressRegion: "Baden-Württemberg",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.7993,
    longitude: 9.7978,
  },
  areaServed: {
    "@type": "Country",
    name: "Deutschland",
  },
  foundingDate: "2026",
  priceRange: "€€",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/nesani.de",
    "https://www.linkedin.com/company/nesani",
    "https://www.tiktok.com/@nesani.de",
    "https://www.facebook.com/profile.php?id=61567359321825",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digitale Leistungen",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website-Entwicklung" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media & Online-Präsenz" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "KI-Workflows & Automatisierung" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "KI-Assistenten & Chatbots" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Autonome Agenten" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Individuelle Systemarchitektur" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <RouteTransition />
        <CookieBanner />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
