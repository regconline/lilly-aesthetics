import Image from "next/image";
import type { Metadata } from "next";
import { CTA, PageHero } from "@/components/Blocks";
import { Reveal } from "@/components/Reveal";
import { Lotus } from "@/components/Logo";

export const metadata: Metadata = { title: "About", description: "About Lilly Medical Aesthetics and Dr N. Skhosana — medical-led, personalised aesthetic and healthcare.", alternates: { canonical: "/about" } };

const philosophy = [
  ["Patient-centred care", "Your concerns, values and goals guide every conversation."],
  ["Professional medical standards", "Treatments are delivered in line with sound clinical practice and professional guidelines."],
  ["Individual assessment", "No treatment is offered without first assessing whether it is right for you."],
  ["Informed decisions", "We explain benefits, risks and alternatives clearly so you can decide with confidence."],
  ["Responsible aesthetics", "We recommend treatments only when appropriate — and say so when they are not."],
];

export default function About() {
  return (
    <>
      <PageHero eyebrow="About Us" title="Medical care and aesthetics, thoughtfully combined." intro="Lilly Medical Aesthetics is a doctor-led practice offering general medical care, women's health services and aesthetic treatments in a calm, professional environment." />

      <section className="py-24 lg:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-24">
          <Reveal><p className="eyebrow">Our Approach</p><h2 className="mt-5 text-4xl sm:text-5xl">Health first, beauty with integrity</h2></Reveal>
          <Reveal delay={0.1} className="space-y-6 text-lg leading-8 text-ink/80">
            <p>We believe that how you feel in your skin is closely connected to your overall health. That is why every aesthetic treatment at Lilly Medical Aesthetics begins with a medical perspective.</p>
            <p>Whether you visit us for a medical consultation, family planning, chronic care or a skin treatment, you can expect time to talk, a careful assessment and a plan designed around you.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-blush/60" id="doctor">
        <div className="container-x grid gap-14 py-24 lg:grid-cols-[1fr_1.2fr] lg:gap-24 lg:py-32">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden"><Image src="/images/dr-skhosana.webp" alt="Dr N. Skhosana" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover object-[62%_30%]" /></div>
            <Lotus className="absolute -bottom-8 -right-6 h-24 w-auto text-gold" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow">Meet the Doctor</p>
            <h2 className="mt-5 text-5xl sm:text-6xl">Dr N. Skhosana</h2>
            <dl className="mt-8 grid gap-px bg-burgundy/10 sm:grid-cols-2">
              {[["Qualifications", "To be confirmed"], ["HPCSA Registration", "To be confirmed"], ["Role", "Medical Doctor & Founder"], ["Areas of interest", "Medical aesthetics, skin health, women's health"]].map(([k, v]) => (
                <div key={k} className="bg-white p-5"><dt className="text-[11px] uppercase tracking-[0.2em] text-ink/50">{k}</dt><dd className={`mt-2 ${v === "To be confirmed" ? "italic text-ink/45" : "text-burgundy"}`}>{v}</dd></div>
              ))}
            </dl>
            <h3 className="mt-10 text-2xl">Biography</h3>
            <p className="mt-3 leading-8 text-ink/80">Dr N. Skhosana's full professional biography will be published here once supplied by the practice.</p>
            <h3 className="mt-8 text-2xl">Treatment philosophy</h3>
            <p className="mt-3 leading-8 text-ink/80">Care that is personal, honest and clinically sound — taking time to understand each patient before recommending any treatment.</p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container-x">
          <Reveal><p className="eyebrow">Our Philosophy</p><h2 className="mt-5 max-w-2xl text-4xl sm:text-5xl">The principles behind every appointment</h2></Reveal>
          <div className="mt-14 grid gap-px bg-burgundy/10 md:grid-cols-5">
            {philosophy.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.06} className="bg-ivory p-8"><span className="font-serif text-3xl text-gold">0{i + 1}</span><h3 className="mt-4 text-2xl leading-tight">{t}</h3><p className="mt-3 text-sm leading-7 text-ink/70">{d}</p></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-burgundy/10 bg-white">
        <div className="container-x grid gap-10 py-24 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Reveal><p className="eyebrow">Our Commitment</p><h2 className="mt-5 text-4xl sm:text-5xl">Your trust, protected</h2></Reveal>
          <Reveal delay={0.1} className="space-y-6 text-lg leading-8 text-ink/80">
            <p>We are committed to a respectful, unhurried patient experience. Your personal and health information is treated as confidential and handled in line with the Protection of Personal Information Act (POPIA) and professional ethical standards.</p>
            <p>Clinical records are kept in our practice management system — never on this public website.</p>
          </Reveal>
        </div>
      </section>
      <CTA />
    </>
  );
}
