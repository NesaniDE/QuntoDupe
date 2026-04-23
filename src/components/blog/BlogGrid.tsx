import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/blog";

type Props = {
  posts: BlogPost[];
};

export function BlogGrid({ posts }: Props) {
  return (
    <section className="bg-[#F4F1EA] text-[#050505]">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24">
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-sans font-semibold text-[28px] md:text-[36px] lg:text-[44px] leading-[1.1] tracking-[-0.02em]">
            Alle Beiträge
          </h2>
          <span className="text-[13px] text-[#050505]/60">
            {posts.length} Artikel
          </span>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {posts.map((p) => {
            const card = (
              <article className="group h-full rounded-2xl bg-white border border-[#050505]/5 overflow-hidden flex flex-col hover:border-[#050505]/20 hover:shadow-[0_12px_32px_-16px_rgba(0,0,0,0.2)] transition">
                <div className="relative aspect-[16/10] bg-[#F5F2EB]">
                  <Image
                    src={p.image}
                    alt=""
                    fill
                    sizes="(min-width:1024px) 420px, (min-width:768px) 50vw, 100vw"
                    className="object-cover"
                  />
                  {!p.available && (
                    <span className="absolute top-3 right-3 rounded-full bg-white/95 text-[11px] font-medium px-2.5 py-1 text-[#050505]/70">
                      In Vorbereitung
                    </span>
                  )}
                </div>
                <div className="p-5 md:p-6 flex flex-col gap-3 flex-1">
                  <div className="flex items-center gap-2 text-[11px] md:text-[12px]">
                    <span className="rounded-full bg-[#F4F1EA] px-2.5 py-1 font-medium">
                      {p.category}
                    </span>
                    <span className="text-[#050505]/55">{p.date}</span>
                  </div>
                  <h3 className="font-sans font-semibold text-[17px] md:text-[18px] leading-[1.3] line-clamp-3">
                    {p.title}
                  </h3>
                  <p className="text-[13px] md:text-[14px] leading-[1.5] text-[#050505]/65 line-clamp-2">
                    {p.excerpt}
                  </p>
                  <div className="mt-auto pt-2 text-[12px] text-[#050505]/55">
                    {p.readingTime} Lesezeit
                  </div>
                </div>
              </article>
            );
            return p.available ? (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="block">
                {card}
              </Link>
            ) : (
              <div key={p.slug}>{card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
