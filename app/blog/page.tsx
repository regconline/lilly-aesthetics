import type { Metadata } from "next";
import { PageHero } from "@/components/Blocks";
import { BlogList } from "@/components/BlogList";
import { categories, posts, readingTime } from "@/lib/blog";

export const metadata: Metadata = { title: "Blog & Health Education", description: "Educational articles on skin health, medical aesthetics, women's health, weight management and general health.", alternates: { canonical: "/blog" } };

export default function Blog() {
  const items = posts.map((p) => ({ slug: p.slug, title: p.title, category: p.category, date: p.date, excerpt: p.excerpt, mins: readingTime(p) }));
  return (
    <>
      <PageHero eyebrow="Journal" title="Health & skin education." intro="Clear, balanced information to help you make informed decisions. General education only — not a substitute for individual medical advice." />
      <BlogList items={items} categories={categories} />
    </>
  );
}
