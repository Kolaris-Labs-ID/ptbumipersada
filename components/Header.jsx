"use client";
import Image from "next/image";
import Link from "next/link";
import HeaderNavigation from "./HeaderNavigation";
import { useLang } from "./LanguageProvider";

const HREFS = ["#home", "#about", "#services", "#vision-mission", "#why-us", "#contact"];

export default function Header() {
  const { d } = useLang();
  const navItems = d.nav.map((label, i) => [label, HREFS[i]]);

  return (
    <>
      <header className="sticky top-0 z-50 h-[var(--header-h)] border-b border-on-surface/15 bg-surface-container-lowest">
        <div className="relative grid h-full w-full grid-cols-[1fr_auto] items-center px-4 sm:px-6 lg:px-10 2xl:px-16 xl:grid-cols-[1fr_auto_1fr]">
          <Link href="/" aria-label="PT Bumi Sada Mineral" className="flex w-fit shrink-0 items-center gap-3">
            <Image
              src="/icon.png"
              alt="Bumi Sada Mineral logo"
              width={512}
              height={512}
              priority
              className="h-10 w-10 object-contain sm:h-12 sm:w-12 xl:h-14 xl:w-14"
            />
            <span className="flex min-w-0 flex-col whitespace-nowrap">
              <span className="font-headline-sm text-[18px] font-extrabold uppercase leading-none tracking-[-0.03em] text-on-surface min-[380px]:text-[20px] sm:text-[24px] xl:text-[26px]">
                Bumi Sada
              </span>
              <span className="mt-1 text-[10px] font-semibold uppercase leading-none tracking-[0.3em] text-primary min-[380px]:text-[11px] sm:text-[12px]">
                Mineral
              </span>
            </span>
          </Link>
          <HeaderNavigation navItems={navItems} />
        </div>
      </header>
    </>
  );
}