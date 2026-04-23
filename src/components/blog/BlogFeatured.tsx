import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";
import type { BlogPost } from "@/data/blog";

type Props = {
  posts: BlogPost[];
};

export function BlogFeatured({ posts }: Props) {
  return (
    <section className="bg-white text-[#050505]">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24">
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-sans font-semibold text-[28px] md:text-[36px] lg:text-[44px] leading-[1.1] tracking-[-0.02em]">
            Ausgewählte Beiträge
          </h2>
          <span className="text-[13px] text-[#050505]/60 hidden md:inline">
            Volltext verfügbar
          </span>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group rounded-2xl md:rounded-3xl border border-[#050505]/10 bg-white overflow-hidden hover:border-[#050505]/40 transition flex flex-col"
            >
              <div className="relative aspect-[16/10] bg-[#F5F2EB]">
                <Image
                  src={p.image}
                  alt=""
                  fill
                  sizes="(min-width:1024px) 640px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col gap-4 flex-1">
                <div className="flex items-center gap-3 text-[12px]">
                  <span className="rounded-full bg-[#F4F1EA] px-3 py-1 font-medium">
                    {p.category}
                  </span>
                  <span className="text-[#050505]/55">{p.date}</span>
                  <span className="text-[#050505]/40">·</span>
                  <span className="text-[#050505]/55">{p.readingTime}</span>
                </div>
                <h3 className="font-sans font-semibold text-[22px] md:text-[26px] leading-[1.2] max-w-[22ch]">
                  {p.title}
                </h3>
                <p className="text-[14px] md:text-[15px] leading-[1.55] text-[#050505]/70">
                  {p.excerpt}
                </p>
                <div className="mt-auto inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#050505] group-hover:gap-2.5 transition-all">
                  Beitrag lesen
                  <ArrowUpRightIcon className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
