import type { SVGProps } from "react";

export function QontoMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden {...props}>
      <circle cx="24" cy="24" r="24" fill="currentColor" />
      <text
        x="24"
        y="32"
        textAnchor="middle"
        fontFamily="QontoSans, PolySans, sans-serif"
        fontWeight="700"
        fontSize="20"
        fill="#fff"
      >
        Q
      </text>
    </svg>
  );
}

export function ChevronDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden {...props}>
      <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden {...props}>
      <path d="M4 10h12m0 0l-5-5m5 5l-5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowLeftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden {...props}>
      <path d="M16 10H4m0 0l5-5m-5 5l5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowUpRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden {...props}>
      <path d="M6 14L14 6m0 0H8m6 0v6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 2.5l2.9 6.1 6.6.9-4.8 4.6 1.2 6.5L12 17.5l-5.9 3.1 1.2-6.5L2.5 9.5l6.6-.9L12 2.5z" />
    </svg>
  );
}

export function GlobeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden {...props}>
      <circle cx="16" cy="16" r="12" />
      <path d="M4 16h24M16 4c3.5 3.5 5.5 7.7 5.5 12s-2 8.5-5.5 12c-3.5-3.5-5.5-7.7-5.5-12s2-8.5 5.5-12z" />
    </svg>
  );
}

export function HeadsetIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden {...props}>
      <path d="M5 18v-3a11 11 0 0122 0v3M5 18v4a3 3 0 003 3h2v-7H8a3 3 0 00-3 3zM27 18v4a3 3 0 01-3 3h-2v-7h2a3 3 0 013 3z" strokeLinejoin="round" />
    </svg>
  );
}

export function StopwatchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden {...props}>
      <circle cx="16" cy="19" r="10" />
      <path d="M16 13v6l4 2M12 3h8M16 3v4M24 7l2 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden {...props}>
      <path d="M16 3l11 4v9c0 7-5 12-11 13-6-1-11-6-11-13V7l11-4z" strokeLinejoin="round" />
      <path d="M11 16l4 4 7-8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PlayIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M8 5v14l11-7L8 5z" />
    </svg>
  );
}

export function ChevronLeftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden {...props}>
      <path d="M12 5l-5 5 5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden {...props}>
      <path d="M8 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PauseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden {...props}>
      <rect x="5" y="4" width="3" height="12" rx="1" />
      <rect x="12" y="4" width="3" height="12" rx="1" />
    </svg>
  );
}

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden {...props}>
      <path d="M4 10l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DEFlag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <clipPath id="de-flag-clip"><circle cx="12" cy="12" r="12" /></clipPath>
      <g clipPath="url(#de-flag-clip)">
        <rect x="0" y="0" width="24" height="8" fill="#000" />
        <rect x="0" y="8" width="24" height="8" fill="#DD0000" />
        <rect x="0" y="16" width="24" height="8" fill="#FFCE00" />
      </g>
    </svg>
  );
}
