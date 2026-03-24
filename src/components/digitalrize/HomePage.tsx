import { useLang } from "@/contexts/LanguageContext";

const stats = [
  { ar: "١٥٠+ عميل راضٍ", en: "150+ Happy Clients" },
  { ar: "+٨ سنوات خبرة", en: "8+ Years Experience" },
  { ar: "٥٠٠+ حملة منفذة", en: "500+ Campaigns Done" },
  { ar: "٩٢% معدل النجاح", en: "92% Success Rate" },
];

const services = [
  { icon: "📱", ar: "إدارة السوشيال ميديا", en: "Social Media Management" },
  { icon: "🎯", ar: "إعلانات مدفوعة", en: "Paid Ads" },
  { icon: "🔍", ar: "SEO وتسويق المحتوى", en: "SEO & Content Marketing" },
  { icon: "🎨", ar: "هوية بصرية", en: "Branding & Visual Identity" },
  { icon: "💻", ar: "تصميم مواقع", en: "Web Design & Development" },
  { icon: "🌟", ar: "تسويق المؤثرين", en: "Influencer Marketing" },
];

const sectors = [
  { icon: "🏠", ar: "العقارات", en: "Real Estate" },
  { icon: "🛍️", ar: "التجارة الإلكترونية", en: "E-commerce" },
  { icon: "🍽️", ar: "المطاعم", en: "Restaurants" },
  { icon: "🏥", ar: "الرعاية الصحية", en: "Healthcare" },
  { icon: "👗", ar: "الموضة", en: "Fashion" },
  { icon: "🎓", ar: "التعليم", en: "Education" },
  { icon: "🏦", ar: "المال والتمويل", en: "Finance" },
  { icon: "🚗", ar: "السيارات", en: "Automotive" },
];

const testimonials = [
  {
    ar: "زادت مبيعاتنا 240% خلال 4 أشهر فقط!",
    en: "Our sales increased 240% in just 4 months!",
    nameAr: "أحمد السيد، مدير تسويق، شركة عقارية مصرية",
    nameEn: "Ahmed El-Sayed, Marketing Director, Egyptian Real Estate Company",
  },
  {
    ar: "أفضل وكالة تعاملنا معها في الرياض — نتائج حقيقية وفريق محترف",
    en: "Best agency we've worked with in Riyadh — real results and a professional team",
    nameAr: "سارة الحربي، مؤسسة، براند أزياء سعودي",
    nameEn: "Sara Al-Harbi, Founder, Saudi Fashion Brand",
  },
  {
    ar: "ضاعفوا عدد leads بتاعتنا في أول شهرين",
    en: "They doubled our leads in the first two months",
    nameAr: "محمد خالد، CEO، منصة تعليمية",
    nameEn: "Mohamed Khaled, CEO, Educational Platform",
  },
];

const HomePage = () => {
  const { t, isAr } = useLang();

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="mesh-gradient">
          <div className="blob-3" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center pt-20">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6 text-balance">
            {t("نُحوّل أهدافك الرقمية إلى نتائج حقيقية", "We Turn Your Digital Goals Into Real Results")}
          </h1>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto mb-8">
            {t(
              "وكالة تسويق رقمي متخصصة في السوق المصري والسعودي والخليجي",
              "A digital marketing agency specialized in Egypt, Saudi Arabia & the Gulf"
            )}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <button className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors">
              {t("احجز استشارة مجانية", "Book a Free Consultation")}
            </button>
            <button className="px-8 py-3 rounded-lg border border-foreground/30 text-foreground font-bold text-sm hover:bg-foreground/5 transition-colors">
              {t("اطلع على أعمالنا", "View Our Work")}
            </button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <span className="glass-static px-4 py-2 text-xs font-semibold text-primary">Google Partner ✓</span>
            <span className="glass-static px-4 py-2 text-xs font-semibold text-primary">Meta Business Partner ✓</span>
          </div>
          <div className="scroll-arrow text-muted-foreground text-2xl">↓</div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 -mt-16 container mx-auto px-4">
        <div className="glass-static p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <div className="text-xl sm:text-2xl font-black text-primary">{isAr ? s.ar.split(" ")[0] : s.en.split(" ")[0]}</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">{isAr ? s.ar.split(" ").slice(1).join(" ") : s.en.split(" ").slice(1).join(" ")}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-2xl sm:text-3xl font-black text-center mb-12">{t("خدماتنا", "Our Services")}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="glass-card p-6 text-center">
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-lg font-bold">{isAr ? s.ar : s.en}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Sectors */}
      <section className="container mx-auto px-4 pb-16">
        <h2 className="text-2xl sm:text-3xl font-black text-center mb-8">{t("القطاعات التي نخدمها", "Sectors We Serve")}</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {sectors.map((s, i) => (
            <span key={i} className="glass-static px-4 py-2 text-sm font-medium">
              {s.icon} {isAr ? s.ar : s.en}
            </span>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl sm:text-3xl font-black text-center mb-12">{t("ماذا قال عملاؤنا", "What Our Clients Say")}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t2, i) => (
            <div key={i} className="glass-card p-6">
              <p className="text-foreground text-sm leading-relaxed mb-4">"{isAr ? t2.ar : t2.en}"</p>
              <p className="text-xs text-muted-foreground">— {isAr ? t2.nameAr : t2.nameEn}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-4 my-16 rounded-2xl bg-gradient-to-r from-primary/20 via-primary/10 to-purple-glow/10 p-10 text-center">
        <h2 className="text-xl sm:text-2xl font-black mb-4">
          {t("مش هتلاقي وكالة تانية بتفهم سوقك زينا", "No agency understands your market better than us")}
        </h2>
        <button className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors">
          {t("احجز استشارتك المجانية دلوقتي", "Book Your Free Consultation Now")}
        </button>
      </section>
    </div>
  );
};

export default HomePage;
