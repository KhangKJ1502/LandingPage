import { useState } from "react";
import { ArrowRight, CheckCircle, WarningCircle, Info, Sparkle, Buildings } from "@phosphor-icons/react";
import { useLanguage } from "../context/LanguageContext";
import { useReveal } from "../hooks/useReveal";

export default function AuditScorecard() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("nail");
  const ref = useReveal<HTMLDivElement>();
  const { content, openConsultation } = useLanguage();
  const { scorecard } = content;

  const currentData =
    scorecard.industries.find((item) => item.id === selectedIndustry) || scorecard.industries[0];

  return (
    <section
      id="audit-scorecard"
      className="py-16 md:py-20 bg-canvas relative scroll-mt-24"
      aria-labelledby="scorecard-heading"
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-[640px] mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-mist shadow-2xs text-[12.5px] font-semibold text-blue mb-3.5">
            <Sparkle size={14} weight="fill" className="text-gold" />
            <span>{scorecard.tag}</span>
          </div>
          <h2
            id="scorecard-heading"
            className="text-[32px] md:text-[42px] font-bold text-navy leading-[1.15] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {scorecard.heading}
          </h2>
          <p className="text-[15.5px] text-muted leading-relaxed">
            {scorecard.subheading}
          </p>
        </div>

        {/* Industry Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-10" role="tablist">
          {scorecard.industries.map((ind) => {
            const isSelected = selectedIndustry === ind.id;
            return (
              <button
                key={ind.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedIndustry(ind.id)}
                className={`px-5 py-2.5 rounded-[32px] text-[13.5px] font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer ${isSelected
                    ? "bg-navy text-white shadow-md"
                    : "bg-white text-muted hover:text-navy border border-mist hover:border-slate-border"
                  }`}
              >
                <Buildings size={16} weight="duotone" className={isSelected ? "text-gold" : "text-muted-light"} />
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* The Luxury Audit Scorecard Container */}
        <div ref={ref} className="reveal max-w-[920px] mx-auto">
          <div className="luxury-card rounded-[20px] p-6 sm:p-10 bg-white border border-mist/80 shadow-[0_10px_35px_-5px_rgba(15,23,42,0.06)] relative overflow-hidden">
            {/* Card Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 pb-6 border-b border-mist/80">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[12px] font-bold uppercase tracking-wider text-muted-light">
                    {scorecard.sampleBadge}
                  </span>
                  <span className="text-muted-light">•</span>
                  <span className="text-[12px] text-muted font-medium">{currentData.reviewedDate}</span>
                </div>
                <h3
                  className="text-[22px] sm:text-[26px] font-bold text-navy"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {currentData.businessName}
                </h3>
                <p className="text-[13.5px] text-muted mt-1 max-w-[500px]">
                  {currentData.summaryQuote}
                </p>
              </div>

              {/* Overall Health Score Badge */}
              <div className="bg-canvas border border-mist/90 rounded-[16px] px-5 py-3.5 flex items-center gap-4 shrink-0">
                <div className="relative w-14 h-14 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-mist"
                      strokeWidth="3.5"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-blue"
                      strokeDasharray={`${currentData.healthScore}, 100`}
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <span className="absolute font-bold text-navy text-[16px]">
                    {currentData.healthScore}
                  </span>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-light">
                    {scorecard.healthScoreLabel}
                  </p>
                  <p className="text-[14px] font-bold text-navy">
                    {currentData.healthScore} {scorecard.pointsLabel}
                  </p>
                  <span className="inline-block text-[11px] font-medium text-emerald">
                    {scorecard.eligibleLabel}
                  </span>
                </div>
              </div>
            </div>

            {/* 4 Criteria Grid */}
            <div className="grid sm:grid-cols-2 gap-4 py-8">
              {currentData.metrics.map((metric, idx) => {
                const isEmerald = metric.color === "emerald";
                const isAmber = metric.color === "amber";

                return (
                  <div
                    key={idx}
                    className="p-4 rounded-[14px] bg-canvas/60 border border-mist/70 hover:border-slate-border/80 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[14px] font-semibold text-navy">
                        {metric.name}
                      </span>
                      <span
                        className={`text-[12px] font-bold px-2 py-0.5 rounded-full ${isEmerald
                            ? "bg-emerald-subtle text-emerald"
                            : isAmber
                              ? "bg-amber/10 text-amber"
                              : "bg-blue/10 text-blue"
                          }`}
                      >
                        {metric.score}/100
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 rounded-full bg-mist/80 overflow-hidden mb-3">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${isEmerald ? "bg-emerald" : isAmber ? "bg-amber" : "bg-blue"
                          }`}
                        style={{ width: `${metric.score}%` }}
                      />
                    </div>

                    <div className="flex items-start gap-1.5">
                      {isEmerald ? (
                        <CheckCircle size={15} weight="fill" className="text-emerald shrink-0 mt-0.5" />
                      ) : isAmber ? (
                        <WarningCircle size={15} weight="fill" className="text-amber shrink-0 mt-0.5" />
                      ) : (
                        <Info size={15} weight="fill" className="text-blue shrink-0 mt-0.5" />
                      )}
                      <p className="text-[12.5px] text-muted leading-relaxed">
                        <strong className="text-navy font-medium">{metric.status}: </strong>
                        {metric.implication}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* The Clearest Opportunity Callout */}
            <div className="p-4 sm:p-5 rounded-[14px] bg-blue/5 border border-blue/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Sparkle size={17} weight="fill" />
                </div>
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-wider text-blue">
                    {scorecard.opportunityTitle}
                  </p>
                  <p className="text-[14px] font-medium text-navy mt-0.5">
                    {currentData.keyOpportunity}
                  </p>
                </div>
              </div>
              <button
                onClick={openConsultation}
                className="px-5 py-2.5 bg-blue hover:bg-blue-hover text-white text-[13px] font-semibold rounded-[28px] shrink-0 transition-colors flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
              >
                <span>{scorecard.ctaButton}</span>
                <ArrowRight size={14} weight="bold" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
