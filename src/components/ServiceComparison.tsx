import { CheckCircle, ArrowRight, Sparkle, Clock, Compass, Stack } from "@phosphor-icons/react";
import { useLanguage } from "../context/LanguageContext";
import { useReveal } from "../hooks/useReveal";

export default function ServiceComparison() {
  const ref = useReveal<HTMLDivElement>();
  const { content } = useLanguage();
  const { comparison } = content;

  return (
    <section
      id="comparison"
      className="py-16 md:py-20 bg-canvas relative scroll-mt-24"
      aria-labelledby="comparison-heading"
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="text-center max-w-[620px] mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-mist text-[12.5px] font-semibold text-blue mb-3.5 shadow-2xs">
            <Sparkle size={14} weight="fill" className="text-gold" />
            <span>{comparison.tag}</span>
          </div>
          <h2
            id="comparison-heading"
            className="text-[32px] md:text-[42px] font-bold text-navy leading-[1.15] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {comparison.heading}
          </h2>
          <p className="text-[15.5px] text-muted leading-relaxed">
            {comparison.subheading}
          </p>
        </div>

        <div ref={ref} className="reveal grid md:grid-cols-2 gap-8 max-w-[1020px] mx-auto">
          {/* Column 1: Audit & Tối ưu */}
          <div className="luxury-card rounded-[20px] p-8 sm:p-10 border border-mist/90 flex flex-col justify-between bg-white">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue bg-blue/10 px-3 py-1 rounded-full">
                  {comparison.col1.tag}
                </span>
                <span className="text-[12px] text-muted flex items-center gap-1.5">
                  <Clock size={15} weight="duotone" />
                  {comparison.col1.timeline}
                </span>
              </div>

              <h3
                className="text-[24px] font-bold text-navy mb-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {comparison.col1.title}
              </h3>
              <p className="text-[13.5px] text-muted mb-6">
                {comparison.col1.subtitle}
              </p>

              <div className="space-y-5 pt-5 border-t border-mist/80">
                <div>
                  <p className="text-[11.5px] font-bold uppercase tracking-wider text-muted-light mb-1">
                    {comparison.bestForLabel}
                  </p>
                  <p className="text-[14px] text-navy leading-relaxed">
                    {comparison.col1.bestFor}
                  </p>
                </div>

                <div>
                  <p className="text-[11.5px] font-bold uppercase tracking-wider text-muted-light mb-1">
                    {comparison.startingPointLabel}
                  </p>
                  <p className="text-[14px] text-navy leading-relaxed flex items-start gap-2">
                    <Compass size={17} weight="duotone" className="text-blue shrink-0 mt-0.5" />
                    <span>{comparison.col1.startingPoint}</span>
                  </p>
                </div>

                <div>
                  <p className="text-[11.5px] font-bold uppercase tracking-wider text-muted-light mb-2">
                    {comparison.scopeLabel}
                  </p>
                  <ul className="space-y-2">
                    {comparison.col1.coreWork.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[13.5px] text-navy/90">
                        <CheckCircle size={15} weight="fill" className="text-emerald shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-[11.5px] font-bold uppercase tracking-wider text-muted-light mb-1">
                    {comparison.deliverableLabel}
                  </p>
                  <p className="text-[13.5px] text-navy font-medium bg-canvas p-3 rounded-[10px] border border-mist/60">
                    {comparison.col1.deliverable}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-mist/80">
              <a
                href={comparison.col1.href}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(comparison.col1.href)?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full py-3.5 bg-canvas border border-mist text-navy hover:border-slate-border text-[14px] font-semibold rounded-[32px] transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>{comparison.col1.cta}</span>
                <ArrowRight size={15} weight="bold" />
              </a>
            </div>
          </div>

          {/* Column 2: Thiết kế & Xây dựng mới */}
          <div className="luxury-card rounded-[20px] p-8 sm:p-10 border border-blue/30 flex flex-col justify-between bg-white relative">
            {/* Top gold badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-navy text-white text-[11px] font-semibold px-4 py-1 rounded-full shadow-md flex items-center gap-1.5">
              <Sparkle size={12} weight="fill" className="text-gold" />
              <span>{comparison.col2.badge}</span>
            </div>

            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald bg-emerald-subtle px-3 py-1 rounded-full">
                  {comparison.col2.tag}
                </span>
                <span className="text-[12px] text-muted flex items-center gap-1.5">
                  <Clock size={15} weight="duotone" />
                  {comparison.col2.timeline}
                </span>
              </div>

              <h3
                className="text-[24px] font-bold text-navy mb-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {comparison.col2.title}
              </h3>
              <p className="text-[13.5px] text-muted mb-6">
                {comparison.col2.subtitle}
              </p>

              <div className="space-y-5 pt-5 border-t border-mist/80">
                <div>
                  <p className="text-[11.5px] font-bold uppercase tracking-wider text-muted-light mb-1">
                    {comparison.bestForLabel}
                  </p>
                  <p className="text-[14px] text-navy leading-relaxed">
                    {comparison.col2.bestFor}
                  </p>
                </div>

                <div>
                  <p className="text-[11.5px] font-bold uppercase tracking-wider text-muted-light mb-1">
                    {comparison.startingPointLabel}
                  </p>
                  <p className="text-[14px] text-navy leading-relaxed flex items-start gap-2">
                    <Stack size={17} weight="duotone" className="text-blue shrink-0 mt-0.5" />
                    <span>{comparison.col2.startingPoint}</span>
                  </p>
                </div>

                <div>
                  <p className="text-[11.5px] font-bold uppercase tracking-wider text-muted-light mb-2">
                    {comparison.scopeLabel}
                  </p>
                  <ul className="space-y-2">
                    {comparison.col2.coreWork.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[13.5px] text-navy/90">
                        <CheckCircle size={15} weight="fill" className="text-emerald shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-[11.5px] font-bold uppercase tracking-wider text-muted-light mb-1">
                    {comparison.deliverableLabel}
                  </p>
                  <p className="text-[13.5px] text-navy font-medium bg-blue/5 p-3 rounded-[10px] border border-blue/15">
                    {comparison.col2.deliverable}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-mist/80">
              <a
                href={comparison.col2.href}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(comparison.col2.href)?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full py-3.5 bg-blue text-white hover:bg-blue-hover text-[14px] font-semibold rounded-[32px] shadow-[0_4px_14px_rgba(37,99,235,0.25)] transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>{comparison.col2.cta}</span>
                <ArrowRight size={15} weight="bold" />
              </a>
            </div>
          </div>
        </div>

        <p className="text-center mt-8 text-[13.5px] text-muted">
          {comparison.bottomQuestion}{" "}
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="text-blue font-semibold underline underline-offset-2 hover:text-blue-hover cursor-pointer"
          >
            {comparison.bottomCta}
          </button>
        </p>
      </div>
    </section>
  );
}
