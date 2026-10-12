import { useState, useEffect, useRef, useCallback } from "react";
import { TrendUp, CaretLeft, CaretRight, MapPin } from "@phosphor-icons/react";
import { useLanguage } from "../context/LanguageContext";

interface StoreItem {
  id: string;
  name: { vi: string; en: string };
  category: { vi: string; en: string };
  location: { vi: string; en: string };
  imageUrl: string;
  imageAlt: { vi: string; en: string };
  solutionTag: { vi: string; en: string };
  reviewsLabel: { vi: string; en: string };
  growthMetric: { vi: string; en: string };
  rankPill: { vi: string; en: string };
}

const STORES: StoreItem[] = [
  {
    id: "nail",
    name: {
      vi: "Luxe Nail Lounge",
      en: "Luxe Nail Lounge",
    },
    category: {
      vi: "Nail Salon & Tiệm Mi Nghệ Thuật",
      en: "Luxury Nail & Lash Studio",
    },
    location: {
      vi: "Houston, TX, USA",
      en: "Houston, TX, USA",
    },
    imageUrl: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=1000&h=750&fit=crop&auto=format",
    imageAlt: {
      vi: "Không gian tiệm nail cao cấp Luxe Nail Lounge",
      en: "Luxe Nail Lounge modern nail studio interior",
    },
    solutionTag: {
      vi: "Website & Social Ads",
      en: "Website & Social Ads",
    },
    reviewsLabel: {
      vi: "Chuẩn tiệm Nail tại Mỹ • Thiết kế độc quyền",
      en: "US Nail Studio Standard • Bespoke UI",
    },
    growthMetric: {
      vi: "Website chuẩn phong cách Mỹ & Đặt lịch online 24/7",
      en: "US-Standard UI & 24/7 Online Booking",
    },
    rankPill: {
      vi: "Dự án tiêu biểu",
      en: "Featured Project",
    },
  },
  {
    id: "spa",
    name: {
      vi: "Serenity Day Spa",
      en: "Serenity Day Spa",
    },
    category: {
      vi: "Spa Trị Liệu & Chăm Sóc Sức Khỏe",
      en: "Holistic Spa & Wellness Lounge",
    },
    location: {
      vi: "Dallas, TX, USA",
      en: "Dallas, TX, USA",
    },
    imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1000&h=750&fit=crop&auto=format",
    imageAlt: {
      vi: "Không gian trị liệu thư giãn tại Serenity Day Spa",
      en: "Serenity Day Spa relaxation treatment lounge",
    },
    solutionTag: {
      vi: "Light Luxury Web & SEO",
      en: "Light Luxury Web & SEO",
    },
    reviewsLabel: {
      vi: "Chuẩn Light Luxury • Tối ưu chuyển đổi",
      en: "Light Luxury Standard • Conversion Focused",
    },
    growthMetric: {
      vi: "Bảng giá menu minh bạch & Đặt hẹn trực tuyến 24/7",
      en: "Transparent Menu & 24/7 Online Scheduling",
    },
    rankPill: {
      vi: "Dự án tiêu biểu",
      en: "Featured Project",
    },
  },
  {
    id: "dining",
    name: {
      vi: "Golden Lotus Bistro",
      en: "Golden Lotus Bistro",
    },
    category: {
      vi: "Restaurant & Ẩm Thực Á Đông",
      en: "Contemporary Asian Bistro & Dining",
    },
    location: {
      vi: "San Jose, CA, USA",
      en: "San Jose, CA, USA",
    },
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000&h=750&fit=crop&auto=format",
    imageAlt: {
      vi: "Không gian ẩm thực ấm cúng Golden Lotus Bistro",
      en: "Golden Lotus Bistro dining ambiance",
    },
    solutionTag: {
      vi: "Local Maps & Menu Web",
      en: "Local Maps & Menu Web",
    },
    reviewsLabel: {
      vi: "Menu trực quan di động • Tối ưu Google Maps",
      en: "Mobile Digital Menu • Google Maps SEO",
    },
    growthMetric: {
      vi: "Tìm kiếm vị trí dễ dàng & Đặt bàn 1 chạm",
      en: "Frictionless Local Discovery & 1-Tap Booking",
    },
    rankPill: {
      vi: "Dự án tiêu biểu",
      en: "Featured Project",
    },
  },
  {
    id: "beauty",
    name: {
      vi: "Glow & Co. Beauty Salon",
      en: "Glow & Co. Beauty Salon",
    },
    category: {
      vi: "Beauty Salon & Thẩm Mỹ Viện",
      en: "Beauty Salon & MedSpa Studio",
    },
    location: {
      vi: "Miami, FL, USA",
      en: "Miami, FL, USA",
    },
    imageUrl: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1000&h=750&fit=crop&auto=format",
    imageAlt: {
      vi: "Không gian Beauty Salon hiện đại Glow & Co",
      en: "Glow & Co Beauty Salon modern interior",
    },
    solutionTag: {
      vi: "Meta Ads & Social Care",
      en: "Meta Ads & Social Care",
    },
    reviewsLabel: {
      vi: "Hình ảnh sang trọng • Quảng cáo chuẩn tệp",
      en: "High-End Visuals • Targeted Advertising",
    },
    growthMetric: {
      vi: "Chăm sóc Fanpage/Instagram & Quảng cáo quanh tiệm",
      en: "Social Curation & Radius-Targeted Meta Ads",
    },
    rankPill: {
      vi: "Dự án tiêu biểu",
      en: "Featured Project",
    },
  },
];

