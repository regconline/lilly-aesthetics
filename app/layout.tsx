import type { Metadata, Viewport } from "next";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource/cormorant-garamond/500-italic.css";
import "@fontsource-variable/manrope";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsApp";
import { site } from "@/lib/site";


export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Dr N. Skhosana`, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: { type: "website", siteName: site.name, locale: "en_ZA", images: ["/images/dr-skhosana.webp"] },
  alternates: { canonical: "/" },
};
export const viewport: Viewport = { themeColor: "#850D30" };

const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: site.name,
  url: site.url,
  description: site.description,
  logo: `${site.url}/logo.svg`,
  image: `${site.url}/images/dr-skhosana.webp`,
  openingHours: ["Mo-Fr 09:00-16:00", "Sa 09:00-14:00"],
  ...(site.phone && { telephone: site.phone }),
  ...(site.address && { address: site.address }),
  employee: { "@type": "Person", name: site.doctor, jobTitle: "Medical Doctor" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-ZA">
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-white focus:px-4 focus:py-2">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </body>
    </html>
  );
}
