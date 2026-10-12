"use client";
import { useState } from "react";
import Icon from "./Icon";
import { useLang } from "./LanguageProvider";

const field = "w-full px-4 py-3 bg-surface-container rounded font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary";
const label = "font-label-caps text-label-caps uppercase text-on-surface font-bold tracking-wider";

export default function ContactForm() {
  const { d } = useLang();
  const f = d.form;
  const [sent, setSent] = useState(false);
  // TODO: kirim ke backend / email service (mis. Resend, Formspree) sebelum go-live
  const onSubmit = (e) => { e.preventDefault(); setSent(true); e.currentTarget.reset(); };

  return (
    <div className="follow-theme lg:col-span-6 bg-surface-container-lowest text-on-surface p-8 sm:p-10 rounded-xl shadow-2xl space-y-6">
      <div className="space-y-1">
        <h3 className="font-headline-md text-headline-md uppercase">{f.title}</h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant">{f.sub}</p>
      </div>
      <form className="space-y-4" onSubmit={onSubmit}>
        <div className="space-y-1"><label className={label}>{f.name}</label>
          <input className={field} placeholder={f.namePh} required type="text" /></div>
        <div className="space-y-1"><label className={label}>{f.company}</label>
          <input className={field} placeholder={f.companyPh} required type="text" /></div>
        <div className="space-y-1"><label className={label}>{f.commodity}</label>
          <select className={field}>
            {f.options.map((o) => <option key={o}>{o}</option>)}
          </select></div>
        <div className="space-y-1"><label className={label}>{f.spec}</label>
          <textarea className={`${field} resize-none`} rows={4} required placeholder={f.specPh} /></div>
        <button type="submit" className="w-full py-4 bg-primary text-on-primary font-headline-sm text-label-caps uppercase tracking-wider font-bold hover:bg-primary-container transition-colors shadow-lg flex items-center justify-center gap-2">
          <span>{f.submit}</span><Icon name="send" className="text-[18px]" />
        </button>
        {sent && <p role="status" className="font-body-sm text-body-sm text-secondary font-semibold">{f.success}</p>}
      </form>
    </div>
  );
}