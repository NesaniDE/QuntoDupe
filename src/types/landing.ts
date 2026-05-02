export type LpIconName =
  | "code"
  | "gauge"
  | "target"
  | "spark"
  | "flow"
  | "activity"
  | "magnifier"
  | "cog"
  | "clipboard"
  | "book"
  | "plug"
  | "network"
  | "eye"
  | "compass"
  | "layers"
  | "layout"
  | "palette"
  | "calendar"
  | "key"
  | "shield"
  | "users"
  | "rocket"
  | "checklist";

export type LpFeature = {
  icon: LpIconName;
  title: string;
  body: string;
};

export type LpStat = {
  big: string;
  label: string;
};

export type LpHeroLayout = "bleed" | "split";

export type LandingPage = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    headingLines: [string, string];
    subline: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    image: string;
    imageMobile: string;
    layout: LpHeroLayout;
  };
  stats: [LpStat, LpStat, LpStat];
  features: {
    eyebrow: string;
    headingLines: [string, string];
    items: LpFeature[];
    moreInfoHref: string;
  };
  checklist: {
    eyebrow: string;
    headingLines: string[];
    body: string;
    formSource: string;
    sideTitle: string;
    sideBody: string;
  };
  finalCta: {
    heading: string;
    body: string;
    ctaLabel: string;
  };
};
