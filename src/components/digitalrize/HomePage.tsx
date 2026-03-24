import { useEffect, useRef, useState } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { useScrollReveal, useCountUp } from "@/hooks/useScrollReveal";

const statsData = [
  { value: 150, suffixAr: "+ عميل راضٍ", suffixEn: "+ Happy Clients", arNum: "١٥٠" },
  { value: 8, suffixAr: "+ سنوات خبرة", suffixEn: "+ Years Experience", arNum: "٨" },
  { value: 500, suffixAr: "+ حملة منفذة", suffixEn: "+ Campaigns Done", arNum: "٥٠٠" },
  { value: 92, suffixAr: "% معدل النجاح", suffixEn: "% Success Rate", arNum: "٩٢" },
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

const StatItem = ({ value, suffixAr, suffixEn, arNum, isAr }: { value: number; suffixAr: string; suffixEn: string; arNum: string; isAr: boolean }) => {
  const { ref, count } = useCountUp(value);
  return (
    <div ref={ref}>
      <div className="text-xl sm:text-2xl font-black text-primary tabular-nums">
        {isAr ? arNum : count}{isAr ? "" : ""}
      </div>
      <div className="text-xs sm:text-sm text-muted-foreground mt-1">
        {isAr ? suffixAr : suffixEn}
      </div>
    </div>
  );
};

const HomePage = () => {
  const { t, isAr } = useLang();
  const servicesReveal = useScrollReveal();
  const sectorsReveal = useScrollReveal();
  const testimonialsReveal = useScrollReveal();
  const ctaReveal = useScrollReveal();

  // Testimonial auto-advance
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="mesh-gradient">
          <div className="blob-3" />
        </div>
        {/* Dot grid overlay */}
        <div className="absolute inset-0 z-[1] pointer-events-none" style={{
          backgroundImage: "radial-gradient(rgba(78,207,181,0.07) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }} />
        <div className="relative z-10 container mx-auto px-4 text-center pt-20">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6 text-balance" style={{ lineHeight: "1.15" }}>
            {t("نُحوّل أهدافك الرقمية إلى نتائج حقيقية", "We Turn Your Digital Goals Into Real Results")}
          </h1>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto mb-8" style={{ textWrap: "pretty" } as React.CSSProperties}>
            {t(
              "وكالة تسويق رقمي متخصصة في السوق المصري والسعودي والخليجي",
              "A digital marketing agency specialized in Egypt, Saudi Arabia & the Gulf"
            )}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <button className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-all duration-200 btn-shine hover:-translate-y-0.5 active:scale-[0.98]">
              {t("احجز استشارة مجانية", "Book a Free Consultation")}
            </button>
            <button className="px-8 py-3 rounded-lg border border-foreground/30 text-foreground font-bold text-sm hover:bg-foreground/5 transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]">
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
          {statsData.map((s, i) => (
            <StatItem key={i} {...s} isAr={isAr} />
          ))}
        </div>
      </section>

      {/* Services */}
      <section
        ref={servicesReveal.ref}
        className={`container mx-auto px-4 py-20 transition-all duration-700 ${servicesReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h2 className="text-2xl sm:text-3xl font-black text-center mb-12">{t("خدماتنا", "Our Services")}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="glass-card p-6 text-center tilt-card"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-lg font-bold">{isAr ? s.ar : s.en}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Sectors */}
      <section
        ref={sectorsReveal.ref}
        className={`container mx-auto px-4 pb-16 transition-all duration-700 ${sectorsReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
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
      <section
        ref={testimonialsReveal.ref}
        className={`container mx-auto px-4 py-16 transition-all duration-700 ${testimonialsReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <h2 className="text-2xl sm:text-3xl font-black text-center mb-12">{t("ماذا قال عملاؤنا", "What Our Clients Say")}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t2, i) => (
            <div key={i} className={`glass-card p-6 transition-all duration-500 ${i === activeTestimonial ? "ring-2 ring-primary/50" : ""}`}>
              <p className="text-foreground text-sm leading-relaxed mb-4">"{isAr ? t2.ar : t2.en}"</p>
              <p className="text-xs text-muted-foreground">— {isAr ? t2.nameAr : t2.nameEn}</p>
              {i === activeTestimonial && (
                <div className="mt-3 h-0.5 bg-muted rounded-full overflow-hidden">
                  <div
                    ref={i === activeTestimonial ? progressRef : undefined}
                    className="h-full bg-primary rounded-full"
                    style={{
                      animation: isPaused ? "none" : "testimonialProgress 4s linear forwards",
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section
        ref={ctaReveal.ref}
        className={`mx-4 my-16 rounded-2xl bg-gradient-to-r from-primary/20 via-primary/10 to-purple-glow/10 p-10 text-center transition-all duration-700 ${ctaReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h2 className="text-xl sm:text-2xl font-black mb-4">
          {t("مش هتلاقي وكالة تانية بتفهم سوقك زينا", "No agency understands your market better than us")}
        </h2>
        <button className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-all duration-200 btn-shine hover:-translate-y-0.5 active:scale-[0.98]">
          {t("احجز استشارتك المجانية دلوقتي", "Book Your Free Consultation Now")}
        </button>
      </section>
    </div>
  );
};

export default HomePage;
