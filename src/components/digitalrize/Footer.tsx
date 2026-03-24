import { useLang } from "@/contexts/LanguageContext";
import Logo from "./Logo";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  const { t } = useLang();

  return (
    <footer className="border-t border-muted/30 bg-background" role="contentinfo">
      <div className="container mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo className="mb-4" />
            <p className="text-muted-foreground text-sm max-w-xs mb-4">
              {t(
                "وكالة تسويق رقمي متخصصة في السوق المصري والسعودي والخليجي",
                "A digital marketing agency specialized in Egypt, Saudi Arabia & the Gulf"
              )}
            </p>
            <SocialIcons />
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm mb-4">{t("تواصل معنا", "Contact Us")}</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span>📞</span>
                <a href="tel:+201124082613" className="hover:text-primary transition-colors" dir="ltr">01124082613</a>
              </li>
              <li className="flex items-start gap-2">
                <span>📧</span>
                <a href="mailto:info@digitalrize.agency" className="hover:text-primary transition-colors">info@digitalrize.agency</a>
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>{t("القاهرة، مصر", "Cairo, Egypt")}</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold text-sm mb-4">{t("ساعات العمل", "Working Hours")}</h4>
            <p className="text-sm text-muted-foreground">
              {t("السبت – الخميس", "Sat – Thu")}
            </p>
            <p className="text-sm text-muted-foreground">
              {t("9 صباحاً – 6 مساءً", "9 AM – 6 PM")}
            </p>
          </div>

          {/* WhatsApp CTA */}
          <div>
            <h4 className="font-bold text-sm mb-4">{t("تواصل سريع", "Quick Contact")}</h4>
            <a
              href="https://wa.me/201124082613"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm font-bold transition-colors hover:opacity-90"
              style={{ backgroundColor: "#25D366" }}
            >
              <span>💬</span>
              {t("واتساب", "WhatsApp")}
            </a>
          </div>
        </div>

        <div className="border-t border-muted/30 pt-6 text-center text-xs text-muted-foreground">
          <p>{t("© 2025 Digital Rize. جميع الحقوق محفوظة.", "© 2025 Digital Rize. All rights reserved.")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
