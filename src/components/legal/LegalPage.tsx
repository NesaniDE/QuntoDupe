import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: string;
  updated?: string;
  children: ReactNode;
};

export function LegalPage({ eyebrow, title, updated, children }: Props) {
  return (
    <>
      <section className="bg-[#F4F1EA] text-[#050505] pt-28 md:pt-32 lg:pt-36 pb-14 md:pb-20">
        <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12">
          <p className="text-[13px] font-medium tracking-widest text-[#050505]/55 uppercase">
            {eyebrow}
          </p>
          <h1 className="mt-4 font-sans font-semibold text-[32px] sm:text-[40px] md:text-[56px] lg:text-[72px] leading-[1.05] tracking-[-0.02em] max-w-[20ch] break-words hyphens-auto">
            {title}
          </h1>
          {updated && (
            <p className="mt-6 text-[14px] text-[#050505]/65">
              Stand: {updated}
            </p>
          )}
        </div>
      </section>

      <section className="bg-white text-[#050505]">
        <div className="mx-auto max-w-[820px] px-5 md:px-8 py-14 md:py-20 lg:py-24">
          <div className="space-y-8 text-[16px] md:text-[17px] leading-[1.7] text-[#050505]/85">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="font-sans font-semibold text-[22px] md:text-[26px] leading-[1.25] tracking-[-0.01em] text-[#050505]">
        {heading}
      </h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 pt-1">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#050505]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
