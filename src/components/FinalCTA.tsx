import { ArrowRight, PhoneCall, Sparkle } from "@phosphor-icons/react";
import { useLanguage } from "../context/LanguageContext";
import { useReveal } from "../hooks/useReveal";

export default function FinalCTA() {
  const ref = useReveal<HTMLDivElement>();
  const { content } = useLanguage();
  const { site, finalCta } = content;

  return (
    <section
      className="py-20 md:py-28 bg-canvas relative overflow-hidden"
      aria-labelledby="final-cta-heading"
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div
          ref={ref}
          className="reveal luxury-card-dark rounded-[28px] p-10 sm:p-16 text-center max-w-[960px] mx-auto relative overflow-hidden text-white"
        >
          {/* Subtle Ambient Radial Glows */}
          <div
            className="absolute -top-32 -left-32 w-80 h-80 bg-blue/20 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-32 -right-32 w-80 h-80 bg-gold/15 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-[680px] mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[12px] font-semibold text-gold mb-5 shadow-xs">
              <Sparkle size={14} weight="fill" className="text-gold" />
              <span>{finalCta.badge}</span>
            </div>

            <h2
              id="final-cta-heading"
              className="text-[32px] sm:text-[44px] md:text-[50px] font-bold text-white leading-[1.12] mb-5 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {finalCta.heading}
            </h2>

            <p className="text-[16px] sm:text-[17.5px] text-white/80 leading-relaxed mb-10">
              {finalCta.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() =>
                  document.querySelector("#audit")?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-blue hover:bg-blue-hover text-white text-[15px] font-semibold rounded-[32px] shadow-lg shadow-blue/30 transition-all duration-200 cursor-pointer"
              >
                <span>{finalCta.ctaAudit}</span>
                <ArrowRight size={16} weight="bold" aria-hidden="true" />
              </button>

              <a
                href={site.hotlineHref}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white text-[15px] font-semibold rounded-[32px] transition-colors"
              >
                <PhoneCall size={18} weight="duotone" className="text-gold" />
                <span>{finalCta.hotlinePrefix}: {site.hotline}</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-[12.5px] text-white/60">
              <span>✓ {finalCta.perk1}</span>
              <span>•</span>
              <span>✓ {finalCta.perk2}</span>
              <span>•</span>
              <span>✓ {finalCta.perk3}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
