"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

const reasons = ["General enquiry", "Book or change an appointment", "Medical consultation", "Aesthetic treatments", "Family planning", "Weight management", "Other"];

export function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [error, setError] = useState("");
  const t0 = useRef(Date.now());

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const data: Record<string, unknown> = { ...Object.fromEntries(f), consent: f.get("consent") === "on", t: t0.current };
    const errs: Record<string, string> = {};
    if (String(data.name ?? "").trim().length < 2) errs.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(data.email ?? ""))) errs.email = "Please enter a valid email address.";
    if (!data.reason) errs.reason = "Please choose a reason.";
    if (String(data.message ?? "").trim().length < 10) errs.message = "Please enter a short message (at least 10 characters).";
    if (!data.consent) errs.consent = "Please acknowledge the privacy notice.";
    setErrors(errs); setError("");
    if (Object.keys(errs).length) return;
    setState("sending");
    try {
      const r = await fetch("/api/enquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const j = await r.json();
      if (r.ok) return setState("done");
      if (j.errors) setErrors(j.errors);
      setError(j.error ?? "Please check the highlighted fields.");
    } catch { setError("Network error. Please try again."); }
    setState("idle");
  }

  if (state === "done")
    return (
      <div className="border border-gold/40 bg-white p-10 text-center" role="status">
        <CheckCircle2 className="mx-auto h-12 w-12 text-gold" strokeWidth={1.25} />
        <h3 className="mt-5 text-3xl">Thank you</h3>
        <p className="mt-3 text-ink/70">Your enquiry has been received. We will respond during practice hours.</p>
      </div>
    );

  const err = (k: string) => errors[k] && <p className="mt-1.5 text-xs text-burgundy" role="alert">{errors[k]}</p>;
  const lab = "mb-2 block text-xs font-semibold uppercase tracking-widest text-ink/60";
  return (
    <form onSubmit={submit} noValidate className="space-y-5 border border-burgundy/10 bg-white p-7 sm:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <div><label htmlFor="name" className={lab}>Full name *</label><input id="name" name="name" autoComplete="name" className="field" aria-invalid={!!errors.name} />{err("name")}</div>
        <div><label htmlFor="email" className={lab}>Email address *</label><input id="email" name="email" type="email" autoComplete="email" className="field" aria-invalid={!!errors.email} />{err("email")}</div>
        <div><label htmlFor="phone" className={lab}>Telephone</label><input id="phone" name="phone" type="tel" autoComplete="tel" className="field" />{err("phone")}</div>
        <div><label htmlFor="reason" className={lab}>Reason for enquiry *</label>
          <select id="reason" name="reason" defaultValue="" className="field" aria-invalid={!!errors.reason}><option value="" disabled>Select…</option>{reasons.map((r) => <option key={r}>{r}</option>)}</select>{err("reason")}</div>
      </div>
      <div><label htmlFor="message" className={lab}>Message *</label><textarea id="message" name="message" rows={5} maxLength={2000} className="field resize-y" aria-invalid={!!errors.message} />{err("message")}
        <p className="mt-1.5 text-xs text-ink/50">Please do not include detailed medical history or sensitive health information.</p></div>
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <label className="flex gap-3 text-sm leading-6 text-ink/75"><input type="checkbox" name="consent" className="mt-1 h-4 w-4 accent-burgundy" />
        <span>I consent to Lilly Medical Aesthetics processing my personal information to respond to this enquiry, as described in the <Link href="/legal/popia-notice" className="text-burgundy underline">POPIA Privacy Notice</Link>. *</span></label>{err("consent")}
      {error && <p className="bg-blush px-4 py-3 text-sm text-burgundy" role="alert">{error}</p>}
      <button disabled={state === "sending"} className="btn-primary w-full sm:w-auto">{state === "sending" ? <><Loader2 className="h-4 w-4 animate-spin" />Sending…</> : "Send Enquiry"}</button>
    </form>
  );
}
