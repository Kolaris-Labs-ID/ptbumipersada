const f = (size, lh, ls, w) => [size, { lineHeight: lh, letterSpacing: ls, fontWeight: w }];

// Warna yang ikut berubah saat dark mode. Nilainya didefinisikan di globals.css (--c-<nama>)
const themed = [
  "surface", "background", "surface-bright", "surface-dim",
  "surface-container-lowest", "surface-container-low", "surface-container",
  "surface-container-high", "surface-container-highest", "surface-variant",
  "on-surface", "on-surface-variant", "on-background", "outline", "outline-variant",
  "primary", "primary-container", "on-primary", "on-primary-container",
  "primary-fixed", "primary-fixed-dim",
  "secondary", "on-secondary", "secondary-container", "secondary-fixed", "secondary-fixed-dim",
  "tertiary", "on-tertiary", "tertiary-fixed", "tertiary-fixed-dim", "tertiary-container",
];
const themedColors = Object.fromEntries(
  themed.map((n) => [n, `rgb(var(--c-${n}) / <alpha-value>)`])
);

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ...themedColors,
        "on-primary-fixed-variant": "#7e2c04", "inverse-surface": "#243141",
        "on-tertiary-fixed": "#291800", "on-error": "#ffffff",
        "on-secondary-fixed-variant": "#274e3d", "on-secondary-container": "#436b58",
        "on-tertiary-container": "#fffbff", "on-primary-fixed": "#370e00",
        "on-tertiary-fixed-variant": "#624000", "inverse-primary": "#ffb599",
        error: "#ba1a1a", "error-container": "#ffdad6", "surface-tint": "#9d431b",
        "inverse-on-surface": "#e9f1ff", "on-secondary-fixed": "#002114",
        "on-error-container": "#93000a",
      },
      borderRadius: { DEFAULT: "0.25rem", lg: "0.5rem", xl: "0.75rem", full: "9999px" },
      fontFamily: {
        "body-md": ["Plus Jakarta Sans"], "body-lg": ["Plus Jakarta Sans"], "body-sm": ["Plus Jakarta Sans"],
        "title-md": ["Plus Jakarta Sans"], "label-mono-stat": ["Plus Jakarta Sans"],
        "display-hero": ["Montserrat"], "display-hero-mobile": ["Montserrat"], "headline-md": ["Montserrat"],
        "headline-lg": ["Montserrat"], "headline-lg-mobile": ["Montserrat"], "headline-sm": ["Montserrat"], "label-caps": ["Montserrat"],
      },
      fontSize: {
        "body-md": f("15px", "24px", "0em", "400"), "body-lg": f("18px", "28px", "-0.005em", "400"),
        "body-sm": f("13px", "20px", "0.01em", "400"), "title-md": f("16px", "24px", "0em", "600"),
        "label-mono-stat": f("12px", "16px", "0.04em", "600"), "label-caps": f("11px", "16px", "0.08em", "700"),
        "headline-sm": f("20px", "28px", "0em", "600"), "headline-md": f("28px", "36px", "-0.01em", "600"),
        "headline-lg": f("40px", "48px", "-0.015em", "600"), "headline-lg-mobile": f("28px", "36px", "-0.01em", "600"),
        "display-hero": f("56px", "64px", "-0.02em", "700"), "display-hero-mobile": f("36px", "44px", "-0.01em", "700"),
      },
    },
  },
  plugins: [],
};