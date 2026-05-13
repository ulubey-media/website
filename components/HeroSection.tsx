import Link from "next/link";
import { PulseBeams } from "@/components/PulseBeams";

export default function HeroSection() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center px-4 md:px-16 py-20 w-full max-w-[1280px] mx-auto relative overflow-hidden">
      <PulseBeams />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
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

        {/* PulseBeams animasyonu arka plandan görünüyor — sağ kolon boş bırakıldı */}
        <div className="hidden lg:block" />
      </div>
    </section>
  );
}
