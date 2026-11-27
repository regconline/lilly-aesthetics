import { NextResponse } from "next/server";

const reasons = ["General enquiry", "Book or change an appointment", "Medical consultation", "Aesthetic treatments", "Family planning", "Weight management", "Other"];
const hits = new Map<string, number[]>();
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(req: Request) {
  // Basic per-IP rate limit (best-effort on serverless): 5 requests / 10 min
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 600_000);
  if (recent.length >= 5) return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
  hits.set(ip, [...recent, now]);

  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }
  const str = (k: string, max: number) => (typeof body[k] === "string" ? (body[k] as string).trim().slice(0, max) : "");
  if (str("company", 100)) return NextResponse.json({ ok: true }); // honeypot: silently drop bots
  if (typeof body.t === "number" && now - (body.t as number) < 2500) return NextResponse.json({ error: "Please take a moment before submitting." }, { status: 400 });

  const data = { name: str("name", 100), email: str("email", 150), phone: str("phone", 30), reason: str("reason", 60), message: str("message", 2000) };
  const errors: Record<string, string> = {};
  if (data.name.length < 2) errors.name = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email)) errors.email = "Please enter a valid email address.";
  if (data.phone && !/^[+\d][\d\s()-]{6,}$/.test(data.phone)) errors.phone = "Please enter a valid telephone number.";
  if (!reasons.includes(data.reason)) errors.reason = "Please choose a reason.";
  if (data.message.length < 10) errors.message = "Please enter a short message (at least 10 characters).";
  if (body.consent !== true) errors.consent = "Please acknowledge the privacy notice.";
  if (Object.keys(errors).length) return NextResponse.json({ errors }, { status: 422 });

  const key = process.env.RESEND_API_KEY, to = process.env.ENQUIRY_TO_EMAIL, from = process.env.ENQUIRY_FROM_EMAIL;
  if (!key || !to || !from)
    return NextResponse.json({ error: "Online enquiries are not yet active. Please contact the practice by telephone or WhatsApp." }, { status: 503 });

  const html = `<h2>New website enquiry</h2><p><b>Name:</b> ${esc(data.name)}<br><b>Email:</b> ${esc(data.email)}<br><b>Phone:</b> ${esc(data.phone || "-")}<br><b>Reason:</b> ${esc(data.reason)}</p><p>${esc(data.message).replace(/\n/g, "<br>")}</p>`;
  const send = (payload: object) => fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" }, body: JSON.stringify(payload) });
  const r = await send({ from, to, reply_to: data.email, subject: `Website enquiry: ${data.reason}`, html });
  if (!r.ok) return NextResponse.json({ error: "We couldn't send your message right now. Please try again or contact us by telephone." }, { status: 502 });
  await send({ from, to: data.email, subject: "We've received your enquiry — Lilly Medical Aesthetics", html: `<p>Dear ${esc(data.name)},</p><p>Thank you for contacting Lilly Medical Aesthetics. We have received your enquiry and will respond as soon as possible during practice hours.</p><p>Please do not reply with personal medical information by email.</p>` }).catch(() => {});
  return NextResponse.json({ ok: true });
}
