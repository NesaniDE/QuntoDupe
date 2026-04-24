"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRightIcon } from "@/components/icons";

type Tab = {
  key: string;
  label: string;
  title: string;
  copy: string;
  img: string;
};

const TABS: Tab[] = [
  {
    key: "stufe1",
    label: "Stufe 01 · Digitale Präsenz",
    title: "Sichtbar werden, bevor es skaliert.",
    copy: "Website und Markenauftritt als Fundament: moderne, schnelle Umsetzung und eine konsistente Online-Präsenz, auf der alles Weitere aufbauen kann.",
    img: "/images/oa-33408-829a09d824.avif",
  },
  {
    key: "stufe2",
    label: "Stufe 02 · KI-Integration",
    title: "Wiederkehrende Arbeit verschwindet.",
    copy: "KI-Workflows und Assistenten übernehmen Routine – strukturiert, messbar und integriert in die Tools, die Ihr Team ohnehin nutzt.",
    img: "/images/oa-33412-a33120a38f.avif",
  },
  {
    key: "stufe3",
    label: "Stufe 03 · Autonome Systeme",
    title: "Systeme, die eigenständig liefern.",
    copy: "Autonome Agenten und individuelle Systemarchitektur: maßgeschneiderte Software, die selbstständig beobachtet, entscheidet und handelt – mit sauberer Dokumentation und voller Kontrolle.",
    img: "/images/oa-33280-7d5866da7f.avif",
  },
];

export function OaIndividual() {
  const [active, setActive] = useState(0);
  const t = TABS[active];

  return (
    <section className="bg-[#050505] text-white">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <h2 className="font-sans font-semibold text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.02em] max-w-[20ch]">
            Drei Stufen, so individuell wie Ihr Business.
          </h2>
          <a
            href="/kontakt"
            className="inline-flex items-center gap-1.5 rounded-full bg-white text-[#050505] text-[15px] font-semibold px-5 py-3 hover:bg-white/90 transition self-start"
          >
            Projekt anfragen
            <ArrowUpRightIcon className="w-4 h-4" />
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {TABS.map((tb, i) => (
            <button
              key={tb.key}
              onClick={() => setActive(i)}
              className={[
                "rounded-full px-5 py-2.5 text-[14px] font-medium transition",
                i === active
                  ? "bg-white text-[#050505]"
                  : "bg-white/10 text-white hover:bg-white/15",
              ].join(" ")}
            >
              {tb.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5">
            <h3 className="font-sans font-semibold text-[28px] md:text-[34px] leading-[1.15] tracking-[-0.01em] max-w-[18ch]">
              {t.title}
            </h3>
            <p className="mt-5 text-[16px] leading-[1.55] text-white/75 max-w-[50ch]">
              {t.copy}
            </p>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-medium text-white hover:text-white/80 transition"
            >
              Mehr erfahren
              <ArrowUpRightIcon className="w-4 h-4" />
            </a>
          </div>
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden">
              <Image
                key={t.img}
                src={t.img}
                alt={t.label}
                fill
                sizes="(min-width:1024px) 720px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
