import { LOGO_PATH, LOGO_VIEWBOX, LOTUS_PATH, LOTUS_VIEWBOX } from "@/lib/logo-paths";

export function Lotus({ className = "" }: { className?: string }) {
  return (
    <svg viewBox={LOTUS_VIEWBOX} className={className} aria-hidden="true">
      <path fill="currentColor" fillRule="evenodd" d={LOTUS_PATH} />
    </svg>
  );
}

/** Full Lilly logo (lotus + wordmark) with "AESTHETICS" set beneath, as in the supplied artwork. */
export function Logo({ className = "", tone = "burgundy" }: { className?: string; tone?: "burgundy" | "white" }) {
  const color = tone === "white" ? "text-white" : "text-burgundy";
  return (
    <span className={`inline-flex flex-col items-center ${color} ${className}`} aria-label="Lilly Medical Aesthetics">
      <svg viewBox={LOGO_VIEWBOX} className="h-full w-auto" role="img" aria-hidden="true">
        <path fill="currentColor" fillRule="evenodd" d={LOGO_PATH} />
      </svg>
    </span>
  );
}

export function HeaderLogo({ tone = "burgundy" }: { tone?: "burgundy" | "white" }) {
  return (
    <span className={`flex items-center gap-3 ${tone === "white" ? "text-white" : "text-burgundy"}`}>
      <Lotus className="h-10 w-auto sm:h-11" />
      <span className="flex flex-col leading-none">
        <span className="font-serif text-[22px] font-semibold tracking-[0.32em]">LILLY</span>
        <span className="mt-1 text-[8.5px] font-semibold tracking-[0.42em] opacity-80">MEDICAL AESTHETICS</span>
      </span>
    </span>
  );
}
