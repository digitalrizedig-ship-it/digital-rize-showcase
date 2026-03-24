import { useLang } from "@/contexts/LanguageContext";

const packages = [
  {
    nameAr: "أساسية",
    nameEn: "Starter",
    highlighted: false,
    pillAr: "للشركات الناشئة والمشاريع الجديدة",
    pillEn: "For startups & new businesses",
    featuresAr: [
      "إدارة منصتين سوشيال ميديا",
      "12 بوست مصمم شهرياً",
      "حملة إعلانية واحدة (Meta أو Google)",
      "تقرير أداء شهري",
      "دعم واتساب خلال ساعات العمل",
      "مدير حساب مخصص",
    ],
    featuresEn: [
      "2 Social Media Platforms",
      "12 Designed Posts/Month",
      "1 Ad Campaign (Meta or Google)",
      "Monthly Performance Report",
      "WhatsApp Support During Work Hours",
      "Dedicated Account Manager",
    ],
    ctaAr: "ابدأ دلوقتي",
    ctaEn: "Get Started",
  },
  {
    nameAr: "نمو",
    nameEn: "Growth",
    highlighted: true,
    badgeAr: "الأكثر طلباً",
    badgeEn: "Most Popular",
    pillAr: "للشركات في مرحلة التوسع",
    pillEn: "For scaling businesses",
    featuresAr: [
      "كل مميزات الباقة الأساسية +",
      "إدارة 4 منصات سوشيال ميديا",
      "25 بوست مصمم شهرياً",
      "حملتين إعلانيتين (Meta + Google)",
      "SEO أساسي + تحسين المحتوى",
      "تقارير أسبوعية تفصيلية",
      "اجتماع استراتيجي شهري",
    ],
    featuresEn: [
      "Everything in Starter, plus:",
      "4 Social Media Platforms",
      "25 Designed Posts/Month",
      "2 Ad Campaigns (Meta + Google)",
      "Basic SEO + Content Optimization",
      "Weekly Detailed Reports",
      "Monthly Strategy Meeting",
    ],
    ctaAr: "اختار النمو",
    ctaEn: "Choose Growth",
  },
  {
    nameAr: "متكامل",
    nameEn: "Premium",
    highlighted: false,
    pillAr: "للشركات والعلامات التجارية الكبيرة",
    pillEn: "For enterprise brands",
    featuresAr: [
      "كل مميزات باقة النمو +",
      "إدارة كل المنصات شاملاً TikTok و Snapchat و LinkedIn",
      "إعلانات TikTok و Snapchat Ads",
      "Influencer Marketing — مؤثرَين شهرياً",
      "SEO متقدم + استراتيجية محتوى كاملة",
      "تقارير Real-Time Dashboard",
      "أولوية قصوى في الدعم والتنفيذ",
    ],
    featuresEn: [
      "Everything in Growth, plus:",
      "All Platforms including TikTok, Snapchat & LinkedIn",
      "TikTok & Snapchat Ads",
      "Influencer Marketing — 2 creators/month",
      "Advanced SEO + Full Content Strategy",
      "Real-Time Dashboard Reports",
      "Priority Support & Execution",
    ],
    ctaAr: "احجز استشارة",
    ctaEn: "Book a Consultation",
  },
];

const comparisonRows = [
  { featureAr: "عدد المنصات", featureEn: "Platforms", starter: "2", growth: "4", premium: { ar: "كل المنصات", en: "All" } },
  { featureAr: "عدد البوستات", featureEn: "Posts", starter: "12", growth: "25", premium: { ar: "غير محدود", en: "Unlimited" } },
  { featureAr: "حملات إعلانية", featureEn: "Ad Campaigns", starter: "1", growth: "2", premium: { ar: "✅ متعددة", en: "✅ Multiple" } },
  { featureAr: "Google Ads", featureEn: "Google Ads", starter: "❌", growth: "✅", premium: "✅" },
  { featureAr: "TikTok & Snapchat Ads", featureEn: "TikTok & Snapchat Ads", starter: "❌", growth: "❌", premium: "✅" },
  { featureAr: "SEO", featureEn: "SEO", starter: "❌", growth: { ar: "✅ أساسي", en: "✅ Basic" }, premium: { ar: "✅ متقدم", en: "✅ Advanced" } },
  { featureAr: "Influencer Marketing", featureEn: "Influencer Marketing", starter: "❌", growth: "❌", premium: "✅" },
  { featureAr: "نوع التقارير", featureEn: "Reports", starter: { ar: "شهري", en: "Monthly" }, growth: { ar: "أسبوعي", en: "Weekly" }, premium: "Real-Time" },
  { featureAr: "مدير حساب", featureEn: "Account Manager", starter: "✅", growth: "✅", premium: "✅" },
  { featureAr: "أولوية الدعم", featureEn: "Priority Support", starter: "❌", growth: "❌", premium: "✅" },
];

