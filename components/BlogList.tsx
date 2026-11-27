"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Lotus } from "./Logo";

type Item = { slug: string; title: string; category: string; date: string; excerpt: string; mins: number };

export function BlogList({ items, categories }: { items: Item[]; categories: string[] }) {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const shown = useMemo(() => items.filter((p) => (cat === "All" || p.category === cat) && (p.title + p.excerpt).toLowerCase().includes(q.toLowerCase())), [items, q, cat]);
  return (
    <section className="py-20">
      <div className="container-x">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {["All", ...categories].map((c) => (
              <button key={c} onClick={() => setCat(c)} className={`border px-4 py-2 text-xs font-medium tracking-wide transition ${cat === c ? "border-burgundy bg-burgundy text-white" : "border-burgundy/15 text-ink/70 hover:border-burgundy/50"}`}>{c}</button>
            ))}
          </div>
          <label className="relative w-full lg:w-72">
            <span className="sr-only">Search articles</span>
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search articles" className="field !pl-11" />
          </label>
        </div>
        {shown.length === 0 ? (
          <div className="mt-16 py-20 text-center"><Lotus className="mx-auto h-12 w-auto text-gold" /><p className="mt-5 font-serif text-2xl text-burgundy">No articles found</p><p className="mt-2 text-sm text-ink/60">Try another search or category.</p></div>
        ) : (
          <div className="mt-12 grid gap-px bg-burgundy/10 md:grid-cols-2 lg:grid-cols-3">
            {shown.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group flex flex-col bg-ivory transition-colors hover:bg-white">
                <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden bg-blush/70">
                  <Lotus className="h-16 w-auto text-burgundy/20 transition-transform duration-700 group-hover:scale-110" />
                  <span className="absolute left-5 top-5 bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-burgundy">{p.category}</span>
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <p className="text-xs text-ink/50">{new Date(p.date).toLocaleDateString("en-ZA", { day: "numeric", month: "long", year: "numeric" })} · {p.mins} min read</p>
                  <h2 className="mt-3 text-[26px] leading-tight group-hover:text-burgundy">{p.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-ink/70">{p.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
