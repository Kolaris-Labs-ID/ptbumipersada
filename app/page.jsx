import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import { services, pillars, missions, advantages, stats } from "@/components/data";

const HERO_BG = "/hero-bg.webp";
const ORE_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuARwpNC4_fDwyeJwT--pDiERh2Rk875H3-ev77fiFXQiWWxXCUJpPykHW6zF55Zyy94bVdg-UTABzHhR7JAliJ7GoppvrDu9391AcPVWC1nbS2ynr7a2Byw83CW0PKr1NfzITJwIu9ixbJNMVW8ihKPoxqBwYy-EJo08_34DRVzCG5IikQ6VceWapN5OUg7UDUSkGBy01N8Z_Lc_EgETniAw92_za7wLNPJv0qA_gjo";

const wrap = "max-w-7xl mx-auto px-6 lg:px-12";
const eyebrow = "font-label-caps text-label-caps tracking-widest uppercase font-bold";
const h2 = "font-headline-lg text-headline-lg uppercase tracking-tight";
const legalDetails = [
  ["Domicile", "District 8 SCBD, Jakarta"],
  ["Jurisdiction", "DKI Jakarta, Indonesia"],
  // CLIENT-CONFIRM
  ["Sector", "Commodity & Material Trading"],
];

const OFFICE_ADDRESS =
  "Prosperity Tower Lantai 9 Unit C, District 8 SCBD Lot 28, Jl. Jend. Sudirman Kav.52-53, Senayan, Kebayoran Baru, Jakarta Selatan, DKI Jakarta.";
