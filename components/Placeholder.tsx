/** Shown wherever a verified practice detail has not yet been supplied. */
export function Pending({ label = "To be confirmed" }: { label?: string }) {
  return <span className="italic text-ink/45">{label}</span>;
}