export default function StoreShowcaseSlider() {
  const { lang } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const currentIndexRef = useRef(0);
  const isTransitioningRef = useRef(false);
  const animTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Sync ref with state
  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  // Robust Roll & Unroll Transition ("Cuộn tròn khi mất, cái mới trải ra")
  const transitionTo = useCallback((nextIdx: number, dir: "next" | "prev" = "next") => {
    if (isTransitioningRef.current) return;
    if (nextIdx === currentIndexRef.current) return;

    const fromIdx = currentIndexRef.current;
    isTransitioningRef.current = true;

    setPrevIndex(fromIdx);
    setCurrentIndex(nextIdx);
    setDirection(dir);
    setIsTransitioning(true);

    if (animTimeoutRef.current) {
      clearTimeout(animTimeoutRef.current);
    }

    // After animation duration, cleanly end transition and unlock
    animTimeoutRef.current = setTimeout(() => {
      isTransitioningRef.current = false;
      setIsTransitioning(false);
      setPrevIndex(null);
    }, 600);
  }, []);

  const nextStore = useCallback(() => {
    const nextIdx = (currentIndexRef.current + 1) % STORES.length;
    transitionTo(nextIdx, "next");
  }, [transitionTo]);

  const prevStore = useCallback(() => {
    const prevIdx = (currentIndexRef.current - 1 + STORES.length) % STORES.length;
    transitionTo(prevIdx, "prev");
  }, [transitionTo]);

  const goToStore = useCallback(
    (idx: number) => {
      if (idx === currentIndexRef.current) return;
      const dir = idx > currentIndexRef.current ? "next" : "prev";
      transitionTo(idx, dir);
    },
    [transitionTo]
  );

  // Auto-advance calmly every 6.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextStore();
    }, 6500);

    return () => {
      clearInterval(interval);
    };
  }, [nextStore]);

  // Clean up animation timeout on component unmount
  useEffect(() => {
    return () => {
      if (animTimeoutRef.current) clearTimeout(animTimeoutRef.current);
    };
  }, []);

  // Touch Swipe Handlers for mobile & tablets
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 35) {
      nextStore();
    } else if (distance < -35) {
      prevStore();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const activeStore = STORES[currentIndex];
  const exitingStore = prevIndex !== null ? STORES[prevIndex] : null;

  return (
    <div
      className="relative mx-auto max-w-[500px]"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-roledescription="carousel"
      aria-label={lang === "vi" ? "Trình chiếu tự động các đối tác cơ sở" : "Automatic partner store showcase"}
    >
      {/* Ambient Soft Glow Behind Card */}
      <div className="absolute -inset-3 bg-gradient-to-tr from-blue/20 via-gold/15 to-emerald/10 rounded-[32px] blur-2xl opacity-70 pointer-events-none -z-10" />

      {/* Visual Card with layered floating badges */}
      <div className="relative">
        {/* Main Image Showcase Card - 3D Perspective Container */}
        <div className="relative rounded-[22px] overflow-hidden bg-navy aspect-[4/3] shadow-[0_24px_55px_-12px_rgba(15,23,42,0.22)] border border-white/80 ring-1 ring-black/5 select-none group [perspective:1200px]">
          {/* Top Subtle Animated Progress Line */}
          <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-black/30 z-40 overflow-hidden">
            <div
              key={currentIndex}
              className="h-full bg-gradient-to-r from-blue via-amber to-emerald animate-progress-fill"
            />
          </div>

          {/* Exiting Slide (Smooth Fade Out) */}
          {isTransitioning && exitingStore && (
            <div
              key={`exit-${exitingStore.id}-${currentIndex}`}
              className="absolute inset-0 z-10 overflow-hidden transition-opacity duration-500 opacity-0 pointer-events-none"
            >
              <img
                src={exitingStore.imageUrl}
                alt={exitingStore.imageAlt[lang]}
                width={1000}
                height={750}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/35 to-transparent pointer-events-none" />

              {/* Caption Overlay on Exiting Slide */}
              <div className="absolute bottom-5 left-5 right-24 text-white pointer-events-none">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/90">
                    {exitingStore.category[lang]}
                  </span>
                </div>
                <h3
                  className="text-[18px] sm:text-[20px] font-bold text-white tracking-tight leading-tight drop-shadow-md mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {exitingStore.name[lang]}
                </h3>
                <div className="flex items-center gap-1.5 text-[12px] text-white/80 font-medium">
                  <MapPin size={12} className="text-amber shrink-0" />
                  <span>{exitingStore.location[lang]}</span>
                </div>
              </div>
            </div>
          )}

          {/* Active Slide (Gentle Cross-Fade) */}
          <div
            key={`enter-${activeStore.id}-${isTransitioning ? "anim" : "idle"}`}
            className="absolute inset-0 overflow-hidden z-20 transition-all duration-700 ease-out animate-in fade-in duration-500"
          >

            <img
              src={activeStore.imageUrl}
              alt={activeStore.imageAlt[lang]}
              width={1000}
              height={750}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/35 to-transparent pointer-events-none" />

            {/* Bottom Editorial Caption Overlay */}
            <div className="absolute bottom-5 left-5 right-24 text-white pointer-events-none">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/90">
                  {activeStore.category[lang]}
                </span>
              </div>
              <h3
                className="text-[18px] sm:text-[20px] font-bold text-white tracking-tight leading-tight drop-shadow-md mb-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {activeStore.name[lang]}
              </h3>
              <div className="flex items-center gap-1.5 text-[12px] text-white/80 font-medium">
                <MapPin size={13} weight="fill" className="text-amber shrink-0" />
                <span>{activeStore.location[lang]}</span>
              </div>
            </div>
          </div>

          {/* Top-Right Index Indicator */}
          <div className="absolute top-4 right-4 z-40 flex items-center gap-1 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 text-[11px] font-bold text-white tracking-wider">
            <span>0{currentIndex + 1}</span>
            <span className="text-white/40">/</span>
            <span className="text-white/60">0{STORES.length}</span>
          </div>

          {/* Glass Carousel Navigation Arrows */}
          <div className="absolute inset-y-0 left-2.5 right-2.5 flex items-center justify-between pointer-events-none z-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevStore();
              }}
              className="pointer-events-auto w-8 h-8 rounded-full bg-black/40 hover:bg-white text-white hover:text-navy backdrop-blur-md flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-90 cursor-pointer border border-white/30 shadow-lg"
              aria-label={lang === "vi" ? "Lướt sang cửa hàng trước" : "Slide to previous store"}
            >
              <CaretLeft size={18} weight="bold" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextStore();
              }}
              className="pointer-events-auto w-8 h-8 rounded-full bg-black/40 hover:bg-white text-white hover:text-navy backdrop-blur-md flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-90 cursor-pointer border border-white/30 shadow-lg"
              aria-label={lang === "vi" ? "Lướt sang cửa hàng tiếp theo" : "Slide to next store"}
            >
              <CaretRight size={18} weight="bold" />
            </button>
          </div>

          {/* Bottom-Right Minimalist Pagination Dashes */}
          <div className="absolute bottom-5 right-4 z-40 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-white/20">
            {STORES.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  goToStore(idx);
                }}
                className={`h-1.5 rounded-full transition-all duration-400 cursor-pointer ${
                  idx === currentIndex ? "w-6 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Chuyển đến cửa hàng ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Floating Badge 1: US Local Business Verified (Top-Left - desktop/tablet) */}
        <div className="hidden sm:flex absolute -top-5 -left-6 bg-white/95 backdrop-blur-xl rounded-[16px] p-3.5 border border-white/80 shadow-[0_12px_35px_-6px_rgba(15,23,42,0.12)] items-center gap-3 z-30 ring-1 ring-black/5">
          <div className="w-10 h-10 rounded-[12px] bg-blue/10 flex items-center justify-center text-blue shrink-0 border border-blue/20">
            <MapPin size={20} weight="duotone" className="text-blue" />
          </div>
          <div>
            <span className="text-[14px] font-bold text-navy transition-all duration-300 block">
              {activeStore.location[lang]}
            </span>
            <p className="text-[11px] text-muted font-medium whitespace-nowrap transition-all duration-300">
              {activeStore.reviewsLabel[lang]}
            </p>
          </div>
        </div>

        {/* Floating Badge 2: Integrated Digital Solution (Bottom - docked neatly on mobile) */}
        <div className="absolute -bottom-5 left-3 right-3 sm:left-auto sm:-right-4 sm:-bottom-6 bg-white/95 backdrop-blur-xl rounded-[16px] px-3.5 py-2.5 sm:px-4 sm:py-3 border border-white/80 shadow-[0_14px_40px_-6px_rgba(15,23,42,0.14)] flex items-center gap-2.5 sm:gap-3 z-30 ring-1 ring-black/5">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-emerald/10 border border-emerald/20 flex items-center justify-center text-emerald shrink-0">
            <TrendUp size={17} weight="bold" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <span className="text-[13px] sm:text-[14px] font-bold text-navy transition-all duration-300 truncate">
                {activeStore.solutionTag[lang]}
              </span>
              <span className="text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider text-emerald bg-emerald/10 px-1.5 py-0.5 rounded-md border border-emerald/20 shrink-0">
                {lang === "vi" ? "ĐỒNG BỘ" : "INTEGRATED"}
              </span>
            </div>
            <p className="text-[11px] text-muted font-medium truncate sm:whitespace-nowrap mt-0.5 transition-all duration-300">
              {activeStore.growthMetric[lang]}
            </p>
          </div>
        </div>

        {/* Floating Mini Pill: Verified Project (Center-Right) */}
        <div className="hidden sm:flex absolute top-1/2 -right-5 -translate-y-1/2 bg-navy text-white text-[12px] font-semibold px-4 py-2 rounded-full shadow-[0_10px_25px_-5px_rgba(9,14,23,0.3)] items-center gap-2.5 z-30 border border-white/20">
          <span className="w-2 h-2 rounded-full bg-emerald ring-4 ring-emerald/20" />
          <span className="whitespace-nowrap tracking-tight transition-all duration-300">
            {activeStore.rankPill[lang]}
          </span>
        </div>
      </div>
    </div>
  );
}
