import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center px-4 md:px-16 py-20 w-full max-w-[1280px] mx-auto relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start gap-6 max-w-2xl">
          <div
            className="inline-flex items-center px-4 py-2 rounded-full"
            style={{ background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.2)" }}
          >
            <span className="text-amber text-xs font-semibold uppercase tracking-widest">
              Dijital Pazarlama Ajansı
            </span>
          </div>

          <h1
            className="text-[52px] md:text-[64px] font-extrabold text-navy leading-[1.1]"
            style={{ letterSpacing: "-0.02em", fontFamily: "var(--font-heading)" }}
          >
            Markanızı dijitalde büyütüyoruz
          </h1>

          <p className="text-lg text-gray-warm max-w-xl leading-relaxed">
            SEO, sosyal medya yönetimi, reklam ve web tasarımı — hepsi tek çatı altında.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link
              href="/teklif-al"
              className="bg-amber hover:bg-logo-gold text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-center whitespace-nowrap"
            >
              Teklif Al
            </Link>
            <Link
              href="/hizmetler"
              className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 text-center whitespace-nowrap"
            >
              Hizmetleri Gör
            </Link>
          </div>
        </div>

        {/* Abstract Geometric Visual */}
        <div className="hidden lg:flex justify-end relative h-[500px]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[400px] h-[400px] relative">
              <div
                className="absolute top-10 left-10 w-48 h-64 rounded-2xl"
                style={{ border: "2px solid #0F3460", transform: "rotate(-6deg)" }}
              />
              <div
                className="absolute bottom-10 right-10 w-56 h-40 bg-navy rounded-xl shadow-2xl flex items-center justify-center"
                style={{ transform: "rotate(3deg)" }}
              >
                <div className="w-1/2 h-[2px] bg-amber/60 rounded-full" />
              </div>
              <div className="absolute top-24 right-16 w-4 h-4 bg-amber rounded-full" />
              <div
                className="absolute bottom-32 left-20 w-24 h-24 rounded-full flex items-center justify-center"
                style={{ border: "1px solid rgba(120,113,108,0.3)" }}
              >
                <div className="w-1/2 h-[1px] rotate-45" style={{ background: "rgba(120,113,108,0.4)" }} />
              </div>
              <div
                className="absolute top-40 right-40 w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: "rgba(15,52,96,0.08)" }}
              >
                <div className="w-2 h-2 bg-navy rounded-full" />
              </div>
              <div
                className="absolute top-6 right-32 w-[1px] h-20"
                style={{ background: "linear-gradient(to bottom, transparent, #E8C07D, transparent)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
