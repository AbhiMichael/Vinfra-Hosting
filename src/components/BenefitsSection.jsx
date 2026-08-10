const BENEFITS = [
  { name: "Wide Span", icon: "⟷" },
  { name: "Maintenance Free", icon: "✦" },
  { name: "Cost Saving", icon: "◈" },
  { name: "Interlocking System", icon: "⧉" },
  { name: "Fast Installation", icon: "⚡" },
  { name: "Best After Sale Service", icon: "★" },
  { name: "Sturdy & Strong", icon: "◆" },
  { name: "High Corrosion Resistance", icon: "⬡" },
];

export default function BenefitsSection() {
  return (
    <section className="page-benefits reveal-group">
      <div className="benefits-layout">
        <div className="benefits-left">
          <h2 className="benefits-title">
            Know The Benefits Of<br /><span>Vinfra</span> Roofing Material
          </h2>
          <p className="benefits-body">
            Vinfra Roofing Material offers multiple benefits, making it a reliable choice for long-lasting roofing solutions. It is highly durable, performing four times better in exposure tests, six times better in industrial environments, and three times more durable in rural conditions. With excellent corrosion resistance, it outperforms conventional galvanized steel, ensuring extended protection against rust. Its high-temperature resistance enables it to withstand intermediate and prolonged heat exposure more effectively than traditional roofing sheets. The material also reflects heat better, keeping buildings cooler in summer and warmer in winter, while retaining its luster for longer periods compared to ordinary galvanized coatings. Additionally, Vinfra Roofing Material provides cost efficiency by reducing maintenance needs and lowering overall crack or peel costs.
          </p>
        </div>
        <div className="benefits-right">
          <div className="benefits-grid">
            {BENEFITS.map((b) => (
              <div className="benefit-tile" key={b.name}>
                <div className="benefit-glyph">{b.icon}</div>
                <div className="benefit-name">{b.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}