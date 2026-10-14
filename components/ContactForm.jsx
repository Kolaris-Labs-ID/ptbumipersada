"use client";
import { useState } from "react";
import Icon from "./Icon";
import { useLang } from "./LanguageProvider";

const field =
  "w-full px-4 py-3 bg-surface-container rounded font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-60";
const label = "font-label-caps text-label-caps uppercase text-on-surface font-bold tracking-wider";

export default function ContactForm() {
  const { d } = useLang();
  const f = d.form;
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === "loading") return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name")?.toString().trim(),
      company: data.get("company")?.toString().trim(),
      commodity: data.get("commodity")?.toString(),
      spec: data.get("spec")?.toString().trim(),
      website: data.get("website")?.toString(), // honeypot anti-spam
    };

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) throw new Error("failed");

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const loading = status === "loading";

  return (
    <div className="follow-theme lg:col-span-6 bg-surface-container-lowest text-on-surface p-8 sm:p-10 rounded-xl shadow-2xl space-y-6">
      <div className="space-y-1">
        <h3 className="font-headline-md text-headline-md uppercase">{f.title}</h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant">{f.sub}</p>
      </div>
      <form className="space-y-4" onSubmit={onSubmit}>
        {/* Honeypot: disembunyikan dari manusia, bot biasanya mengisinya */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute -left-[9999px] h-0 w-0 opacity-0"
        />

        <div className="space-y-1">
          <label htmlFor="cf-name" className={label}>{f.name}</label>
          <input id="cf-name" name="name" className={field} placeholder={f.namePh} required type="text" disabled={loading} />
        </div>
        <div className="space-y-1">
          <label htmlFor="cf-company" className={label}>{f.company}</label>
          <input id="cf-company" name="company" className={field} placeholder={f.companyPh} required type="text" disabled={loading} />
        </div>
        <div className="space-y-1">
          <label htmlFor="cf-commodity" className={label}>{f.commodity}</label>
          <select id="cf-commodity" name="commodity" className={field} disabled={loading}>
            {f.options.map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>
        <div className="space-y-1">
          <label htmlFor="cf-spec" className={label}>{f.spec}</label>
          <textarea id="cf-spec" name="spec" className={`${field} resize-none`} rows={4} required placeholder={f.specPh} disabled={loading} />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 bg-primary text-on-primary font-headline-sm text-label-caps uppercase tracking-wider font-bold hover:bg-primary-container transition-colors shadow-lg flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-70"
        >
          <span>{loading ? (f.sending ?? "Mengirim...") : f.submit}</span>
          <Icon name={loading ? "progress_activity" : "send"} className={`text-[18px] ${loading ? "animate-spin" : ""}`} />
        </button>

        {status === "success" && (
          <p role="status" className="font-body-sm text-body-sm text-secondary font-semibold">{f.success}</p>
        )}
        {status === "error" && (
          <p role="alert" className="font-body-sm text-body-sm text-red-600 font-semibold">
            {f.error ?? "Gagal mengirim. Silakan coba lagi atau hubungi kami via email."}
          </p>
        )}
      </form>
    </div>
  );
}