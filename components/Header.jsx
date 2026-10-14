"use client";
import HeaderNavigation from "./HeaderNavigation";
import { useLang } from "./LanguageProvider";

const HREFS = ["#home", "#about", "#services", "#vision-mission", "#why-us", "#contact"];

export default function Header() {
  const { d } = useLang();
  const navItems = d.nav.map((label, i) => [label, HREFS[i]]);

  return (
    <header className="pointer-events-none sticky top-0 z-50 -mb-[var(--header-h)] h-[var(--header-h)]">
      <HeaderNavigation navItems={navItems} />
    </header>
  );
}