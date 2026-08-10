import Navbar from "../../../components/Navbar";
import Footer from "../../../components/global/Footer";

export async function generateStaticParams() {
  return [
    { state: "tamil-nadu" },
    { state: "karnataka" },
    { state: "maharashtra" },
  ];
}

export function generateMetadata({ params }) {
  const stateName = params.state.replace(/-/g, " ");

  return {
    title: `${stateName} Roofing Services | Vinfra Projects`,
    description: `Industrial and commercial roofing services in ${stateName} with trussless systems, mobile roll forming, and structural engineering support.`,
    alternates: {
      canonical: `https://vinfraprojects.com/regions/${params.state}`,
    },
  };
}

export default function StatePage({ params }) {
  const stateName = params.state.replace(/-/g, " ");

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
            Regional Hub
          </p>
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: "20px",
            }}
          >
            Trussless Roofing Solutions in {stateName}
          </h1>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.8,
              color: "#A4B3B6",
              maxWidth: "860px",
            }}
          >
            Vinfra Projects supports projects in {stateName} with dependable
            trussless roofing execution, site engineering, and material supply
            coordination for industrial and commercial structures.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
