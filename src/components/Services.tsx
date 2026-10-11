import { Star, Desktop, ArrowRight, CheckCircle, ShieldCheck, Sparkle } from "@phosphor-icons/react";
import { useLanguage } from "../context/LanguageContext";
import { useRevealGroup } from "../hooks/useReveal";

export default function Services() {
  const groupRef = useRevealGroup<HTMLDivElement>(120);
  const { content } = useLanguage();
  const { services } = content;

  return (
    <section
      id="services"
      className="py-16 md:py-20 bg-white relative scroll-mt-24"
      aria-labelledby="services-heading"
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-[560px]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas border border-mist text-[12px] font-semibold text-blue uppercase tracking-widest mb-3">
              <Sparkle size={14} weight="fill" className="text-gold" />
              <span>{services.tag}</span>
            </div>
            <h2
              id="services-heading"
              className="text-[32px] md:text-[42px] font-bold text-navy leading-[1.15]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {services.heading}
            </h2>
          </div>
          <p className="text-[15px] text-muted max-w-[420px] leading-relaxed">
            {services.subheading}
          </p>
        </div>

        <div ref={groupRef} className="grid md:grid-cols-2 gap-8">
          {services.items.map((service, index) => {
            const isReview = service.id === "review";

            return (
              <article
                key={service.id}
                className="reveal luxury-card rounded-[20px] p-8 sm:p-10 border border-mist/90 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Header of Service Card */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="w-13 h-13 rounded-[14px] bg-canvas border border-mist flex items-center justify-center group-hover:scale-105 group-hover:border-blue/30 transition-all duration-300">
                      {isReview ? (
                        <Star size={24} weight="duotone" className="text-amber" />
                      ) : (
                        <Desktop size={24} weight="duotone" className="text-blue" />
                      )}
                    </div>
                    <span className="text-[11.5px] font-bold uppercase tracking-wider text-muted-light bg-canvas px-3 py-1 rounded-full border border-mist">
                      {service.badge}
                    </span>
                  </div>

                  <p className="text-[12px] font-bold uppercase tracking-widest text-blue mb-1.5">
                    {service.label}
                  </p>
                  <h3
                    className="text-[24px] sm:text-[26px] font-bold text-navy leading-snug mb-4"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {service.title}
                  </h3>

                  <p className="text-[15px] text-muted leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2.5 pb-6 border-b border-mist/80 mb-6">
                    <p className="text-[12px] font-bold uppercase tracking-wider text-navy">
                      {services.deliverablesLabel}
                    </p>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle size={16} weight="duotone" className="text-emerald shrink-0 mt-0.5" />
                        <span className="text-[13.5px] text-navy/90">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Measurable Outcome Box */}
                  <div className="flex items-start gap-3 p-3.5 bg-canvas rounded-[12px] border border-mist/60 mb-6">
                    <ShieldCheck size={20} weight="duotone" className="text-emerald shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] font-semibold text-emerald uppercase tracking-wider block">
                        {services.outcomeLabel}
                      </span>
                      <p className="text-[13.5px] font-medium text-navy mt-0.5 leading-snug">
                        {service.outcome}
                      </p>
                    </div>
                  </div>

                  {/* Primary / Secondary CTA */}
                  <a
                    href={service.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(service.href)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`w-full py-3.5 rounded-[32px] text-[14px] font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${index === 0
                        ? "bg-navy text-white hover:bg-navy-light shadow-sm"
                        : "bg-blue text-white hover:bg-blue-hover shadow-[0_4px_14px_rgba(37,99,235,0.25)]"
                      }`}
                  >
                    <span>{service.cta}</span>
                    <ArrowRight size={15} weight="bold" aria-hidden="true" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Supporting Line */}
        <div className="text-center mt-10 text-[14px] text-muted">
          {services.comparisonNote}{" "}
          <a
            href="#comparison"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#comparison")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-blue font-semibold underline underline-offset-4 hover:text-blue-hover"
          >
            {services.comparisonLink}
          </a>
        </div>
      </div>
    </section>
  );
}
