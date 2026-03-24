import React, { createContext, useContext, useState, useCallback } from "react";

type Lang = "ar" | "en";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (ar: string, en: string) => string;
  isAr: boolean;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>("ar");

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "ar" ? "en" : "ar"));
  }, []);

  const t = useCallback((ar: string, en: string) => (lang === "ar" ? ar : en), [lang]);
  const isAr = lang === "ar";

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t, isAr }}>
      <div dir={isAr ? "rtl" : "ltr"} className={isAr ? "font-cairo" : "font-jakarta"}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
};
