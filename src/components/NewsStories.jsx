import MainFeature from "../assets/img5.webp";

export default function NewsStories() {
  return (
    <section className="page-stories reveal-group">
      <div className="story-hero-pane">
        <h2>
          Pan-India <br />
          Growth Story
        </h2>
        <div>
          <p>
            Delivering trusted structural and engineering solutions across
            India, powered by consistent growth, strong partnerships, and a
            commitment to quality at every scale.
          </p>
          <div style={{ marginTop: "32px" }}>
            <button className="bracket-btn" style={{ color: "#FFF" }}>
              Discover Our Reach <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </div>
      <div className="story-split-pane">
        <div className="report-block">
          <div>
            <div className="report-meta">Reports</div>
            <h3 className="report-title">
              Sustainability Report on the Steel Industry Highlights Gaps and
              Strengths
            </h3>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span className="report-date">2026-10-10</span>
            <button className="bracket-btn" style={{ color: "var(--dark)" }}>
              <span className="arrow">↳</span>
            </button>
          </div>
        </div>
        <div className="story-image-block">
          <img src={MainFeature.src} alt="Sustainable Wind Power Grid Lines" />
        </div>
      </div>
    </section>
  );
}
