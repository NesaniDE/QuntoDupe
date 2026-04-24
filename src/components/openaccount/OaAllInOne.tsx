import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";

type Service = {
  title: string;
  body: string;
  img: string;
  span: string;
  href: string;
};

const SERVICES: Service[] = [
  {
    title: "Websites",
    body: "Moderne, schnell ladende Websites – technisch sauber, auf Conversion ausgerichtet und bereit für SEO.",
    img: "/images/services/leistung-websites.png",
    span: "lg:col-span-4",
    href: "/financing",
  },
  {
    title: "Social Media & Online-Präsenz",
    body: "Konsistente Markenpräsenz über Kanäle hinweg – mit Inhalten, die ziehen, statt nur sichtbar zu sein.",
    img: "/images/oa-34667-2cb06cc635.avif",
    span: "lg:col-span-4",
    href: "/social-media",
  },
  {
    title: "KI-Workflows & Automatisierung",
    body: "Wiederkehrende Prozesse in automatisierte Abläufe überführen. Weniger Fleißarbeit, mehr Kapazität fürs Kerngeschäft.",
    img: "/images/services/leistung-ki-workflows.png",
    span: "lg:col-span-4",
    href: "/ki-workflows",
  },
  {
    title: "KI-Assistenten & Chatbots",
    body: "Eigene Assistenten und Chatbots, die Routineanfragen übernehmen, 24/7 antworten und Ihr Team entlasten.",
    img: "/images/services/leistung-ki-assistenten.png",
    span: "lg:col-span-4",
    href: "/ki-assistenten",
  },
  {
    title: "Autonome Agenten",
    body: "Systeme, die selbstständig handeln: beobachten, entscheiden, ausführen. Aus klaren Zielen werden messbare Resultate.",
    img: "/images/services/leistung-autonome-agenten.png",
    span: "lg:col-span-4",
    href: "/autonome-agenten",
  },
  {
    title: "Individuelle Systemarchitektur",
    body: "Maßgeschneiderte Softwarelösungen mit klarer Architektur – dokumentiert, wartbar und gebaut, um zu skalieren.",
    img: "/images/services/leistung-systemarchitektur.png",
    span: "lg:col-span-4",
    href: "/systemarchitektur",
  },
];

export function OaAllInOne() {
  return (
    <section className="bg-[#050505] text-white">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-32">
        <h2 className="font-sans font-semibold text-[40px] md:text-[56px] lg:text-[72px] leading-[1.03] tracking-[-0.02em] max-w-[16ch]">
          Leistungen in Übersicht
        </h2>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 md:gap-6">
          {SERVICES.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className={[
                "group rounded-2xl md:rounded-3xl bg-[#111] border border-white/5 p-6 md:p-8 flex flex-col min-h-[380px] hover:border-white/20 hover:bg-[#141414] transition",
                s.span,
              ].join(" ")}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-sans font-semibold text-[22px] md:text-[26px] leading-[1.2]">
                  {s.title}
                </h3>
                <ArrowUpRightIcon className="w-5 h-5 text-white/50 group-hover:text-white transition shrink-0 mt-1" />
              </div>
              <p className="mt-3 text-[14px] leading-[1.55] text-white/70 max-w-[40ch]">
                {s.body}
              </p>
              <div className="mt-auto pt-8 relative aspect-[16/10]">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  sizes="(min-width:1024px) 420px, 100vw"
                  className="object-contain object-bottom"
                />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 md:mt-10">
          <article
            className="rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
            style={{
              background: "linear-gradient(135deg,#1A3A1F 0%,#0E1F12 100%)",
            }}
          >
            <div>
              <p className="text-[13px] text-white/80 uppercase tracking-wider">
                Unverbindliches Erstgespräch
              </p>
              <h3 className="mt-3 font-sans font-semibold text-[28px] md:text-[36px] leading-[1.1]">
                Projekt anfragen
              </h3>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 rounded-full bg-white text-[#050505] text-[15px] font-semibold px-5 py-3 hover:bg-white/90 transition"
            >
              Jetzt starten
              <ArrowUpRightIcon className="w-4 h-4" />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
