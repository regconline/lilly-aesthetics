import Link from "next/link";
import { legalLinks, nav, site } from "@/lib/site";
import { Logo } from "./Logo";
import { Hours } from "./Blocks";
import { whatsappHref } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-burgundy-deep text-white/80">
      <div className="container-x grid gap-14 py-20 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo tone="white" className="h-28" />
          <p className="mt-6 font-serif text-xl text-white">Lilly Medical Aesthetics<br /><span className="text-gold">by Dr N. Skhosana</span></p>
        </div>
        <div>
          <h3 className="eyebrow !text-gold">Navigate</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {[...nav, { href: "/book", label: "Book Now" }, { href: "/portal-demo", label: "Patient Portal Demo" }].map((n) => (
              <li key={n.href}><Link href={n.href} className="hover:text-white">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="eyebrow !text-gold">Contact</h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>{site.address ?? <span className="italic text-white/45">Address to be confirmed</span>}</li>
            <li>{site.phone ? <a href={`tel:${site.phone}`} className="hover:text-white">{site.phone}</a> : <span className="italic text-white/45">Telephone to be confirmed</span>}</li>
            <li>{site.email ? <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a> : <span className="italic text-white/45">Email to be confirmed</span>}</li>
            <li>{whatsappHref ? <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp us</a> : <span className="italic text-white/45">WhatsApp to be confirmed</span>}</li>
          </ul>
        </div>
        <div>
          <h3 className="eyebrow !text-gold">Opening Hours</h3>
          <div className="mt-2"><Hours dark /></div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-4 py-6 text-xs text-white/55 lg:flex-row lg:items-center lg:justify-between">
          <p>© {new Date().getFullYear()} {site.brand}. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((l) => <li key={l.href}><Link href={l.href} className="hover:text-white">{l.label}</Link></li>)}
          </ul>
        </div>
      </div>
    </footer>
  );
}
