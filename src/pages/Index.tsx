import { useState, useEffect } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/components/digitalrize/Navbar";
import HomePage from "@/components/digitalrize/HomePage";
import ServicesPage from "@/components/digitalrize/ServicesPage";
import PortfolioPage from "@/components/digitalrize/PortfolioPage";
import PackagesPage from "@/components/digitalrize/PackagesPage";
import ContactPage from "@/components/digitalrize/ContactPage";

const pages: Record<string, React.FC> = {
  home: HomePage,
  services: ServicesPage,
  portfolio: PortfolioPage,
  packages: PackagesPage,
  contact: ContactPage,
};

const SiteContent = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [showBackToTop, setShowBackToTop] = useState(false);

  const navigate = (id: string) => {
    setCurrentPage(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const PageComponent = pages[currentPage] || HomePage;

  return (
    <div className="min-h-screen bg-background">
      <Navbar currentPage={currentPage} onNavigate={navigate} />

      <main className="fade-in-section">
        <PageComponent />
      </main>

      {/* Footer */}
      <footer className="border-t border-muted/30 py-8 text-center text-xs text-muted-foreground">
        <p>© 2024 Digital Rize. All rights reserved.</p>
      </footer>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/201000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-2xl wa-pulse"
        style={{ backgroundColor: "#25D366" }}
        aria-label="WhatsApp"
      >
        💬
      </a>

      {/* Back to top */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 right-6 z-50 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg hover:bg-primary/90 transition-colors"
          aria-label="Back to top"
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
