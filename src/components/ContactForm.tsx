import { PhoneCall, EnvelopeSimple, Clock, ShieldCheck, ClipboardText, ArrowRight, Sparkle } from "@phosphor-icons/react";
import { useLanguage } from "../context/LanguageContext";
import { useReveal } from "../hooks/useReveal";

export default function ContactForm() {
  const { content, openConsultation, lang } = useLanguage();
  const { site, contact } = content;
  const ref = useReveal<HTMLDivElement>();

  return (
    <section
      id="contact"
      className="py-16 md:py-20 bg-canvas relative scroll-mt-24"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column: Studio Promise & Concierge Info */}
          <div className="lg:col-span-6">
            <h2
              id="contact-heading"
              className="text-[26px] sm:text-[34px] md:text-[42px] font-bold text-navy leading-[1.15] mb-3 sm:mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {contact.heading}
            </h2>
            <p className="text-[14.5px] sm:text-[15.5px] text-muted leading-relaxed mb-6 sm:mb-8">
              {contact.subheading}
            </p>

            <div className="space-y-4 mb-8">
              <div className="p-4 bg-white rounded-[14px] border border-mist flex items-start gap-3.5 shadow-2xs">
                <div className="w-10 h-10 rounded-[10px] bg-blue/10 flex items-center justify-center text-blue shrink-0">
                  <PhoneCall size={20} weight="duotone" />
                </div>
                <div>
                  <p className="text-[12px] uppercase font-bold text-muted-light">{contact.hotlineHeader}</p>
                  <a
                    href={site.hotlineHref}
                    className="text-[17px] font-bold text-navy hover:text-blue transition-colors"
                  >
                    {site.hotline}
                  </a>
                  <p className="text-[12px] text-muted">{contact.hotlineSub}</p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-[14px] border border-mist flex items-start gap-3.5 shadow-2xs">
                <div className="w-10 h-10 rounded-[10px] bg-emerald-subtle flex items-center justify-center text-emerald shrink-0">
                  <EnvelopeSimple size={20} weight="duotone" />
                </div>
                <div>
                  <p className="text-[12px] uppercase font-bold text-muted-light">{contact.emailHeader}</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-[15px] font-semibold text-navy hover:text-blue transition-colors"
                  >
                    {site.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Commitments */}
            <div className="p-5 rounded-[16px] bg-white border border-mist space-y-3">
              <p className="text-[12px] font-bold uppercase tracking-wider text-navy">
                {contact.commitmentsTitle}
              </p>
              <div className="flex items-center gap-2.5 text-[13px] text-muted">
                <Clock size={16} weight="duotone" className="text-blue shrink-0" />
                <span>{contact.commitment1}</span>
              </div>
              <div className="flex items-center gap-2.5 text-[13px] text-muted">
                <ShieldCheck size={16} weight="duotone" className="text-emerald shrink-0" />
                <span>{contact.commitment2}</span>
              </div>
              <div className="flex items-center gap-2.5 text-[13px] text-muted">
                <Sparkle size={16} weight="fill" className="text-gold shrink-0" />
                <span>{contact.commitment3}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Luxury Card triggering the popup modal */}
          <div ref={ref} className="reveal lg:col-span-6">
            <div className="luxury-card rounded-[22px] sm:rounded-[24px] border border-mist/90 p-6 sm:p-10 md:p-12 bg-white shadow-[0_12px_40px_-10px_rgba(15,23,42,0.08)] flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-[16px] bg-blue/10 flex items-center justify-center text-blue mb-6">
                  <ClipboardText size={28} weight="duotone" />
                </div>

                <span className="text-[11px] font-bold uppercase tracking-widest text-emerald bg-emerald-subtle px-3 py-1 rounded-full inline-block mb-3">
                  {lang === "vi" ? "Đăng ký trực tuyến" : "Online Assessment"}
                </span>

                <h3
                  className="text-[24px] sm:text-[28px] font-bold text-navy leading-snug mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {contact.formTitle}
                </h3>

                <p className="text-[14.5px] text-muted leading-relaxed mb-8">
                  {contact.formSubtitle}
                </p>

                <div className="space-y-3 pb-8 mb-8 border-b border-mist">
                  <div className="flex items-center gap-2.5 text-[13.5px] text-navy">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue" />
                    <span>{lang === "vi" ? "Tư vấn chiến lược Social Media & Chạy Ads" : "Social Media & Targeted Ads strategy"}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-[13.5px] text-navy">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald" />
                    <span>{lang === "vi" ? "Tối ưu hóa Website & Google Maps địa phương" : "Website design & Google Maps Local SEO"}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-[13.5px] text-navy">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    <span>{lang === "vi" ? "Đề xuất lộ trình tiếp thị số hoàn toàn miễn phí" : "100% Free digital marketing consultation roadmap"}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={openConsultation}
                  className="w-full py-4 bg-blue hover:bg-blue-hover text-white text-[15px] font-semibold rounded-[32px] shadow-[0_4px_16px_rgba(37,99,235,0.3)] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <span>{lang === "vi" ? "Nhận tư vấn miễn phí" : "Get Free Consultation"}</span>
                  <ArrowRight size={16} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-center text-[12px] text-muted-light mt-3.5">
                  {lang === "vi" ? "Nhấn để mở form đăng ký tư vấn nhanh trong 30 giây" : "Click to open the quick 30-second inquiry form popup"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
