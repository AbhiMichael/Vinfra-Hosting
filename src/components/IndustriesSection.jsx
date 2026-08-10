const INDUSTRIES = [
  "Agricultural Warehouses",
  "Aircraft Hangers",
  "Auditoriums",
  "Automobile Industries",
  "Bus Station",
  "Cold Storages",
  "Educational Institution",
  "Parking Areas",
  "Shopping Malls",
];

export default function IndustriesSection() {
  return (
    <section className="page-industries reveal-group">
      <div className="industries-header">
        <h2 className="industries-title">Industries We Cater</h2>
        <div className="industries-divider">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="industries-grid">
        {INDUSTRIES.map((ind) => (
          <div className="industry-cell" key={ind}>
            {ind}
          </div>
        ))}
      </div>
    </section>
  );
}