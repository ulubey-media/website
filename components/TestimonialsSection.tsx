const testimonials = [
  {
    quote: "Ulubey Media ile çalışmaya başladıktan sonra e-ticaret satışlarımızda %150'lik bir artış yakaladık. Veri odaklı yaklaşımları gerçekten fark yaratıyor.",
    name: "Ahmet Yılmaz",
    company: "TechStore TR",
  },
  {
    quote: "Yeni web sitemizin tasarımı ve SEO stratejisi için harika bir iş çıkardılar. Sektördeki rakiplerimizin organik olarak önüne geçmeyi başardık.",
    name: "Ayşe Demir",
    company: "Lumina Mimarlık",
  },
  {
    quote: "Sosyal medya hesaplarımız daha önce hiç bu kadar etkileşim almamıştı. Kreatif fikirleri ve hızlı dönüşleri için teşekkürler.",
    name: "Can Kılıç",
    company: "Gourmet Cafe",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="ms-icon ms-icon-filled text-amber text-[16px]">
          star
        </span>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-4 md:px-16 w-full max-w-[1280px] mx-auto">
      <div className="text-center mb-16">
        <h2
          className="text-[48px] font-bold text-navy"
          style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.01em" }}
        >
          Müşteri Yorumları
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-white p-8 rounded-2xl warm-shadow flex flex-col"
            style={{ border: "1px solid rgba(120,113,108,0.08)" }}
          >
            <span
              className="ms-icon ms-icon-filled text-[48px] mb-4"
              style={{ color: "rgba(245,158,11,0.2)" }}
            >
              format_quote
            </span>
            <p className="text-gray-warm text-sm leading-relaxed italic mb-6 flex-grow">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-navy" style={{ fontFamily: "var(--font-heading)" }}>
                  {t.name}
                </p>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-warm mt-1">
                  {t.company}
                </p>
              </div>
              <Stars />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
