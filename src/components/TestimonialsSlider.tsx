import { useState, useEffect, useRef, useCallback } from "react";
import { Star, CaretLeft, CaretRight, Quotes, Sparkle, CheckCircle } from "@phosphor-icons/react";
import { useLanguage } from "../context/LanguageContext";
import { useReveal } from "../hooks/useReveal";

export default function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const ref = useReveal<HTMLDivElement>();
  const touchStartX = useRef(0);
  const { content } = useLanguage();
  const { testimonials } = content;

  const length = testimonials.items.length;

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % length);
  }, [length]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + length) % length);
  }, [length]);

  // Auto-advance every 4.2 seconds, pause strictly when cursor hovers on the review card
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 4200);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide, current]);

  // Touch Swipe Handlers for Mobile / Tablet
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 45) {
      nextSlide();
    } else if (diff < -45) {
      prevSlide();
    }
    setIsPaused(false);
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      prevSlide();
    } else if (e.key === "ArrowRight") {
      nextSlide();
    }
  };

  const item = testimonials.items[current];

  return (
    <section
      id="testimonials"
      className="py-16 md:py-20 bg-canvas relative overflow-hidden scroll-mt-24"
      aria-labelledby="testimonials-heading"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-[620px] mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-mist text-[12.5px] font-semibold text-blue mb-3.5 shadow-2xs">
            <Sparkle size={14} weight="fill" className="text-gold" />
            <span>{testimonials.tag}</span>
          </div>
          <h2
            id="testimonials-heading"
            className="text-[32px] md:text-[42px] font-bold text-navy leading-[1.15] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {testimonials.heading}
          </h2>
          <p className="text-[15.5px] text-muted leading-relaxed">
            {testimonials.subheading}
          </p>
        </div>

        {/* Carousel Container */}
        <div ref={ref} className="reveal max-w-[920px] mx-auto relative">
          {/* Card with Hover-to-Pause interaction */}
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="luxury-card rounded-[24px] p-8 sm:p-12 bg-white border border-mist/80 shadow-[0_12px_40px_-10px_rgba(15,23,42,0.07)] relative overflow-hidden group"
          >
            {/* Top Auto-Slide Progress Bar */}
            <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-mist/60 overflow-hidden">
              <div
                key={`progress-${current}`}
                className="h-full bg-gradient-to-r from-blue via-blue to-gold animate-progress-fill"
                style={{
                  animationDuration: "4200ms",
                  animationPlayState: isPaused ? "paused" : "running",
                }}
              />
            </div>

            {/* Top quote icon & stars */}
            <div className="flex items-center justify-between gap-4 mb-8">
              <div className="w-12 h-12 rounded-[14px] bg-blue/10 flex items-center justify-center text-blue shadow-2xs">
                <Quotes size={24} weight="duotone" />
              </div>

              <div className="flex items-center gap-1.5 bg-canvas px-3.5 py-1.5 rounded-full border border-mist">
                <div className="flex gap-0.5">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} size={14} weight="fill" className="text-amber" />
                  ))}
                </div>
                <span className="text-[12px] font-bold text-navy ml-1">5.0 / 5.0</span>
              </div>
            </div>

            {/* Animated Content Wrapper for Buttery Smooth Transitions */}
            <div key={current} className="animate-in fade-in slide-in-from-right-3 duration-400">
              {/* Testimonial Quote Text */}
              <blockquote className="text-[18px] sm:text-[21px] text-navy font-medium leading-[1.6] mb-8 min-h-[110px]">
                “{item.quote}”
              </blockquote>

              {/* Author details & measured result tag */}
              <div className="pt-6 border-t border-mist/80 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                <div className="flex items-center gap-4">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    width={56}
                    height={56}
                    className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-bold text-[16px] text-navy">
                        {item.author}
                      </p>
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald bg-emerald-subtle px-2 py-0.5 rounded-full">
                        <CheckCircle size={12} weight="fill" />
                        {testimonials.verifiedBadge}
                      </span>
                    </div>
                    <p className="text-[13px] text-muted mt-0.5">
                      {item.role} • <strong className="text-navy font-semibold">{item.business}</strong> ({item.location})
                    </p>
                  </div>
                </div>

                {/* Verified Result Badge */}
                <div className="bg-canvas border border-mist px-4 py-2 rounded-[12px] shrink-0 self-start sm:self-auto">
                  <span className="text-[11px] uppercase font-bold text-muted-light block">{testimonials.impactLabel}</span>
                  <span className="text-[13px] font-bold text-blue">{item.highlight}</span>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="mt-8 pt-6 border-t border-mist/60 flex items-center justify-between">
              {/* Slide Indicators with Interactive Dots */}
              <div className="flex items-center gap-2" role="tablist" aria-label="Select testimonial">
                {testimonials.items.map((_, i) => (
                  <button
                    key={i}
                    role="tab"
                    aria-selected={current === i}
                    onClick={() => setCurrent(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      current === i ? "w-8 bg-blue shadow-xs" : "w-2.5 bg-mist hover:bg-slate-border"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full border border-mist bg-white hover:bg-canvas text-navy flex items-center justify-center transition-colors cursor-pointer active:scale-95 shadow-2xs"
                  aria-label="Previous testimonial"
                >
                  <CaretLeft size={18} weight="bold" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full border border-mist bg-white hover:bg-canvas text-navy flex items-center justify-center transition-colors cursor-pointer active:scale-95 shadow-2xs"
                  aria-label="Next testimonial"
                >
                  <CaretRight size={18} weight="bold" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
