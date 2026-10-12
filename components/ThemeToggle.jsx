"use client";
import { useEffect, useState } from "react";
import Icon from "./Icon";

export default function ThemeToggle() {
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

  if (!theme) return null;
  const isDark = theme === "dark";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="fixed bottom-5 right-5 z-[60] flex h-12 w-12 items-center justify-center rounded-full border border-on-surface/15 bg-surface-container-lowest text-on-surface shadow-lg transition-colors hover:bg-surface-container focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <Icon name={isDark ? "light_mode" : "dark_mode"} className="text-[22px]" />
    </button>
  );
}