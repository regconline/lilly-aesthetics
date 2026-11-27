"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, CalendarCheck } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { nav } from "@/lib/site";
import { HeaderLogo } from "./Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = usePathname();
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => setOpen(false), [path]);
  const active = (href: string) => (href === "/" ? path === "/" : path.startsWith(href));

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? "bg-ivory/90 shadow-[0_1px_0_rgba(133,13,48,0.08)] backdrop-blur-md" : "bg-ivory"}`}>
      <div className={`container-x flex items-center justify-between transition-all duration-500 ${scrolled ? "h-[72px]" : "h-[88px]"}`}>
        <Link href="/" aria-label="Lilly Medical Aesthetics — Home"><HeaderLogo /></Link>
        <nav className="hidden items-center gap-9 lg:flex" aria-label="Main">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className={`group relative text-[13px] font-medium tracking-wide transition-colors ${active(n.href) ? "text-burgundy" : "text-ink/75 hover:text-burgundy"}`}>
              {n.label}
              <span className={`absolute -bottom-1.5 left-0 h-px bg-gold transition-all duration-300 ${active(n.href) ? "w-full" : "w-0 group-hover:w-full"}`} />
            </Link>
          ))}
          <Link href="/portal-demo" className={`text-[13px] font-medium tracking-wide ${active("/portal-demo") ? "text-burgundy" : "text-ink/75 hover:text-burgundy"}`}>Patient Portal</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/book" className="btn-primary hidden !px-6 !py-3 sm:inline-flex"><CalendarCheck className="h-4 w-4" />Book Now</Link>
          <button onClick={() => setOpen(!open)} className="p-2 text-burgundy lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-burgundy/10 bg-ivory lg:hidden" aria-label="Mobile">
            <div className="container-x flex flex-col py-4">
              {[...nav, { href: "/portal-demo", label: "Patient Portal Demo" }].map((n) => (
                <Link key={n.href} href={n.href} className={`border-b border-burgundy/5 py-4 font-serif text-2xl ${active(n.href) ? "text-burgundy" : "text-ink"}`}>{n.label}</Link>
              ))}
              <Link href="/book" className="btn-primary mt-5">Book Now</Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
