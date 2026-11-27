import Link from "next/link";
import { Clock, Mail, MapPin, Phone, Navigation } from "lucide-react";
import { site, whatsappHref } from "@/lib/site";
import { Pending } from "./Placeholder";
import { WhatsAppIcon } from "./WhatsApp";
import { Lotus } from "./Logo";
import { Reveal } from "./Reveal";

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <section className="relative overflow-hidden border-b border-burgundy/10 bg-blush/50">
      <Lotus className="pointer-events-none absolute -right-16 -top-10 h-80 w-auto text-burgundy/[0.05]" />
      <div className="container-x relative py-20 sm:py-28">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-5 max-w-3xl text-5xl leading-[1.05] sm:text-6xl">{title}</h1>
          {intro && <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/75">{intro}</p>}
        </Reveal>
      </div>
    </section>
  );
}

export function Hours({ dark = false }: { dark?: boolean }) {
  return (
    <ul className="divide-y divide-current/10">
      {site.hours.map((h) => (
        <li key={h.day} className={`flex justify-between gap-6 py-3 text-sm ${dark ? "border-white/10" : "border-burgundy/10"}`}>
          <span className={dark ? "text-white/80" : "text-ink/80"}>{h.day}</span>
          <span className={`font-medium ${h.time === "Closed" ? (dark ? "text-white/50" : "text-ink/45") : dark ? "text-white" : "text-burgundy"}`}>{h.time}</span>
        </li>
      ))}
    </ul>
  );
}

export function ContactList() {
  const row = "flex items-start gap-4 py-4 border-b border-burgundy/10";
  const ic = "mt-0.5 h-5 w-5 shrink-0 text-gold";
  return (
    <div>
      <div className={row}><MapPin className={ic} strokeWidth={1.5} /><div><p className="text-xs uppercase tracking-widest text-ink/50">Address</p><p className="mt-1">{site.address ?? <Pending label="Practice address to be confirmed" />}</p></div></div>
      <div className={row}><Phone className={ic} strokeWidth={1.5} /><div><p className="text-xs uppercase tracking-widest text-ink/50">Telephone</p><p className="mt-1">{site.phone ? <a className="hover:text-burgundy" href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a> : <Pending />}</p></div></div>
      <div className={row}><WhatsAppIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" /><div><p className="text-xs uppercase tracking-widest text-ink/50">WhatsApp</p><p className="mt-1">{whatsappHref ? <a className="hover:text-burgundy" href={whatsappHref} target="_blank" rel="noopener noreferrer">Chat with us</a> : <Pending />}</p></div></div>
      <div className={row}><Mail className={ic} strokeWidth={1.5} /><div><p className="text-xs uppercase tracking-widest text-ink/50">Email</p><p className="mt-1">{site.email ? <a className="hover:text-burgundy" href={`mailto:${site.email}`}>{site.email}</a> : <Pending />}</p></div></div>
    </div>
  );
}

export function MapEmbed({ className = "h-[380px]" }: { className?: string }) {
  if (!site.mapsQuery)
    return (
      <div className={`flex flex-col items-center justify-center gap-3 border border-dashed border-burgundy/20 bg-blush/40 p-8 text-center ${className}`}>
        <MapPin className="h-8 w-8 text-gold" strokeWidth={1.25} />
        <p className="font-serif text-2xl text-burgundy">Map coming soon</p>
        <p className="max-w-xs text-sm text-ink/60">The clinic map and directions will appear here once the practice location is confirmed.</p>
      </div>
    );
  const q = encodeURIComponent(site.mapsQuery);
  return (
    <div className={className}>
      <iframe title="Lilly Medical Aesthetics location" className="h-full w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src={`https://www.google.com/maps?q=${q}&output=embed`} />
      <a className="btn-primary mt-4" target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/dir/?api=1&destination=${q}`}><Navigation className="h-4 w-4" />Get Directions</a>
    </div>
  );
}

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-burgundy text-white">
      <Lotus className="pointer-events-none absolute -bottom-20 -left-16 h-96 w-auto text-white/[0.06]" />
      <Lotus className="pointer-events-none absolute -right-10 -top-16 h-72 w-auto text-gold/10" />
      <div className="container-x relative py-24 text-center sm:py-28">
        <Reveal>
          <span className="gold-rule mx-auto" />
          <h2 className="mx-auto mt-8 max-w-3xl text-4xl !text-white sm:text-5xl">Your Journey to Better Health and Skin Starts Here.</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/book" className="btn-light">Book Now</Link>
            <Link href="/contact" className="btn border border-white/40 text-white hover:bg-white/10">Contact Us</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function HoursCard() {
  return (
    <div className="border border-burgundy/10 bg-white p-8 sm:p-10">
      <div className="flex items-center gap-3"><Clock className="h-5 w-5 text-gold" strokeWidth={1.5} /><h3 className="text-2xl">Opening Hours</h3></div>
      <div className="mt-5"><Hours /></div>
    </div>
  );
}
