import ProjectOne from "../assets/img1.webp";
import ProjectTwo from "../assets/img2.webp";
import ProjectThree from "../assets/img3.webp";

export default function MissionSection() {
  return (
    <section className="page-mission reveal-group">
      <div className="mission-left">
        <div className="mission-eyebrow">Mission</div>
        <h2 className="mission-title">
          Innovative
          <br />
          Functional
          <br />
          Appealing
        </h2>
        <p className="mission-body">
          At Vinfra Truss-less Roofings, our dedication to excellence is evident
          in every project we undertake. We combine innovative roofing
          technology with expert craftsmanship to deliver results that stand the
          test of time. Whether it's a large-scale industrial facility or a
          commercial site, we ensure every detail meets the highest quality
          standards. Excellence isn't optional — it's what defines us.
        </p>
        <button className="mission-cta">Our Works →</button>
      </div>
      <div className="mission-right">
        <div
          className="mission-img-small"
          style={{ background: "rgba(15,20,24,0.15)" }}
        >
          <img src={ProjectOne.src} alt="Vinfra construction site" />
        </div>
        <div
          className="mission-img-large"
          style={{ background: "rgba(15,20,24,0.1)" }}
        >
          <img src={ProjectTwo.src} alt="Vinfra roofing canopy structure" />
        </div>
        <div
          className="mission-img-bottom"
          style={{ background: "rgba(15,20,24,0.1)" }}
        >
          <img src={ProjectThree.src} alt="Vinfra installation process" />
        </div>
      </div>
    </section>
  );
}
