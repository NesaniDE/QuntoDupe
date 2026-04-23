import Image from "next/image";
import { StarIcon } from "@/components/icons";

const COLS: { heading: string; links: string[] }[] = [
  {
    heading: "KONTO",
    links: [
      "Geschäftskonto eröffnen",
      "Geschäftskonto für Einzelunternehmer",
      "Geschäftskonto für Freiberufler",
      "Geschäftskonto für Kleinunternehmer",
      "Geschäftskonto für GmbH",
      "Geschäftskonto für UG",
      "Geschäftskonto für GbR",
      "Geschäftskonto für Holding",
      "Kontenzusammenführung",
      "DATEV-Schnittstelle",
      "Unterkonten",
      "Mehrwertsteuererkennung",
      "Zahlungen",
    ],
  },
  {
    heading: "KREDIT & FINANZIERUNG",
    links: [
      "Finanzierung",
      "Kredit für Selbständige",
      "Kredit für Unternehmen",
      "Mastercard Business Kreditkarten",
      "Mastercard Debitkarten",
      "Flash-Karten",
    ],
  },
  {
    heading: "FINANZTOOLS",
    links: [
      "Buchhaltung",
      "DATEV-Schnittstelle",
      "Spesenabrechnung",
      "Rechnungen erstellen",
      "Angebote erstellen",
      "Ausgabenverwaltung",
      "Cashflow-Management",
    ],
  },
  {
    heading: "GRÜNDUNG",
    links: [
      "Unternehmen gründen",
      "Stammkapital einzahlen",
      "GmbH gründen",
      "UG gründen",
      "Freiberufler anmelden",
      "Gewerbe anmelden",
      "Holding gründen",
    ],
  },
  {
    heading: "VERGLEICHE",
    links: [
      "Geschäftskonto-Vergleich",
      "Qonto vs. N26",
      "Qonto vs. Revolut",
      "Qonto vs. Commerzbank",
    ],
  },
  {
    heading: "KOSTENLOSE TOOLS",
    links: [
      "Rechnungsgenerator",
      "BIC/IBAN-Prüfer",
      "Kassenbuch-Vorlage",
      "Pendelordnerliste",
    ],
  },
  {
    heading: "UNTERNEHMEN",
    links: ["Über uns", "Kontaktieren Sie uns", "Karriere", "Newsroom", "Qonto-Blog", "Qonto-Podcast"],
  },
  {
    heading: "HILFE & RESSOURCEN",
    links: ["FAQ-Hilfecenter", "Preise", "Referenzen", "Sicherheit"],
  },
  {
    heading: "PARTNER & INTEGRATIONEN",
    links: ["Partner werden", "Partner werden Details", "Buchhalter Partner", "Qonto API"],
  },
];

const COUNTRIES = ["France", "Deutschland", "España", "Italia", "Österreich", "België", "Portugal", "Nederland"];

export function Footer() {
  return (
    <footer className="bg-[#050505] text-white">
      {/* Rating + store banners */}
      <div className="mx-auto max-w-[1344px] px-5 lg:px-12 pt-20 pb-16">
        <div className="grid lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="lg:col-span-1">
            <h3 className="font-sans font-semibold text-2xl">Preise</h3>
            <p className="mt-3 text-white/70 text-[15px]">
              Jetzt den idealen Tarif finden.
            </p>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { label: "Im App Store", rating: "4,7" },
              { label: "Im Play Store", rating: "4,7" },
              { label: "auf Trustpilot", rating: "4,8" },
            ].map((r) => (
              <div
                key={r.label}
                className="rounded-2xl bg-white/[0.04] border border-white/10 px-5 py-4 flex items-center gap-3"
              >
                <div className="text-3xl font-bold">{r.rating}</div>
                <div>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} className="w-3.5 h-3.5 text-[#2DA75B]" />
                    ))}
                  </div>
                  <div className="text-white/70 text-[13px] mt-0.5">{r.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Link columns */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1344px] px-5 lg:px-12 py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10">
          {COLS.map((col) => (
            <div key={col.heading}>
              <h4 className="text-[12px] font-semibold tracking-widest text-white/55 uppercase">
                {col.heading}
              </h4>
              <ul className="mt-5 space-y-3 text-[14px]">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-white/85 hover:text-white transition">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom: logo, socials, apps, countries */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1344px] px-5 lg:px-12 py-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="flex items-center gap-8">
            <Image
              src="/images/shm-logo-white.png"
              alt="SHM"
              width={40}
              height={40}
              className="h-9 w-9 object-contain"
            />
            <div className="flex items-center gap-3 text-white/80">
              {[
                { src: "/images/asset-33603-e6d618444c.svg", alt: "Facebook" },
                { src: "/images/asset-33596-3b366e881b.svg", alt: "X" },
                { src: "/images/asset-33598-6b38103c57.svg", alt: "LinkedIn" },
                { src: "/images/asset-33599-3037a91b99.svg", alt: "Instagram" },
                { src: "/images/asset-33600-b432749c52.svg", alt: "Medium" },
              ].map((s) => (
                <a
                  key={s.alt}
                  href="#"
                  aria-label={s.alt}
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-white/60 transition"
                >
                  <Image
                    src={s.src}
                    alt={s.alt}
                    width={14}
                    height={14}
                    className="w-3.5 h-3.5 invert"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Image
              src="/images/asset-33597-03c1ef40ad.png"
              alt="App Store"
              width={135}
              height={40}
              className="h-10 w-auto"
            />
            <Image
              src="/images/asset-33601-61e4cd41f6.svg"
              alt="Google Play"
              width={135}
              height={40}
              className="h-10 w-auto"
            />
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-white/70">
            {COUNTRIES.map((c) => (
              <a key={c} href="#" className="hover:text-white transition">
                {c}
              </a>
            ))}
          </div>
        </div>
        <div className="mx-auto max-w-[1344px] px-5 lg:px-12 pb-8 text-[12px] text-white/50">
          © {new Date().getFullYear()} Olinda SAS, handelnd unter dem Markennamen Qonto. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
