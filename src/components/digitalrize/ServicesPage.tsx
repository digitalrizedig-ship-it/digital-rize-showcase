import { useLang } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const servicesData = [
  {
    icon: "📱",
    nameAr: "إدارة السوشيال ميديا",
    nameEn: "Social Media Management",
    descAr: "إدارة كاملة لحساباتك على فيسبوك، إنستغرام، تيك توك، سناب شات",
    descEn: "Full management of your Facebook, Instagram, TikTok, and Snapchat accounts",
    deliverablesAr: ["استراتيجية محتوى شهرية", "تصميم بوستات", "جدولة ونشر وإدارة التعليقات", "تقارير أسبوعية"],
    deliverablesEn: ["Monthly content strategy", "Post design", "Scheduling, publishing & comment management", "Weekly reports"],
    platforms: "Facebook · Instagram · TikTok · Snapchat · LinkedIn · X",
  },
  {
    icon: "🎯",
    nameAr: "إعلانات مدفوعة",
    nameEn: "Paid Ads",
    descAr: "حملات إعلانية مدفوعة بعائد استثمار مضمون",
    descEn: "Paid advertising campaigns with guaranteed ROI",
    deliverablesAr: ["إعداد الحملات", "استهداف دقيق", "A/B testing", "تحسين مستمر وتقارير تفصيلية"],
    deliverablesEn: ["Campaign setup", "Precise targeting", "A/B testing", "Continuous optimization & detailed reports"],
    platforms: "Meta Ads · Google Ads · TikTok Ads · Snapchat Ads",
  },
  {
    icon: "🔍",
    nameAr: "SEO وتسويق المحتوى",
    nameEn: "SEO & Content Marketing",
    descAr: "ارتفع في نتائج البحث واجذب عملاء بشكل عضوي",
    descEn: "Rise in search results and attract clients organically",
    deliverablesAr: ["بحث كلمات مفتاحية", "تحسين on-page", "بناء روابط خلفية", "مقالات وتقرير ترتيب شهري"],
    deliverablesEn: ["Keyword research", "On-page optimization", "Backlink building", "Monthly articles & ranking report"],
    platforms: "",
  },
  {
    icon: "🎨",
    nameAr: "هوية بصرية",
    nameEn: "Branding & Visual Identity",
    descAr: "هوية بصرية تعكس قيمة براندك وتميزك عن المنافسين",
    descEn: "A visual identity that reflects your brand value and differentiates you",
    deliverablesAr: ["شعار احترافي", "دليل الهوية البصرية", "palette الألوان و typography", "تطبيقات الهوية"],
    deliverablesEn: ["Professional logo", "Brand guidelines", "Color palette & typography", "Identity applications"],
    platforms: "",
  },
  {
    icon: "💻",
    nameAr: "تصميم مواقع",
    nameEn: "Web Design & Development",
    descAr: "مواقع سريعة، جميلة، ومحسّنة لمحركات البحث",
    descEn: "Fast, beautiful, and SEO-optimized websites",
    deliverablesAr: ["تصميم UI/UX", "تطوير responsive", "تكامل SEO", "لوحة تحكم وسرعة تحميل ممتازة"],
    deliverablesEn: ["UI/UX design", "Responsive development", "SEO integration", "Admin panel & excellent load speed"],
    platforms: "",
  },
  {
    icon: "🌟",
    nameAr: "تسويق المؤثرين",
    nameEn: "Influencer Marketing",
    descAr: "وصل لجمهورك عبر أبرز المؤثرين في مصر والخليج",
    descEn: "Reach your audience through top influencers in Egypt & the Gulf",
    deliverablesAr: ["اختيار المؤثرين", "عقود وتنسيق", "إنتاج المحتوى", "تتبع الأداء وتقرير نهائي"],
    deliverablesEn: ["Influencer selection", "Contracts & coordination", "Content production", "Performance tracking & final report"],
    platforms: "",
  },
];

const ServicesPage = () => {
  const { t, isAr } = useLang();
  const reveal = useScrollReveal();

  return (
    <div className="container mx-auto px-4 pt-28 pb-20">
      <div className="text-center mb-14">
        <h1 className="text-3xl sm:text-4xl font-black mb-3 bg-gradient-to-r from-primary to-purple-glow bg-clip-text text-transparent">
          {t("خدماتنا التفصيلية", "Our Detailed Services")}
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto">{t("حلول تسويقية شاملة لكل احتياجات عملك", "Comprehensive marketing solutions for all your business needs")}</p>
      </div>

      <div
        ref={reveal.ref}
        className={`grid md:grid-cols-2 gap-8 transition-all duration-700 ${reveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {servicesData.map((s, i) => (
          <div key={i} className="glass-card p-6 sm:p-8 tilt-card" style={{ transitionDelay: `${i * 100}ms` }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{s.icon}</span>
              <h2 className="text-xl font-bold">{isAr ? s.nameAr : s.nameEn}</h2>
            </div>
            <p className="text-muted-foreground text-sm mb-4">{isAr ? s.descAr : s.descEn}</p>
            <ul className="space-y-2 mb-4">
              {(isAr ? s.deliverablesAr : s.deliverablesEn).map((d, j) => (
                <li key={j} className="flex items-start gap-2 text-sm">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
            {s.platforms && (
              <div className="flex flex-wrap gap-2 mb-4">
                {s.platforms.split(" · ").map((p, j) => (
                  <span key={j} className="glass-static px-2 py-1 text-[11px] font-semibold text-primary">{p}</span>
                ))}
              </div>
            )}
            <div className="mt-4 pt-4 border-t border-muted/30">
              <button className="px-5 py-2 rounded-lg border border-primary text-primary text-xs font-bold hover:bg-primary hover:text-primary-foreground transition-all duration-200 btn-shine hover:-translate-y-0.5 active:scale-[0.98]">
                {t("اطلب عرض سعر ←", "Request a Quote ←")}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
