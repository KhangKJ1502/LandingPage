import { useState } from "react";
import { CheckCircle, Sparkle, ShieldCheck, ArrowRight } from "@phosphor-icons/react";
import { useLanguage } from "../context/LanguageContext";
import { useRevealGroup } from "../hooks/useReveal";

export default function Pricing() {
  const [activeCategory, setActiveCategory] = useState<"social" | "website">("social");
  const groupRef = useRevealGroup<HTMLDivElement>(80);
  const { content, openConsultation } = useLanguage();
  const { pricing } = content;

  const currentPlans = pricing.plans.filter((p) => p.category === activeCategory);

  return (
    <section
      id="pricing"
      className="py-16 md:py-24 bg-canvas relative scroll-mt-24"
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-[680px] mx-auto mb-10 sm:mb-12">
          <h2
            id="pricing-heading"
            className="text-[26px] sm:text-[34px] md:text-[42px] font-bold text-navy leading-[1.15] mb-3 sm:mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {pricing.heading}
          </h2>
          <p className="text-[14.5px] sm:text-[15.5px] text-muted leading-relaxed">
            {pricing.subheading}
          </p>
        </div>

        {/* Category Switcher Tabs */}
        <div className="flex justify-center mb-10 sm:mb-12">
          <div className="inline-flex p-1 sm:p-1.5 bg-white border border-mist/90 rounded-[36px] shadow-sm max-w-full">
            <button
              onClick={() => setActiveCategory("social")}
              className={`px-4 sm:px-7 py-2 sm:py-2.5 rounded-[30px] text-[12.5px] sm:text-[13.5px] font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 sm:gap-2 ${activeCategory === "social"
                ? "bg-navy text-white shadow-xs"
                : "text-muted hover:text-navy hover:bg-canvas"
                }`}
            >
              <span>{pricing.tabSocial}</span>
            </button>
            <button
              onClick={() => setActiveCategory("website")}
              className={`px-4 sm:px-7 py-2 sm:py-2.5 rounded-[30px] text-[12.5px] sm:text-[13.5px] font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 sm:gap-2 ${activeCategory === "website"
                ? "bg-navy text-white shadow-xs"
                : "text-muted hover:text-navy hover:bg-canvas"
                }`}
            >
              <span>{pricing.tabWebsite}</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div
          ref={groupRef}
          key={activeCategory}
          className={`grid gap-5 sm:gap-6 items-stretch animate-in fade-in duration-300 ${activeCategory === "social"
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[1240px] mx-auto"
            : "grid-cols-1 md:grid-cols-3 max-w-[1080px] mx-auto"
            }`}
        >
          {currentPlans.map((plan) => {
            const isHighlight = plan.highlight;

            return (
              <article
                key={plan.id}
                className={`reveal rounded-[20px] sm:rounded-[22px] flex flex-col justify-between transition-all duration-300 relative ${isHighlight
                  ? "luxury-card-dark text-white p-5 sm:p-7 md:p-8 shadow-2xl lg:-translate-y-2 border-slate-700/80 bg-gradient-to-b from-[#0F172A] to-[#1E293B]"
                  : "luxury-card bg-white text-navy p-5 sm:p-7 md:p-8 border border-mist/90 shadow-[0_8px_25px_-5px_rgba(15,23,42,0.06)]"
                  }`}
              >
                {/* Floating Top Badge */}
                {plan.badge && (
                  <div
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 font-bold text-[11px] uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap ${isHighlight
                      ? "bg-gradient-to-r from-amber to-gold text-navy"
                      : "bg-canvas border border-mist text-navy"
                      }`}
                  >
                    {isHighlight && <Sparkle size={12} weight="fill" className="text-navy" />}
                    <span>{plan.badge}</span>
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h3
                      className={`text-[21px] font-bold mb-1 ${isHighlight ? "text-white" : "text-navy"}`}
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {plan.name}
                    </h3>
                    <p className={`text-[12.5px] leading-snug min-h-[36px] ${isHighlight ? "text-white/70" : "text-muted"}`}>
                      {plan.subtitle}
                    </p>
                  </div>

                  <div
                    className={`py-4 my-2 border-y flex items-baseline gap-1.5 ${isHighlight ? "border-white/10" : "border-mist/80"
                      }`}
                  >
                    <span
                      className={`text-[36px] sm:text-[42px] font-extrabold tracking-tight ${isHighlight ? "text-white" : "text-navy"
                        }`}
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className={`text-[13.5px] font-semibold ${isHighlight ? "text-white/70" : "text-muted"}`}>
                        {plan.period}
                      </span>
                    )}
                  </div>

                  <p className={`text-[13px] my-4 leading-relaxed min-h-[50px] ${isHighlight ? "text-white/80" : "text-muted"}`}>
                    {plan.desc}
                  </p>

                  <div className="pt-2 mb-6">
                    <p
                      className={`text-[11.5px] font-bold uppercase tracking-wider mb-3 ${isHighlight ? "text-gold" : "text-navy"
                        }`}
                    >
                      {pricing.featuresLabel}
                    </p>
                    <ul className="space-y-2.5" role="list">
                      {plan.features.map((f, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle
                            size={16}
                            weight="duotone"
                            className="shrink-0 mt-0.5 text-emerald"
                            aria-hidden="true"
                          />
                          <span
                            className={`text-[13px] leading-snug ${isHighlight ? "text-white/90" : "text-navy/90"
                              }`}
                          >
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-mist/20">
                  <button
                    onClick={openConsultation}
                    className={`w-full py-3.5 rounded-[32px] text-[13.5px] font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${isHighlight
                      ? "bg-blue hover:bg-blue-hover text-white shadow-lg shadow-blue/30"
                      : "bg-navy hover:bg-navy-light text-white shadow-xs"
                      }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight size={14} weight="bold" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Security & Guarantee Note */}
        <div className="mt-12 text-center max-w-[620px] mx-auto">
          <div className="inline-flex items-center gap-2 text-[13px] text-muted">
            <ShieldCheck size={18} weight="duotone" className="text-emerald shrink-0" />
            <span>{pricing.legalNote}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
