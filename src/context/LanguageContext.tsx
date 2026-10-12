import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { TRANSLATIONS, TranslationContent } from "../translations";

export type Language = "vi" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  content: TranslationContent;
  isConsultationOpen: boolean;
  openConsultation: () => void;
  closeConsultation: () => void;
  isSwitching: boolean;
  switchingTo: Language | null;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem("craft_web_studio_lang");
    if (saved === "vi" || saved === "en") return saved;
    return "vi";
  });

  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isSwitching, setIsSwitching] = useState(false);
  const [switchingTo, setSwitchingTo] = useState<Language | null>(null);

  const setLang = (newLang: Language) => {
    if (newLang === lang || isSwitching) return;
    setIsSwitching(true);
    setSwitchingTo(newLang);

    // 1. Overlay smoothly fades in (200ms)
    setTimeout(() => {
      setLangState(newLang);
      localStorage.setItem("craft_web_studio_lang", newLang);

      // 2. Spinner rotates smoothly before fading out (280ms)
      setTimeout(() => {
        setIsSwitching(false);
        setSwitchingTo(null);
      }, 280);
    }, 200);
  };

  const toggleLang = () => {
    setLang(lang === "vi" ? "en" : "vi");
  };

  const openConsultation = useCallback(() => {
    setIsConsultationOpen(true);
  }, []);

  const closeConsultation = useCallback(() => {
    setIsConsultationOpen(false);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    if (lang === "en") {
      document.title = "Sunflower Marketing LLC | Digital Marketing for US Businesses";
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          "content",
          "Comprehensive Digital Marketing agency for Nail Salons, Spas, Restaurants, and Beauty Salons in the US. Websites, Social Media, Meta & Google Ads, and Local SEO."
        );
      }
    } else {
      document.title = "Sunflower Marketing LLC | Giải pháp Digital Marketing tại Mỹ";
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          "content",
          "Giải pháp Digital Marketing toàn diện cho tiệm Nail Salon, Spa, Restaurant và Beauty Salon tại Mỹ: Thiết kế Website, Chăm sóc Social Media, Chạy Ads đa kênh và Google Maps."
        );
      }
    }
  }, [lang]);

  // Lock body scroll when consultation modal is open
  useEffect(() => {
    if (isConsultationOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isConsultationOpen]);

  const content = TRANSLATIONS[lang];

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        toggleLang,
        content,
        isConsultationOpen,
        openConsultation,
        closeConsultation,
        isSwitching,
        switchingTo,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
