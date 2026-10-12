import { ShieldCheck, Clock, Users, TrendUp, CheckCircle, ChartBar } from "@phosphor-icons/react";
import { useLanguage } from "../context/LanguageContext";
import { useReveal } from "../hooks/useReveal";

export default function WhyUs() {
  const ref = useReveal<HTMLDivElement>();
  const { content, lang } = useLanguage();
  const { whyUs } = content;

  const isVi = lang === "vi";

  return (
    <section
      id="why-us"
      className="py-14 sm:py-20 md:py-28 bg-white relative overflow-hidden scroll-mt-24"
      aria-labelledby="why-heading"
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-1/3 -right-40 w-80 h-80 bg-blue/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-[680px] mx-auto mb-10 sm:mb-16">
          <h2
            id="why-heading"
            className="text-[26px] sm:text-[34px] md:text-[44px] font-bold text-navy leading-[1.15] mb-3 sm:mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {whyUs.heading}
          </h2>
          <p className="text-[14.5px] sm:text-[16px] text-muted leading-relaxed">
            {whyUs.subheading}
          </p>
        </div>

        {/* Visual Bento Grid Layout */}
        <div ref={ref} className="reveal grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          {/* Card 1: Am hiểu thị trường tại Mỹ (Large 7 cols with real photo) */}
          <div className="md:col-span-7 luxury-card rounded-[22px] sm:rounded-[24px] border border-mist/90 overflow-hidden relative group bg-canvas/40 flex flex-col justify-between">
            <div className="p-5 sm:p-7 md:p-9 z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue/10 text-blue text-[11px] sm:text-[11.5px] font-bold uppercase tracking-wider mb-3 sm:mb-4">
                <Users size={15} weight="duotone" />
                <span>{isVi ? "Thị trường bản địa tại Mỹ" : "US Local Market Expertise"}</span>
              </div>
              <h3
                className="text-[20px] sm:text-[24px] md:text-[26px] font-bold text-navy mb-2 sm:mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {whyUs.items[1]?.title || (isVi ? "Am hiểu thị trường tại Mỹ" : "US Market Expertise")}
              </h3>
              <p className="text-[13.5px] sm:text-[14.5px] text-muted leading-relaxed max-w-[480px]">
                {whyUs.items[1]?.description}
              </p>
            </div>

            {/* Visual Photo Showcase at bottom of card */}
            <div className="relative h-[180px] sm:h-[260px] mx-3 sm:mx-6 mb-3 sm:mb-6 rounded-[16px] sm:rounded-[18px] overflow-hidden border border-mist/80 shadow-xs">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=500&fit=crop&auto=format"
                alt="Không gian kinh doanh chuyên nghiệp tại Mỹ"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex flex-wrap gap-1.5 sm:gap-2 text-white">
                <span className="text-[10px] sm:text-[11px] font-semibold bg-white/20 backdrop-blur-md px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/20">
                  💅 Nail Salon
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold bg-white/20 backdrop-blur-md px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/20">
                  🌿 Spa & Wellness
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold bg-white/20 backdrop-blur-md px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/20">
                  🍽️ Restaurant
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold bg-white/20 backdrop-blur-md px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/20">
                  ✨ Beauty Salon
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Hỗ trợ theo múi giờ Mỹ (5 cols) */}
          <div className="md:col-span-5 luxury-card rounded-[22px] sm:rounded-[24px] border border-mist/90 p-5 sm:p-7 md:p-9 bg-gradient-to-br from-white via-canvas/50 to-canvas/80 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-[14px] bg-amber/10 border border-amber/20 flex items-center justify-center text-amber mb-4 sm:mb-5">
                <Clock size={22} weight="duotone" />
              </div>
              <h3
                className="text-[19px] sm:text-[22px] md:text-[23px] font-bold text-navy mb-2 sm:mb-2.5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {whyUs.items[2]?.title || (isVi ? "Hỗ trợ theo múi giờ Mỹ" : "US Timezone Bilingual Support")}
              </h3>
              <p className="text-[13.5px] sm:text-[14px] text-muted leading-relaxed mb-5 sm:mb-6">
                {whyUs.items[2]?.description}
              </p>
            </div>

            {/* Visual Micro Progress & Timezone Card */}
            <div className="p-3.5 sm:p-4 bg-white rounded-[16px] sm:rounded-[18px] border border-mist/80 shadow-2xs">
              <div className="flex items-center justify-between mb-2 text-[11.5px] sm:text-[12px]">
                <span className="font-semibold text-navy">{isVi ? "Múi giờ làm việc" : "Operating Timezones"}</span>
                <span className="text-emerald font-bold">{isVi ? "EST • CST • MST • PST" : "EST • CST • MST • PST"}</span>
              </div>
              <div className="w-full h-2 rounded-full bg-mist/70 overflow-hidden mb-2.5 sm:mb-3">
                <div className="h-full bg-gradient-to-r from-blue to-emerald rounded-full w-full" />
              </div>
              <div className="flex items-center justify-between text-[11px] sm:text-[11.5px] text-muted">
                <span>{isVi ? "Giao tiếp song ngữ" : "Bilingual Communication"}</span>
                <strong className="text-navy">{isVi ? "Tiếng Việt & English" : "Vietnamese & English"}</strong>
              </div>
            </div>
          </div>

          {/* Card 3: Chính chủ & Minh bạch 100% (5 cols) */}
          <div className="md:col-span-5 luxury-card rounded-[22px] sm:rounded-[24px] border border-mist/90 p-5 sm:p-7 md:p-9 bg-white flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-[14px] bg-blue/10 border border-blue/20 flex items-center justify-center text-blue mb-4 sm:mb-5">
                <ShieldCheck size={24} weight="duotone" />
              </div>
              <h3
                className="text-[19px] sm:text-[22px] md:text-[23px] font-bold text-navy mb-2 sm:mb-2.5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {whyUs.items[0]?.title || (isVi ? "Chính chủ & Minh bạch 100%" : "100% Client Ownership")}
              </h3>
              <p className="text-[13.5px] sm:text-[14px] text-muted leading-relaxed mb-5 sm:mb-6">
                {whyUs.items[0]?.description}
              </p>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-[14px] bg-canvas border border-mist/80">
              <ChartBar size={22} weight="duotone" className="text-blue shrink-0" />
              <div className="text-[12px] sm:text-[12.5px] leading-snug">
                <p className="font-semibold text-navy">{isVi ? "Quản trị chính chủ trực tiếp" : "Direct Client Account Ownership"}</p>
                <p className="text-muted-light">{isVi ? "Không phụ phí ẩn, chi phí trả trực tiếp cho nền tảng" : "No hidden fees, ad spend paid directly to Meta & Google"}</p>
              </div>
            </div>
          </div>

          {/* Card 4: Giải pháp toàn diện A-Z (Large 7 cols with trust badges) */}
          <div className="md:col-span-7 luxury-card rounded-[22px] sm:rounded-[24px] border border-mist/90 p-5 sm:p-7 md:p-9 bg-gradient-to-tr from-canvas/60 via-white to-canvas/30 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-[14px] bg-emerald-subtle border border-emerald/20 flex items-center justify-center text-emerald mb-4 sm:mb-5">
                <TrendUp size={22} weight="duotone" />
              </div>
              <h3
                className="text-[19px] sm:text-[22px] md:text-[24px] font-bold text-navy mb-2 sm:mb-2.5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {whyUs.items[3]?.title || (isVi ? "Giải pháp toàn diện A-Z" : "Comprehensive Solutions")}
              </h3>
              <p className="text-[13.5px] sm:text-[14px] text-muted leading-relaxed mb-5 sm:mb-6">
                {whyUs.items[3]?.description}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 p-3 rounded-[12px] bg-white border border-mist/80">
                <CheckCircle size={17} weight="fill" className="text-emerald shrink-0 mt-0.5" />
                <span className="text-[12.5px] text-navy font-medium">
                  {isVi ? "Đồng bộ Website, Social, Ads & Local Maps" : "Synchronized Web, Social, Ads & Maps"}
                </span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-[12px] bg-white border border-mist/80">
                <CheckCircle size={17} weight="fill" className="text-emerald shrink-0 mt-0.5" />
                <span className="text-[12.5px] text-navy font-medium">
                  {isVi ? "Báo cáo dữ liệu thực tế hàng tháng" : "Monthly transparent performance reports"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
