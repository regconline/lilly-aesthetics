import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/services";
import { CTA, PageHero } from "@/components/Blocks";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = { title: "Services", description: "Medical consultations, family planning, vitamin drips, chemical peels, microneedling, skin tag removal, weight management, hair-loss treatment and more.", alternates: { canonical: "/services" } };

export default function Services() {
  return (
    <>
      <PageHero eyebrow="Our Services" title="Care for your health and your skin." intro="Every service begins with an individual assessment. Pricing is available on enquiry." />
      <section className="py-24">
        <div className="container-x grid gap-px bg-burgundy/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const soon = s.active === false;
            return (
              <Reveal key={s.slug} delay={(i % 3) * 0.05} className="bg-ivory">
                <Link href={`/services/${s.slug}`} className="group flex h-full flex-col p-9 transition-colors duration-500 hover:bg-white">
                  <div className="flex items-start justify-between">
                    <Icon name={s.icon} className="h-9 w-9 text-gold" />
                    <span className="font-serif text-lg text-ink/30">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h2 className="mt-8 text-[28px] leading-tight">{s.name}</h2>
                  {soon && <span className="mt-2 w-fit bg-gold/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-burgundy">Coming soon</span>}
                  <p className="mt-3 flex-1 text-sm leading-7 text-ink/70">{s.short}</p>
                  <span className="mt-7 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-burgundy">{soon ? "Find out more" : "Learn more"} <ArrowUpRight className="h-3.5 w-3.5" /></span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
      <CTA />
    </>
  );
}
