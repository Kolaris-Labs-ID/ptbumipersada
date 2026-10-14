"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import NavControls from "./NavControls";
import { useLang } from "./LanguageProvider";

export default function HeaderNavigation({ navItems }) {
  const { d } = useLang();
  const [activeHref, setActiveHref] = useState("#home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map(([, href]) => document.getElementById(href.slice(1)))
      .filter(Boolean);

    let frame = 0;
    const updateActiveSection = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const headerBottom = document.querySelector("header")?.getBoundingClientRect().bottom ?? 0;
        const currentSection = sections
          .filter((section) => section.getBoundingClientRect().top <= headerBottom + 24)
          .at(-1);

        setActiveHref(currentSection ? `#${currentSection.id}` : "#home");
      });
    };
    const handleResize = () => {
      if (window.innerWidth >= 1280) setIsOpen(false);
      updateActiveSection();
    };

    if (navItems.some(([, href]) => href === window.location.hash)) {
      setActiveHref(window.location.hash);
    }

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", handleResize);
    window.addEventListener("hashchange", updateActiveSection);
    updateActiveSection();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, [navItems]);

  const handleNavClick = (href) => {
    setActiveHref(href);
    setIsOpen(false);
  };

  const linkClass = (href) =>
    `inline-flex h-10 items-center whitespace-nowrap rounded-full px-3 text-[13px] leading-5 transition-colors ${
      activeHref === href
        ? "bg-on-surface/5 font-bold text-on-surface"
        : "font-medium text-on-surface-variant hover:text-on-surface"
    }`;

  const ctaClass =
    "inline-flex h-10 items-center justify-center whitespace-nowrap rounded-full bg-on-surface px-5 text-label-caps uppercase tracking-wider text-surface transition-colors hover:bg-primary hover:text-on-primary";

  return (
    // Lebar & padding sama persis dengan `wrap` di page.js (max-w-7xl px-6 lg:px-12)
    <div className="relative mx-auto h-full w-full max-w-7xl px-6 pt-3 lg:px-12">
      {/* Satu kapsul selebar konten: tepi kiri/kanan sejajar dengan teks */}
      <div className="pointer-events-auto relative flex h-14 w-full items-center justify-between gap-3 rounded-full border border-on-surface/10 bg-surface-container-lowest/80 pl-4 pr-2 shadow-md backdrop-blur-xl xl:gap-4 xl:pl-5">
        {/* Logo */}
        <Link href="/" aria-label="PT Bumi Sada Mineral" className="flex shrink-0 items-center gap-2.5">
          <Image
            src="/icon.png"
            alt="Bumi Sada Mineral logo"
            width={512}
            height={512}
            priority
            className="h-9 w-9 object-contain"
          />
          <span className="flex flex-col whitespace-nowrap">
            <span className="font-headline-sm text-[17px] font-extrabold uppercase leading-none tracking-[-0.03em] text-on-surface">
              Bumi Sada
            </span>
            <span className="mt-0.5 text-[9px] font-semibold uppercase leading-none tracking-[0.3em] text-primary">
              Mineral
            </span>
          </span>
        </Link>

        {/* Menu desktop: mengisi ruang tengah */}
        <nav aria-label={d.navUi.main} className="hidden min-w-0 flex-1 justify-center xl:flex">
          <ul className="flex items-center gap-0.5">
            {navItems.map(([label, href]) => (
              <li key={href} className="whitespace-nowrap">
                <Link
                  href={href}
                  onClick={() => handleNavClick(href)}
                  className={linkClass(href)}
                  aria-current={activeHref === href ? "location" : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Kanan desktop: CTA + bahasa/tema */}
        <div className="hidden shrink-0 items-center gap-3 xl:flex">
          <Link href="#contact" onClick={() => handleNavClick("#contact")} className={ctaClass}>
            <span>{d.navUi.inquire}</span>
            <Icon name="arrow_outward" className="ml-1.5 hidden text-[15px] 2xl:inline-block" />
          </Link>
          <span className="h-6 w-px bg-on-surface/10" aria-hidden="true" />
          <NavControls />
        </div>

        {/* Tablet/mobile: kontrol (mulai layar sm) + hamburger */}
        <div className="flex items-center gap-1 xl:hidden">
          <NavControls className="hidden sm:flex" />
          <button
            type="button"
            aria-label={isOpen ? d.navUi.close : d.navUi.open}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-on-surface transition-colors hover:bg-on-surface/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <Icon name={isOpen ? "close" : "menu"} className="text-[24px]" />
          </button>
        </div>

        {/* Dropdown mobile: kartu yang menempel di bawah kapsul */}
        <div
          id="mobile-navigation"
          className={`${isOpen ? "block" : "hidden"} absolute inset-x-0 top-full mt-2 rounded-3xl border border-on-surface/10 bg-surface-container-lowest px-4 pb-4 pt-3 shadow-xl xl:hidden`}
        >
          <nav aria-label={d.navUi.mobile}>
            <ul className="flex flex-col gap-1">
              {navItems.map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => handleNavClick(href)}
                    className={`flex min-h-11 items-center rounded-full px-4 text-sm transition-colors ${
                      activeHref === href
                        ? "bg-on-surface/5 font-bold text-on-surface"
                        : "font-medium text-on-surface-variant hover:text-on-surface"
                    }`}
                    aria-current={activeHref === href ? "location" : undefined}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="#contact"
              onClick={() => handleNavClick("#contact")}
              className={`mt-3 flex min-h-11 w-full ${ctaClass}`}
            >
              <span>{d.navUi.inquire}</span>
              <Icon name="arrow_outward" className="ml-2 text-[16px]" />
            </Link>
            {/* Layar kecil: kontrol ada di dalam menu */}
            <NavControls bordered className="mt-4 justify-center sm:hidden" />
          </nav>
        </div>
      </div>
    </div>
  );
}