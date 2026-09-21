import { ShieldCheck, Zap, Users, TrendingUp, Sparkles, CheckCircle2, Award, BarChart3 } from "lucide-react";
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
      className="py-20 md:py-28 bg-white relative overflow-hidden scroll-mt-24"
      aria-labelledby="why-heading"
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-1/3 -right-40 w-80 h-80 bg-blue/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-[680px] mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-canvas border border-mist text-[12.5px] font-semibold text-blue mb-3.5 shadow-2xs">
            <Sparkles size={13} className="text-gold" />
            <span>{whyUs.tag}</span>
          </div>
          <h2
            id="why-heading"
            className="text-[32px] md:text-[44px] font-bold text-navy leading-[1.15] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {whyUs.heading}
          </h2>
          <p className="text-[16px] text-muted leading-relaxed">
            {whyUs.subheading}
          </p>
        </div>

        {/* Visual Bento Grid Layout */}
        <div ref={ref} className="reveal grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Thấu hiểu ngành dịch vụ (Large 7 cols with real photo) */}
          <div className="md:col-span-7 luxury-card rounded-[24px] border border-mist/90 overflow-hidden relative group bg-canvas/40 flex flex-col justify-between">
            <div className="p-7 sm:p-9 z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue/10 text-blue text-[11.5px] font-bold uppercase tracking-wider mb-4">
                <Users size={13} />
                <span>{isVi ? "Tâm lý khách hàng cao cấp" : "High-End Customer Psychology"}</span>
              </div>
              <h3
                className="text-[22px] sm:text-[26px] font-bold text-navy mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {whyUs.items[2]?.title || "Thấu hiểu ngành dịch vụ"}
              </h3>
              <p className="text-[14.5px] text-muted leading-relaxed max-w-[480px]">
                {whyUs.items[2]?.description}
              </p>
            </div>

            {/* Visual Photo Showcase at bottom of card */}
            <div className="relative h-[220px] sm:h-[260px] mx-4 sm:mx-6 mb-4 sm:mb-6 rounded-[18px] overflow-hidden border border-mist/80 shadow-xs">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=500&fit=crop&auto=format"
                alt="Không gian phòng khám và thẩm mỹ viện cao cấp chuẩn 5 sao"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 text-white">
                <span className="text-[11px] font-semibold bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  💅 Nail & Lash Lounge
                </span>
                <span className="text-[11px] font-semibold bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  🌿 Holistic Spa & Wellness
                </span>
                <span className="text-[11px] font-semibold bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  ✨ Clinic & MedSpa
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Thấy kết quả sau 7 ngày (5 cols with growth chart visual) */}
          <div className="md:col-span-5 luxury-card rounded-[24px] border border-mist/90 p-7 sm:p-9 bg-gradient-to-br from-white via-canvas/50 to-canvas/80 flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-[14px] bg-amber/10 border border-amber/20 flex items-center justify-center text-amber mb-5">
                <Zap size={22} className="fill-amber/20" />
              </div>
              <h3
                className="text-[20px] sm:text-[23px] font-bold text-navy mb-2.5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {whyUs.items[1]?.title || "Thấy kết quả sau 7 ngày"}
              </h3>
              <p className="text-[14px] text-muted leading-relaxed mb-6">
                {whyUs.items[1]?.description}
              </p>
            </div>

            {/* Visual Micro Progress & Stat Card */}
            <div className="p-4 bg-white rounded-[18px] border border-mist/80 shadow-2xs">
              <div className="flex items-center justify-between mb-2 text-[12px]">
                <span className="font-semibold text-navy">{isVi ? "Kích hoạt & Thu hút review" : "Activation & Review Intake"}</span>
                <span className="text-emerald font-bold">{isVi ? "Tuần 1: Có kết quả" : "Week 1: Active"}</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-mist/70 overflow-hidden mb-3">
                <div className="h-full bg-gradient-to-r from-blue to-emerald rounded-full w-[85%]" />
              </div>
              <div className="flex items-center justify-between text-[11.5px] text-muted">
                <span>{isVi ? "Setup hệ thống quầy" : "Counter system ready"}</span>
                <strong className="text-navy">{isVi ? "+10-15 review thật đầu tiên" : "+10-15 verified reviews"}</strong>
              </div>
            </div>
          </div>

          {/* Card 3: Minh bạch & Đo lường thực (5 cols) */}
          <div className="md:col-span-5 luxury-card rounded-[24px] border border-mist/90 p-7 sm:p-9 bg-white flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-[14px] bg-blue/10 border border-blue/20 flex items-center justify-center text-blue mb-5">
                <ShieldCheck size={22} />
              </div>
              <h3
                className="text-[20px] sm:text-[23px] font-bold text-navy mb-2.5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {whyUs.items[0]?.title || "Minh bạch & Đo lường thực"}
              </h3>
              <p className="text-[14px] text-muted leading-relaxed mb-6">
                {whyUs.items[0]?.description}
              </p>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-[14px] bg-canvas border border-mist/80">
              <BarChart3 size={20} className="text-blue shrink-0" />
              <div className="text-[12.5px] leading-snug">
                <p className="font-semibold text-navy">{isVi ? "Báo cáo Google Analytics & Maps Live" : "Live Google Analytics & Maps"}</p>
                <p className="text-muted-light">{isVi ? "Quyền quản trị chính chủ 100%" : "100% full client ownership"}</p>
              </div>
            </div>
          </div>

          {/* Card 4: Cam kết đồng hành dài hạn (Large 7 cols with trust badges) */}
          <div className="md:col-span-7 luxury-card rounded-[24px] border border-mist/90 p-7 sm:p-9 bg-gradient-to-tr from-canvas/60 via-white to-canvas/30 flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-[14px] bg-emerald-subtle border border-emerald/20 flex items-center justify-center text-emerald mb-5">
                <TrendingUp size={22} />
              </div>
              <h3
                className="text-[20px] sm:text-[24px] font-bold text-navy mb-2.5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {whyUs.items[3]?.title || "Cam kết đồng hành dài hạn"}
              </h3>
              <p className="text-[14px] text-muted leading-relaxed mb-6">
                {whyUs.items[3]?.description}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 p-3 rounded-[12px] bg-white border border-mist/80">
                <CheckCircle2 size={16} className="text-emerald shrink-0 mt-0.5" />
                <span className="text-[12.5px] text-navy font-medium">
                  {isVi ? "Bảo trì kỹ thuật & tốc độ trang" : "Technical & speed maintenance"}
                </span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-[12px] bg-white border border-mist/80">
                <CheckCircle2 size={16} className="text-emerald shrink-0 mt-0.5" />
                <span className="text-[12.5px] text-navy font-medium">
                  {isVi ? "Giữ vững Top 1-3 Google Maps" : "Maintain Top 1-3 Google Maps"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
