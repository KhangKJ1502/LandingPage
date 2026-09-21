import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustStats from "./components/TrustStats";
import Services from "./components/Services";
import AuditScorecard from "./components/AuditScorecard";
import ServiceComparison from "./components/ServiceComparison";
import Portfolio from "./components/Portfolio";
import TestimonialsSlider from "./components/TestimonialsSlider";
import WhyUs from "./components/WhyUs";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import ContactForm from "./components/ContactForm";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import FloatingConsultation from "./components/FloatingConsultation";
import ConsultationModal from "./components/ConsultationModal";
import LanguageLoadingOverlay from "./components/LanguageLoadingOverlay";

function PageShell() {
  const { isSwitching } = useLanguage();

  return (
    <>
      {/* Dynamic Luxury Language Loading Overlay & Glow Indicator */}
      <LanguageLoadingOverlay />

      {/* Accessible skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-5 focus:py-2.5 focus:bg-blue focus:text-white focus:rounded-full focus:text-sm focus:font-semibold focus:shadow-lg"
      >
        Skip to main content / Chuyển đến nội dung chính
      </a>

      <Header />

      <main id="main-content">
        <Hero />
        <TrustStats />
        <Services />
        <Portfolio />
        <AuditScorecard />
        <ServiceComparison />
        <WhyUs />
        <Process />
        <TestimonialsSlider />
        <Pricing />
        <ContactForm />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />

      {/* Floating Action Icon Widget on UI */}
      <FloatingConsultation />

      {/* Popup Modal with Consultation & Audit Form */}
      <ConsultationModal />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PageShell />
    </LanguageProvider>
  );
}
