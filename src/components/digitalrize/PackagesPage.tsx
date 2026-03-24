import { useLang } from "@/contexts/LanguageContext";

const packages = [
  {
    nameAr: "أساسية",
    nameEn: "Starter",
    priceAr: "20,000 ج.م / شهر | 2,000 ر.س / شهر",
    priceEn: "20,000 EGP/mo | 2,000 SAR/mo",
    highlighted: false,
    featuresAr: ["إدارة 2 منصة سوشيال ميديا", "12 بوست/شهر", "تقرير شهري", "حملة إعلانية واحدة", "دعم واتساب"],
    featuresEn: ["Manage 2 social platforms", "12 posts/month", "Monthly report", "1 ad campaign", "WhatsApp support"],
    ctaAr: "ابدأ دلوقتي",
    ctaEn: "Get Started",
  },
  {
    nameAr: "نمو ⭐ الأكثر طلباً",
    nameEn: "Growth ⭐ Most Popular",
    priceAr: "55,000 ج.م / شهر | 5,500 ر.س / شهر",
    priceEn: "55,000 EGP/mo | 5,500 SAR/mo",
    highlighted: true,
    featuresAr: ["كل حاجة في الأساسية +", "إدارة 4 منصات", "25 بوست/شهر", "حملتين إعلانيتين (Meta + Google)", "SEO أساسي", "تقارير أسبوعية", "مدير حساب مخصص"],
    featuresEn: ["Everything in Starter +", "Manage 4 platforms", "25 posts/month", "2 ad campaigns (Meta + Google)", "Basic SEO", "Weekly reports", "Dedicated account manager"],
    ctaAr: "اختار النمو",
    ctaEn: "Choose Growth",
  },
  {
    nameAr: "متكامل",
    nameEn: "Premium",
    priceAr: "120,000 ج.م / شهر | 12,000 ر.س / شهر",
    priceEn: "120,000 EGP/mo | 12,000 SAR/mo",
    highlighted: false,
    featuresAr: ["كل حاجة في النمو +", "إدارة كل المنصات", "TikTok + Snapchat Ads", "Influencer Marketing (2 مؤثر/شهر)", "SEO متقدم", "تقارير real-time dashboard", "استراتيجية كاملة", "أولوية في الدعم"],
    featuresEn: ["Everything in Growth +", "Manage all platforms", "TikTok + Snapchat Ads", "Influencer Marketing (2/month)", "Advanced SEO", "Real-time dashboard reports", "Full strategy", "Priority support"],
    ctaAr: "احجز استشارة",
    ctaEn: "Book Consultation",
  },
];

const PackagesPage = () => {
  const { t, isAr } = useLang();

  return (
    <div className="container mx-auto px-4 pt-28 pb-20">
      <div className="text-center mb-14">
        <h1 className="text-3xl sm:text-4xl font-black mb-3 bg-gradient-to-r from-primary to-purple-glow bg-clip-text text-transparent">
          {t("باقات واضحة. نتائج حقيقية.", "Clear Packages. Real Results.")}
        </h1>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
        {packages.map((pkg, i) => (
          <div key={i} className={`glass-card p-6 sm:p-8 flex flex-col ${pkg.highlighted ? "mint-glow scale-[1.03]" : ""}`}>
            <h3 className="text-xl font-bold mb-2">{isAr ? pkg.nameAr : pkg.nameEn}</h3>
            <p className="text-primary font-bold text-sm mb-6">{isAr ? pkg.priceAr : pkg.priceEn}</p>
            <ul className="space-y-2 mb-8 flex-1">
              {(isAr ? pkg.featuresAr : pkg.featuresEn).map((f, j) => (
                <li key={j} className="flex items-start gap-2 text-sm">
                  <span className="text-primary mt-0.5">✓</span>
                  <span className="text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
            <button className={`w-full py-3 rounded-lg font-bold text-sm transition-colors ${
              pkg.highlighted
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            }`}>
              {isAr ? pkg.ctaAr : pkg.ctaEn}
            </button>
          </div>
        ))}
      </div>

      {/* Custom CTA */}
      <div className="glass-static p-8 text-center max-w-2xl mx-auto">
        <h3 className="text-xl font-bold mb-3">{t("محتاج باقة مخصصة لشركتك؟", "Need a custom package for your business?")}</h3>
        <button className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors">
          {t("اطلب عرض مخصص", "Request Custom Quote")}
        </button>
      </div>
    </div>
  );
};

export default PackagesPage;
