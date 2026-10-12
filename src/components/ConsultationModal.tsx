import { useState, useEffect, useRef } from "react";
import { X, CheckCircle, PaperPlaneTilt, Sparkle, ShieldCheck, Clock, WarningCircle } from "@phosphor-icons/react";
import { useLanguage } from "../context/LanguageContext";

type FormState = "idle" | "loading" | "success";

export default function ConsultationModal() {
  const { content, isConsultationOpen, closeConsultation, lang } = useLanguage();
  const { contact } = content;

  const [form, setForm] = useState({
    name: "",
    phone: "",
    businessType: "",
    service: "combo",
    url: "",
    note: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [state, setState] = useState<FormState>("idle");

  const nameInputRef = useRef<HTMLInputElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const bizSelectRef = useRef<HTMLSelectElement>(null);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isConsultationOpen) {
        closeConsultation();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isConsultationOpen, closeConsultation]);

  // Focus first input on open
  useEffect(() => {
    if (isConsultationOpen && state === "idle") {
      const timer = setTimeout(() => {
        nameInputRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isConsultationOpen, state]);

  if (!isConsultationOpen) return null;

  const validate = () => {
    const e: Record<string, string> = {};
    const isVi = lang === "vi";

    // Name check
    if (!form.name.trim()) {
      e.name = isVi ? "Vui lòng nhập họ và tên của bạn" : "Please enter your full name";
    } else if (form.name.trim().length < 2) {
      e.name = isVi ? "Họ tên quá ngắn (tối thiểu 2 ký tự)" : "Name is too short (min 2 chars)";
    }

    // Phone check
    const digitsOnly = form.phone.replace(/\D/g, "");
    if (!form.phone.trim()) {
      e.phone = isVi ? "Vui lòng nhập số điện thoại hoặc Zalo" : "Please enter your phone number";
    } else if (digitsOnly.length < 9 || digitsOnly.length > 12) {
      e.phone = isVi
        ? "Số điện thoại không hợp lệ (từ 9 - 11 chữ số)"
        : "Invalid phone number (must be 9-11 digits)";
    }

    // Business type check
    if (!form.businessType) {
      e.businessType = isVi ? "Vui lòng chọn loại hình cơ sở" : "Please select your business type";
    }

    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      // Auto-focus first error field
      if (errs.name) nameInputRef.current?.focus();
      else if (errs.phone) phoneInputRef.current?.focus();
      else if (errs.businessType) bizSelectRef.current?.focus();
      return;
    }

    setState("loading");
    await new Promise((r) => setTimeout(r, 900));
    setState("success");
  };

  const set = (key: string, val: string) => {
    setForm((f) => ({ ...f, [key]: val }));
    if (errors[key]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[key];
        return copy;
      });
    }
  };

  const resetForm = () => {
    setState("idle");
    setForm({
      name: "",
      phone: "",
      businessType: "",
      service: "combo",
      url: "",
      note: "",
    });
    setErrors({});
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-200"
    >
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-navy/60 backdrop-blur-sm transition-opacity"
        onClick={closeConsultation}
        aria-hidden="true"
      />

      {/* Compact, Safe Scroll Modal Content */}
      <div className="relative w-full max-w-[640px] bg-white rounded-[20px] sm:rounded-[22px] shadow-[0_25px_60px_-15px_rgba(15,23,42,0.35)] border border-mist p-4 sm:p-7 z-10 animate-in zoom-in-95 duration-200 my-auto max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={closeConsultation}
          className="absolute top-3.5 right-3.5 sm:top-4.5 sm:right-4.5 w-8 h-8 rounded-full bg-canvas hover:bg-light-slate text-muted hover:text-navy flex items-center justify-center transition-colors cursor-pointer border border-mist focus-visible:rounded-full z-20"
          aria-label="Close dialog"
        >
          <X size={16} weight="bold" />
        </button>

        {state === "success" ? (
          <div className="py-4 text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-subtle text-emerald flex items-center justify-center mx-auto mb-4 shadow-xs">
              <CheckCircle size={36} weight="fill" />
            </div>
            <h3
              id="modal-title"
              className="text-[20px] sm:text-[22px] font-bold text-navy mb-1.5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {contact.successTitle}
            </h3>
            <p className="text-[13.5px] text-muted max-w-[420px] mx-auto leading-relaxed mb-5">
              {contact.successDesc}
            </p>
            <div className="p-3.5 bg-canvas rounded-[12px] border border-mist max-w-[420px] mx-auto text-left mb-5 text-[12.5px] text-muted space-y-1">
              <p className="font-semibold text-navy flex items-center gap-1.5">
                <Clock size={15} weight="duotone" className="text-blue shrink-0" />
                <span>{contact.successNextTitle}</span>
              </p>
              <p>{contact.successNextDesc}</p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={resetForm}
                className="text-[12.5px] font-semibold text-blue hover:underline cursor-pointer"
              >
                {contact.sendAnother}
              </button>
              <button
                onClick={closeConsultation}
                className="px-5 py-2 bg-navy text-white text-[13px] font-semibold rounded-[32px] hover:bg-navy-light transition-colors cursor-pointer"
              >
                {lang === "vi" ? "Hoàn tất / Đóng" : "Done / Close"}
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Compact Header */}
            <div className="pr-8 mb-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-canvas border border-mist text-[11px] font-semibold text-blue mb-1.5">
                <Sparkle size={13} weight="fill" className="text-gold" />
                <span>{contact.tag}</span>
              </div>
              <h2
                id="modal-title"
                className="text-[20px] sm:text-[22px] font-bold text-navy leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {contact.formTitle}
              </h2>
              <p className="text-[13px] text-muted mt-0.5">
                {contact.formSubtitle}
              </p>
            </div>

            {/* Form with Optimized Compact Grid */}
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
              {/* 1. Service Selection (Responsive 3-Column Pill Bar) */}
              <div>
                <span className="text-[12px] font-semibold text-navy block mb-1.5">
                  {contact.serviceLegend}
                </span>
                <select
                  id="modal-service"
                  value={form.service}
                  onChange={(e) => set("service", e.target.value)}
                  className="w-full px-3 py-2 rounded-[8px] border border-mist bg-canvas text-navy text-[13px] outline-none focus:border-blue focus:bg-white transition-colors cursor-pointer font-medium"
                >
                  {contact.servicesOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* 2. Row: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label htmlFor="modal-name" className="text-[11.5px] font-semibold text-navy flex items-center justify-between mb-1">
                    <span>
                      {contact.nameLabel} <span className="text-blue">*</span>
                    </span>
                  </label>
                  <input
                    ref={nameInputRef}
                    id="modal-name"
                    type="text"
                    value={form.name}
                    onChange={(e) => set("name", e.target.value)}
                    placeholder={contact.namePlaceholder}
                    autoComplete="name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "modal-name-err" : undefined}
                    className={`w-full px-3 py-2 rounded-[8px] border text-[13px] outline-none transition-colors ${
                      errors.name
                        ? "border-amber-500 bg-amber-50/20 text-navy focus:border-amber-600"
                        : "border-mist bg-canvas text-navy placeholder:text-muted/60 focus:border-blue focus:bg-white"
                    }`}
                  />
                  {errors.name && (
                    <p id="modal-name-err" role="alert" className="text-[11px] text-amber-600 font-medium mt-0.5 flex items-center gap-1">
                      <WarningCircle size={13} weight="fill" className="shrink-0" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="modal-phone" className="text-[11.5px] font-semibold text-navy flex items-center justify-between mb-1">
                    <span>
                      {contact.phoneLabel} <span className="text-blue">*</span>
                    </span>
                  </label>
                  <input
                    ref={phoneInputRef}
                    id="modal-phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    placeholder={contact.phonePlaceholder}
                    autoComplete="tel"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "modal-phone-err" : undefined}
                    className={`w-full px-3 py-2 rounded-[8px] border text-[13px] outline-none transition-colors ${
                      errors.phone
                        ? "border-amber-500 bg-amber-50/20 text-navy focus:border-amber-600"
                        : "border-mist bg-canvas text-navy placeholder:text-muted/60 focus:border-blue focus:bg-white"
                    }`}
                  />
                  {errors.phone && (
                    <p id="modal-phone-err" role="alert" className="text-[11px] text-amber-600 font-medium mt-0.5 flex items-center gap-1">
                      <WarningCircle size={13} weight="fill" className="shrink-0" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* 3. Row: Business Category & Website/Maps URL */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label htmlFor="modal-biz" className="text-[11.5px] font-semibold text-navy flex items-center justify-between mb-1">
                    <span>
                      {contact.bizLabel} <span className="text-blue">*</span>
                    </span>
                  </label>
                  <select
                    ref={bizSelectRef}
                    id="modal-biz"
                    value={form.businessType}
                    onChange={(e) => set("businessType", e.target.value)}
                    aria-invalid={!!errors.businessType}
                    aria-describedby={errors.businessType ? "modal-biz-err" : undefined}
                    className={`w-full px-3 py-2 rounded-[8px] border text-[13px] outline-none transition-colors cursor-pointer ${
                      errors.businessType
                        ? "border-amber-500 bg-amber-50/20 text-navy focus:border-amber-600"
                        : "border-mist bg-canvas text-navy focus:border-blue focus:bg-white"
                    }`}
                  >
                    <option value="">{contact.bizPlaceholder}</option>
                    {contact.businessTypes.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                  {errors.businessType && (
                    <p id="modal-biz-err" role="alert" className="text-[11px] text-amber-600 font-medium mt-0.5 flex items-center gap-1">
                      <WarningCircle size={13} weight="fill" className="shrink-0" />
                      <span>{errors.businessType}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="modal-url" className="text-[11.5px] font-semibold text-navy block mb-1">
                    {contact.urlLabel}
                  </label>
                  <input
                    id="modal-url"
                    type="url"
                    value={form.url}
                    onChange={(e) => set("url", e.target.value)}
                    placeholder={contact.urlPlaceholder}
                    autoComplete="url"
                    className="w-full px-3 py-2 rounded-[8px] border border-mist bg-canvas text-navy text-[13px] placeholder:text-muted/60 outline-none focus:border-blue focus:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* 4. Row: Note / Specific Goal (Single-line input to conserve height) */}
              <div>
                <label htmlFor="modal-note" className="text-[11.5px] font-semibold text-navy block mb-1">
                  {contact.noteLabel}
                </label>
                <input
                  id="modal-note"
                  type="text"
                  value={form.note}
                  onChange={(e) => set("note", e.target.value)}
                  placeholder={contact.notePlaceholder}
                  className="w-full px-3 py-2 rounded-[8px] border border-mist bg-canvas text-navy text-[13px] placeholder:text-muted/60 outline-none focus:border-blue focus:bg-white transition-colors"
                />
              </div>

              {/* 5. Submit CTA & Privacy Badge */}
              <div className="pt-1.5">
                <button
                  type="submit"
                  disabled={state === "loading"}
                  className="w-full h-11 bg-blue hover:bg-blue-hover text-white text-[13.5px] font-semibold rounded-[32px] shadow-[0_4px_14px_rgba(37,99,235,0.25)] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-75 cursor-pointer"
                >
                  {state === "loading" ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>{contact.submittingButton}</span>
                    </>
                  ) : (
                    <>
                      <span>{contact.submitButton}</span>
                      <PaperPlaneTilt size={15} weight="fill" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-1.5 mt-2 text-[11px] text-muted-light text-center">
                  <ShieldCheck size={14} weight="duotone" className="text-emerald shrink-0" />
                  <span className="truncate max-w-[460px]">{contact.privacyNote}</span>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
