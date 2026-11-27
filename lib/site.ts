// Central, editable site settings. Contact details stay empty until the practice verifies them.
// Set them via Vercel environment variables (see .env.example) — no code changes needed.
const env = (v?: string) => (v && v.trim() ? v.trim() : null);

export const site = {
  name: "Lilly Medical Aesthetics",
  brand: "Lilly Medical Aesthetics by Dr N. Skhosana",
  doctor: "Dr N. Skhosana",
  url: env(process.env.NEXT_PUBLIC_SITE_URL) ?? "https://lilly-aesthetics.vercel.app",
  description:
    "Personalised medical and aesthetic care by Dr N. Skhosana — medical consultations, chemical peels, microneedling, vitamin drips, family planning and medical weight management.",
  phone: env(process.env.NEXT_PUBLIC_PHONE),
  whatsapp: env(process.env.NEXT_PUBLIC_WHATSAPP),
  email: env(process.env.NEXT_PUBLIC_EMAIL),
  address: env(process.env.NEXT_PUBLIC_ADDRESS),
  mapsQuery: env(process.env.NEXT_PUBLIC_MAPS_QUERY),
  navitasUrl: env(process.env.NEXT_PUBLIC_NAVITAS_BOOKING_URL),
  whatsappMessage:
    "Hello Lilly Medical Aesthetics. I would like to enquire about your services and appointments.",
  hours: [
    { day: "Monday – Friday", time: "09:00 – 16:00" },
    { day: "Saturday", time: "09:00 – 14:00" },
    { day: "Sunday", time: "Closed" },
    { day: "Public Holidays", time: "Closed" },
  ],
  social: [] as { label: string; href: string }[],
};

export const whatsappHref = site.whatsapp
  ? `https://wa.me/${site.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(site.whatsappMessage)}`
  : null;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const legalLinks = [
  { href: "/legal/privacy-policy", label: "Privacy Policy" },
  { href: "/legal/popia-notice", label: "POPIA Privacy Notice" },
  { href: "/legal/terms", label: "Terms and Conditions" },
  { href: "/legal/medical-disclaimer", label: "Medical Disclaimer" },
  { href: "/legal/cookie-policy", label: "Cookie Policy" },
];
