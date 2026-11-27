import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ClipboardList, HeartPulse, Layers, Sofa } from "lucide-react";
import { services } from "@/lib/services";
import { CTA, ContactList, HoursCard, MapEmbed } from "@/components/Blocks";
import { Icon } from "@/components/Icon";
import { Lotus } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import { HeroText } from "@/components/HeroText";

const why = [
  { icon: HeartPulse, t: "Medical-led approach", d: "Every treatment begins with a clinical assessment by a medical doctor." },
  { icon: ClipboardList, t: "Personalised care", d: "Plans are built around your health, your skin and your goals — never one-size-fits-all." },
  { icon: Layers, t: "Comprehensive services", d: "General medical care, women's health and aesthetic treatments under one roof." },
  { icon: Sofa, t: "Professional, welcoming environment", d: "A calm, private and respectful space where you can ask every question." },
];
const journey = ["Explore our services", "Book a consultation", "Receive an individual assessment", "Follow your personalised care plan"];

export default function Home() {
  const featured = services.filter((s) => s.featured);
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ivory">
        <Lotus className="pointer-events-none absolute -left-24 top-24 h-[420px] w-auto text-burgundy/[0.035]" />
        <div className="container-x grid items-center gap-14 pb-20 pt-10 lg:grid-cols-[1.05fr_1fr] lg:gap-20 lg:pb-28 lg:pt-16">
          <HeroText />
          <div className="relative">
            <div className="absolute -right-4 -top-4 hidden h-full w-full border border-gold/50 sm:block" />
            <div className="relative aspect-[4/4.4] overflow-hidden bg-blush">
              <Image src="/images/dr-skhosana.webp" alt="Dr N. Skhosana at Lilly Medical Aesthetics" fill priority sizes="(min-width:1024px) 45vw, 100vw" className="animate-[heroZoom_14s_ease-out_forwards] object-cover object-[60%_30%]" />
            </div>
            <div className="absolute -bottom-6 left-6 bg-white px-6 py-4 shadow-xl shadow-burgundy/10 sm:left-[-28px]">
              <p className="font-serif text-xl text-burgundy">Dr N. Skhosana</p>
              <p className="text-[11px] uppercase tracking-[0.22em] text-ink/55">Medical Doctor · Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* WELCOME */}
      <section className="border-y border-burgundy/10 bg-white">
        <div className="container-x grid gap-10 py-24 lg:grid-cols-[1fr_1.4fr] lg:gap-20 lg:py-32">
          <Reveal><p className="eyebrow">Welcome</p><h2 className="mt-5 text-4xl leading-tight sm:text-5xl">Welcome to Lilly Medical Aesthetics</h2></Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg leading-9 text-ink/80">
              At Lilly Medical Aesthetics, we bring together medical care, skin health and aesthetic treatments in a welcoming professional environment. Our approach focuses on individual needs, appropriate clinical assessment and personalised treatment planning.
            </p>
            <Link href="/about" className="btn-outline mt-9">Learn More <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 lg:py-32">
        <div className="container-x">
          <Reveal className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div><p className="eyebrow">Our Services</p><h2 className="mt-5 text-4xl sm:text-5xl">Medical care &amp; aesthetic treatments</h2></div>
            <Link href="/services" className="group inline-flex items-center gap-2 text-sm font-medium text-burgundy">View all services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
          </Reveal>
          <div className="mt-14 grid gap-px bg-burgundy/10 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.05} className="bg-ivory">
                <Link href={`/services/${s.slug}`} className="group flex h-full flex-col p-9 transition-colors duration-500 hover:bg-white">
                  <Icon name={s.icon} className="h-9 w-9 text-gold transition-transform duration-500 group-hover:-translate-y-1" />
                  <h3 className="mt-8 text-[28px] leading-tight">{s.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-ink/70">{s.short}</p>
                  <span className="mt-7 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-burgundy">Learn more <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DOCTOR */}
      <section className="bg-blush/60">
        <div className="container-x grid items-center gap-14 py-24 lg:grid-cols-2 lg:gap-24 lg:py-32">
          <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-square overflow-hidden">
              <Image src="/images/dr-skhosana.webp" alt="Portrait of Dr N. Skhosana" fill sizes="(min-width:1024px) 45vw, 90vw" className="object-cover object-[60%_25%]" />
            </div>
            <Lotus className="absolute -bottom-8 -right-6 h-24 w-auto text-gold" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow">Meet the Doctor</p>
            <h2 className="mt-5 text-5xl">Dr N. Skhosana</h2>
            <p className="mt-2 text-sm italic text-ink/50">Qualifications and HPCSA registration details to be added</p>
            <p className="mt-7 text-lg leading-8 text-ink/80">
              Dr N. Skhosana founded Lilly Medical Aesthetics to offer patients medical care and aesthetic treatments grounded in sound clinical practice. Her full professional biography will be shared here soon.
            </p>
            <blockquote className="mt-8 border-l-2 border-gold pl-6 font-serif text-2xl italic leading-snug text-burgundy">
              “Good aesthetic care starts with good medical care — listening, assessing and planning with each patient as an individual.”
            </blockquote>
            <Link href="/about" className="btn-primary mt-10">About Dr Skhosana <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
        </div>
      </section>

      {/* WHY */}
      <section className="py-24 lg:py-32">
        <div className="container-x">
          <Reveal className="text-center"><p className="eyebrow">Why Choose Us</p><h2 className="mt-5 text-4xl sm:text-5xl">Why Lilly Medical Aesthetics?</h2></Reveal>
          <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {why.map((w, i) => (
              <Reveal key={w.t} delay={i * 0.07} className="text-center">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/50"><w.icon className="h-6 w-6 text-burgundy" strokeWidth={1.25} /></span>
                <h3 className="mt-6 text-2xl">{w.t}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/70">{w.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="bg-burgundy-deep text-white">
        <div className="container-x py-24 lg:py-28">
          <Reveal><p className="eyebrow">Your Patient Journey</p><h2 className="mt-5 text-4xl !text-white sm:text-5xl">Four simple steps</h2></Reveal>
          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {journey.map((j, i) => (
              <Reveal key={j} delay={i * 0.08}>
                <li className="border-t border-gold/40 pt-6">
                  <span className="font-serif text-5xl text-gold">0{i + 1}</span>
                  <p className="mt-4 text-lg text-white/90">{j}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* HOURS + CONTACT */}
      <section className="py-24 lg:py-32" id="hours">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1fr_1.2fr]">
          <Reveal><HoursCard /></Reveal>
          <Reveal delay={0.08}><h3 className="text-3xl">Get in touch</h3><div className="mt-3"><ContactList /></div><Link href="/contact" className="btn-outline mt-8">Contact Us</Link></Reveal>
          <Reveal delay={0.16}><MapEmbed /></Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
