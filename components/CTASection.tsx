import Link from "next/link";

export default function CTASection() {
  return (
    <section
      className="py-32 text-center px-4 md:px-16 relative overflow-hidden"
      style={{ background: "#0F3460" }}
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 border border-white rounded-full" />
        <div className="absolute bottom-10 -right-20 w-64 h-64 border border-white rounded-full" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center">
        <h2
          className="text-[52px] md:text-[64px] font-extrabold text-white mb-4"
          style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.02em" }}
        >
          Birlikte çalışalım.
        </h2>
        <p className="text-white/60 text-lg mb-10 leading-relaxed">
          Ücretsiz bir görüşme ile başlayalım. Markanızın dijital potansiyelini birlikte keşfedelim.
        </p>
        <Link
          href="/teklif-al"
          className="bg-amber hover:bg-logo-gold text-white font-bold text-base px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          Teklif Al
        </Link>
        <a
          href="https://wa.me/905XXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center text-white/50 text-sm hover:text-white/80 transition-colors"
        >
          <span className="ms-icon text-[20px] mr-2">chat</span>
          WhatsApp ile ulaş
        </a>
      </div>
    </section>
  );
}
