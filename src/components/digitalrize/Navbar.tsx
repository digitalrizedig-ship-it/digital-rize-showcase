import { useState, useEffect } from "react";
import { useLang } from "@/contexts/LanguageContext";
import Logo from "./Logo";

const navItems = [
  { ar: "الرئيسية", en: "Home", id: "home" },
  { ar: "الخدمات", en: "Services", id: "services" },
  { ar: "أعمالنا", en: "Portfolio", id: "portfolio" },
  { ar: "الباقات", en: "Packages", id: "packages" },
  { ar: "تواصل معنا", en: "Contact", id: "contact" },
];

interface NavbarProps {
  currentPage: string;
  onNavigate: (id: string) => void;
}

const Navbar = ({ currentPage, onNavigate }: NavbarProps) => {
  const { lang, toggleLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <nav
        role="navigation"
        aria-label={lang === "ar" ? "القائمة الرئيسية" : "Main navigation"}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "shadow-lg"
            : "bg-transparent"
        }`}
        style={scrolled ? {
          background: "rgba(27,32,64,0.95)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(78,207,181,0.1)",
        } : undefined}
      >
        <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
          <Logo />

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  currentPage === item.id
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-muted-foreground"
                }`}
                {...(currentPage === item.id ? { "aria-current": "page" as const } : {})}
              >
                {lang === "ar" ? item.ar : item.en}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleLang}
              className="px-3 py-1.5 rounded-full border border-primary text-primary text-xs font-bold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {lang === "ar" ? "EN" : "AR"}
            </button>
            <button
              onClick={() => onNavigate("contact")}
              className="px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/90 transition-colors btn-shine"
            >
              {t("احجز استشارة", "Book Consultation")}
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
            aria-expanded={mobileOpen}
          >
            <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} style={{ transitionTimingFunction: "cubic-bezier(0.68,-0.55,0.27,1.55)" }} />
            <span className={`block w-6 h-0.5 bg-foreground transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} style={{ transitionTimingFunction: "cubic-bezier(0.68,-0.55,0.27,1.55)" }} />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-background/98 backdrop-blur-xl border-t border-muted px-4 pb-6 pt-2 fade-in-section">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { onNavigate(item.id); setMobileOpen(false); }}
                className={`block w-full text-start py-3 text-sm font-medium border-b border-muted/30 ${
                  currentPage === item.id ? "text-primary" : "text-muted-foreground"
                }`}
                {...(currentPage === item.id ? { "aria-current": "page" as const } : {})}
              >
                {lang === "ar" ? item.ar : item.en}
              </button>
            ))}
            <div className="flex items-center gap-3 mt-4">
              <button
                onClick={toggleLang}
                className="px-3 py-1.5 rounded-full border border-primary text-primary text-xs font-bold"
              >
                {lang === "ar" ? "EN" : "AR"}
              </button>
              <button
                onClick={() => { onNavigate("contact"); setMobileOpen(false); }}
                className="flex-1 px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-bold"
              >
                {t("احجز استشارة", "Book Consultation")}
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
