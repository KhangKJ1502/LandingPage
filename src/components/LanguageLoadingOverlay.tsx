import { useLanguage } from "../context/LanguageContext";

export default function LanguageLoadingOverlay() {
  const { isSwitching } = useLanguage();

  return (
    <div
      className={`fixed inset-0 z-[999] flex items-center justify-center bg-white/70 backdrop-blur-[2px] transition-opacity duration-300 ease-out will-change-[opacity] ${
        isSwitching
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!isSwitching}
      role="status"
      aria-label="Loading language"
    >
      {/* Centered spinner card with soft scale & fade */}
      <div
        className={`transform transition-all duration-300 ease-out will-change-[transform,opacity] ${
          isSwitching ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <div className="w-14 h-14 rounded-2xl bg-white/95 border border-slate-200/80 shadow-[0_12px_32px_-4px_rgba(15,23,42,0.12)] flex items-center justify-center">
          {/* Smooth Hardware-Accelerated Dual Tone Spinner */}
          <div className="w-7 h-7 rounded-full border-[2.5px] border-slate-200 border-t-blue animate-spin" />
        </div>
      </div>
    </div>
  );
}
