import {
  Star,
  Desktop,
  ShareNetwork,
  Megaphone,
  MagnifyingGlass,
  TrendUp,
  Sparkle,
  ArrowRight,
  CheckCircle,
  ShieldCheck,
} from "@phosphor-icons/react";
import { useLanguage } from "../context/LanguageContext";
import { useRevealGroup } from "../hooks/useReveal";

function getServiceIcon(id: string) {
  switch (id) {
    case "review":
      return <Star size={24} weight="duotone" className="text-amber" />;
    case "website":
      return <Desktop size={24} weight="duotone" className="text-blue" />;
    case "social":
      return <ShareNetwork size={24} weight="duotone" className="text-indigo-500" />;
    case "meta_ads":
      return <Megaphone size={24} weight="duotone" className="text-pink-500" />;
    case "google_ads":
      return <MagnifyingGlass size={24} weight="duotone" className="text-emerald" />;
    case "seo":
      return <TrendUp size={24} weight="duotone" className="text-teal-600" />;
    case "combo":
      return <Sparkle size={24} weight="fill" className="text-gold" />;
    default:
      return <Sparkle size={24} weight="duotone" className="text-blue" />;
  }
}

export default function Services() {
  const groupRef = useRevealGroup<HTMLDivElement>(60);
  const { content, openConsultation } = useLanguage();
  const { services } = content;

  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-white relative scroll-mt-24"
      aria-labelledby="services-heading"
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-14">
          <div className="max-w-[640px]">
            <h2
              id="services-heading"
              className="text-[26px] sm:text-[34px] md:text-[42px] font-bold text-navy leading-[1.15]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {services.heading}
            </h2>
          </div>
          <p className="text-[14.5px] sm:text-[15.5px] text-muted max-w-[480px] leading-relaxed">
            {services.subheading}
          </p>
        </div>

        {/* 7 Services Grid */}
        <div ref={groupRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 items-stretch">
          {services.items.map((service, index) => {
            const isCombo = service.id === "combo";

            return (
              <article
                key={service.id}
                className={`reveal rounded-[20px] sm:rounded-[22px] p-5 sm:p-7 md:p-8 flex flex-col justify-between transition-all duration-300 group ${
                  isCombo
                    ? "luxury-card-dark text-white border-slate-700/80 shadow-xl bg-gradient-to-b from-[#0F172A] to-[#1E293B] md:col-span-2 lg:col-span-3 lg:flex-row lg:items-center lg:gap-10"
                    : "luxury-card bg-white text-navy border border-mist/90 shadow-[0_8px_30px_-8px_rgba(15,23,42,0.06)] hover:shadow-[0_16px_36px_-8px_rgba(15,23,42,0.1)]"
                }`}
              >
                <div className={isCombo ? "lg:flex-1" : ""}>
                  {/* Top Bar of Service Card */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div
                      className={`w-12 h-12 rounded-[14px] flex items-center justify-center group-hover:scale-105 transition-all duration-300 ${
                        isCombo
                          ? "bg-white/10 border border-white/20"
                          : "bg-canvas border border-mist"
                      }`}
                    >
                      {getServiceIcon(service.id)}
                    </div>
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${
                        isCombo
                          ? "bg-gold/20 text-gold border-gold/30"
                          : "bg-canvas text-muted-light border-mist"
                      }`}
                    >
                      {service.badge}
                    </span>
                  </div>

                  <p
                    className={`text-[12px] font-bold uppercase tracking-widest mb-1.5 ${
                      isCombo ? "text-gold" : "text-blue"
                    }`}
                  >
                    {service.label}
                  </p>
                  <h3
                    className={`text-[21px] sm:text-[23px] font-bold leading-snug mb-3 ${
                      isCombo ? "text-white" : "text-navy"
                    }`}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`text-[14px] leading-relaxed mb-6 ${
                      isCombo ? "text-white/80" : "text-muted"
                    }`}
                  >
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div
                    className={`space-y-2.5 pb-5 border-b mb-5 ${
                      isCombo ? "border-white/10" : "border-mist/80"
                    }`}
                  >
                    <p
                      className={`text-[11.5px] font-bold uppercase tracking-wider ${
                        isCombo ? "text-gold" : "text-navy"
                      }`}
                    >
                      {services.deliverablesLabel}
                    </p>
                    <div className={isCombo ? "grid sm:grid-cols-2 gap-2.5" : "space-y-2.5"}>
                      {service.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <CheckCircle
                            size={16}
                            weight="duotone"
                            className="text-emerald shrink-0 mt-0.5"
                          />
                          <span
                            className={`text-[13px] leading-snug ${
                              isCombo ? "text-white/90" : "text-navy/90"
                            }`}
                          >
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={isCombo ? "lg:w-[320px] lg:shrink-0 flex flex-col justify-center" : ""}>
                  {/* Outcome Box */}
                  <div
                    className={`flex items-start gap-2.5 p-3 rounded-[12px] border mb-5 ${
                      isCombo
                        ? "bg-white/5 border-white/10"
                        : "bg-canvas border-mist/60"
                    }`}
                  >
                    <ShieldCheck
                      size={18}
                      weight="duotone"
                      className="text-emerald shrink-0 mt-0.5"
                    />
                    <div>
                      <span className="text-[10.5px] font-semibold text-emerald uppercase tracking-wider block">
                        {services.outcomeLabel}
                      </span>
                      <p
                        className={`text-[13px] font-medium mt-0.5 leading-snug ${
                          isCombo ? "text-white/90" : "text-navy"
                        }`}
                      >
                        {service.outcome}
                      </p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={openConsultation}
                    className={`w-full py-3.5 rounded-[32px] text-[13.5px] font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                      isCombo
                        ? "bg-blue hover:bg-blue-hover text-white shadow-lg shadow-blue/30"
                        : "bg-navy hover:bg-navy-light text-white shadow-xs"
                    }`}
                  >
                    <span>{service.cta}</span>
                    <ArrowRight size={14} weight="bold" aria-hidden="true" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Supporting Line */}
        <div className="text-center mt-12 text-[14px] text-muted">
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