interface PackagesPageProps {
  onNavigate?: (page: string) => void;
}

const PackagesPage = ({ onNavigate }: PackagesPageProps) => {
  const { t, isAr } = useLang();

  const renderCell = (val: string | { ar: string; en: string }) => {
    if (typeof val === "string") return val;
    return isAr ? val.ar : val.en;
  };

  return (
    <div className="container mx-auto px-4 pt-28 pb-20">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-3xl sm:text-4xl font-black mb-3 bg-gradient-to-r from-primary to-purple-glow bg-clip-text text-transparent">
          {t("باقات واضحة. نتائج حقيقية.", "Clear Packages. Real Results.")}
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
          {t(
            "كل باقة مصممة لمرحلة مختلفة من نمو شركتك — تواصل معنا ونبني ليك عرض يناسبك",
            "Every package is built for a different stage of your growth — reach out and we'll craft an offer that fits"
          )}
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
        {packages.map((pkg, i) => (
          <div
            key={i}
            className={`glass-card p-6 sm:p-8 flex flex-col relative ${
              pkg.highlighted ? "mint-glow scale-[1.03]" : ""
            }`}
          >
            {/* Most Popular Badge */}
            {pkg.highlighted && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                {isAr ? pkg.badgeAr : pkg.badgeEn}
              </div>
            )}

            <h3 className="text-xl font-bold mb-1">{isAr ? pkg.nameAr : pkg.nameEn}</h3>

            {/* Pill tag */}
            <span className="inline-block text-xs text-primary bg-primary/10 border border-primary/20 rounded-full px-3 py-1 mb-6 w-fit">
              {isAr ? pkg.pillAr : pkg.pillEn}
            </span>

            <ul className="space-y-2.5 mb-8 flex-1">
              {(isAr ? pkg.featuresAr : pkg.featuresEn).map((f, j) => (
                <li key={j} className="flex items-start gap-2 text-sm">
                  <span className="text-primary mt-0.5 shrink-0">✓</span>
                  <span className="text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-3 rounded-lg font-bold text-sm transition-colors ${
                pkg.highlighted
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              }`}
            >
              {isAr ? pkg.ctaAr : pkg.ctaEn}
            </button>
          </div>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-xl font-bold text-center mb-6">
          {t("مقارنة الباقات", "Compare Packages")}
        </h2>
        <div className="glass-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-muted/30">
                  <th className="p-4 text-start font-bold text-foreground">{t("الميزة", "Feature")}</th>
                  <th className="p-4 text-center font-bold text-foreground">{t("أساسية", "Starter")}</th>
                  <th className="p-4 text-center font-bold text-primary">{t("نمو", "Growth")}</th>
                  <th className="p-4 text-center font-bold text-foreground">{t("متكامل", "Premium")}</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="border-b border-muted/20 last:border-0">
                    <td className="p-4 text-start font-medium text-muted-foreground">
                      {isAr ? row.featureAr : row.featureEn}
                    </td>
                    <td className="p-4 text-center">{renderCell(row.starter)}</td>
                    <td className="p-4 text-center">{renderCell(row.growth)}</td>
                    <td className="p-4 text-center">{renderCell(row.premium)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Custom Quote Strip */}
      <div className="rounded-2xl p-8 sm:p-12 text-center bg-gradient-to-r from-primary/20 to-background border border-primary/20">
        <h3 className="text-2xl font-black mb-2">
          {t("مش لاقي الباقة المناسبة؟", "Can't find the right fit?")}
        </h3>
        <p className="text-muted-foreground mb-6 max-w-lg mx-auto text-sm">
          {t(
            "نبني ليك عرض مخصص على حسب شركتك وميزانيتك",
            "We'll build a custom package around your business and budget"
          )}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onNavigate?.("contact")}
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
          >
            {t("اطلب عرض مخصص", "Request Custom Quote")}
          </button>
          <a
            href="https://wa.me/201000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-lg font-bold text-sm transition-colors flex items-center gap-2"
            style={{ backgroundColor: "#25D366", color: "#fff" }}
          >
            <span>💬</span>
            {t("تواصل عبر واتساب", "Chat on WhatsApp")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PackagesPage;
