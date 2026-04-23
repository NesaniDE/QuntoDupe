import Image from "next/image";
import {
  SiGithub,
  SiVercel,
  SiClaude,
  SiOpenai,
  SiGoogledrive,
  SiGooglecalendar,
  SiGmail,
  SiFigma,
} from "react-icons/si";
import type { IconType } from "react-icons";

type Tool = {
  name: string;
  Icon: IconType;
  color: string;
};

const TOOLS: Tool[] = [
  { name: "GitHub", Icon: SiGithub, color: "#181717" },
  { name: "Vercel", Icon: SiVercel, color: "#000000" },
  { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
  { name: "Claude", Icon: SiClaude, color: "#D97757" },
  { name: "ChatGPT", Icon: SiOpenai, color: "#10A37F" },
  { name: "Gmail", Icon: SiGmail, color: "#EA4335" },
  { name: "Google Kalender", Icon: SiGooglecalendar, color: "#4285F4" },
  { name: "Google Drive", Icon: SiGoogledrive, color: "#0F9D58" },
];

export function Integrations() {
  return (
    <section className="relative overflow-hidden bg-white text-[#050505]">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-14 md:py-20 lg:py-24">
        <div
          className="relative overflow-hidden rounded-[24px] md:rounded-[32px]"
          style={{
            background:
              "linear-gradient(180deg, #F4F1EA 0%, #ECE8DE 100%)",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center px-6 md:px-10 lg:px-16 py-14 md:py-20 lg:py-24 min-h-[460px] lg:min-h-[504px]">
            <div className="lg:col-span-5 lg:pl-4">
              <h2 className="font-sans font-semibold text-[36px] md:text-[44px] lg:text-[56px] leading-[1.05] tracking-[-0.02em]">
                Nahtlos verbunden
              </h2>
              <p className="mt-5 md:mt-6 text-[16px] md:text-[17px] leading-[1.55] text-[#050505]/80 max-w-md">
                Mit allen Tools, Systemen und Schnittstellen, die du brauchst —
                von Code und Deployment bis zu Kommunikation, Kalender und
                Cloud-Speicher. Wir arbeiten dort, wo deine Workflows leben.
              </p>
            </div>

            <div className="lg:col-span-7 relative flex items-center justify-center">
              <div className="relative w-full max-w-[620px] aspect-square">
                <div className="grid h-full w-full grid-cols-3 grid-rows-3 gap-3 md:gap-4">
                  {TOOLS.slice(0, 4).map((t) => (
                    <ToolTile key={t.name} tool={t} />
                  ))}
                  <div className="flex items-center justify-center rounded-2xl bg-[#050505] shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                    <Image
                      src="/images/shm-logo-white.png"
                      alt="SHM"
                      width={96}
                      height={96}
                      className="h-16 w-16 md:h-20 md:w-20 object-contain"
                    />
                  </div>
                  {TOOLS.slice(4).map((t) => (
                    <ToolTile key={t.name} tool={t} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ToolTile({ tool }: { tool: Tool }) {
  const { Icon, name, color } = tool;
  return (
    <div
      className="group flex items-center justify-center rounded-2xl bg-white border border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
      title={name}
      aria-label={name}
    >
      <Icon
        className="h-8 w-8 md:h-10 md:w-10 transition-transform group-hover:scale-105"
        style={{ color }}
      />
    </div>
  );
}
