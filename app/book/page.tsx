import Link from "next/link";
import type { Metadata } from "next";
import { CalendarCheck, ExternalLink, LayoutDashboard, LogIn, MessageCircle, Phone, ShieldCheck, UserPlus } from "lucide-react";
import { PageHero, HoursCard } from "@/components/Blocks";
import { Reveal } from "@/components/Reveal";
import { site, whatsappHref } from "@/lib/site";
import { activeServices } from "@/lib/services";

export const metadata: Metadata = { title: "Book Now", description: "Book your appointment at Lilly Medical Aesthetics.", alternates: { canonical: "/book" } };

export default function Book() {
  const live = !!site.navitasUrl;
  return (
    <>
      <PageHero eyebrow="Book Now" title="Book Your Appointment" intro="Take the next step towards your health and wellness journey." />
      <section className="py-20 lg:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            {live ? (
              <div className="border border-burgundy/10 bg-white p-8 sm:p-12">
                <span className="inline-flex items-center gap-2 bg-green-50 px-3 py-1 text-xs font-medium text-green-800"><ShieldCheck className="h-3.5 w-3.5" />Secure booking via Navitas</span>
                <h2 className="mt-6 text-4xl">Online booking</h2>
                <p className="mt-4 leading-8 text-ink/75">Appointments are managed securely through our Navitas patient management system. Existing patients can sign in; new patients can register where supported.</p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <a href={site.navitasUrl!} target="_blank" rel="noopener noreferrer" className="btn-primary"><LogIn className="h-4 w-4" />Existing patient login</a>
                  <a href={site.navitasUrl!} target="_blank" rel="noopener noreferrer" className="btn-outline"><UserPlus className="h-4 w-4" />New patient</a>
                </div>
                <p className="mt-4 flex items-center gap-2 text-xs text-ink/50"><ExternalLink className="h-3.5 w-3.5" />Opens the official Navitas booking portal in a new tab.</p>
              </div>
            ) : (
              <div className="border border-burgundy/10 bg-white p-8 sm:p-12">
                <span className="inline-flex items-center gap-2 bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-burgundy">Online booking launching soon</span>
                <h2 className="mt-6 text-4xl">How to book today</h2>
                <p className="mt-4 leading-8 text-ink/75">Our secure online booking, connected to the practice's Navitas patient management system, is being set up. Until then, please book directly with the practice:</p>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {site.phone ? <a href={`tel:${site.phone}`} className="btn-primary"><Phone className="h-4 w-4" />Call</a> : <span className="btn border border-dashed border-ink/20 text-ink/45"><Phone className="h-4 w-4" />Call — soon</span>}
                  {whatsappHref ? <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-primary"><MessageCircle className="h-4 w-4" />WhatsApp</a> : <span className="btn border border-dashed border-ink/20 text-ink/45"><MessageCircle className="h-4 w-4" />WhatsApp — soon</span>}
                  <Link href="/contact" className="btn-outline"><CalendarCheck className="h-4 w-4" />Enquire</Link>
                </div>
              </div>
            )}
            <div className="mt-10">
              <h3 className="text-2xl">Services you can book</h3>
              <div className="mt-5 flex flex-wrap gap-2">{activeServices.map((s) => <Link key={s.slug} href={`/services/${s.slug}`} className="border border-burgundy/15 bg-white px-4 py-2 text-sm hover:border-burgundy hover:text-burgundy">{s.name}</Link>)}</div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="space-y-8">
            <div className="bg-burgundy p-8 text-white">
              <LayoutDashboard className="h-7 w-7 text-gold" strokeWidth={1.25} />
              <h3 className="mt-4 text-3xl !text-white">Explore Patient Portal Demo</h3>
              <p className="mt-3 text-sm leading-7 text-white/80">Preview the patient experience we are building — dashboard, appointments, notifications and profile. Demonstration data only.</p>
              <Link href="/portal-demo" className="btn-light mt-7">Open the demo</Link>
            </div>
            <HoursCard />
          </Reveal>
        </div>
      </section>
    </>
  );
}
