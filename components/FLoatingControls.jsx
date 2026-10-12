"use client";
import { useEffect, useState } from "react";
import Icon from "./Icon";
import { useLang } from "./LanguageProvider";

const LANGS = [
  ["id", "ID", "Bahasa Indonesia"],
  ["en", "EN", "English"],
];

export default function FloatingControls() {
  const { lang, setLang, d } = useLang();
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;
    root.classList.add("theme-transition");
    root.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setTheme(next);
    window.setTimeout(() => root.classList.remove("theme-transition"), 300);
  };

  const isDark = theme === "dark";
  const label = isDark ? d.theme.toLight : d.theme.toDark;

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex items-center gap-3">
      <div
        role="group"
        aria-label={d.theme.langGroup}
        className="flex h-14 overflow-hidden rounded-full border-2 border-white/30 bg-surface-container-lowest shadow-2xl ring-1 ring-black/10 sm:h-16"
      >
        {LANGS.map(([code, short, name]) => (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={lang === code}
            aria-label={name}
            title={name}
            className={`px-4 font-label-caps text-sm font-bold tracking-wider transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 sm:px-5 ${
              lang === code ? "bg-primary text-on-primary" : "text-on-surface hover:bg-surface-container"
            }`}
          >
            {short}
          </button>
        ))}
      </div>

      {theme && (
        <button
          type="button"
          onClick={toggle}
          aria-label={label}
          title={label}
          className="flex h-14 min-w-[3.5rem] items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-primary px-4 text-on-primary shadow-2xl ring-1 ring-black/10 transition hover:scale-105 hover:bg-primary-container focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 sm:h-16 sm:px-6"
        >
          <Icon name={isDark ? "light_mode" : "dark_mode"} className="text-[28px] sm:text-[30px]" />
          <span className="hidden font-label-caps text-label-caps font-bold uppercase tracking-wider sm:inline">
            {isDark ? d.theme.light : d.theme.dark}
          </span>
        </button>
      )}
    </div>
  );
}