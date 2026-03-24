import { useState, useEffect } from "react";
import { LanguageProvider, useLang } from "@/contexts/LanguageContext";
import Navbar from "@/components/digitalrize/Navbar";
import HomePage from "@/components/digitalrize/HomePage";
import ServicesPage from "@/components/digitalrize/ServicesPage";
import PortfolioPage from "@/components/digitalrize/PortfolioPage";
import PackagesPage from "@/components/digitalrize/PackagesPage";
import ContactPage from "@/components/digitalrize/ContactPage";
import Footer from "@/components/digitalrize/Footer";

const SiteContent = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showWaTooltip, setShowWaTooltip] = useState(false);
  const { isAr, t } = useLang();

  const navigate = (id: string) => {
    setCurrentPage(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // WhatsApp tooltip on first load
  useEffect(() => {
    const timer = setTimeout(() => setShowWaTooltip(true), 1500);
    const hideTimer = setTimeout(() => setShowWaTooltip(false), 6500);
    return () => { clearTimeout(timer); clearTimeout(hideTimer); };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "services": return <ServicesPage />;
      case "portfolio": return <PortfolioPage />;
      case "packages": return <PackagesPage onNavigate={navigate} />;
      case "contact": return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar currentPage={currentPage} onNavigate={navigate} />

      <main role="main" className="fade-in-section">
        {renderPage()}
      </main>

      <Footer />

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/201124082613"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-2xl wa-btn ${isAr ? "left-6" : "right-6"}`}
        style={{ backgroundColor: "#25D366" }}
        aria-label="تواصل معنا عبر واتساب على الرقم 01124082613"
      >
        💬
        {showWaTooltip && (
          <span className={`absolute bottom-full mb-2 ${isAr ? "left-0" : "right-0"} whitespace-nowrap px-3 py-1.5 rounded-lg bg-background text-foreground text-xs font-medium shadow-lg border border-muted/30 animate-fade-in`}>
            {t("تواصل معنا الآن!", "Chat with us now!")}
          </span>
        )}
      </a>

      {/* Back to top */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`fixed bottom-24 z-50 w-10 h-10 rounded-full flex items-center justify-center text-lg text-primary transition-all duration-300 hover:scale-110 ${isAr ? "left-6" : "right-6"}`}
          style={{
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(78,207,181,0.3)",
          }}
          aria-label="العودة إلى أعلى الصفحة"
        >
          ↑
        </button>
      )}
    </div>
  );
};

const Index = () => (
  <LanguageProvider>
    <SiteContent />
  </LanguageProvider>
);

export default Index;
