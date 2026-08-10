const regions = [
  "Kerala",
  "Tamil Nadu",
  "Karnataka",
  "Maharashtra",
  "Telangana",
  "Andhra Pradesh",
  "Goa",
  "Delhi NCR",
];

export default function PanIndiaPresence() {
  return (
    <section style={{ background: "#0F1418", padding: "72px 24px" }}>
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
          Pan-India Execution
        </p>
        <h2
          style={{
            fontSize: "clamp(28px, 3.5vw, 38px)",
            color: "#E9EEF2",
            marginBottom: "24px",
          }}
        >
          Delivery capability across strategic industrial and commercial regions
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "14px",
          }}
        >
          {regions.map((region) => (
            <div
              key={region}
              style={{
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "999px",
                padding: "12px 16px",
                textAlign: "center",
                color: "#E9EEF2",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              {region}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
