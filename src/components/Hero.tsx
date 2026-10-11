import { useState, useEffect, useRef } from "react";
import { ArrowRight, CheckCircle, WarningCircle, Star, ShieldCheck, MapPin, Sparkle, TrendUp } from "@phosphor-icons/react";
import { useLanguage } from "../context/LanguageContext";
import { PARTNER_BRANDS } from "../constants";
import StoreShowcaseSlider from "./StoreShowcaseSlider";

type AuditState = "idle" | "loading" | "success";

function validateUrl(value: string): boolean {
  try {
    const url = new URL(value.startsWith("http") ? value : `https://${value}`);
    return url.hostname.length > 3 && url.hostname.includes(".");
  } catch {
    return false;
  }
}

export default function Hero() {
  const [url, setUrl] = useState("");
  const [state, setState] = useState<AuditState>("idle");
  const [step, setStep] = useState(0);
  const [fieldError, setFieldError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { content } = useLanguage();
  const { hero } = content;

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    requestAnimationFrame(() => el.classList.add("visible"));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFieldError("");

    if (!url.trim()) {
      setFieldError(hero.errorRequired);
      inputRef.current?.focus();
      return;
    }
    if (!validateUrl(url.trim())) {
      setFieldError(hero.errorInvalid);
      inputRef.current?.focus();
      return;
    }

    setState("loading");
    setStep(0);

    await new Promise((r) => setTimeout(r, 700));
    setStep(1);
    await new Promise((r) => setTimeout(r, 900));
    setStep(2);
    await new Promise((r) => setTimeout(r, 600));
    setState("success");
  };

  const reset = () => {
    setState("idle");
    setUrl("");
    setStep(0);
    setFieldError("");
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  return (
    <section
      className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-gradient-to-b from-canvas via-white to-canvas"
      aria-labelledby="hero-heading"
      id="home"
    >
      {/* Subtle Luxury Ambient Glows */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-blue/5 via-amber/5 to-transparent blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-40 right-10 w-72 h-72 bg-gold/5 rounded-full blur-2xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div
          ref={heroRef}
          className="reveal grid lg:grid-cols-12 gap-12 lg:gap-14 items-center"
        >
          {/* Left Column: Editorial Statement & Inspection Bar */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Prestige Verified Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-white/90 border border-mist rounded-[40px] shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] text-[12.5px] text-navy font-medium mb-6">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} weight="fill" className="text-amber" aria-hidden="true" />
                ))}
              </div>
              <span className="w-1 h-1 rounded-full bg-slate-border" />
              <span className="text-muted">{hero.trustBadge}</span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-heading"
              className="text-[34px] sm:text-[46px] lg:text-[54px] font-bold text-navy leading-[1.12] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {hero.headlinePart1}{" "}
              <span className="text-blue relative inline-block">
                {hero.headlineTrust}
                <svg className="absolute -bottom-1 left-0 w-full h-2 text-blue/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
              {hero.headlinePart2} <span className="font-serif-accent text-navy">{hero.headlineChosen}</span>.
            </h1>

            {/* Sub-heading */}
            <p className="text-[16px] sm:text-[17.5px] text-muted leading-relaxed mb-8 max-w-[560px]">
              {hero.description}
            </p>

            {/* URL Inspection Bar */}
            <div id="audit" className="w-full max-w-[580px] mb-8" aria-label="Website and Maps URL audit">
              {state === "success" ? (
                <div className="luxury-card rounded-[16px] p-6 border-l-4 border-l-emerald animate-in fade-in zoom-in-95 duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-subtle flex items-center justify-center shrink-0">
                      <CheckCircle size={24} weight="duotone" className="text-emerald" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-semibold text-navy text-[15px]">
                          {hero.successTitle}
                        </p>
                        <span className="text-[11px] font-semibold text-emerald bg-emerald/10 px-2 py-0.5 rounded-full">
                          {hero.successStatus}
                        </span>
                      </div>
                      <p className="text-[13.5px] text-muted mt-1 leading-relaxed">
                        {hero.successDesc}
                      </p>
                      <div className="mt-4 pt-3 border-t border-mist/80 flex items-center justify-between">
                        <button
                          onClick={reset}
                          className="text-[12.5px] font-medium text-blue hover:underline cursor-pointer"
                        >
                          {hero.resetButton}
                        </button>
                        <a
                          href="#audit-scorecard"
                          className="text-[12.5px] font-semibold text-navy hover:text-blue transition-colors flex items-center gap-1"
                        >
                          {hero.viewScorecardLink}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate aria-label="URL Inspection Form">
                  <div className="relative p-2 bg-white rounded-[36px] border border-mist shadow-[0_4px_24px_-4px_rgba(15,23,42,0.06)] hover:border-slate-border focus-within:border-blue transition-all duration-300">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <div className="relative flex-1 flex items-center pl-4">
                        <MapPin size={18} weight="duotone" className="text-muted-light shrink-0 mr-2" aria-hidden="true" />
                        <label htmlFor="audit-url" className="sr-only">
                          Google Maps or Website URL
                        </label>
                        <input
                          ref={inputRef}
                          id="audit-url"
                          type="url"
                          value={url}
                          onChange={(e) => {
                            setUrl(e.target.value);
                            if (fieldError) setFieldError("");
                          }}
                          placeholder={hero.inputPlaceholder}
                          className="w-full bg-transparent py-2.5 text-[14.5px] text-navy placeholder:text-muted/70 outline-none min-w-0 font-normal"
                          disabled={state === "loading"}
                          aria-describedby={fieldError ? "audit-error" : undefined}
                          aria-invalid={!!fieldError}
                          autoComplete="url"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={state === "loading"}
                        className="px-6 py-3 bg-blue hover:bg-blue-hover text-white text-[14px] font-semibold rounded-[32px] shadow-sm transition-all duration-200 shrink-0 flex items-center justify-center gap-2 disabled:opacity-80 cursor-pointer"
                      >
                        {state === "loading" ? (
                          <>
                            <span
                              className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"
                              aria-hidden="true"
                            />
                            <span className="text-[13px]">{hero.scanningSteps[step]}</span>
                          </>
                        ) : (
                          <>
                            <span>{hero.ctaButton}</span>
                            <ArrowRight size={15} weight="bold" aria-hidden="true" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {fieldError && (
                    <p
                      id="audit-error"
                      role="alert"
                      className="flex items-center gap-1.5 mt-2.5 ml-4 text-[13px] text-navy font-medium"
                    >
                      <WarningCircle size={15} weight="duotone" className="text-amber shrink-0" aria-hidden="true" />
                      <span>{fieldError}</span>
                    </p>
                  )}

                  <div className="flex items-center gap-4 mt-3 ml-4 text-[12px] text-muted-light">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck size={16} weight="duotone" className="text-emerald" />
                      {hero.freeAuditBadge}
                    </span>
                    <span>•</span>
                    <span>{hero.noCommitment}</span>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Multi-Store Showcase Slider & Interactive Badges */}
          <div className="lg:col-span-5 relative">
            <StoreShowcaseSlider />
          </div>
        </div>


        {/* Partner Brands Continuous Sliding Marquee */}
        <div className="mt-16 pt-8 border-t border-mist/80">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkle size={13} weight="fill" className="text-gold" />
            <p className="text-center text-[11.5px] font-bold uppercase tracking-[0.2em] text-muted-light">
              {hero.partnerTitle}
            </p>
            <Sparkle size={13} weight="fill" className="text-gold" />
          </div>

          {/* Marquee viewport with gradient fade edges */}
          <div className="relative overflow-hidden w-full py-2">
            {/* Left & Right gradient masks for smooth fade */}
            <div
              className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-canvas via-canvas/90 to-transparent z-10"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-canvas via-canvas/90 to-transparent z-10"
              aria-hidden="true"
            />

            {/* Seamless Double-Loop Infinite Track */}
            <div className="animate-marquee-track flex gap-4 md:gap-5 py-1">
              {[...PARTNER_BRANDS, ...PARTNER_BRANDS].map((brand, idx) => (
                <div
                  key={`${brand.name}-${idx}`}
                  className="w-[240px] sm:w-[270px] shrink-0 luxury-card rounded-[18px] bg-white border border-mist/90 overflow-hidden shadow-2xs hover:shadow-md hover:border-slate-border transition-all duration-300 group cursor-pointer"
                >
                  {/* Store Front Image with overlay */}
                  <div className="relative h-[115px] sm:h-[125px] overflow-hidden bg-slate-100">
                    <img
                      src={brand.image}
                      alt={brand.name}
                      width={270}
                      height={125}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                    
                    {/* Category badge */}
                    <div className="absolute top-2.5 left-2.5">
                      <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-navy bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full shadow-2xs">
                        {brand.category}
                      </span>
                    </div>

                    {/* Google Maps Star Rating pill */}
                    <div className="absolute bottom-2 left-2.5 flex items-center gap-1 bg-navy/85 backdrop-blur-md px-2 py-0.5 rounded-full text-white text-[11px] font-semibold border border-white/10">
                      <Star size={11} className="fill-amber text-amber" />
                      <span>{brand.rating}</span>
                      <span className="text-white/70 text-[10px]">({brand.reviews})</span>
                    </div>
                  </div>

                  {/* Store Info Footer */}
                  <div className="p-3 bg-white">
                    <h4 className="text-[13px] font-bold text-navy leading-tight truncate group-hover:text-blue transition-colors">
                      {brand.name}
                    </h4>
                    <div className="flex items-center justify-between text-[11px] text-muted-light mt-1">
                      <span className="flex items-center gap-1 truncate">
                        <MapPin size={11} className="text-muted-light shrink-0" />
                        <span className="truncate">{brand.location}</span>
                      </span>
                      <span className="text-emerald font-semibold shrink-0 ml-1">Top 1 Maps</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
