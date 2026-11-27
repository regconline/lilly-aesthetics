import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { fmtDate, getPost, posts, readingTime } from "@/lib/blog";
import { getService } from "@/lib/services";
import { site } from "@/lib/site";
import { CTA } from "@/components/Blocks";

export const generateStaticParams = () => posts.map((p) => ({ slug: p.slug }));
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = getPost((await params).slug);
  return p ? { title: p.title, description: p.excerpt, alternates: { canonical: `/blog/${p.slug}` }, openGraph: { type: "article", title: p.title, description: p.excerpt, publishedTime: p.date } } : {};
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = getPost((await params).slug);
  if (!p) notFound();
  const url = `${site.url}/blog/${p.slug}`;
  const related = posts.filter((x) => x.slug !== p.slug && x.category === p.category).concat(posts.filter((x) => x.slug !== p.slug && x.category !== p.category)).slice(0, 3);
  const svc = p.service ? getService(p.service) : undefined;
  const schema = { "@context": "https://schema.org", "@type": "Article", headline: p.title, description: p.excerpt, datePublished: p.date, author: { "@type": "Organization", name: site.name }, publisher: { "@type": "Organization", name: site.name } };
  const share = [
    ["WhatsApp", `https://wa.me/?text=${encodeURIComponent(`${p.title} ${url}`)}`],
    ["Facebook", `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`],
    ["LinkedIn", `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`],
    ["X", `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(p.title)}`],
  ];
  return (
    <>
      <article>
        <header className="border-b border-burgundy/10 bg-blush/50">
          <div className="container-x max-w-3xl py-16 sm:py-24">
            <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-burgundy"><ArrowLeft className="h-3.5 w-3.5" />All articles</Link>
            <p className="eyebrow mt-10">{p.category}</p>
            <h1 className="mt-4 text-5xl leading-[1.05] sm:text-6xl">{p.title}</h1>
            <p className="mt-6 text-sm text-ink/55">{fmtDate(p.date)} · {readingTime(p)} min read</p>
          </div>
        </header>
        <div className="container-x max-w-3xl py-16">
          <div className="prose-lilly text-lg">
            {p.body.map((b, i) => (<div key={i}>{b.h && <h2>{b.h}</h2>}<p>{b.p}</p></div>))}
          </div>
          {svc && <Link href={`/services/${svc.slug}`} className="btn-outline mt-6">About {svc.name} <ArrowRight className="h-4 w-4" /></Link>}
          <div className="mt-12 border-l-2 border-gold bg-white p-6 text-sm leading-7 text-ink/70">
            <strong className="text-burgundy">Medical disclaimer:</strong> This article is general health education and does not replace individual medical advice, diagnosis or treatment. Please consult a healthcare professional about your specific situation.
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-3 text-sm">
            <span className="text-ink/55">Share:</span>
            {share.map(([n, h]) => <a key={n} href={h} target="_blank" rel="noopener noreferrer" className="border border-burgundy/15 px-3 py-1.5 text-xs hover:border-burgundy hover:text-burgundy">{n}</a>)}
          </div>
        </div>
      </article>
      <section className="border-t border-burgundy/10 bg-white py-20">
        <div className="container-x">
          <h2 className="text-4xl">Related articles</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} href={`/blog/${r.slug}`} className="group border-t border-gold/50 pt-5"><p className="eyebrow">{r.category}</p><h3 className="mt-3 text-2xl leading-tight group-hover:text-burgundy">{r.title}</h3></Link>
            ))}
          </div>
        </div>
      </section>
      <CTA />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
