import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/icons";

type BentoCard = {
  title: string;
  body?: string;
  image?: string;
  imageAlt?: string;
  href: string;
  className: string;
  bg?: string;
  imagePos?: "top" | "bottom" | "right" | "full";
};

const CARDS: BentoCard[] = [
  {
    title: "Websites",
    body: "Moderne, schnell ladende Websites – technisch sauber, auf Conversion ausgerichtet und bereit für SEO.",
    image: "/images/services/leistung-websites.png",
    imageAlt: "Websites",
    href: "/leistungen/websites",
    className: "md:col-span-4 lg:col-span-4 md:row-span-2",
    imagePos: "bottom",
  },
  {
    title: "KI Workflows",
    body: "Wiederkehrende Prozesse in automatisierte Abläufe überführen. Weniger Fleißarbeit, mehr Kapazität fürs Kerngeschäft.",
    image: "/images/services/leistung-ki-workflows.png",
    imageAlt: "KI Workflows",
    href: "/leistungen/ki-workflows",
    className: "md:col-span-4 lg:col-span-4 md:row-span-2",
    imagePos: "bottom",
  },
  {
    title: "Autonome Agenten",
    body: "Systeme, die selbstständig handeln: beobachten, entscheiden, ausführen. Aus klaren Zielen werden messbare Resultate.",
    image: "/images/services/leistung-autonome-agenten.png",
    imageAlt: "Autonome Agenten",
    href: "/leistungen/autonome-agenten",
    className: "md:col-span-4 lg:col-span-4 md:row-span-2",
    imagePos: "bottom",
  },
  {
    title: "Social Media & Online-Präsenz",
    body: "Konsistente Markenpräsenz über Kanäle hinweg – mit Inhalten, die ziehen, statt nur sichtbar zu sein.",
    image: "/images/services/leistung-social-media.png",
    imageAlt: "Social Media & Online-Präsenz",
    href: "/leistungen/social-media",
    className: "md:col-span-4 lg:col-span-4 md:row-span-2",
    imagePos: "bottom",
  },
  {
    title: "KI-Assistenten & Chatbots",
    body: "Eigene Assistenten und Chatbots, die Routineanfragen übernehmen, 24/7 antworten und Ihr Team entlasten.",
    image: "/images/services/leistung-ki-assistenten.png",
    imageAlt: "KI-Assistenten & Chatbots",
    href: "/leistungen/ki-assistenten",
    className: "md:col-span-4 lg:col-span-4 md:row-span-2",
    imagePos: "bottom",
  },
  {
    title: "Individuelle Systemarchitektur",
    body: "Maßgeschneiderte Softwarelösungen mit klarer Architektur – dokumentiert, wartbar und gebaut, um zu skalieren.",
    image: "/images/services/leistung-systemarchitektur.png",
    imageAlt: "Individuelle Systemarchitektur",
    href: "/leistungen/systemarchitektur",
    className: "md:col-span-4 lg:col-span-4 md:row-span-2",
    imagePos: "bottom",
  },
];

export function FeaturesBento() {
  return (
    <section className="bg-[#050505] text-white pt-20 pb-24 md:pt-24 md:pb-32 px-5 lg:px-12">
      <div className="mx-auto max-w-[1344px]">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <h2 className="font-sans font-semibold text-[40px] sm:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.02em] max-w-[900px]">
            Leistungen
          </h2>
          <a
            href="/leistungen"
            className="inline-flex items-center self-start lg:self-auto rounded-full border border-white/30 text-white text-[15px] font-semibold px-5 py-3 hover:bg-white/10 transition whitespace-nowrap"
          >
            Leistungen ansehen
            <ArrowRightIcon className="ml-2 w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          {CARDS.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className={[
                "group relative overflow-hidden rounded-3xl bg-[#0b0b0b] border border-white/5",
                "col-span-1 flex flex-col",
                "hover:border-white/20 hover:bg-[#111] transition",
                c.className,
                "min-h-[260px]",
              ].join(" ")}
            >
              <div className="p-6 md:p-7 flex items-start justify-between gap-4">
                <h3 className="font-sans font-semibold text-[20px] md:text-[22px] leading-tight">
                  {c.title}
                </h3>
                <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 text-white/80 transition group-hover:bg-white group-hover:text-[#050505] group-hover:border-white">
                  <ArrowUpRightIcon className="w-4 h-4" />
                </span>
              </div>
              {c.body && (
                <p className="px-6 md:px-7 -mt-2 text-white/75 text-[15px] leading-relaxed">
                  {c.body}
                </p>
              )}
              {c.image && (
                <div className="relative aspect-square w-full mt-auto">
                  <Image
                    src={c.image}
                    alt={c.imageAlt ?? ""}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
