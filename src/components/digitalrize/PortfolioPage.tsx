import { useState } from "react";
import { useLang } from "@/contexts/LanguageContext";

const projects = [
  {
    nameAr: "عقارات النيل", nameEn: "Nile Real Estate", badge: "🏠", category: "real-estate",
    challengeAr: "زيادة العملاء المحتملين للوحدات السكنية",
    challengeEn: "Increase leads for residential units",
    strategyAr: "حملات Meta Ads + محتوى فيديو",
    strategyEn: "Meta Ads campaigns + video content",
    resultsAr: "+320% leads في 60 يوم، تكلفة lead انخفضت 45%",
    resultsEn: "+320% leads in 60 days, lead cost decreased 45%",
  },
  {
    nameAr: "FreshMart Online", nameEn: "FreshMart Online", badge: "🛍️", category: "ecommerce",
    challengeAr: "إطلاق متجر إلكتروني جديد في السوق المصري",
    challengeEn: "Launch a new online store in the Egyptian market",
    strategyAr: "Google Shopping + Instagram Ads + SEO",
    strategyEn: "Google Shopping + Instagram Ads + SEO",
    resultsAr: "12,000 طلب في أول 3 أشهر، ROAS = 4.8x",
    resultsEn: "12,000 orders in first 3 months, ROAS = 4.8x",
  },
  {
    nameAr: "Bites & Grills", nameEn: "Bites & Grills", badge: "🍽️", category: "restaurants",
    challengeAr: "زيادة الحجوزات والطلبات أونلاين",
    challengeEn: "Increase online bookings and orders",
    strategyAr: "TikTok Ads + Influencer Marketing + Google My Business",
    strategyEn: "TikTok Ads + Influencer Marketing + Google My Business",
    resultsAr: "+180% طلبات أونلاين، 2.3M مشاهدة على TikTok",
    resultsEn: "+180% online orders, 2.3M TikTok views",
  },
  {
    nameAr: "MedCare Clinics", nameEn: "MedCare Clinics", badge: "🏥", category: "healthcare",
    challengeAr: "بناء ثقة وجذب مرضى جدد",
    challengeEn: "Build trust and attract new patients",
    strategyAr: "SEO + Google Ads + محتوى تثقيفي",
    strategyEn: "SEO + Google Ads + educational content",
    resultsAr: "+250% زيارات الموقع، 800+ موعد شهرياً",
    resultsEn: "+250% website visits, 800+ appointments monthly",
  },
  {
    nameAr: "StyleHub KSA", nameEn: "StyleHub KSA", badge: "👗", category: "fashion",
    challengeAr: "الانتشار في السوق السعودي",
    challengeEn: "Expand in the Saudi market",
    strategyAr: "Snapchat Ads + Influencers + Instagram",
    strategyEn: "Snapchat Ads + Influencers + Instagram",
    resultsAr: "150,000 متابع جديد في 90 يوم، مبيعات +400%",
    resultsEn: "150,000 new followers in 90 days, sales +400%",
  },
  {
    nameAr: "EduPro Academy", nameEn: "EduPro Academy", badge: "🎓", category: "education",
    challengeAr: "تسجيل طلاب في كورسات أونلاين",
    challengeEn: "Enroll students in online courses",
    strategyAr: "Facebook Ads + Email Marketing + Retargeting",
    strategyEn: "Facebook Ads + Email Marketing + Retargeting",
    resultsAr: "1,200 تسجيل في أول كامبين، CPL = 85 ج.م",
    resultsEn: "1,200 enrollments in first campaign, CPL = 85 EGP",
  },
];

const filters = [
  { ar: "الكل", en: "All", value: "all" },
  { ar: "عقارات", en: "Real Estate", value: "real-estate" },
  { ar: "تجارة إلكترونية", en: "E-commerce", value: "ecommerce" },
  { ar: "مطاعم", en: "Restaurants", value: "restaurants" },
  { ar: "صحة", en: "Healthcare", value: "healthcare" },
  { ar: "تعليم", en: "Education", value: "education" },
];

const PortfolioPage = () => {
  const { t, isAr } = useLang();
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="container mx-auto px-4 pt-28 pb-20">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-black mb-3 bg-gradient-to-r from-primary to-purple-glow bg-clip-text text-transparent">
          {t("أعمالنا", "Our Portfolio")}
        </h1>
        <p className="text-muted-foreground">{t("نتائج حقيقية لعملاء حقيقيين", "Real results for real clients")}</p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActiveFilter(f.value)}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-colors ${
              activeFilter === f.value
                ? "bg-primary text-primary-foreground"
                : "glass-static text-muted-foreground hover:text-foreground"
            }`}
          >
            {isAr ? f.ar : f.en}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p, i) => (
          <div key={i} className="glass-card p-6 group">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold">{isAr ? p.nameAr : p.nameEn}</h3>
              <span className="text-xl">{p.badge}</span>
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-primary font-bold text-xs">{t("التحدي", "Challenge")}</span>
                <p className="text-muted-foreground">{isAr ? p.challengeAr : p.challengeEn}</p>
              </div>
              <div>
                <span className="text-primary font-bold text-xs">{t("الاستراتيجية", "Strategy")}</span>
                <p className="text-muted-foreground">{isAr ? p.strategyAr : p.strategyEn}</p>
              </div>
              <div>
                <span className="text-primary font-bold text-xs">{t("النتائج", "Results")}</span>
                <p className="text-foreground font-semibold">{isAr ? p.resultsAr : p.resultsEn}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
