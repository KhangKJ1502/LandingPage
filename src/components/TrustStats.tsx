import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useRevealGroup } from "../hooks/useReveal";
import { Award, CheckCircle2 } from "lucide-react";

function useCountUp(target: number, duration = 1400, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    let rafId: number;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setCount(target);
      return;
    }

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [target, duration, active]);

  return count;
}

function StatItem({
  stat,
  active,
  locale,
}: {
  stat: { value: number; suffix: string; label: string; note: string; emerald: boolean };
  active: boolean;
  locale: string;
}) {
  const count = useCountUp(stat.value, 1500, active);
  const formatted = count >= 1000 ? count.toLocaleString(locale === "vi" ? "vi-VN" : "en-US") : count;

  return (
    <div className="reveal text-center md:text-left flex flex-col items-center md:items-start group">
      <div className="flex items-baseline gap-1 mb-2">
        <p
          className="text-[44px] lg:text-[52px] font-bold leading-none tracking-tight text-navy group-hover:text-blue transition-colors"
          style={{ fontFamily: "var(--font-display)" }}
          aria-label={`${stat.value}${stat.suffix} ${stat.label}`}
        >
          <span className={stat.emerald ? "text-emerald" : "text-navy"}>
            {formatted}
            {stat.suffix}
          </span>
        </p>
      </div>
      <p className="text-[16px] font-semibold text-navy mb-1.5 flex items-center gap-1.5">
        {stat.emerald && <CheckCircle2 size={15} className="text-emerald shrink-0" />}
        {stat.label}
      </p>
      <p className="text-[13px] text-muted leading-snug">{stat.note}</p>
    </div>
  );
}

export default function TrustStats() {
  const groupRef = useRevealGroup<HTMLDivElement>(120);
  const [active, setActive] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { lang, content } = useLanguage();
  const { trustStats } = content;

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-white border-y border-mist/80 relative"
      aria-label={trustStats.heading}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12 pb-6 border-b border-mist/60">
          <div>
            <span className="text-[12px] font-bold uppercase tracking-widest text-blue mb-1 block">
              {trustStats.sectionTag}
            </span>
            <h2
              className="text-[22px] md:text-[26px] font-semibold text-navy"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {trustStats.heading}
            </h2>
          </div>
          <div className="flex items-center gap-2 text-[12.5px] text-muted-light">
            <Award size={15} className="text-gold" />
            <span>{trustStats.sourceContext}</span>
          </div>
        </div>

        <div
          ref={groupRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 md:divide-x md:divide-mist/80"
        >
          {trustStats.stats.map((stat, i) => (
            <div key={i} className="md:px-10 first:pl-0 last:pr-0">
              <StatItem stat={stat} active={active} locale={lang} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
