"use client";
import { useState } from "react";
import { Bell, CalendarDays, ClipboardList, History, Home, Settings, ShieldAlert, User, FileHeart, Clock } from "lucide-react";
import { Lotus } from "./Logo";

// SYNTHETIC DEMONSTRATION DATA ONLY — not connected to Navitas or any real patient record.
const patient = { name: "Thandi Demo", id: "DEMO-0001", email: "thandi.demo@example.com", phone: "000 000 0000", dob: "01 January 1990" };
const upcoming = [
  { date: "Tue, 08 Dec 2026", time: "10:00", service: "Medical-Grade Chemical Peel", with: "Dr N. Skhosana", status: "Confirmed" },
  { date: "Sat, 19 Dec 2026", time: "09:30", service: "Follow-up Consultation", with: "Dr N. Skhosana", status: "Pending" },
];
const history = [
  { date: "10 Nov 2026", service: "Medical Consultation", status: "Completed" },
  { date: "22 Oct 2026", service: "Microneedling", status: "Completed" },
  { date: "02 Oct 2026", service: "Skin Assessment", status: "Completed" },
  { date: "18 Sep 2026", service: "Vitamin Drip Assessment", status: "Cancelled" },
];
const notifications = [
  { t: "Appointment reminder", d: "Your chemical peel is booked for Tue, 08 Dec at 10:00.", when: "2 hours ago" },
  { t: "Aftercare guidance", d: "Remember daily sunscreen for the next two weeks.", when: "Yesterday" },
  { t: "Booking received", d: "Your follow-up request for 19 Dec is awaiting confirmation.", when: "3 days ago" },
];
const tabs = [
  { id: "dashboard", label: "Dashboard", icon: Home },
  { id: "overview", label: "Appointments", icon: CalendarDays },
  { id: "upcoming", label: "Upcoming", icon: Clock },
  { id: "history", label: "History", icon: History },
  { id: "personal", label: "Personal info", icon: User },
  { id: "medical", label: "Medical info", icon: FileHeart },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "settings", label: "Settings", icon: Settings },
] as const;
type Tab = (typeof tabs)[number]["id"];

const Badge = ({ s }: { s: string }) => (
  <span className={`px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest ${s === "Confirmed" || s === "Completed" ? "bg-green-50 text-green-800" : s === "Cancelled" ? "bg-ink/5 text-ink/50" : "bg-gold/15 text-burgundy"}`}>{s}</span>
);
const Card = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="border border-burgundy/10 bg-white p-6 sm:p-8"><h3 className="text-2xl">{title}</h3><div className="mt-5">{children}</div></div>
);
const Appts = ({ list }: { list: typeof upcoming }) => (
  <ul className="divide-y divide-burgundy/10">{list.map((a) => (
    <li key={a.date} className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between">
      <div><p className="font-medium text-burgundy-deep">{a.service}</p><p className="text-sm text-ink/60">{a.date} · {a.time} · {a.with}</p></div><Badge s={a.status} />
    </li>))}</ul>
);
const Hist = () => (
  <ul className="divide-y divide-burgundy/10">{history.map((a) => (
    <li key={a.date} className="flex items-center justify-between py-4"><div><p className="font-medium text-burgundy-deep">{a.service}</p><p className="text-sm text-ink/60">{a.date}</p></div><Badge s={a.status} /></li>))}</ul>
);
const Field = ({ k, v }: { k: string; v: string }) => (<div className="border-b border-burgundy/10 py-3"><p className="text-[11px] uppercase tracking-widest text-ink/50">{k}</p><p className="mt-1">{v}</p></div>);

