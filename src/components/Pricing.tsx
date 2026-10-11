import { CheckCircle, Sparkle, ShieldCheck, ArrowRight } from "@phosphor-icons/react";
import { useLanguage } from "../context/LanguageContext";
import { useRevealGroup } from "../hooks/useReveal";

export default function Pricing() {
  const groupRef = useRevealGroup<HTMLDivElement>(100);
  const { content } = useLanguage();
  const { pricing } = content;

  return (
    <section
      id="pricing"
      className="py-16 md:py-20 bg-white relative scroll-mt-24"
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="text-center max-w-[620px] mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-canvas border border-mist text-[12.5px] font-semibold text-blue mb-3.5 shadow-2xs">
            <Sparkle size={14} weight="fill" className="text-gold" />
            <span>{pricing.tag}</span>
          </div>
          <h2
            id="pricing-heading"
            className="text-[32px] md:text-[42px] font-bold text-navy leading-[1.15] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {pricing.heading}
          </h2>
          <p className="text-[15.5px] text-muted leading-relaxed">
            {pricing.subheading}
          </p>
        </div>

        <div ref={groupRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1080px] mx-auto items-stretch">
          {pricing.plans.map((plan) => {
            const isHighlight = plan.highlight;

            return (
              <article
                key={plan.name}
                className={`reveal rounded-[22px] flex flex-col justify-between transition-all duration-300 relative ${
                  isHighlight
                    ? "luxury-card-dark text-white p-8 sm:p-9 shadow-2xl md:-translate-y-2 border-slate-700/80"
                    : "luxury-card bg-white text-navy p-8 sm:p-9 border border-mist/90"
                }`}
              >
                {/* Popular Badge for Growth Elite */}
                {isHighlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber to-gold text-navy font-bold text-[11px] uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md flex items-center gap-1.5">
                    <Sparkle size={12} weight="fill" className="text-navy" />
                    <span>{pricing.popularBadge}</span>
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h3
                      className={`text-[22px] font-bold mb-1 ${isHighlight ? "text-white" : "text-navy"}`}
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {plan.name}
                    </h3>
                    <p className={`text-[12.5px] ${isHighlight ? "text-white/70" : "text-muted"}`}>
                      {plan.subtitle}
                    </p>
                  </div>

                  <div className="py-4 my-2 border-y border-mist/20 flex items-baseline gap-1">
                    <span
                      className={`text-[36px] sm:text-[40px] font-extrabold tracking-tight ${
                        isHighlight ? "text-white" : "text-navy"
                      }`}
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className={`text-[14px] font-medium ${isHighlight ? "text-white/60" : "text-muted"}`}>
                        {plan.period}
                      </span>
                    )}
                  </div>

                  <p className={`text-[13.5px] my-4 leading-relaxed ${isHighlight ? "text-white/80" : "text-muted"}`}>
                    {plan.desc}
                  </p>

                  <div className="pt-2 mb-8">
                    <p className={`text-[11.5px] font-bold uppercase tracking-wider mb-3 ${isHighlight ? "text-gold" : "text-navy"}`}>
                      {pricing.featuresLabel}
                    </p>
                    <ul className="space-y-3" role="list">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5">
                          <CheckCircle
                            size={16}
                            weight="duotone"
                            className="shrink-0 mt-0.5 text-emerald"
                            aria-hidden="true"
                          />
                          <span className={`text-[13.5px] leading-snug ${isHighlight ? "text-white/90" : "text-navy/90"}`}>
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  {/* Warranty / Note */}
                  <div className={`p-2.5 rounded-[10px] text-center text-[12px] font-medium mb-4 ${
                    isHighlight ? "bg-white/10 text-white/90" : "bg-canvas text-muted border border-mist"
                  }`}>
                    {plan.warranty}
                  </div>

                  <button
                    onClick={() =>
                      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                    }
                    className={`w-full py-3.5 rounded-[32px] text-[14px] font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                      isHighlight
                        ? "bg-blue hover:bg-blue-hover text-white shadow-lg shadow-blue/25"
                        : "bg-navy hover:bg-navy-light text-white shadow-xs"
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight size={15} weight="bold" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Security & Guarantee Note */}
        <div className="mt-12 text-center max-w-[600px] mx-auto">
          <div className="inline-flex items-center gap-2 text-[13px] text-muted-light">
            <ShieldCheck size={16} weight="duotone" className="text-emerald" />
            <span>{pricing.legalNote}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
