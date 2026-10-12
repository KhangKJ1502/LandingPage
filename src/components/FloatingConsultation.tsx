import { useState, useRef, useEffect } from "react";
import { Sparkle, ClipboardText, ChatTeardropDots, PhoneCall, X, ArrowUpRight, ArrowUp } from "@phosphor-icons/react";
import { useLanguage } from "../context/LanguageContext";
import { SITE } from "../constants";

export default function FloatingConsultation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { lang, openConsultation } = useLanguage();
  const isVi = lang === "vi";
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll position to reveal Back to Top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Clear pending close timeout
  const cancelClose = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  // Open ONLY when cursor is directly over the button or popup menu
  const handleMouseEnter = () => {
    cancelClose();
    setIsOpen(true);
  };

  // Close smoothly when cursor leaves both the button and the popup menu
  const handleMouseLeave = () => {
    cancelClose();
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 250);
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end select-none pointer-events-none"
    >
      {/* 
        Expanded Options Menu 
        Only takes up layout & responds to mouse when isOpen is TRUE.
        When closed, it is completely hidden so it cannot be accidentally hovered!
      */}
      {isOpen && (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="mb-3 pointer-events-auto animate-in fade-in zoom-in-95 duration-200 origin-bottom-right"
        >
          <div className="w-[calc(100vw-32px)] max-w-[290px] sm:w-[310px] bg-white/95 backdrop-blur-md rounded-[20px] p-2.5 border border-mist shadow-[0_16px_40px_-8px_rgba(15,23,42,0.18)] flex flex-col gap-1.5">
            {/* Header of Popup */}
            <div className="px-3 py-1.5 flex items-center justify-between border-b border-mist/70 text-[11px] font-bold text-muted-light uppercase tracking-wider">
              <span>{isVi ? "Kênh hỗ trợ trực tuyến" : "Live Support Channels"}</span>
              <span className="flex items-center gap-1 text-emerald font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" />
                Online
              </span>
            </div>

            {/* Option 1: Facebook Messenger */}
            <a
              href={SITE.messengerHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="group flex items-center gap-3 p-2.5 rounded-[14px] hover:bg-canvas transition-colors duration-150 cursor-pointer text-left"
            >
              <div className="w-10 h-10 rounded-[12px] bg-[#0084FF] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-200">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-[13.5px] font-bold text-navy group-hover:text-blue transition-colors">
                    {isVi ? "Chat Facebook Messenger" : "Chat on Facebook"}
                  </p>
                  <ArrowUpRight size={13} className="text-muted-light group-hover:text-blue shrink-0" />
                </div>
                <p className="text-[11.5px] text-muted truncate">
                  {isVi ? "Phản hồi trong 5 phút • Hỗ trợ 24/7" : "Instant reply • 24/7 Available"}
                </p>
              </div>
            </a>

            {/* Option 2: Hotline */}
            <a
              href={SITE.hotlineHref}
              onClick={() => setIsOpen(false)}
              className="group flex items-center gap-3 p-2.5 rounded-[14px] hover:bg-canvas transition-colors duration-150 cursor-pointer text-left"
            >
              <div className="w-10 h-10 rounded-[12px] bg-emerald-subtle text-emerald flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform duration-200">
                <PhoneCall size={20} weight="duotone" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-[13.5px] font-bold text-navy group-hover:text-emerald transition-colors">
                    {SITE.hotline}
                  </p>
                  <ArrowUpRight size={14} className="text-muted-light group-hover:text-emerald shrink-0" />
                </div>
                <p className="text-[11.5px] text-muted truncate">
                  {isVi ? "Tư vấn viên chuyên trách cơ sở" : "Call direct senior concierge"}
                </p>
              </div>
            </a>

            {/* Option 3: Free Audit Consultation */}
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                openConsultation();
              }}
              className="group flex items-center gap-3 p-2.5 rounded-[14px] bg-canvas/80 hover:bg-navy hover:text-white transition-all duration-200 cursor-pointer text-left border border-mist/80"
            >
              <div className="w-10 h-10 rounded-[12px] bg-navy text-white group-hover:bg-white group-hover:text-navy flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-all duration-200">
                <ClipboardText size={20} weight="duotone" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-[13.5px] font-bold text-navy group-hover:text-white transition-colors">
                    {isVi ? "Nhận tư vấn miễn phí" : "Get Free Consultation"}
                  </p>
                  <Sparkle size={14} weight="fill" className="text-gold shrink-0" />
                </div>
                <p className="text-[11.5px] text-muted group-hover:text-white/80 transition-colors truncate">
                  {isVi ? "Đăng ký tư vấn trực tiếp 1-1" : "Book a 1-on-1 strategy call"}
                </p>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* Action Buttons Row: [Back To Top] + [Main Contact Speed Dial Trigger] */}
      <div className="flex items-center gap-2 sm:gap-2.5 pointer-events-auto">
        {/* Back to Top Button (revealed on scroll) */}
        <button
          type="button"
          onClick={scrollToTop}
          className={`group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-md text-navy hover:text-blue hover:bg-white border border-mist shadow-[0_6px_20px_rgba(15,23,42,0.14)] hover:shadow-[0_8px_25px_rgba(37,99,235,0.25)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer ${
            showScrollTop
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-4 pointer-events-none"
          }`}
          aria-label={isVi ? "Cuộn về đầu trang" : "Scroll to top"}
          title={isVi ? "Về đầu trang" : "Back to top"}
        >
          <ArrowUp size={18} weight="bold" className="group-hover:-translate-y-0.5 transition-transform duration-200" />
          
          {/* Subtle hover tooltip */}
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-navy/90 text-white text-[11px] font-medium rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-sm backdrop-blur-xs">
            {isVi ? "Đầu trang" : "Top"}
          </span>
        </button>

        {/* Main Trigger Button ONLY (Strict boundary) */}
        <button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => setIsOpen((prev) => !prev)}
          className={`group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-[0_8px_28px_rgba(15,23,42,0.25)] hover:shadow-[0_12px_32px_rgba(37,99,235,0.4)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer border-2 border-white ${
            isOpen
              ? "bg-navy text-white"
              : "bg-gradient-to-br from-blue via-blue to-navy text-white"
          }`}
          aria-expanded={isOpen}
          aria-label={isVi ? "Mở menu liên hệ tư vấn" : "Open contact options menu"}
        >
          {/* Animated Icon: ChatTeardropDots morphed into X when open */}
          <div className="relative flex items-center justify-center transition-transform duration-300">
            {isOpen ? (
              <X size={22} weight="bold" className="rotate-0 transition-transform duration-200" />
            ) : (
              <>
                <ChatTeardropDots size={24} weight="duotone" className="group-hover:scale-110 transition-transform duration-200" />
                <Sparkle size={12} weight="fill" className="absolute -top-1.5 -right-1.5 text-gold" />
              </>
            )}
          </div>

          {/* Live Online Ping Dot (when closed) */}
          {!isOpen && (
            <span className="absolute top-0.5 right-0.5 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald border-2 border-white"></span>
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
