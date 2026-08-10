const SERVICES = [
  {
    name: "Inspection",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    name: "Panel Fabrication",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    name: "Customization",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    name: "Support",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 20a6 6 0 0 0-12 0" />
        <circle cx="12" cy="10" r="4" />
        <path d="M6 20v-2a6 6 0 0 1 12 0v2" />
      </svg>
    ),
  },
  {
    name: "Replacement",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 2v6h-6" />
        <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
        <path d="M3 22v-6h6" />
        <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
      </svg>
    ),
  },
  {
    name: "Consultation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section className="page-services reveal-group">
      <div className="services-header">
        <div className="services-eyebrow">Services</div>
        <h2 className="services-title">Protecting your roof assets</h2>
        <p className="services-body">
          Vinfra Truss-less Roofings has been at the forefront of delivering innovative roofing solutions across industrial, commercial, and institutional sectors. We specialize in trussless (K-Span) roofing systems that eliminate the need for conventional trusses, allowing for clear spans, reduced material usage, and maximized interior space.
        </p>
        <p className="services-body">
          With over a decade of experience, our team blends engineering precision, structural strength, quality materials and aesthetic appeal to deliver roofing systems that are not only strong and durable but also cost-efficient, low-maintenance and built to last.
        </p>
      </div>
      <div className="services-grid">
        {SERVICES.map((svc) => (
          <div className="service-cell" key={svc.name}>
            <div className="service-icon-ring">{svc.icon}</div>
            <div className="service-name">{svc.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}