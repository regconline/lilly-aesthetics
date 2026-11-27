import type { Metadata } from "next";
import { ContactList, HoursCard, MapEmbed, PageHero } from "@/components/Blocks";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = { title: "Contact", description: "Contact Lilly Medical Aesthetics — enquiries, opening hours, location and directions.", alternates: { canonical: "/contact" } };

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title="We'd love to hear from you." intro="Send us an enquiry, or reach the practice directly using the details below." />
      <section className="py-20 lg:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[1.4fr_1fr]">
          <Reveal><h2 className="mb-8 text-4xl">Send an enquiry</h2><ContactForm /></Reveal>
          <Reveal delay={0.1} className="space-y-10">
            <div><h2 className="text-4xl">Practice details</h2><div className="mt-4"><ContactList /></div></div>
            <HoursCard />
          </Reveal>
        </div>
      </section>
      <section className="pb-24"><div className="container-x"><h2 className="mb-8 text-4xl">Find us</h2><MapEmbed className="h-[420px]" /></div></section>
    </>
  );
}
