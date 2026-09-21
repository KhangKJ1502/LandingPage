import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Star, TrendingUp, Sparkles, MapPin, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [viewModes, setViewModes] = useState<Record<string, "after" | "before">>({});
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  // Mouse drag to scroll state
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);

  const { content } = useLanguage();
  const { portfolio } = content;

  const categories = [
    { key: "all", label: portfolio.allCategory },
    { key: "Nail Salon", label: "Nail Salon" },
    { key: "Spa & Wellness", label: "Spa & Wellness" },
    { key: "Nhà hàng", label: portfolio.items.find(i => i.category === "Nhà hàng" || i.category === "Restaurant")?.category || "Restaurant" },
    { key: "Thẩm mỹ viện", label: portfolio.items.find(i => i.category === "Thẩm mỹ viện" || i.category === "Aesthetic Clinic")?.category || "Clinic" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? portfolio.items
      : portfolio.items.filter((item) =>
          item.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
          (activeCategory === "Nhà hàng" && (item.category === "Restaurant" || item.category === "Nhà hàng")) ||
          (activeCategory === "Thẩm mỹ viện" && (item.category === "Aesthetic Clinic" || item.category === "Thẩm mỹ viện"))
        );

  const toggleView = (name: string) => {
    setViewModes((prev) => ({
      ...prev,
      [name]: prev[name] === "before" ? "after" : "before",
    }));
  };

  // Check scroll position to update arrow disabled states & active index
  const updateScrollState = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 20);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);

    // Calculate approximate active slide
    const cardWidth = 440;
    const currentIdx = Math.round(scrollLeft / cardWidth);
    setActiveSlideIndex(Math.min(currentIdx, filteredItems.length - 1));
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    slider.addEventListener("scroll", updateScrollState, { passive: true });
    updateScrollState();
    return () => slider.removeEventListener("scroll", updateScrollState);
  }, [filteredItems.length]);

  const scrollPrev = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: -420, behavior: "smooth" });
  };

  const scrollNext = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: 420, behavior: "smooth" });
  };

  // Mouse Drag Scrolling Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    startScrollLeft.current = sliderRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    sliderRef.current.scrollLeft = startScrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <section
      id="portfolio"
      className="py-16 md:py-20 bg-white relative overflow-hidden scroll-mt-24"
      aria-labelledby="portfolio-heading"
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-[620px]">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-canvas border border-mist text-[12.5px] font-semibold text-blue mb-3.5">
              <Sparkles size={13} className="text-gold" />
              <span>{portfolio.tag}</span>
            </div>
            <h2
              id="portfolio-heading"
              className="text-[32px] md:text-[42px] font-bold text-navy leading-[1.15] mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {portfolio.heading}
            </h2>
            <p className="text-[15.5px] text-muted leading-relaxed">
              {portfolio.subheading}
            </p>
          </div>

          {/* Desktop Navigation Arrows */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0 self-start md:self-end">
            <button
              onClick={scrollPrev}
              disabled={!canScrollLeft}
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-200 cursor-pointer ${
                canScrollLeft
                  ? "bg-white hover:bg-canvas text-navy border-slate-border shadow-xs hover:scale-105 active:scale-95"
                  : "bg-canvas/60 text-muted-light border-mist cursor-not-allowed opacity-50"
              }`}
              aria-label="Xem dự án trước đó"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollRight}
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-200 cursor-pointer ${
                canScrollRight
                  ? "bg-navy hover:bg-navy-light text-white border-navy shadow-sm hover:scale-105 active:scale-95"
                  : "bg-canvas/60 text-muted-light border-mist cursor-not-allowed opacity-50"
              }`}
              aria-label="Xem dự án tiếp theo"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center justify-between gap-4 mb-8 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => {
                  setActiveCategory(cat.key);
                  if (sliderRef.current) sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
                }}
                className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  activeCategory === cat.key
                    ? "bg-navy text-white shadow-xs"
                    : "bg-canvas text-muted hover:text-navy border border-mist hover:border-slate-border"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <span className="hidden md:inline-block text-[12.5px] text-muted-light font-medium whitespace-nowrap">
            {filteredItems.length} đối tác tiêu biểu • Trượt ngang để xem
          </span>
        </div>

        {/* Horizontal Sliding Track (Kiểu trượt ngang) */}
        <div
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 pt-2 -mx-5 px-5 md:-mx-8 md:px-8 scrollbar-none cursor-grab active:cursor-grabbing select-none"
        >
          {filteredItems.map((item) => {
            const isBefore = viewModes[item.name] === "before";

            return (
              <article
                key={item.name}
                className="snap-start shrink-0 w-[330px] sm:w-[380px] md:w-[420px] luxury-card rounded-[22px] border border-mist/90 overflow-hidden flex flex-col justify-between group bg-white shadow-[0_10px_30px_-8px_rgba(15,23,42,0.08)] hover:shadow-[0_16px_40px_-8px_rgba(15,23,42,0.12)] transition-shadow duration-300"
              >
                <div>
                  {/* Image Container with Floating Badges */}
                  <div className="relative aspect-[16/10] bg-light-slate overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.alt}
                      width={800}
                      height={500}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 pointer-events-none"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent pointer-events-none" />

                    {/* Category pill */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-navy bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-xs border border-white/60">
                        {item.category}
                      </span>
                    </div>

                    {/* Interactive Before / After Toggle Switch */}
                    <div className="absolute top-4 right-4 z-10 bg-navy/90 backdrop-blur-md rounded-full p-1 flex items-center border border-white/20 shadow-md">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleView(item.name);
                        }}
                        className={`px-3 py-1 text-[11px] font-bold rounded-full transition-all duration-200 cursor-pointer ${
                          !isBefore
                            ? "bg-emerald text-white shadow-xs"
                            : "text-white/70 hover:text-white"
                        }`}
                      >
                        {portfolio.afterLabel}
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleView(item.name);
                        }}
                        className={`px-3 py-1 text-[11px] font-bold rounded-full transition-all duration-200 cursor-pointer ${
                          isBefore
                            ? "bg-amber text-navy font-bold shadow-xs"
                            : "text-white/70 hover:text-white"
                        }`}
                      >
                        {portfolio.beforeLabel}
                      </button>
                    </div>

                    {/* Bottom Image Info */}
                    <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
                      <div className="flex items-center gap-1.5 text-[12px] text-white/85 mb-0.5 font-medium">
                        <MapPin size={12} className="text-amber shrink-0" />
                        <span>{item.location}</span>
                      </div>
                      <h3
                        className="text-[19px] sm:text-[20px] font-bold text-white tracking-tight"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {item.name}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center justify-between gap-2 pb-3.5 mb-3.5 border-b border-mist/70">
                      <span className="text-[12px] font-medium text-muted truncate">
                        {portfolio.serviceLabel} <strong className="text-navy font-semibold">{item.service}</strong>
                      </span>
                      <span className="text-[11px] font-semibold text-blue bg-blue/10 px-2.5 py-0.5 rounded-full shrink-0">
                        {portfolio.verifiedStatus}
                      </span>
                    </div>

                    {/* Dynamic state display based on toggle */}
                    {isBefore ? (
                      <div className="p-3.5 rounded-[12px] bg-amber/5 border border-amber/20 mb-4 animate-in fade-in duration-200 min-h-[82px]">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-amber">
                            {portfolio.beforeStateTitle}
                          </span>
                          <span className="text-[11.5px] font-semibold text-navy">
                            {item.metrics.ratingBefore}
                          </span>
                        </div>
                        <p className="text-[12.5px] text-muted leading-relaxed line-clamp-2">
                          {item.beforeNote}
                        </p>
                      </div>
                    ) : (
                      <div className="p-3.5 rounded-[12px] bg-emerald-subtle border border-emerald/20 mb-4 animate-in fade-in duration-200 min-h-[82px]">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald">
                            {portfolio.afterStateTitle}
                          </span>
                          <div className="flex items-center gap-1">
                            <Star size={12} className="fill-amber text-amber" />
                            <span className="text-[12px] font-bold text-navy">
                              {item.metrics.ratingAfter}
                            </span>
                          </div>
                        </div>
                        <p className="text-[12.5px] text-navy font-medium leading-relaxed line-clamp-2">
                          {item.afterNote}
                        </p>
                      </div>
                    )}

                    {/* Metric Highlights Grid */}
                    <div className="grid grid-cols-3 gap-2">
                      <div className="p-2.5 bg-canvas rounded-[10px] border border-mist/60 text-center">
                        <p className="text-[10px] uppercase font-semibold text-muted-light truncate">{portfolio.ratingMetric}</p>
                        <p className="text-[13px] font-bold text-navy mt-0.5 whitespace-nowrap">
                          {item.metrics.ratingBefore} → {item.metrics.ratingAfter}
                        </p>
                      </div>
                      <div className="p-2.5 bg-canvas rounded-[10px] border border-mist/60 text-center">
                        <p className="text-[10px] uppercase font-semibold text-muted-light truncate">{portfolio.newReviewsMetric}</p>
                        <p className="text-[13px] font-bold text-emerald mt-0.5 flex items-center justify-center gap-1 whitespace-nowrap">
                          <TrendingUp size={12} />
                          {item.metrics.reviewGrowth}
                        </p>
                      </div>
                      <div className="p-2.5 bg-canvas rounded-[10px] border border-mist/60 text-center">
                        <p className="text-[10px] uppercase font-semibold text-muted-light truncate">{portfolio.conversionMetric}</p>
                        <p className="text-[13px] font-bold text-blue mt-0.5 whitespace-nowrap">
                          {item.metrics.leadGrowth}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-0">
                  <button
                    onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="w-full py-2.5 bg-canvas hover:bg-navy hover:text-white border border-mist text-navy text-[12.5px] font-semibold rounded-[32px] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group/btn"
                  >
                    <span>{portfolio.ctaButton}</span>
                    <ArrowRight size={13} className="group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Mobile Navigation Arrows & Hint */}
        <div className="flex sm:hidden items-center justify-between mt-4 px-2">
          <span className="text-[12px] text-muted">
            Vuốt ngang để xem thêm {filteredItems.length} dự án
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={scrollPrev}
              disabled={!canScrollLeft}
              className={`w-9 h-9 rounded-full border flex items-center justify-center ${
                canScrollLeft ? "bg-white text-navy border-slate-border" : "opacity-40 border-mist text-muted"
              }`}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollRight}
              className={`w-9 h-9 rounded-full border flex items-center justify-center ${
                canScrollRight ? "bg-navy text-white border-navy" : "opacity-40 border-mist text-muted"
              }`}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