export function PortalDemo() {
  const [tab, setTab] = useState<Tab>("dashboard");
  return (
    <div>
      <div className="sticky top-[72px] z-40 bg-gold px-4 py-2.5 text-center text-xs font-bold uppercase tracking-[0.15em] text-burgundy-deep" role="status">
        <ShieldAlert className="mr-2 inline h-4 w-4 -translate-y-px" />DEMONSTRATION ENVIRONMENT – No real patient information is displayed.
      </div>
      <section className="bg-blush/40 py-12 lg:py-16">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div><p className="eyebrow">Patient Portal · Demo</p><h1 className="mt-3 text-4xl sm:text-5xl">Welcome back, {patient.name.split(" ")[0]}</h1></div>
            <p className="max-w-sm text-sm text-ink/60">This preview is not connected to Navitas. Live features will be enabled once the official integration is authorised.</p>
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-[230px_1fr]">
            <nav className="flex gap-1 overflow-x-auto lg:flex-col" aria-label="Portal sections">
              {tabs.map((t) => (
                <button key={t.id} onClick={() => setTab(t.id)} className={`flex shrink-0 items-center gap-3 px-4 py-3 text-left text-sm transition ${tab === t.id ? "bg-burgundy text-white" : "text-ink/70 hover:bg-white"}`}>
                  <t.icon className="h-4 w-4" strokeWidth={1.5} />{t.label}
                </button>
              ))}
            </nav>
            <div className="min-w-0 space-y-6">
              {tab === "dashboard" && (<>
                <div className="grid gap-4 sm:grid-cols-3">
                  {[["Upcoming", upcoming.length], ["Completed visits", history.filter((h) => h.status === "Completed").length], ["Notifications", notifications.length]].map(([k, v]) => (
                    <div key={k} className="border border-burgundy/10 bg-white p-6"><p className="text-xs uppercase tracking-widest text-ink/50">{k}</p><p className="mt-2 font-serif text-5xl text-burgundy">{v}</p></div>
                  ))}
                </div>
                <Card title="Next appointment"><Appts list={upcoming.slice(0, 1)} /></Card>
                <Card title="Latest notification"><p className="font-medium">{notifications[0].t}</p><p className="mt-1 text-sm text-ink/70">{notifications[0].d}</p></Card>
              </>)}
              {tab === "overview" && (<><Card title="Upcoming"><Appts list={upcoming} /></Card><Card title="Recent history"><Hist /></Card></>)}
              {tab === "upcoming" && <Card title="Upcoming appointments"><Appts list={upcoming} /><div className="mt-6 flex flex-wrap gap-3"><button disabled className="btn-outline opacity-50">Reschedule (demo)</button><button disabled className="btn-outline opacity-50">Cancel (demo)</button></div></Card>}
              {tab === "history" && <Card title="Appointment history"><Hist /></Card>}
              {tab === "personal" && <Card title="Personal information"><div className="grid gap-x-8 sm:grid-cols-2"><Field k="Full name" v={patient.name} /><Field k="Patient ID" v={patient.id} /><Field k="Email" v={patient.email} /><Field k="Telephone" v={patient.phone} /><Field k="Date of birth" v={patient.dob} /></div></Card>}
              {tab === "medical" && <Card title="Medical information"><div className="flex flex-col items-center py-10 text-center"><Lotus className="h-12 w-auto text-gold" /><p className="mt-5 font-serif text-2xl text-burgundy">Securely held in Navitas</p><p className="mt-2 max-w-md text-sm text-ink/60">Clinical information will only ever be displayed through the authorised, protected Navitas integration. Nothing is stored on this website.</p></div></Card>}
              {tab === "notifications" && <Card title="Notifications"><ul className="divide-y divide-burgundy/10">{notifications.map((n) => <li key={n.t} className="py-4"><div className="flex justify-between gap-4"><p className="font-medium text-burgundy-deep">{n.t}</p><span className="shrink-0 text-xs text-ink/45">{n.when}</span></div><p className="mt-1 text-sm text-ink/70">{n.d}</p></li>)}</ul></Card>}
              {tab === "settings" && <Card title="Profile settings"><ul className="divide-y divide-burgundy/10">{["Email reminders", "SMS reminders", "WhatsApp reminders"].map((s, i) => <li key={s} className="flex items-center justify-between py-4"><span>{s}</span><span className={`relative h-6 w-11 rounded-full ${i < 2 ? "bg-burgundy" : "bg-ink/15"}`}><span className={`absolute top-1 h-4 w-4 rounded-full bg-white ${i < 2 ? "right-1" : "left-1"}`} /></span></li>)}</ul><p className="mt-4 text-xs text-ink/50">Settings are illustrative and cannot be changed in the demo.</p></Card>}
              <p className="flex items-center gap-2 text-xs text-ink/50"><ClipboardList className="h-3.5 w-3.5" />All names, dates and records above are synthetic demonstration data.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
