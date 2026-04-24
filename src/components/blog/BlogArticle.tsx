import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRightIcon } from "@/components/icons";
import type { BlogPost, BlogSection } from "@/data/blog";

type Props = {
  post: BlogPost;
  children?: ReactNode;
  related: BlogPost[];
};

export function BlogArticle({ post, children, related }: Props) {
  return (
    <>
      <section className="bg-[#F4F1EA] text-[#050505] pt-28 md:pt-32 lg:pt-36 pb-14 md:pb-20">
        <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12">
          <nav className="text-[13px] text-[#050505]/60">
            <Link href="/blog" className="hover:text-[#050505] transition">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#050505]/80">{post.category}</span>
          </nav>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-[12px]">
            <span className="rounded-full bg-white text-[#050505] px-3 py-1 font-medium">
              {post.category}
            </span>
            <time dateTime={post.dateIso} className="text-[#050505]/65">
              {post.date}
            </time>
            <span className="text-[#050505]/35">·</span>
            <span className="text-[#050505]/65">{post.readingTime} Lesezeit</span>
            <span className="text-[#050505]/35">·</span>
            <span className="text-[#050505]/65">
              Von <span className="text-[#050505]/85 font-medium">{post.author}</span>
            </span>
          </div>
          <h1 className="mt-6 font-sans font-semibold text-[36px] md:text-[52px] lg:text-[64px] leading-[1.05] tracking-[-0.02em] max-w-[22ch]">
            {post.title}
          </h1>
          <p className="mt-6 text-[16px] md:text-[18px] leading-[1.55] text-[#050505]/75 max-w-[58ch]">
            {post.excerpt}
          </p>
        </div>
      </section>

      <section className="bg-white text-[#050505]">
        <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 -mt-10 md:-mt-16 lg:-mt-20 relative z-10">
          <div className="relative aspect-[21/9] rounded-2xl md:rounded-3xl overflow-hidden bg-[#F5F2EB]">
            <Image
              src={post.image}
              alt=""
              fill
              priority
              sizes="(min-width:1280px) 1248px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mx-auto max-w-[760px] px-5 md:px-8 py-14 md:py-20 lg:py-24">
          <article className="space-y-7 text-[17px] md:text-[18px] leading-[1.7] text-[#050505]/85">
            {children ?? renderSections(post.sections)}
          </article>
        </div>
      </section>

      <section className="bg-[#F4F1EA] text-[#050505]">
        <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-16 md:py-20">
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-sans font-semibold text-[26px] md:text-[32px] leading-[1.1] tracking-[-0.02em]">
              Weitere Beiträge
            </h2>
            <Link
              href="/blog"
              className="hidden md:inline-flex items-center gap-1.5 text-[14px] font-semibold hover:opacity-80 transition"
            >
              Alle ansehen
              <ArrowUpRightIcon className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {related.map((r) => {
              const card = (
                <article className="group h-full rounded-2xl bg-white border border-[#050505]/5 overflow-hidden flex flex-col hover:border-[#050505]/20 transition">
                  <div className="relative aspect-[16/10] bg-[#F5F2EB]">
                    <Image
                      src={r.image}
                      alt=""
                      fill
                      sizes="(min-width:1024px) 380px, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 flex flex-col gap-3 flex-1">
                    <div className="flex items-center gap-2 text-[11px]">
                      <span className="rounded-full bg-[#F4F1EA] px-2.5 py-1 font-medium">
                        {r.category}
                      </span>
                      <span className="text-[#050505]/55">{r.date}</span>
                    </div>
                    <h3 className="font-sans font-semibold text-[16px] md:text-[17px] leading-[1.3] line-clamp-3">
                      {r.title}
                    </h3>
                  </div>
                </article>
              );
              return r.available ? (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="block">
                  {card}
                </Link>
              ) : (
                <div key={r.slug}>{card}</div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

function renderSections(sections: BlogSection[]): ReactNode {
  return sections.map((section, index) => {
    const key = `${section.type}-${index}`;
    switch (section.type) {
      case "paragraph":
        return <BlogParagraph key={key}>{section.content}</BlogParagraph>;
      case "heading":
        return <BlogHeading key={key}>{section.content}</BlogHeading>;
      case "quote":
        return <BlogQuote key={key}>{section.content}</BlogQuote>;
      case "list":
        return (
          <BlogList key={key}>
            {section.items.map((item, i) => (
              <BlogListItem key={i}>{item}</BlogListItem>
            ))}
          </BlogList>
        );
    }
  });
}

export function BlogParagraph({ children }: { children: ReactNode }) {
  return <p>{children}</p>;
}

export function BlogHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-4 font-sans font-semibold text-[26px] md:text-[32px] leading-[1.2] tracking-[-0.01em] text-[#050505]">
      {children}
    </h2>
  );
}

export function BlogSubheading({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-2 font-sans font-semibold text-[20px] md:text-[22px] leading-[1.25] text-[#050505]">
      {children}
    </h3>
  );
}

export function BlogQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="my-10 md:my-12 border-l-2 border-[#050505] pl-6 md:pl-8 py-2">
      <p className="font-sans font-semibold text-[22px] md:text-[26px] leading-[1.35] tracking-[-0.01em] text-[#050505]">
        {children}
      </p>
    </blockquote>
  );
}

export function BlogList({ children }: { children: ReactNode }) {
  return (
    <ul className="space-y-3 my-4 list-none">
      {children}
    </ul>
  );
}

export function BlogListItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#050505]" />
      <span>{children}</span>
    </li>
  );
}
