const METRICS = [
  { value: "10+", label: "Years of Experience" },
  { value: "25", label: "Roofing Experts" },
  { value: "500+", label: "Completed Projects" },
  { value: "38+", label: "Cities We Serve" },
];

export default function MetricsStrip() {
  return (
    <div className="metrics-strip reveal-group">
      {METRICS.map((m) => (
        <div className="metric-block" key={m.label}>
          <div className="metric-number">{m.value}</div>
          <div className="metric-label">{m.label}</div>
        </div>
      ))}
    </div>
  );
}