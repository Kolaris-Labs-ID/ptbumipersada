"use client";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { dictionaries } from "./i18n";

const LangContext = createContext({ lang: "en", setLang: () => {}, d: dictionaries.en });

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "id" || saved === "en") setLangState(saved);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l) => {
    setLangState(l);
    try {
      localStorage.setItem("lang", l);
    } catch {}
  }, []);

  return (
    <LangContext.Provider value={{ lang, setLang, d: dictionaries[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);