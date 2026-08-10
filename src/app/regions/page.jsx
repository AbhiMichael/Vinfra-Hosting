import Navbar from "../../components/Navbar";
import Footer from "../../components/global/Footer";

export const metadata = {
  title: "Vinfra Projects | Regional Roofing Coverage Across India",
  description:
    "Explore Vinfra Projects roofing service coverage across Kerala, Tamil Nadu, Karnataka, Maharashtra, and other major Indian regions.",
  alternates: {
    canonical: "https://vinfraprojects.com/regions",
  },
};

export default function RegionsPage() {
  return (
    <>
      <Navbar />
      <main
        style={{
          minHeight: "100vh",
          background: "#0F1418",
          paddingTop: "120px",
          color: "#E9EEF2",
        }}
      >
        <section
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 24px" }}
        >
          <p
            style={{
              color: "#8a0f0f",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              fontWeight: 700,
              marginBottom: "16px",
            }}
          >
            Pan-India Coverage
          </p>
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: "20px",
            }}
          >
            Regional Roofing Solutions Across India
          </h1>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.8,
              color: "#A4B3B6",
              maxWidth: "860px",
            }}
          >
            Vinfra Projects supports commercial and industrial roofing delivery
            across major Indian states with mobile manufacturing capability,
            technical site support, and fast response execution.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
