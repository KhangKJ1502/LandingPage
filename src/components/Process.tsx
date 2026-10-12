import { useLanguage } from "../context/LanguageContext";
import { useRevealGroup } from "../hooks/useReveal";
import { ArrowRight, MagnifyingGlass, PaintBrush, DeviceMobile, TrendUp } from "@phosphor-icons/react";

const STEP_ICONS = [MagnifyingGlass, PaintBrush, DeviceMobile, TrendUp];
const STEP_BADGES = {
  vi: ["Khảo sát & Tư vấn", "Kế hoạch chi tiết", "Triển khai vận hành", "Báo cáo & Tối ưu"],
  en: ["Survey & Consult", "Strategic Plan", "Launch & Operate", "Report & Optimize"],
};

export default function Process() {
  const groupRef = useRevealGroup<HTMLDivElement>(100);
  const { content, lang } = useLanguage();
  const { process } = content;

  const isVi = lang === "vi";
  const badges = isVi ? STEP_BADGES.vi : STEP_BADGES.en;

  return (
    <section
      id="process"
      className="py-14 sm:py-20 md:py-28 bg-canvas relative overflow-hidden scroll-mt-24"
      aria-labelledby="process-heading"
    >
      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        <div className="max-w-[620px] mb-10 sm:mb-14">
          <h2
            id="process-heading"
            className="text-[26px] sm:text-[34px] md:text-[44px] font-bold text-navy leading-[1.15] mb-3 sm:mb-3.5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {process.heading}
          </h2>
          <p className="text-[14.5px] sm:text-[16px] text-muted leading-relaxed">
            {process.subheading}
          </p>
        </div>

        <div ref={groupRef} className="relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-10 left-[calc(12.5%-16px)] right-[calc(12.5%-16px)] h-[1px] bg-gradient-to-r from-blue/20 via-slate-border to-blue/20 -z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {process.steps.map((step, i) => {
              const StepIcon = STEP_ICONS[i] || MagnifyingGlass;
              const badge = badges[i] || "";

              return (
                <div
                  key={step.step}
                  className="reveal luxury-card rounded-[22px] p-6 sm:p-7 bg-white border border-mist/90 hover:border-slate-border hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Step Top Header */}
                    <div className="flex items-center justify-between gap-2 mb-5">
                      <div className="w-12 h-12 rounded-[14px] bg-canvas border border-mist/90 shadow-2xs flex items-center justify-center text-blue group-hover:scale-105 group-hover:bg-blue group-hover:text-white transition-all duration-300">
                        <StepIcon size={24} weight="duotone" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-muted-light bg-canvas px-2.5 py-1 rounded-full border border-mist">
                        {badge}
                      </span>
                    </div>

                    <div className="flex items-baseline gap-2 mb-2">
                      <span
                        className="text-[13px] font-extrabold text-blue"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        STEP {step.step}
                      </span>
                    </div>

                    <h3
                      className="text-[18px] font-bold text-navy mb-2.5 leading-snug group-hover:text-blue transition-colors"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {step.title}
                    </h3>

                    <p className="text-[13.5px] text-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-mist/70 flex items-center justify-between text-[11.5px] text-muted-light">
                    <span>{isVi ? `Giai đoạn 0${i + 1}` : `Phase 0${i + 1}`}</span>
                    <span className="font-semibold text-emerald">{isVi ? "✓ Chuẩn hoá" : "✓ Standardized"}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-12 p-6 sm:p-7 bg-white rounded-[20px] border border-mist shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <span className="w-3 h-3 rounded-full bg-emerald animate-ping shrink-0" />
            <p className="text-[14.5px] text-navy font-medium">
              {process.calloutText}
            </p>
          </div>
          <button
            onClick={() => {
              if (typeof window !== "undefined") {
                window.dispatchEvent(
                  new CustomEvent("open-consultation-modal", { detail: { service: "all" } })
                );
              }
            }}
            className="w-full sm:w-auto px-6 py-3.5 sm:py-3 bg-blue hover:bg-blue-hover text-white text-[13.5px] font-semibold rounded-[28px] shrink-0 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
          >
            <span>{process.calloutButton}</span>
            <ArrowRight size={15} weight="bold" />
          </button>
        </div>
      </div>
    </section>
  );
}
