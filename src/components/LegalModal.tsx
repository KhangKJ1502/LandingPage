import { useEffect } from "react";
import { X, ShieldCheck, FileText, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function LegalModal() {
  const { content, legalModal, openLegalModal, closeLegalModal } = useLanguage();
  const { legal } = content;

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && legalModal) {
        closeLegalModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [legalModal, closeLegalModal]);

  if (!legalModal) return null;

  const isPrivacy = legalModal === "privacy";
  const title = isPrivacy ? legal.privacyTitle : legal.termsTitle;
  const lastUpdated = isPrivacy ? legal.privacyLastUpdated : legal.termsLastUpdated;
  const sections = isPrivacy ? legal.privacySections : legal.termsSections;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-in fade-in duration-200"
    >
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-navy/65 backdrop-blur-sm transition-opacity"
        onClick={closeLegalModal}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-[720px] bg-white rounded-[22px] sm:rounded-[24px] shadow-[0_25px_60px_-15px_rgba(15,23,42,0.4)] border border-mist z-10 animate-in zoom-in-95 duration-200 my-auto max-h-[88vh] flex flex-col overflow-hidden">
        {/* Header Bar */}
        <div className="p-5 sm:p-6 border-b border-mist/80 bg-canvas/60 flex items-start justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-[12px] bg-blue/10 flex items-center justify-center text-blue shrink-0">
              {isPrivacy ? <ShieldCheck className="w-6 h-6" /> : <FileText className="w-6 h-6" />}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                {/* Tab Switcher */}
                <button
                  type="button"
                  onClick={() => openLegalModal("privacy")}
                  className={`text-[12px] font-bold px-2.5 py-0.5 rounded-full transition-colors cursor-pointer ${
                    isPrivacy
                      ? "bg-blue text-white shadow-2xs"
                      : "bg-slate-100 text-muted hover:text-navy"
                  }`}
                >
                  Privacy Policy
                </button>
                <button
                  type="button"
                  onClick={() => openLegalModal("terms")}
                  className={`text-[12px] font-bold px-2.5 py-0.5 rounded-full transition-colors cursor-pointer ${
                    !isPrivacy
                      ? "bg-blue text-white shadow-2xs"
                      : "bg-slate-100 text-muted hover:text-navy"
                  }`}
                >
                  Terms & Conditions
                </button>
              </div>
              <h2
                id="legal-modal-title"
                className="text-[19px] sm:text-[21px] font-bold text-navy leading-snug"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {title}
              </h2>
              <p className="text-[11.5px] text-muted-light mt-0.5">{lastUpdated}</p>
            </div>
          </div>

          <button
            onClick={closeLegalModal}
            className="w-8 h-8 rounded-full bg-white hover:bg-light-slate text-muted hover:text-navy flex items-center justify-center transition-colors cursor-pointer border border-mist shrink-0"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Document Body */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6 text-[13.5px] sm:text-[14px] leading-relaxed text-slate-700">
          {sections.map((sec, idx) => {
            const isSmsSection = sec.title.includes("SMS") || sec.title.includes("Mobile");

            return (
              <div
                key={idx}
                className={`rounded-[14px] p-4 transition-all ${
                  isSmsSection
                    ? "bg-blue/5 border-2 border-blue/20 ring-1 ring-blue/10"
                    : "bg-slate-50/50 border border-slate-100"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  {isSmsSection && (
                    <span className="w-5 h-5 rounded-full bg-blue text-white flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </span>
                  )}
                  <h3 className={`font-bold text-[14.5px] ${isSmsSection ? "text-blue" : "text-navy"}`}>
                    {sec.title}
                  </h3>
                  {isSmsSection && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-blue text-white rounded-full ml-auto">
                      Carrier Compliance
                    </span>
                  )}
                </div>
                <p className={`${isSmsSection ? "text-slate-900 font-medium leading-relaxed" : "text-muted"}`}>
                  {sec.content}
                </p>
              </div>
            );
          })}

          {/* Explicit Trust / Toll-Free Carrier Statement */}
          <div className="p-4 rounded-[14px] bg-emerald-subtle/40 border border-emerald/20 text-[12.5px] text-emerald-800">
            <p className="font-semibold mb-1">
              Sunflower Marketing LLC • Toll-Free Verified: +1 (866) 956-9413
            </p>
            <p className="text-emerald-700 leading-normal">
              75 E 3rd St, Ste 7, Sheridan, WY 82801, USA • Email: hello@sunflowermarketing.com
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-mist/80 bg-canvas/40 flex items-center justify-end shrink-0">
          <button
            type="button"
            onClick={closeLegalModal}
            className="px-6 py-2.5 rounded-full bg-navy hover:bg-slate-800 text-white text-[13px] font-semibold transition-colors cursor-pointer shadow-xs"
          >
            {legal.closeButton}
          </button>
        </div>
      </div>
    </div>
  );
}
