"use client";
import { useState } from "react";
import Icon from "./Icon";

const field = "w-full px-4 py-3 bg-surface-container rounded font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary";
const label = "font-label-caps text-label-caps uppercase text-on-surface font-bold tracking-wider";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  // TODO: kirim ke backend / email service (mis. Resend, Formspree) sebelum go-live
  const onSubmit = (e) => { e.preventDefault(); setSent(true); e.currentTarget.reset(); };

  return (
    <div className="follow-theme lg:col-span-6 bg-surface-container-lowest text-on-surface p-8 sm:p-10 rounded-xl shadow-2xl space-y-6">
      <div className="space-y-1">
        <h3 className="font-headline-md text-headline-md uppercase">Trade &amp; Supply Inquiry</h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant">Submit corporate requirements directly to our Jakarta commercial desk.</p>
      </div>
      <form className="space-y-4" onSubmit={onSubmit}>
        <div className="space-y-1"><label className={label}>Contact Person Name</label>
          <input className={field} placeholder="e.g. Hendra Pratama" required type="text" /></div>
        <div className="space-y-1"><label className={label}>Corporate Entity / Company</label>
          <input className={field} placeholder="e.g. PT Industri Smelter Indonesia" required type="text" /></div>
        <div className="space-y-1"><label className={label}>Commodity Portfolio of Interest</label>
          <select className={field}>
            <option>Metals &amp; Metal Ores (Nickel, Bauxite, Iron)</option>
            <option>Wholesale of Fuels (Thermal Coal, Diesel, Gas)</option>
            <option>Construction Materials (Cement, Lime, Aggregates)</option>
            <option>Land Preparation &amp; Heavy Earthworks</option>
            <option>Multi-Commodity / Strategic Partnership</option>
          </select></div>
        <div className="space-y-1"><label className={label}>Project Specification / Volume</label>
          <textarea className={`${field} resize-none`} rows={4} required
            placeholder="Please describe required specifications, estimated metric tonnages, target delivery ports, and scheduling..." /></div>
        <button type="submit" className="w-full py-4 bg-primary text-on-primary font-headline-sm text-label-caps uppercase tracking-wider font-bold hover:bg-primary-container transition-colors shadow-lg flex items-center justify-center gap-2">
          <span>Submit Trade Inquiry</span><Icon name="send" className="text-[18px]" />
        </button>
        {sent && <p role="status" className="font-body-sm text-body-sm text-secondary font-semibold">Trade Inquiry submitted successfully. Our trade desk will contact your entity within 24 business hours.</p>}
      </form>
    </div>
  );
}