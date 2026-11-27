import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { posts } from "@/lib/blog";
export default function sitemap(): MetadataRoute.Sitemap {
  const u = (p: string) => `${site.url}${p}`;
  return [
    ...["", "/about", "/services", "/blog", "/contact", "/book"].map((p) => ({ url: u(p), changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.8 })),
    ...services.filter((s) => s.active !== false).map((s) => ({ url: u(`/services/${s.slug}`), priority: 0.7 })),
    ...posts.map((p) => ({ url: u(`/blog/${p.slug}`), lastModified: p.date, priority: 0.6 })),
  ];
}
