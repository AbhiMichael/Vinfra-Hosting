import MainFeature from "../assets/img5.webp";

export default function CertifiedSection() {
  return (
    <section className="page-certified reveal-group">
      <div className="certified-img-wrapper">
        <img
          src={MainFeature.src}
          alt="Certified roofing professionals at work"
        />
      </div>
      <div className="certified-right">
        <div className="certified-eyebrow">Our Team</div>
        <h2 className="certified-title">Certified roofing professional</h2>
        <p className="certified-body">
          At Vinfra Truss-less Roofings, our team consists of certified
          professionals with extensive knowledge in modern roofing technologies.
          Each member is trained to deliver structurally sound, long-lasting
          solutions tailored to a wide range of building types. Their
          credentials reflect a commitment to safety, efficiency, and technical
          excellence — ensuring every project is executed to the highest
          standards. Whether it's a new installation or a complex retrofit, our
          experts bring confidence, quality, and peace of mind to every roof we
          build.
        </p>
        <div style={{ marginTop: "40px" }}>
          <button className="bracket-btn" style={{ color: "var(--dark)" }}>
            Meet the Team <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
