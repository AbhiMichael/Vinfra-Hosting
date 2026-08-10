export default function TrusslessTechStrip() {
  const points = [
    {
      title: "100% Leak-Proof Seaming",
      text: "Mechanically seamed roofing eliminates the leak-prone screw-hole issue common in conventional systems.",
    },
    {
      title: "Zero-Maintenance Structure",
      text: "Engineered for long service life with corrosion-resistant panels and durable structural performance.",
    },
    {
      title: "On-Site Roll Forming",
      text: "Mobile manufacturing units reduce transport complexity and accelerate project execution at your site.",
    },
  ];

  return (
    <section style={{ background: "#10161A", padding: "72px 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <p
          style={{
            color: "#8a0f0f",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            marginBottom: "12px",
          }}
        >
          Engineering Advantage
        </p>
        <h2
          style={{
            fontSize: "clamp(28px, 3.5vw, 38px)",
            color: "#E9EEF2",
            marginBottom: "28px",
          }}
        >
          Why Vinfra Projects is trusted for trussless roofing in India
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
          }}
        >
          {points.map((point) => (
            <div
              key={point.title}
              style={{
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "18px",
                padding: "24px",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              <h3
                style={{
                  color: "#FFFFFF",
                  marginBottom: "10px",
                  fontSize: "20px",
                }}
              >
                {point.title}
              </h3>
              <p style={{ color: "#A4B3B6", lineHeight: 1.7 }}>{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
