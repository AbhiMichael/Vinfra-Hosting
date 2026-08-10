import ProjectTwo from "../assets/img2.webp";
import ProjectThree from "../assets/img3.webp";
import ProjectFour from "../assets/img4.webp";

export default function ApplicationsSection() {
  return (
    <section className="page-applications reveal-group">
      <div className="app-header">
        <h2>
          Architectural <span>Applications</span>
        </h2>
        <button className="bracket-btn" style={{ color: "var(--white)" }}>
          View All Typologies <span className="arrow">→</span>
        </button>
      </div>
      <div className="app-grid">
        <div className="app-card">
          <div className="app-img-wrapper">
            <img
              src={ProjectTwo.src}
              alt="Industrial Framework Engineering Spans"
            />
          </div>
          <div className="app-card-content">
            <div className="app-card-tag">Heavy Duty</div>
            <h4>Logistics &amp; Hubs</h4>
            <p>
              Self-supporting clear spans designed to withstand aggressive
              environments without requiring structural columns.
            </p>
          </div>
        </div>
        <div className="app-card">
          <div className="app-img-wrapper">
            <img
              src={ProjectThree.src}
              alt="Civic Complex Architectural Canopy"
            />
          </div>
          <div className="app-card-content">
            <div className="app-card-tag">Acoustic Rated</div>
            <h4>Civic Arenas</h4>
            <p>
              Double-curved geometric layouts that control acoustics and enhance
              thermal insulation for sports and public arenas.
            </p>
          </div>
        </div>
        <div className="app-card">
          <div className="app-img-wrapper">
            <img
              src={ProjectFour.src}
              alt="Premium Modern Metal Architecture Housing"
            />
          </div>
          <div className="app-card-content">
            <div className="app-card-tag">Anodized Fine Finish</div>
            <h4>Custom Projects</h4>
            <p>
              Bespoke custom aluminum architectures designed in collaboration
              with premium international firms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
