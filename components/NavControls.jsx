"use client";
import { useEffect, useState } from "react";
import Icon from "./Icon";
import { useLang } from "./LanguageProvider";

const LANGS = [
  ["id", "ID", "Bahasa Indonesia"],
  ["en", "EN", "English"],
];

export default function NavControls({ className = "" }) {
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
    <div className={`flex items-center gap-2 ${className}`}>
      <div
        role="group"
        aria-label={d.theme.langGroup}
        className="flex h-10 overflow-hidden rounded-full border border-on-surface/20"
      >
        {LANGS.map(([code, short, name]) => (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={lang === code}
            aria-label={name}
            title={name}
            className={`px-3 font-label-caps text-xs font-bold tracking-wider transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
              lang === code ? "bg-primary text-on-primary" : "text-on-surface hover:bg-surface-container"
            }`}
          >
            {short}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={toggle}
        aria-label={label}
        title={label}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-on-surface/20 text-on-surface transition-colors hover:bg-surface-container focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        {theme && <Icon name={isDark ? "light_mode" : "dark_mode"} className="text-[20px]" />}
      </button>
    </div>
  );
}