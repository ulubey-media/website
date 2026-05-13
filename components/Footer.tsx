import Link from "next/link";

const links = {
  Hizmetler: [
    { label: "Sosyal Medya Yönetimi", href: "/hizmetler/sosyal-medya-yonetimi" },
    { label: "META & Google Ads", href: "/hizmetler/reklam-yonetimi" },
    { label: "SEO Danışmanlığı", href: "/hizmetler/seo" },
    { label: "Web Tasarımı", href: "/hizmetler/web-tasarim" },
  ],
  Kurumsal: [
    { label: "Hakkımızda", href: "/hakkimizda" },
    { label: "Portföy", href: "/portfolyo" },
    { label: "Blog", href: "/blog" },
    { label: "İletişim", href: "/iletisim" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: "#1A1A2E" }}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link
              href="/"
              className="font-logo text-xl font-bold tracking-widest text-logo-gold hover:opacity-80 transition-opacity block mb-4"
            >
              ULUBEY MEDIA
            </Link>
            <p className="text-white/40 text-sm leading-relaxed">
              Markanızı dijitalde büyütüyoruz. SEO, sosyal medya, reklam ve web tasarımı.
            </p>
            <a
              href="mailto:info@ulubeymedia.com"
              className="text-white/30 text-sm mt-4 block hover:text-amber transition-colors"
            >
              info@ulubeymedia.com
            </a>
          </div>

          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-[11px] font-semibold uppercase tracking-widest text-white/40 mb-6">
                {group}
              </h4>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-white/60 text-sm hover:text-amber transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-widest text-white/40 mb-6">
              İletişim
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:info@ulubeymedia.com"
                className="text-white/60 text-sm hover:text-amber transition-colors"
              >
                info@ulubeymedia.com
              </a>
              <a
                href="https://wa.me/905XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 text-sm hover:text-amber transition-colors inline-flex items-center gap-2"
              >
                <span className="ms-icon text-[16px]">chat</span>
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Ulubey Media. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-6">
            <Link href="/gizlilik-politikasi" className="text-white/25 text-xs hover:text-white/50 transition-colors">
              Gizlilik Politikası
            </Link>
            <Link href="/kullanim-kosullari" className="text-white/25 text-xs hover:text-white/50 transition-colors">
              Kullanım Koşulları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
