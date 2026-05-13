import Link from "next/link";

const posts = [
  {
    category: "SEO Stratejisi",
    title: "2024 Yılında SEO Trendleri Neler Olacak?",
    slug: "seo-trendleri-2024",
  },
  {
    category: "Sosyal Medya",
    title: "Instagram Algoritması Nasıl Çalışır? (Güncel Rehber)",
    slug: "instagram-algoritmasi-guncel-rehber",
  },
  {
    category: "Web Tasarım",
    title: "Dönüşüm Oranını Artıran UX İpuçları",
    slug: "donusum-orani-artiran-ux-ipuclari",
  },
];

export default function BlogSection() {
  return (
    <section className="py-24 px-4 md:px-16 w-full max-w-[1280px] mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2
            className="text-[48px] font-bold text-navy"
            style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.01em" }}
          >
            Blog
          </h2>
          <div className="h-1 w-16 bg-amber mt-4 rounded-full" />
        </div>
        <Link
          href="/blog"
          className="hidden md:inline-flex items-center text-navy font-medium text-sm hover:text-amber transition-colors"
        >
          Tüm Yazıları Gör
          <span className="ms-icon text-[18px] ml-1">arrow_forward</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group bg-white rounded-2xl overflow-hidden warm-shadow flex flex-col hover:-translate-y-1 transition-transform duration-300"
            style={{ border: "1px solid rgba(120,113,108,0.08)" }}
          >
            <div
              className="h-48 w-full flex items-center justify-center"
              style={{ background: "#F4F3F7" }}
            >
              <span className="ms-icon text-[48px]" style={{ color: "rgba(120,113,108,0.25)" }}>
                image
              </span>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <span
                className="inline-block text-amber text-[11px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-4"
                style={{ background: "rgba(245,158,11,0.1)" }}
              >
                {post.category}
              </span>
              <h3
                className="text-xl font-bold text-navy mb-4 flex-grow"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {post.title}
              </h3>
              <span className="inline-flex items-center text-sm font-bold text-navy hover:text-amber transition-colors mt-auto">
                Oku
                <span className="ms-icon text-[18px] ml-1 transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