const MAPS_QUERY = encodeURIComponent("Prosperity Tower, District 8 SCBD, Jl. Jend. Sudirman Kav.52-53, Senayan, Jakarta Selatan");
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;
const MAPS_EMBED = `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`;

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full bg-surface">
        {/* HERO */}
        <section id="home" className="keep-light relative w-full min-h-[calc(100svh_-_var(--header-h)_-_var(--topbar-h))] flex flex-col justify-between overflow-hidden bg-on-surface">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${HERO_BG}')` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-on-surface/95 via-on-surface/85 to-on-surface/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-on-surface via-transparent to-on-surface/40" />
          <div className={`relative z-10 ${wrap} py-14 lg:py-20 w-full my-auto`}>
            <div className="max-w-none space-y-6">
              <div className="inline-flex items-center gap-3 px-3.5 py-1.5 bg-surface/10 backdrop-blur-md rounded">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="font-label-caps text-label-caps tracking-widest text-surface uppercase">EST. JUNE 09, 2023 • INDONESIA COMMODITY &amp; MATERIAL TRADING</span>
              </div>
              <h1 className="font-display-hero text-[clamp(1.75rem,4.5vw,4rem)] leading-[1.08] [text-wrap:balance] text-surface tracking-tight uppercase font-bold sm:text-[clamp(2.25rem,4.5vw,4rem)]">
                <span className="block xl:whitespace-nowrap">From Resources to Industry.</span>
                <span className="block text-primary-fixed xl:whitespace-nowrap">From Supply to Opportunity.</span>
              </h1>
              <p className="font-body-lg text-sm sm:text-base leading-relaxed text-surface-container-high max-w-2xl font-light">
                Connecting market needs with resource availability seamlessly and sustainably through institutional grade procurement, rigorous assay control, and strategic nationwide logistics.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a href="#services" className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-on-primary font-headline-sm text-label-caps uppercase tracking-wider font-bold shadow-lg hover:bg-primary-container transition-all group">
                  <span>Explore Our Services</span>
                  <Icon name="arrow_forward" className="text-[18px] group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
          <div className="follow-theme relative z-10 w-full bg-surface-container-lowest/95 backdrop-blur-md shadow-xl py-6">
            <div className={`${wrap} grid grid-cols-2 md:grid-cols-4 gap-6`}>
              {stats.map(([big, icon, title, sub, bigC, iconC]) => (
                <div key={title} className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className={`font-headline-lg text-headline-lg font-bold ${bigC}`}>{big}</span>
                    <Icon name={icon} className={`${iconC} text-[20px]`} />
                  </div>
                  <span className="font-title-md text-title-md text-on-surface font-semibold">{title}</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">{sub}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="w-full bg-surface">
          <div className={`${wrap} space-y-8 pt-10 pb-10 lg:pt-12 lg:pb-16`}>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
              <div className="min-w-0">
                <span className={`${eyebrow} text-primary`}>CORPORATE OVERVIEW</span>
                <h2 className="mt-2 font-headline-lg text-[clamp(1.75rem,3vw,2.5rem)] leading-tight text-on-surface uppercase tracking-tight">ABOUT PT BUMI SADA MINERAL</h2>
              </div>
            </div>
            <p className="max-w-3xl min-w-0 font-body-lg text-body-lg leading-relaxed text-on-surface">Established in 2023, we support the commodity and material supply chain for industrial and development activities, connecting market needs with resource availability through strategic partnerships.</p>
          </div>
          <div className="keep-light w-full bg-on-surface">
            <div className={`${wrap} grid min-w-0 grid-cols-1 md:grid-cols-3`}>
              {legalDetails.map(([label, value]) => (
                <div key={label} className="min-w-0 border-b border-white/10 py-8 last:border-b-0 md:border-b-0 md:border-l md:first:border-l-0 md:pl-6 md:first:pl-0">
                  <span className="block font-label-caps text-label-caps uppercase text-tertiary-fixed">{label}</span>
                  <span className="mt-2 block break-words font-body-sm text-body-sm font-semibold text-white">{value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={`${wrap} grid min-w-0 grid-cols-1 gap-x-6 gap-y-8 py-10 sm:grid-cols-3 lg:py-12`}>
            {pillars.map(([icon, color, title, text]) => (
              <div key={title} className="min-w-0 border-t border-slate-200 pt-4 dark:border-white/10">
                <Icon name={icon} className={`${color} mb-2 text-[26px]`} />
                <h4 className="font-headline-sm text-lg leading-tight uppercase text-on-surface">{title}</h4>
                <p className="mt-2 font-body-sm text-body-sm text-on-surface-variant">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="w-full py-28 bg-surface-container-low">
          <div className={`${wrap} space-y-16`}>
            <div className="max-w-3xl space-y-3">
              <span className={`${eyebrow} text-primary`}>CORE CAPABILITIES &amp; COMMODITIES</span>
              <h2 className={`${h2} text-on-surface`}>Strategic Commodities &amp; Industrial Services</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">Comprehensive trade solutions connecting resource extraction with nationwide industrial demand.</p>
            </div>
            <div className="grid auto-rows-fr grid-cols-1 items-stretch gap-8 md:grid-cols-2">
              {services.map((s) => (
                <div key={s.title} className="flex h-full flex-col justify-between rounded bg-surface-container-lowest p-8 shadow-sm transition-all duration-300 hover:shadow-xl group lg:p-10">
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <div className="w-14 h-14 rounded bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d={s.icon} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" /></svg>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-headline-md text-headline-md text-on-surface uppercase">{s.title}</h3>
                      <span className="font-title-md text-title-md text-primary font-semibold block">{s.id}</span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant">{s.text}</p>
                  </div>
                  <div className="pt-8 flex flex-wrap gap-2">
                    {s.tags.map((t) => <span key={t} className="px-3 py-1 bg-surface-container font-label-caps text-label-caps uppercase text-on-surface font-semibold rounded">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VISION & MISSION */}
        <section id="vision-mission" className="w-full py-28 bg-surface">
          <div className={wrap}>
            <div className="grid grid-cols-1 lg:grid-cols-12 rounded-xl overflow-hidden shadow-2xl">
              <div className="keep-light relative isolate lg:col-span-5 overflow-hidden bg-on-surface text-surface p-6 lg:p-14 flex flex-col justify-between">
                <Icon name="visibility" className="absolute right-5 top-20 -z-10 text-[clamp(10rem,22vw,20rem)] leading-none text-surface opacity-[0.06] pointer-events-none" />
                <div className="relative space-y-8">
                  <span className={`${eyebrow} text-surface/75`}>LONG-TERM ASPIRATION</span>
                  <h3 className={`${h2} text-surface`}>Our Vision</h3>
                  <blockquote className="max-w-[28em] border-l-2 border-primary pl-4 text-[clamp(1.125rem,1.8vw,1.5rem)] leading-[1.45] italic text-white">
                    <span className="text-tertiary-fixed not-italic">“</span>To become a trusted commodity ecosystem driver that connects resources with industrial opportunities in creating sustainable industry needs.<span className="text-tertiary-fixed not-italic">”</span>
                  </blockquote>
                </div>
                <div className="relative pt-12">
                  <div className="bg-surface/5 p-6 rounded backdrop-blur-sm space-y-4">
                    <span className="font-label-caps text-label-caps uppercase text-surface tracking-wider block">Integrated Flow Pipeline</span>
                    <div className="flex items-center justify-between font-label-mono-stat text-label-mono-stat text-surface-container-high">
                      {[["landscape", "Resource Origin", "bg-primary/20 text-primary"], ["sync_alt", "Bumi Sada", "bg-primary text-on-primary"], ["factory", "Industrial Plant", "bg-secondary/20 text-secondary"]].map(([icon, label, cls], i) => (
                        <div key={label} className="contents">
                          {i > 0 && <Icon name="arrow_right_alt" className="text-primary text-[18px]" />}
                          <div className="flex flex-col items-center">
                            <span className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${cls}`}><Icon name={icon} className="text-[16px]" /></span>
                            <span className={i === 1 ? "text-surface font-bold" : ""}>{label}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 bg-surface-container-lowest p-10 lg:p-14 flex flex-col justify-between">
                <div className="space-y-8">
                  <span className={`${eyebrow} text-primary`}>STRATEGIC MANDATE</span>
                  <h3 className={`${h2} text-on-surface`}>Our Mission</h3>
                  <div className="space-y-6">
                    {missions.map(([t, d, cls], i) => (
                      <div key={t} className="flex gap-4 items-start">
                        <span className={`w-9 h-9 rounded font-headline-sm text-headline-sm flex items-center justify-center shrink-0 ${cls}`}>{i + 1}</span>
                        <div>
                          <h4 className="font-title-md text-title-md text-on-surface font-semibold uppercase">{t}</h4>
                          <p className="font-body-md text-body-md text-on-surface-variant pt-1">{d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section id="why-us" className="w-full py-28 bg-surface-container-low">
          <div className={`${wrap} space-y-16`}>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className={`${eyebrow} text-primary`}>OPERATIONAL EXCELLENCE</span>
              <h2 className={`${h2} text-on-surface`}>Why Industry Leaders Partner With Us</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">Engineered reliability built on direct port access, independent assay certification, and executive compliance.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {advantages.map(([icon, cls, t, d]) => (
                <div key={t} className="bg-surface-container-lowest p-8 rounded shadow-sm hover:shadow-md transition-shadow space-y-4">
                  <div className={`w-12 h-12 rounded flex items-center justify-center ${cls}`}><Icon name={icon} className="text-[28px]" /></div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface uppercase">{t}</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="keep-light w-full py-28 bg-on-surface text-surface">
          <div className={`${wrap} space-y-20`}>
            <div>
              <span className={`${eyebrow} text-primary-fixed`}>COMMERCIAL TRADE DESK</span>
              <h2 className={`${h2} text-surface mt-2`}>Connect with Our Executive Trade Office</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <ContactForm />
              <div className="lg:col-span-6 space-y-8">
                <div className="bg-surface/5 p-8 rounded-xl backdrop-blur-md space-y-6">
                  <p className="font-body-md text-body-md text-surface-container-high leading-relaxed">Headquartered in the premier financial district of South Jakarta, PT Bumi Sada Mineral operates direct trade corridors supporting national energy resilience and mineral processing infrastructure.</p>
                  <div>
                    <span className="font-label-caps text-label-caps uppercase text-primary-fixed tracking-widest block mb-2 font-bold">OFFICIAL DOMICILE</span>
                    <address className="font-body-md text-body-md text-surface not-italic leading-relaxed">
                      <a
                        href={MAPS_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline-offset-4 hover:text-primary-fixed hover:underline transition-colors"
                        aria-label="Open office address in Google Maps (opens in a new tab)"
                      >
                        {OFFICE_ADDRESS}
                      </a>
                    </address>
                    <a
                      href={MAPS_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 font-label-caps text-label-caps uppercase tracking-wider font-bold text-primary-fixed hover:underline underline-offset-4"
                    >
                      <span>Open in Google Maps</span>
                      <Icon name="arrow_forward" className="text-[16px]" />
                    </a>
                  </div>
                  <div className="w-full overflow-hidden rounded-lg">
                    <iframe
                      title="Map: PT Bumi Sada Mineral office, District 8 SCBD, Jakarta"
                      src={MAPS_EMBED}
                      className="block h-[300px] w-full border-0 sm:h-[360px]"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[["call", "Telephone Line", "+62 21 5088 2800", "Direct Settlement Desk"], ["mail", "Commercial Email", "corporate@bumisadamineral.com", "Mon - Fri: 08:30 - 17:30 WIB"]].map(([icon, label, v, sub]) => (
                    <div key={label} className="bg-surface/5 p-6 rounded backdrop-blur-md space-y-2">
                      <div className="flex items-center gap-2 text-primary-fixed"><Icon name={icon} className="text-[20px]" /><span className="font-label-caps text-label-caps uppercase tracking-wider">{label}</span></div>
                      <p className="font-title-md text-title-md text-surface font-semibold break-all">{v}</p>
                      <span className="font-body-sm text-body-sm text-surface-container-high block">{sub}</span>
                    </div>
                  ))}
                </div>
                <div className="text-right">
                  <span className="font-label-mono-stat text-label-mono-stat text-surface-container-high block">REPUBLIC OF INDONESIA</span>
                  <span className="font-label-caps text-label-caps text-secondary-fixed-dim uppercase font-semibold">Verified NIB &amp; IUP OPK Trading</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}