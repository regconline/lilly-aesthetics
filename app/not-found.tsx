import Link from "next/link";
import { Lotus } from "@/components/Logo";
export default function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <Lotus className="h-16 w-auto text-gold" />
      <h1 className="mt-6 text-5xl">Page not found</h1>
      <p className="mt-4 text-ink/70">The page you're looking for doesn't exist or has moved.</p>
      <Link href="/" className="btn-primary mt-8">Return home</Link>
    </section>
  );
}
