import { useState, useEffect, useCallback } from "react";
import { Menu, X, Phone, ArrowUpRight, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import LanguageToggle from "./LanguageToggle";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const { content, openConsultation } = useLanguage();
  const { site, nav } = content;

  useEffect(() => {
    const sectionIds = nav.links.map((link) => link.href.replace("#", ""));

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Near top of page (Home / Hero)
      if (window.scrollY < 240) {
        setActiveSection("");
        return;
      }

      // Check if user scrolled near bottom of page
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 120) {
        setActiveSection(nav.links[nav.links.length - 1]?.href || "");
        return;
      }

      // Find visible section relative to header
      const headerOffset = 110;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= headerOffset) {
            setActiveSection(`#${id}`);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [nav.links]);

  const close = useCallback(() => setOpen(false), []);

  const handleNavClick = (href: string) => {
    close();
    setActiveSection(href);
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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass-nav shadow-sm border-b border-mist/80"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* 1. Left: Brand Logo & Monogram */}
          <a
            href="/"
            className="flex items-center gap-3 group shrink-0 focus-visible:rounded-xl"
            aria-label={`${site.name} — Home`}
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-[12px] bg-gradient-to-br from-navy via-navy-light to-obsidian border border-slate-border/50 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300 shrink-0">
              <Sparkles size={18} className="text-gold" />
            </div>
            <div className="flex flex-col">
              <span
                className="font-bold text-navy text-[18px] sm:text-[19px] tracking-tight leading-tight group-hover:text-blue transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {site.name}
              </span>
              <span className="text-[10px] uppercase tracking-[0.14em] text-muted-light font-semibold">
                Review & Web Studio
              </span>
            </div>
          </a>

          {/* 2. Center: Desktop Navigation Links (shown on desktop xl) with Active State */}
          <nav
            aria-label="Main Navigation"
            className="hidden xl:flex items-center gap-1 bg-white/85 border border-mist/90 rounded-[40px] px-2.5 py-1.5 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.04)] shrink-0"
          >
            {nav.links.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3.5 py-1.5 rounded-[32px] text-[13px] transition-all duration-200 focus-visible:rounded-[32px] cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "bg-navy text-white font-semibold shadow-xs"
                      : "text-muted hover:text-navy hover:bg-canvas font-medium"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* 3. Right Actions: Language Toggle + CTA + Hamburger */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 shrink-0">
            {/* Language Switcher */}
            <LanguageToggle />

            {/* Desktop CTA Button: triggers consultation popup */}
            <button
              onClick={openConsultation}
              className="hidden sm:inline-flex items-center justify-center gap-1.5 h-10 sm:h-11 px-4 sm:px-5 bg-blue text-white text-[13.5px] font-semibold rounded-[32px] hover:bg-blue-hover shadow-[0_4px_14px_rgba(37,99,235,0.25)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.35)] transition-all duration-300 cursor-pointer focus-visible:rounded-[32px] shrink-0"
            >
              <span className="whitespace-nowrap">{nav.auditCta}</span>
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0"
                aria-hidden="true"
              />
            </button>

            {/* Tablet & Mobile Menu Toggle */}
            <button
              className="xl:hidden p-2 sm:p-2.5 rounded-xl text-navy bg-white border border-mist hover:bg-canvas focus-visible:rounded-xl cursor-pointer shrink-0"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile & Tablet Drawer Menu */}
      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          className="fixed inset-0 z-40 xl:hidden"
        >
          <div
            className="absolute inset-0 bg-navy/40 backdrop-blur-md transition-opacity"
            onClick={close}
            aria-hidden="true"
          />
          <nav
            className="absolute top-22 left-4 right-4 bg-white/98 backdrop-blur-xl border border-mist/90 rounded-[24px] p-6 flex flex-col gap-2.5 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300 max-w-[480px] mx-auto"
            aria-label="Mobile Navigation"
          >
            <div className="flex items-center justify-between pb-3.5 border-b border-mist/80">
              <span className="text-[12.5px] font-bold uppercase tracking-wider text-muted-light">
                {nav.navMenuLabel}
              </span>
              <span className="text-[11px] text-gold font-bold bg-amber/10 px-2.5 py-1 rounded-full">
                {nav.themePill}
              </span>
            </div>

            {nav.links.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`text-left px-3.5 py-3 rounded-xl text-[15px] transition-all cursor-pointer flex items-center justify-between ${
                    isActive
                      ? "bg-navy text-white font-semibold shadow-xs"
                      : "text-navy hover:bg-canvas font-medium"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-gold shrink-0 animate-pulse" />
                  )}
                </a>
              );
            })}

            <div className="pt-4 mt-1 border-t border-mist/80 flex flex-col gap-3">
              <a
                href={site.hotlineHref}
                className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-canvas border border-mist text-[14.5px] font-semibold text-navy hover:bg-light-slate transition-colors"
              >
                <Phone size={16} className="text-blue" aria-hidden="true" />
                <span>{nav.hotlineLabel}: {site.hotline}</span>
              </a>
              <button
                onClick={() => {
                  close();
                  openConsultation();
                }}
                className="w-full py-3.5 bg-blue text-white text-[14.5px] font-bold rounded-[32px] shadow-md hover:bg-blue-hover transition-colors cursor-pointer"
              >
                {nav.auditCta}
              </button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
