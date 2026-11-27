import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Check, ChevronDown, Info } from "lucide-react";
import { getService, services } from "@/lib/services";
import { getPost } from "@/lib/blog";
import { CTA } from "@/components/Blocks";
import { Icon } from "@/components/Icon";
import { Lotus } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const generateStaticParams = () => services.map((s) => ({ slug: s.slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const s = getService((await params).slug);
  return s ? { title: s.name, description: s.short, alternates: { canonical: `/services/${s.slug}` } } : {};
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const s = getService((await params).slug);
  if (!s) notFound();
  const soon = s.active === false;
  const related = s.related.map(getPost).filter(Boolean);
  const schema = [
    { "@context": "https://schema.org", "@type": "MedicalProcedure", name: s.name, description: s.short, provider: { "@type": "MedicalClinic", name: site.name } },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
      { "@type": "ListItem", position: 3, name: s.name, item: `${site.url}/services/${s.slug}` } ] },
  ];
  return (
    <>
      <section className="relative overflow-hidden border-b border-burgundy/10 bg-blush/50">
        <Lotus className="pointer-events-none absolute -right-16 -top-10 h-80 w-auto text-burgundy/[0.05]" />
        <div className="container-x relative py-16 sm:py-24">
          <nav className="text-xs text-ink/55" aria-label="Breadcrumb"><Link href="/" className="hover:text-burgundy">Home</Link> / <Link href="/services" className="hover:text-burgundy">Services</Link> / <span className="text-burgundy">{s.name}</span></nav>
          <Reveal>
            <Icon name={s.icon} className="mt-10 h-11 w-11 text-gold" />
            <h1 className="mt-6 max-w-3xl text-5xl leading-[1.05] sm:text-6xl">{s.name}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/75">{s.intro}</p>
            {!soon && <Link href="/book" className="btn-primary mt-10">Book Appointment <ArrowRight className="h-4 w-4" /></Link>}
          </Reveal>
        </div>
      </section>

      {!soon && (
        <section className="py-20 lg:py-28">
          <div className="container-x grid gap-16 lg:grid-cols-[1.5fr_1fr]">
            <div className="space-y-16">
              <Reveal><h2 className="text-4xl">Purpose of treatment</h2><ul className="mt-6 space-y-4">{s.purpose.map((p) => <li key={p} className="flex gap-4 leading-7"><Check className="mt-1 h-4 w-4 shrink-0 text-gold" />{p}</li>)}</ul></Reveal>
              <Reveal><h2 className="text-4xl">What to expect</h2><ol className="mt-6 space-y-5">{s.expect.map((p, i) => <li key={p} className="flex gap-5 leading-7"><span className="font-serif text-2xl leading-none text-gold">0{i + 1}</span>{p}</li>)}</ol></Reveal>
              {s.aftercare && <Reveal><h2 className="text-4xl">Aftercare</h2><ul className="mt-6 space-y-4">{s.aftercare.map((p) => <li key={p} className="flex gap-4 leading-7"><Check className="mt-1 h-4 w-4 shrink-0 text-gold" />{p}</li>)}</ul></Reveal>}
              {s.faqs.length > 0 && (
                <Reveal>
                  <h2 className="text-4xl">Frequently asked questions</h2>
                  <div className="mt-6 divide-y divide-burgundy/10 border-y border-burgundy/10">
                    {s.faqs.map((f) => (
                      <details key={f.q} className="group py-5">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-xl text-burgundy-deep">{f.q}<ChevronDown className="h-4 w-4 shrink-0 text-gold transition-transform group-open:rotate-180" /></summary>
                        <p className="mt-3 leading-7 text-ink/75">{f.a}</p>
                      </details>
                    ))}
                  </div>
                </Reveal>
              )}
            </div>
            <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              <div className="bg-burgundy p-8 text-white">
                <Info className="h-6 w-6 text-gold" strokeWidth={1.5} />
                <h3 className="mt-4 text-2xl !text-white">Consultation requirements</h3>
                <p className="mt-3 text-sm leading-7 text-white/85">{s.consultation}</p>
                <Link href="/book" className="btn-light mt-7 w-full">Book Appointment</Link>
              </div>
              <div className="border border-burgundy/10 bg-white p-8 text-sm leading-7 text-ink/70"><p className="font-medium text-burgundy">Pricing</p><p className="mt-1">Available on enquiry. Your fees will be confirmed after consultation.</p></div>
              {related.length > 0 && (
                <div className="border border-burgundy/10 bg-white p-8">
                  <p className="eyebrow">Related reading</p>
                  <ul className="mt-4 space-y-3">{related.map((p) => <li key={p!.slug}><Link href={`/blog/${p!.slug}`} className="font-serif text-xl text-burgundy hover:underline">{p!.title}</Link></li>)}</ul>
                </div>
              )}
            </aside>
          </div>
          <p className="container-x mt-16 text-xs leading-6 text-ink/50">This information is general and educational, and is not a substitute for individual medical advice. Suitability and outcomes vary between individuals.</p>
        </section>
      )}
      {soon && <section className="py-24"><div className="container-x"><Link href="/contact" className="btn-primary">Contact the practice</Link></div></section>}
      <CTA />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
