import { useState } from "react";
import { CaretDown, Sparkle, Question } from "@phosphor-icons/react";
import { useLanguage } from "../context/LanguageContext";
import { useReveal } from "../hooks/useReveal";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const ref = useReveal<HTMLDivElement>();
  const { content } = useLanguage();
  const { faq } = content;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <section
      id="faq"
      className="py-16 md:py-20 bg-white relative scroll-mt-24"
      aria-labelledby="faq-heading"
    >
      {/* Schema.org FAQPage Structured Data for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-canvas border border-mist text-[12.5px] font-semibold text-blue mb-3.5 shadow-2xs">
              <Sparkle size={14} weight="fill" className="text-gold" />
              <span>{faq.tag}</span>
            </div>
            <h2
              id="faq-heading"
              className="text-[32px] md:text-[40px] font-bold text-navy leading-[1.15] mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {faq.heading}
            </h2>
            <p className="text-[15.5px] text-muted leading-relaxed mb-6">
              {faq.subheading}
            </p>
            <div className="p-5 bg-canvas rounded-[16px] border border-mist flex items-start gap-3">
              <Question size={22} weight="duotone" className="text-blue shrink-0 mt-0.5" />
              <div>
                <p className="text-[13.5px] font-semibold text-navy">{faq.specialCaseTitle}</p>
                <p className="text-[13px] text-muted mt-0.5">
                  {faq.specialCaseSub}
                </p>
                <button
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="mt-2.5 text-[13px] font-semibold text-blue hover:underline cursor-pointer"
                >
                  {faq.specialCaseCta}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div ref={ref} className="reveal lg:col-span-7">
            <div className="divide-y divide-mist/80 border-y border-mist/80">
              {faq.faqs.map((item, i) => {
                const isOpen = open === i;
                const panelId = `faq-panel-${i}`;
                const triggerId = `faq-trigger-${i}`;

                return (
                  <div key={i} className="py-4">
                    <dt>
                      <button
                        id={triggerId}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpen(isOpen ? null : i)}
                        className="w-full flex items-start justify-between gap-4 text-left py-2 focus-visible:rounded-lg cursor-pointer group"
                      >
                        <span className="text-[16px] font-bold text-navy leading-snug group-hover:text-blue transition-colors">
                          {item.q}
                        </span>
                        <div className={`w-8 h-8 rounded-full border border-mist flex items-center justify-center shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180 bg-navy text-white border-navy" : "bg-white text-muted group-hover:border-slate-border"
                        }`}>
                          <CaretDown size={16} weight="bold" aria-hidden="true" />
                        </div>
                      </button>
                    </dt>
                    <dd
                      id={panelId}
                      role="region"
                      aria-labelledby={triggerId}
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? "max-h-96 pt-3 pb-2 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-[14.5px] text-muted leading-relaxed">
                        {item.a}
                      </p>
                    </dd>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
