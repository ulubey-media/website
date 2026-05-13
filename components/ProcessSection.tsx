const steps = [
  {
    number: "01",
    title: "Analiz",
    description: "Mevcut durumunuzu, pazar dinamiklerini ve rakiplerinizi inceliyoruz.",
  },
  {
    number: "02",
    title: "Strateji",
    description: "Hedeflerinize uygun, bütçenizi optimize edecek özel bir plan hazırlıyoruz.",
  },
  {
    number: "03",
    title: "Uygulama",
    description: "Planı hayata geçiriyor, sürekli test ediyor ve sonuçları raporluyoruz.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 w-full" style={{ background: "#0F3460" }}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">
        <div className="text-center mb-16">
          <h2
            className="text-[48px] font-bold text-white"
            style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.01em" }}
          >
            Nasıl Çalışıyoruz?
          </h2>
          <p className="text-white/60 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Veri odaklı yaklaşımımızla sürecin her adımında şeffaf ve ölçülebilir sonuçlar hedefliyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          <div
            className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[1px]"
            style={{ background: "rgba(255,255,255,0.15)" }}
          />

          {steps.map((step) => (
            <div key={step.number} className="relative z-10 flex flex-col items-center text-center">
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-xl"
                style={{ background: "#001f41", border: "4px solid #0F3460" }}
              >
                <span
                  className="text-[32px] font-bold text-amber"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {step.number}
                </span>
              </div>
              <h3
                className="text-2xl font-bold text-white mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {step.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
