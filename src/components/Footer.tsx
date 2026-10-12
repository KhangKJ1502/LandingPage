import { PhoneCall, EnvelopeSimple, MapPin, ArrowUp } from "@phosphor-icons/react";
import { useLanguage } from "../context/LanguageContext";
import LanguageToggle from "./LanguageToggle";

export default function Footer() {
  const { content, openConsultation } = useLanguage();
  const { site, nav, footer } = content;

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const headerOffset = 84;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const servicesList = [
    "Social Media Management",
    "Facebook & Instagram Ads",
    "Google Ads (Search & Maps)",
    "Thiết Kế Website Chuẩn Chuyển Đổi",
    "SEO & Local SEO Google Maps",
    "Google Maps & Quản Lý Đánh Giá",
    "Social + Ads Combo",
  ];

  const industriesList = [
    "Nail Salon",
    "Spa & Wellness",
    "Restaurant",
    "Beauty Salon",
  ];

  return (
    <footer className="bg-obsidian text-white/80 relative border-t border-slate-800" role="contentinfo">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-14">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4">
            <div className="mb-5 inline-block">
              <div className="p-2.5 rounded-2xl bg-white/95 backdrop-blur-md shadow-md inline-flex items-center border border-white/20">
                <img
                  src="/logo.png"
                  alt={site.name}
                  className="h-11 sm:h-12 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-[14px] leading-relaxed text-white/60 mb-6 max-w-[340px]">
              {site.tagline} {footer.description}
            </p>

            <div className="space-y-3 text-[13.5px]">
              <a
                href={site.hotlineHref}
                className="flex items-center gap-2.5 text-white/80 hover:text-white transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-gold">
                  <PhoneCall size={14} weight="duotone" />
                </div>
                <span>Hotline: {site.hotline}</span>
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2.5 text-white/80 hover:text-white transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-blue">
                  <EnvelopeSimple size={14} weight="duotone" />
                </div>
                <span>{site.email}</span>
              </a>
              <div className="flex items-start gap-2.5 text-white/60">
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-muted-light mt-0.5">
                  <MapPin size={14} weight="duotone" />
                </div>
                <span>{site.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2">
            <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-white/90 mb-4">
              {footer.navHeading}
            </p>
            <ul className="space-y-2.5 text-[14px]" role="list">
              {nav.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="text-white/65 hover:text-white transition-colors cursor-pointer text-left block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3">
            <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-white/90 mb-4">
              {footer.servicesHeading}
            </p>
            <ul className="space-y-2.5 text-[13.5px] text-white/65" role="list">
              {servicesList.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo("#services");
                    }}
                    className="hover:text-white transition-colors block"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Target Industries & Quick Audit Column */}
          <div className="lg:col-span-3">
            <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-white/90 mb-4">
              {footer.industriesHeading}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {industriesList.map((ind) => (
                <a
                  key={ind}
                  href="#portfolio"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo("#portfolio");
                  }}
                  className="px-2.5 py-1 rounded-[6px] bg-white/8 hover:bg-white/15 text-white/70 hover:text-white text-[11.5px] font-medium border border-white/10 transition-colors"
                >
                  {ind}
                </a>
              ))}
            </div>

            <button
              onClick={openConsultation}
              className="w-full py-3 bg-blue hover:bg-blue-hover text-white text-[13.5px] font-semibold rounded-[32px] transition-colors shadow-md cursor-pointer mb-4"
            >
              {footer.auditButton}
            </button>

            {/* Language toggle in footer */}
            <div className="flex items-center justify-between pt-3 border-t border-white/10">
              <span className="text-[12px] text-white/50">Language:</span>
              <LanguageToggle />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-[12px] sm:text-[12.5px] text-white/50">
            © 2026 {site.name}. {footer.copyright}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[12px] sm:text-[12.5px] text-white/50">
            <a href="#home" className="hover:text-white/80 transition-colors">
              {footer.privacyLink}
            </a>
            <span>•</span>
            <a href="#home" className="hover:text-white/80 transition-colors">
              {footer.termsLink}
            </a>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
            >
              <span>{footer.backToTop}</span>
              <ArrowUp size={13} weight="bold" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
