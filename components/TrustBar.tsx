const stats = [
  { value: "50+", label: "Mutlu Müşteri" },
  { value: "3+", label: "Yıl Deneyim" },
  { value: "8", label: "Hizmet Alanı" },
  { value: "✓", label: "Google & Meta Sertifikalı" },
];

export default function TrustBar() {
  return (
    <div
      className="w-full py-8"
      style={{
        background: "#F4F3F7",
        borderTop: "1px solid rgba(120,113,108,0.1)",
        borderBottom: "1px solid rgba(120,113,108,0.1)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center px-4"
              style={i < stats.length - 1 ? { borderRight: "1px solid rgba(120,113,108,0.15)" } : {}}
            >
              <span
                className="text-3xl font-bold text-navy"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {stat.value}
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-warm mt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
