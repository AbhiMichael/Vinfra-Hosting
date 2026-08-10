import ProjectOne from "../assets/img1.webp";

export default function EvolutionSection() {
  return (
    <section className="page-evolution reveal-group">
      <div className="evolution-header">
        <h2 className="evolution-title">An evolution in steel</h2>
        <button className="bracket-btn">
          View All Metallurgy <span className="arrow">→</span>
        </button>
      </div>
      <div className="evolution-grid">
        <div className="evo-card image-box">
          <img
            src={ProjectOne.src}
            alt="Precision Industrial Structural Elements"
          />
        </div>
        <div className="evo-card">
          <div className="evo-card-orange-dot" />
          <div>
            <h3>Hot-Rolled</h3>
            <p>
              Steel sheet is processed to its final thickness by rolling at
              extreme high structural temperatures directly on a hot-rolling
              industrial mill line matrix.
            </p>
          </div>
          <svg
            className="evo-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <path d="M9 9h6v6H9z" />
          </svg>
        </div>
        <div
          className="evo-card"
          style={{ backgroundColor: "rgba(233,238,242,0.25)" }}
        >
          <div className="evo-card-orange-dot" />
          <div>
            <h3>Cold-Rolled</h3>
            <p>
              Hot-rolled carbon steel sheet cooled and processed at exact
              ambient room temperatures to achieve tight, high-tensile
              structural thickness ratings.
            </p>
          </div>
          <svg
            className="evo-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
          </svg>
        </div>
        <div className="evo-card">
          <div className="evo-card-orange-dot" />
          <div>
            <h3>Galvannealed</h3>
            <p>
              An extra tight specialized zinc iron-alloy zinc coating bonded
              through high-heat processing ovens, achieving a smooth matte
              finish designed for heavy deployment.
            </p>
          </div>
          <svg
            className="evo-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
            <path d="M12 18V6" />
          </svg>
        </div>
      </div>
    </section>
  );
}
