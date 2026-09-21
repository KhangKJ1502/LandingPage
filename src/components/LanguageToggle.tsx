import { useLanguage } from "../context/LanguageContext";
import { Globe } from "lucide-react";

export default function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang, isSwitching, switchingTo } = useLanguage();

  return (
    <div
      className={`inline-flex items-center p-1 rounded-full bg-canvas/90 border border-mist/90 shadow-2xs shrink-0 select-none ${className}`}
      role="group"
      aria-label="Language switcher"
    >
      <div className="pl-2 pr-1.5 text-muted-light hidden md:flex items-center">
        <Globe size={14} aria-hidden="true" />
      </div>

      <div className="flex items-center gap-0.5">
        <button
          type="button"
          disabled={isSwitching}
          onClick={() => setLang("vi")}
          className={`w-9 h-7 rounded-full text-[12px] font-bold transition-colors duration-150 flex items-center justify-center cursor-pointer ${
            lang === "vi"
              ? "bg-navy text-white shadow-xs"
              : "text-muted hover:text-navy hover:bg-white/60"
          }`}
          aria-pressed={lang === "vi"}
          aria-label="Tiếng Việt"
        >
          VI
        </button>

        <button
          type="button"
          disabled={isSwitching}
          onClick={() => setLang("en")}
          className={`w-9 h-7 rounded-full text-[12px] font-bold transition-colors duration-150 flex items-center justify-center cursor-pointer ${
            lang === "en"
              ? "bg-navy text-white shadow-xs"
              : "text-muted hover:text-navy hover:bg-white/60"
          }`}
          aria-pressed={lang === "en"}
          aria-label="English"
        >
          EN
        </button>
      </div>
    </div>
  );
}
