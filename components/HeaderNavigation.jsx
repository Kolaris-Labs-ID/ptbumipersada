"use client";

import { useEffect, useState } from "react";
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

  const linkClass = (href) => `inline-flex min-h-11 items-center whitespace-nowrap border-b-2 px-1 text-sm leading-5 transition-colors ${activeHref === href ? "border-primary font-bold text-on-surface" : "border-transparent font-medium text-on-surface-variant hover:text-primary"}`;

  return (
    <>
      <nav aria-label={d.navUi.main} className="hidden xl:col-start-2 xl:block xl:justify-self-center">
        <ul className="flex items-center gap-5 2xl:gap-8">
          {navItems.map(([label, href]) => (
            <li key={href} className="whitespace-nowrap">
              <Link href={href} onClick={() => handleNavClick(href)} className={linkClass(href)} aria-current={activeHref === href ? "location" : undefined}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop: kontrol bahasa/tema + tombol Inquire */}
      <div className="hidden items-center justify-self-end gap-4 xl:col-start-3 xl:flex">
        <NavControls />
        <Link
          href="#contact"
          onClick={() => handleNavClick("#contact")}
          className="inline-flex min-h-11 items-center whitespace-nowrap bg-primary px-5 py-2.5 text-label-caps uppercase tracking-wider text-on-primary transition-colors hover:bg-primary-container"
        >
          <span>{d.navUi.inquire}</span><Icon name="arrow_forward" className="ml-2 text-[16px]" />
        </Link>
      </div>

      {/* Tablet/mobile: kontrol (mulai layar sm) + hamburger */}
      <div className="flex items-center justify-self-end gap-2 xl:hidden">
        <NavControls className="hidden sm:flex" />
        <button
          type="button"
          aria-label={isOpen ? d.navUi.close : d.navUi.open}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center text-on-surface transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <Icon name={isOpen ? "close" : "menu"} className="text-[24px]" />
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`${isOpen ? "block" : "hidden"} absolute left-1/2 top-full w-screen -translate-x-1/2 border-b border-on-surface/15 bg-surface-container-lowest px-6 pb-5 pt-2 shadow-lg xl:hidden`}
      >
        <nav aria-label={d.navUi.mobile}>
          <ul className="flex flex-col">
            {navItems.map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => handleNavClick(href)}
                  className={`flex min-h-11 items-center whitespace-nowrap border-l-2 px-4 py-2 text-sm transition-colors ${activeHref === href ? "border-primary font-bold text-on-surface" : "border-transparent font-medium text-on-surface-variant hover:text-primary"}`}
                  aria-current={activeHref === href ? "location" : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="#contact" onClick={() => handleNavClick("#contact")} className="mt-3 inline-flex min-h-11 w-full items-center justify-center whitespace-nowrap bg-primary px-5 py-2.5 text-label-caps uppercase tracking-wider text-on-primary transition-colors hover:bg-primary-container">
            <span>{d.navUi.inquire}</span><Icon name="arrow_forward" className="ml-2 text-[16px]" />
          </Link>
          {/* Layar kecil: kontrol ada di dalam menu */}
          <NavControls className="mt-4 justify-center sm:hidden" />
        </nav>
      </div>
    </>
  );
}