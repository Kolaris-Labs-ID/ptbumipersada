"use client";
import { useLang } from "./LanguageProvider";
import { MAPS_LINK, PHONE, PHONE_HREF, EMAIL, EMAIL_HREF } from "./data";

export default function Footer() {
  const { d } = useLang();
  const f = d.footer;

  return (
    <footer className="w-full bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="space-y-2 md:col-span-2">
          <span className="font-headline-sm text-headline-sm uppercase text-on-surface">PT Bumi Sada Mineral</span>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">{f.desc}</p>
          <p className="font-label-caps text-label-caps text-on-surface-variant uppercase pt-1">{f.licensed}</p>
        </div>
        <div>
          <h4 className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface mb-2">{f.opsHeading}</h4>
          <ul className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
            <li><a className="hover:text-on-surface" href="#services">{f.links[0]}</a></li>
            <li><a className="hover:text-on-surface" href="#why-us">{f.links[1]}</a></li>
            <li><a className="hover:text-on-surface" href="#why-us">{f.links[2]}</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface mb-2">{f.officeHeading}</h4>
          <address className="font-body-sm text-body-sm text-on-surface-variant not-italic">
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={f.mapsAria}
              className="block space-y-1 underline-offset-4 hover:text-on-surface hover:underline"
            >
              {f.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </a>
            <p className="pt-2 font-label-mono-stat text-label-mono-stat text-primary">
              <a href={PHONE_HREF} className="hover:underline underline-offset-4">T: {PHONE}</a>
            </p>
            <p className="font-label-mono-stat text-label-mono-stat text-primary break-all">
              <a href={EMAIL_HREF} className="hover:underline underline-offset-4">E: {EMAIL}</a>
            </p>
          </address>
        </div>
      </div>
      <div className="w-full bg-surface-container">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-2 flex flex-col sm:flex-row items-center justify-between text-on-surface-variant font-label-caps text-label-caps uppercase tracking-wider gap-2">
          <span>{f.copyright}</span>
          <span>{f.desk}</span>
        </div>
      </div>
    </footer>
  );
}