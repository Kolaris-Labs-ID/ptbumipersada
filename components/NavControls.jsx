"use client";
import { useEffect, useState } from "react";
import Icon from "./Icon";
import { useLang } from "./LanguageProvider";

const LANGS = [
  ["id", "ID", "Bahasa Indonesia"],
  ["en", "EN", "English"],
];

export default function NavControls({ className = "", bordered = false }) {
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
  const edge = bordered ? "border border-on-surface/20" : "bg-on-surface/5";

  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <div
        role="group"
        aria-label={d.theme.langGroup}
        className={`flex h-9 overflow-hidden rounded-full ${edge}`}
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
              lang === code ? "rounded-full bg-primary text-on-primary" : "text-on-surface hover:bg-on-surface/10"
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
        className={`flex h-9 w-9 items-center justify-center rounded-full text-on-surface transition-colors hover:bg-on-surface/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${edge}`}
      >
        {theme && <Icon name={isDark ? "light_mode" : "dark_mode"} className="text-[18px]" />}
      </button>
    </div>
  );
}