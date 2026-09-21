import { useState, useEffect, useRef, useCallback } from "react";
import { Star, TrendingUp, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface StoreItem {
  id: string;
  name: { vi: string; en: string };
  category: { vi: string; en: string };
  location: { vi: string; en: string };
  imageUrl: string;
  imageAlt: { vi: string; en: string };
  rating: number;
  reviewsLabel: { vi: string; en: string };
  growthPercent: string;
  growthTag: { vi: string; en: string };
  growthMetric: { vi: string; en: string };
  rankPill: { vi: string; en: string };
}

const STORES: StoreItem[] = [
  {
    id: "nail",
    name: {
      vi: "Lily Nail & Boutique",
      en: "Lily Nail & Boutique",
    },
    category: {
      vi: "Tiệm Nail & Mi Nghệ Thuật",
      en: "Luxury Nail & Lash Studio",
    },
    location: {
      vi: "Quận 1, TP. Hồ Chí Minh",
      en: "District 1, Ho Chi Minh City",
    },
    imageUrl: "https://images.unsplash.com/photo-1652869122685-c7792ef56ee2?w=1000&h=750&fit=crop&auto=format",
    imageAlt: {
      vi: "Không gian tiệm nail cao cấp Lily Boutique",
      en: "Lily Boutique luxury nail studio interior",
    },
    rating: 4.9,
    reviewsLabel: {
      vi: "Google Maps • 186+ Đánh giá thật",
      en: "Google Maps • +186 Verified Reviews",
    },
    growthPercent: "+280%",
    growthTag: {
      vi: "TĂNG TRƯỞNG",
      en: "GROWTH",
    },
    growthMetric: {
      vi: "Lượt khách ghé & Đặt lịch online",
      en: "Walk-ins & Online bookings",
    },
    rankPill: {
      vi: "Top 1 Google Local Pack",
      en: "Top 1 Google Local Pack",
    },
  },
  {
    id: "spa",
    name: {
      vi: "Aura De Luxe Spa & Wellness",
      en: "Aura De Luxe Spa & Wellness",
    },
    category: {
      vi: "Spa Trị Liệu & Chăm Sóc Sức Khỏe",
      en: "Holistic Spa & Wellness Lounge",
    },
    location: {
      vi: "Thảo Điền, TP. Thủ Đức",
      en: "Thao Dien, Thu Duc City",
    },
    imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1000&h=750&fit=crop&auto=format",
    imageAlt: {
      vi: "Không gian trị liệu thư giãn tại Aura Spa",
      en: "Aura De Luxe Spa relaxation treatment lounge",
    },
    rating: 5.0,
    reviewsLabel: {
      vi: "Google Maps • 342+ Đánh giá 5 sao",
      en: "Google Maps • +342 5-Star Reviews",
    },
    growthPercent: "+195%",
    growthTag: {
      vi: "HỘI VIÊN VIP",
      en: "VIP RETENTION",
    },
    growthMetric: {
      vi: "Gói trị liệu VIP & Khách quay lại",
      en: "VIP Packages & Member retention",
    },
    rankPill: {
      vi: "Top 1 Spa Thảo Điền",
      en: "Top 1 Thao Dien Spa",
    },
  },
  {
    id: "clinic",
    name: {
      vi: "Dr. Vance Aesthetic Clinic",
      en: "Dr. Vance Aesthetic Clinic",
    },
    category: {
      vi: "Viện Da Liễu & Thẩm Mỹ Công Nghệ Cao",
      en: "Aesthetic Dermatology & Skin Clinic",
    },
    location: {
      vi: "Quận 3, TP. Hồ Chí Minh",
      en: "District 3, Ho Chi Minh City",
    },
    imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1000&h=750&fit=crop&auto=format",
    imageAlt: {
      vi: "Phòng khám da liễu hiện đại Dr. Vance",
      en: "Dr. Vance Aesthetic Clinic consultation suite",
    },
    rating: 4.9,
    reviewsLabel: {
      vi: "Google Maps • 428+ Khách hàng tin cậy",
      en: "Google Maps • +428 Trusted Patients",
    },
    growthPercent: "+340%",
    growthTag: {
      vi: "DOANH THU SỐ",
      en: "HIGH TICKET",
    },
    growthMetric: {
      vi: "Lượt tư vấn thẩm mỹ cao cấp",
      en: "High-ticket aesthetic consultations",
    },
    rankPill: {
      vi: "Top 1 Clinic Da Liễu Q.3",
      en: "Top 1 Dermatology D3",
    },
  },
  {
    id: "dining",
    name: {
      vi: "Le Crépuscule Modern Dining",
      en: "Le Crépuscule Modern Dining",
    },
    category: {
      vi: "Ẩm Thực Cao Cấp & Wine Lounge",
      en: "Contemporary Fine Dining & Lounge",
    },
    location: {
      vi: "Bến Nghé, Quận 1",
      en: "Ben Nghe, District 1",
    },
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000&h=750&fit=crop&auto=format",
    imageAlt: {
      vi: "Không gian ẩm thực sang trọng Le Crépuscule",
      en: "Le Crépuscule fine dining ambiance",
    },
    rating: 4.8,
    reviewsLabel: {
      vi: "Google Maps • 512+ Thực khách đánh giá",
      en: "Google Maps • +512 Verified Diners",
    },
    growthPercent: "+215%",
    growthTag: {
      vi: "LẤP ĐẦY BÀN",
      en: "TABLE BOOKING",
    },
    growthMetric: {
      vi: "Tỷ lệ đặt bàn trước cuối tuần",
      en: "Advance weekend reservations",
    },
    rankPill: {
      vi: "Top 1 Fine Dining gần bạn",
      en: "Top 1 Fine Dining Nearby",
    },
  },
  {
    id: "salon",
    name: {
      vi: "Bloom Hair Atelier",
      en: "Bloom Hair Atelier",
    },
    category: {
      vi: "Salon Tóc & Studio Tạo Mẫu Cao Cấp",
      en: "Luxury Hair Atelier & Stylist",
    },
    location: {
      vi: "Phú Mỹ Hưng, Quận 7",
      en: "Phu My Hung, District 7",
    },
    imageUrl: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1000&h=750&fit=crop&auto=format",
    imageAlt: {
      vi: "Không gian studio làm tóc Bloom Atelier",
      en: "Bloom Hair Atelier modern salon interior",
    },
    rating: 4.9,
    reviewsLabel: {
      vi: "Google Maps • 265+ Khách hàng VIP",
      en: "Google Maps • +265 VIP Clients",
    },
    growthPercent: "+240%",
    growthTag: {
      vi: "LỊCH HẸN KÍN",
      en: "FULL BOOKED",
    },
    growthMetric: {
      vi: "Tỷ lệ kín lịch hẹn dịch vụ định kỳ",
      en: "Color & styling booked solid",
    },
    rankPill: {
      vi: "Top 1 Salon Phú Mỹ Hưng",
      en: "Top 1 Salon Phu My Hung",
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
                <MapPin size={12} className="text-amber shrink-0" />
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
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextStore();
              }}
              className="pointer-events-auto w-8 h-8 rounded-full bg-black/40 hover:bg-white text-white hover:text-navy backdrop-blur-md flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-90 cursor-pointer border border-white/30 shadow-lg"
              aria-label={lang === "vi" ? "Lướt sang cửa hàng tiếp theo" : "Slide to next store"}
            >
              <ChevronRight size={18} />
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

        {/* Floating Badge 1: 4.9★ Google Business Profile (Top-Left) */}
        <div className="absolute -top-5 -left-3 sm:-left-6 bg-white/95 backdrop-blur-xl rounded-[16px] p-3.5 border border-white/80 shadow-[0_12px_35px_-6px_rgba(15,23,42,0.12)] flex items-center gap-3 z-30 ring-1 ring-black/5">
          <div className="w-10 h-10 rounded-[12px] bg-gradient-to-br from-amber/20 to-amber/5 flex items-center justify-center text-amber shrink-0 border border-amber/20">
            <Star size={20} className="fill-amber text-amber" />
          </div>
          <div>
            <div className="flex items-center gap-1 mb-0.5">
              <span className="text-[15px] font-bold text-navy transition-all duration-300">
                {activeStore.rating.toFixed(1)}
              </span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} className="fill-amber text-amber" />
                ))}
              </div>
            </div>
            <p className="text-[11px] text-muted font-medium whitespace-nowrap transition-all duration-300">
              {activeStore.reviewsLabel[lang]}
            </p>
          </div>
        </div>

        {/* Floating Badge 2: Growth Metric Indicator (Bottom-Right) */}
        <div className="absolute -bottom-6 -right-2 sm:-right-4 bg-white/95 backdrop-blur-xl rounded-[16px] px-4 py-3 border border-white/80 shadow-[0_14px_40px_-6px_rgba(15,23,42,0.14)] flex items-center gap-3 z-30 ring-1 ring-black/5">
          <div className="w-9 h-9 rounded-full bg-emerald/10 border border-emerald/20 flex items-center justify-center text-emerald shrink-0">
            <TrendingUp size={18} />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-[16px] font-bold text-navy transition-all duration-300">
                {activeStore.growthPercent}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald bg-emerald/10 px-1.5 py-0.5 rounded-md border border-emerald/20">
                {activeStore.growthTag[lang]}
              </span>
            </div>
            <p className="text-[11px] text-muted font-medium whitespace-nowrap mt-0.5 transition-all duration-300">
              {activeStore.growthMetric[lang]}
            </p>
          </div>
        </div>

        {/* Floating Mini Pill: Top 1 Local Pack (Center-Right) */}
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
