import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/Blocks";
import { site } from "@/lib/site";

const contact = "the practice using the details on our Contact page";
const docs: Record<string, { title: string; body: [string, string][] }> = {
  "privacy-policy": { title: "Privacy Policy", body: [
    ["Who we are", `${site.brand} ("the practice") is responsible for personal information collected through this website.`],
    ["What we collect", "Through this website we collect only what you choose to send us via the contact form: your name, email address, telephone number, reason for enquiry and message. We do not request medical history through this website."],
    ["How we use it", "We use this information solely to respond to your enquiry and, where you request it, to help arrange an appointment."],
    ["Clinical information", "Clinical and appointment records are held in the practice's patient management system (Navitas), not on this website."],
    ["Sharing", "We do not sell your information. It may be processed by service providers that host this website or deliver email on our behalf, under appropriate safeguards."],
    ["Retention", "Enquiries are retained only as long as needed to respond and for reasonable record-keeping, after which they are deleted."],
    ["Your rights", `You may request access to, correction of or deletion of your personal information by contacting ${contact}.`],
  ] },
  "popia-notice": { title: "POPIA Privacy Notice", body: [
    ["Responsible party", `${site.brand}. Contact details for the Information Officer will be published on this page once confirmed.`],
    ["Purpose of processing", "To respond to enquiries submitted through this website and to facilitate appointments."],
    ["Lawful basis", "Your consent, provided when you submit the contact form, and the practice's legitimate interest in responding to you."],
    ["Data minimisation", "We collect only the information needed to respond. Please do not submit sensitive health information through the contact form."],
    ["Security", "This website uses encrypted (HTTPS) connections and restricts access to enquiries to authorised practice staff."],
    ["Your rights under POPIA", "You may request access to, correction or deletion of your personal information, object to processing, and lodge a complaint with the Information Regulator (South Africa)."],
  ] },
  terms: { title: "Terms and Conditions", body: [
    ["Use of this website", "This website provides general information about the practice and its services. By using it, you agree to these terms."],
    ["No medical advice", "Content on this website is general and educational and does not constitute medical advice. Treatment decisions are made only after an individual consultation."],
    ["Bookings", "Appointments are subject to availability and confirmation by the practice."],
    ["Intellectual property", "The Lilly Medical Aesthetics name, logo and content are the property of the practice and may not be reused without permission."],
    ["Changes", "We may update these terms from time to time. The latest version will always be available on this page."],
  ] },
  "medical-disclaimer": { title: "Medical Disclaimer", body: [
    ["General information only", "Information on this website, including blog articles, is for general education and does not replace a consultation with a qualified healthcare professional."],
    ["Individual results vary", "Suitability for any treatment is determined through individual assessment. Outcomes vary from person to person and are not guaranteed."],
    ["Emergencies", "If you are experiencing a medical emergency, contact emergency services or go to your nearest emergency unit immediately. Do not use this website or WhatsApp for emergencies."],
  ] },
  "cookie-policy": { title: "Cookie Policy", body: [
    ["Current use", "This website does not currently use advertising or analytics cookies. Only technically necessary storage may be used for the site to function."],
    ["Future analytics", "If privacy-respecting analytics are added, this policy will be updated and you will be asked for consent where required. No sensitive or health information will ever be sent to analytics or advertising tools."],
    ["Managing cookies", "You can control cookies through your browser settings."],
  ] },
};

export const generateStaticParams = () => Object.keys(docs).map((slug) => ({ slug }));
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const d = docs[(await params).slug]; return d ? { title: d.title, alternates: { canonical: `/legal/${(await params).slug}` } } : {};
}
export default async function Legal({ params }: { params: Promise<{ slug: string }> }) {
  const d = docs[(await params).slug]; if (!d) notFound();
  return (
    <>
      <PageHero eyebrow="Legal" title={d.title} />
      <section className="py-16"><div className="container-x max-w-3xl">
        <p className="mb-10 bg-gold/10 p-4 text-sm text-ink/70">Draft for review by the practice before launch. Last updated {new Date().toLocaleDateString("en-ZA", { month: "long", year: "numeric" })}.</p>
        {d.body.map(([h, p]) => <div key={h} className="mb-8"><h2 className="text-3xl">{h}</h2><p className="mt-3 leading-8 text-ink/80">{p}</p></div>)}
      </div></section>
    </>
  );
}
