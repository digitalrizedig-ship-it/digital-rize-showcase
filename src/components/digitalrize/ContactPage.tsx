import { useState } from "react";
import { useLang } from "@/contexts/LanguageContext";

const ContactPage = () => {
  const { t, isAr } = useLang();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container mx-auto px-4 pt-28 pb-20">
      <div className="text-center mb-14">
        <h1 className="text-3xl sm:text-4xl font-black mb-3 bg-gradient-to-r from-primary to-purple-glow bg-clip-text text-transparent">
          {t("تواصل معنا", "Contact Us")}
        </h1>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Form */}
        <div className="glass-card p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-16">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold mb-2">{t("تم إرسال رسالتك بنجاح!", "Message sent successfully!")}</h3>
              <p className="text-muted-foreground text-sm">{t("هنتواصل معاك خلال ساعتين", "We'll get back to you within 2 hours")}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1.5">{t("الاسم الكامل", "Full Name")}</label>
                <input required className="w-full px-4 py-2.5 rounded-lg bg-muted border border-muted text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">{t("اسم الشركة", "Company Name")}</label>
                <input className="w-full px-4 py-2.5 rounded-lg bg-muted border border-muted text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">{t("نوع الخدمة", "Service Type")}</label>
                <select required className="w-full px-4 py-2.5 rounded-lg bg-muted border border-muted text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="">{t("اختر...", "Select...")}</option>
                  <option>Social Media</option>
                  <option>Paid Ads</option>
                  <option>SEO</option>
                  <option>Branding</option>
                  <option>Web Design</option>
                  <option>Influencer</option>
                  <option>{t("باقة كاملة", "Full Package")}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">{t("الميزانية الشهرية", "Monthly Budget")}</label>
                <select className="w-full px-4 py-2.5 rounded-lg bg-muted border border-muted text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="">{t("اختر...", "Select...")}</option>
                  <option>{t("أقل من 20K ج.م", "Less than 20K EGP")}</option>
                  <option>20K - 50K</option>
                  <option>50K - 100K</option>
                  <option>{t("أكثر من 100K ج.م", "More than 100K EGP")}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">{t("رسالتك", "Your Message")}</label>
                <textarea rows={4} className="w-full px-4 py-2.5 rounded-lg bg-muted border border-muted text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
              </div>
              <button type="submit" className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors">
                {t("أرسل رسالتك", "Send Message")}
              </button>
            </form>
          )}
        </div>

        {/* Info */}
        <div className="space-y-6">
          <a
            href="https://wa.me/201000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="block glass-card p-6 text-center hover:border-primary/30"
          >
            <div className="text-3xl mb-2">💬</div>
            <p className="font-bold text-sm mb-1">{t("تواصل عبر واتساب مباشرة", "Chat on WhatsApp directly")}</p>
            <span className="text-primary text-xs">{t("اضغط هنا", "Click here")}</span>
          </a>

          <div className="glass-static p-6 space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <span>📍</span>
              <div>
                <p className="font-bold">{t("مصر", "Egypt")}</p>
                <p className="text-muted-foreground">{t("القاهرة، مصر الجديدة", "Cairo, Heliopolis")}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span>📍</span>
              <div>
                <p className="font-bold">{t("السعودية", "Saudi Arabia")}</p>
                <p className="text-muted-foreground">{t("الرياض، المملكة العربية السعودية", "Riyadh, KSA")}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span>📧</span>
              <p className="text-muted-foreground">info@digitalrize.agency</p>
            </div>
            <div className="flex items-start gap-3">
              <span>🕐</span>
              <p className="text-muted-foreground">{t("السبت – الخميس، 9 صباحاً – 6 مساءً", "Sat – Thu, 9 AM – 6 PM")}</p>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="glass-static p-8 text-center border-2 border-dashed border-primary/20 rounded-xl">
            <p className="text-muted-foreground text-sm mb-3">{t("موقعنا على الخريطة", "Our Location on Map")}</p>
            <button className="px-5 py-2 rounded-lg border border-primary text-primary text-xs font-bold hover:bg-primary hover:text-primary-foreground transition-colors">
              {t("عرض على الخريطة", "View on Maps")}
            </button>
          </div>

          {/* Social */}
          <div className="flex justify-center gap-4 text-sm text-muted-foreground">
            {["Facebook", "Instagram", "LinkedIn", "TikTok", "X"].map((s) => (
              <a key={s} href="#" className="hover:text-primary transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
