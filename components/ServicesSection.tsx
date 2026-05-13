import Link from "next/link";

const services = [
  {
    icon: "share",
    title: "Sosyal Medya Yönetimi",
    description: "Markanızın dijital sesini oluşturuyor, etkileşim odaklı içeriklerle topluluğunuzu büyütüyoruz.",
    href: "/hizmetler/sosyal-medya-yonetimi",
  },
  {
    icon: "campaign",
    title: "META & Google Reklamcılığı",
    description: "Bütçenizi en verimli şekilde kullanarak hedef kitlenize nokta atışı ulaşıyoruz.",
    href: "/hizmetler/reklam-yonetimi",
  },
  {
    icon: "search",
    title: "SEO Danışmanlığı",
    description: "Arama motorlarında görünürlüğünüzü organik olarak artırıp uzun vadeli trafik sağlıyoruz.",
    href: "/hizmetler/seo",
  },
  {
    icon: "devices",
    title: "Web Tasarımı & Geliştirme",
    description: "Modern, hızlı ve dönüşüm odaklı web siteleri ile dijital vitrininizi yeniliyoruz.",
    href: "/hizmetler/web-tasarim",
  },
  {
    icon: "lightbulb",
    title: "Strateji & Danışmanlık",
    description: "Kapsamlı pazar ve rakip analizi ile markanıza özel büyüme yol haritaları çiziyoruz.",
    href: "/hizmetler/strateji-danismanlik",
  },
  {
    icon: "monitoring",
    title: "Performans Raporlama",
    description: "Veriye dayalı kararlar almanız için şeffaf, anlaşılır ve düzenli analiz raporları sunuyoruz.",
    href: "/hizmetler/performans-raporlama",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 px-4 md:px-16 w-full max-w-[1280px] mx-auto">
      <div className="mb-16 max-w-2xl">
        <h2
          className="text-[48px] font-bold text-navy"
          style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.01em" }}
        >
          Ne Yapıyoruz?
        </h2>
        <div className="h-1 w-20 bg-amber mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.href}
            className="group bg-white rounded-2xl p-8 flex flex-col warm-shadow hover:-translate-y-1 transition-transform duration-300"
            style={{ borderLeft: "4px solid #0F3460" }}
          >
            <span className="ms-icon text-[32px] text-navy mb-6">{service.icon}</span>
            <h3
              className="text-2xl font-bold text-navy mb-3"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {service.title}
            </h3>
            <p className="text-gray-warm text-sm leading-relaxed mb-8 flex-grow">
              {service.description}
            </p>
            <Link
              href={service.href}
              className="inline-flex items-center text-amber text-sm font-semibold hover:text-logo-gold transition-colors"
            >
              Detaylar
              <span className="ms-icon text-[18px] ml-1 transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
