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

type Tool = { name: string; Icon: IconType; color: string };

const INNER_RING: Tool[] = [
  { name: "GitHub", Icon: SiGithub, color: "#181717" },
  { name: "Vercel", Icon: SiVercel, color: "#000000" },
  { name: "Claude", Icon: SiClaude, color: "#D97757" },
  { name: "ChatGPT", Icon: SiOpenai, color: "#10A37F" },
];

const OUTER_RING: Tool[] = [
  { name: "Gmail", Icon: SiGmail, color: "#EA4335" },
  { name: "Google Kalender", Icon: SiGooglecalendar, color: "#4285F4" },
  { name: "Google Drive", Icon: SiGoogledrive, color: "#0F9D58" },
  { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
];

type OrbitVisualProps = {
  size?: "default" | "compact";
};

export function OrbitVisual({ size = "default" }: OrbitVisualProps) {
  const compact = size === "compact";
  const maxW = compact ? "max-w-[420px]" : "max-w-[560px]";
  const outerBox = compact
    ? "h-12 w-12 md:h-14 md:w-14"
    : "h-14 w-14 md:h-16 md:w-16";
  const outerIcon = compact
    ? "h-5 w-5 md:h-6 md:w-6"
    : "h-6 w-6 md:h-7 md:w-7";
  const innerBox = compact
    ? "h-10 w-10 md:h-12 md:w-12"
    : "h-12 w-12 md:h-14 md:w-14";
  const innerIcon = compact
    ? "h-4 w-4 md:h-5 md:w-5"
    : "h-5 w-5 md:h-6 md:w-6";
  const centerBox = compact
    ? "h-20 w-20 md:h-24 md:w-24"
    : "h-24 w-24 md:h-28 md:w-28";
  const centerLogo = compact
    ? "h-12 w-12 md:h-14 md:w-14"
    : "h-14 w-14 md:h-16 md:w-16";

  return (
    <div className={`relative w-full ${maxW} aspect-square mx-auto`}>
      <div className="absolute inset-[8%] rounded-full border border-black/10" />
      <div className="absolute inset-[26%] rounded-full border border-black/10" />

      <OrbitRing
        tools={OUTER_RING}
        radius={42}
        durationSec={45}
        direction="reverse"
        offsetDeg={0}
        iconBoxClass={outerBox}
        iconSizeClass={outerIcon}
      />

      <OrbitRing
        tools={INNER_RING}
        radius={24}
        durationSec={32}
        direction="normal"
        offsetDeg={45}
        iconBoxClass={innerBox}
        iconSizeClass={innerIcon}
      />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative">
          <div
            className="absolute inset-0 rounded-full bg-[#050505]/15"
            style={{ animation: "orbit-pulse 2.8s ease-out infinite" }}
          />
          <div
            className={`relative flex ${centerBox} items-center justify-center rounded-full bg-[#050505] shadow-[0_12px_40px_rgba(0,0,0,0.25)]`}
          >
            <Image
              src="/images/shm-logo-white.png"
              alt="SHM"
              width={96}
              height={96}
              className={`${centerLogo} object-contain`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function OrbitRing({
  tools,
  radius,
  durationSec,
  direction,
  offsetDeg,
  iconBoxClass,
  iconSizeClass,
}: {
  tools: Tool[];
  radius: number;
  durationSec: number;
  direction: "normal" | "reverse";
  offsetDeg: number;
  iconBoxClass: string;
  iconSizeClass: string;
}) {
  const spin = direction === "reverse" ? "orbit-spin-reverse" : "orbit-spin";
  const counter = direction === "reverse" ? "orbit-spin" : "orbit-spin-reverse";
  return (
    <div
      className="absolute inset-0"
      style={{ animation: `${spin} ${durationSec}s linear infinite` }}
    >
      {tools.map((t, i) => {
        const angle = (360 / tools.length) * i + offsetDeg;
        const rad = (angle * Math.PI) / 180;
        const x = 50 + radius * Math.cos(rad);
        const y = 50 + radius * Math.sin(rad);
        return (
          <div
            key={t.name}
            className="absolute"
            style={{
              top: `${y}%`,
              left: `${x}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              style={{
                animation: `${counter} ${durationSec}s linear infinite`,
              }}
            >
              <div
                className={`${iconBoxClass} flex items-center justify-center rounded-2xl bg-white border border-black/5 shadow-[0_6px_20px_rgba(0,0,0,0.08)]`}
                aria-label={t.name}
                title={t.name}
              >
                <t.Icon className={iconSizeClass} style={{ color: t.color }} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
