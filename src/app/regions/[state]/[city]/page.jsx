import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/global/Footer";

export async function generateStaticParams() {
  return [
    { state: "tamil-nadu", city: "chennai" },
    { state: "karnataka", city: "bangalore" },
  ];
}

export function generateMetadata({ params }) {
  const stateName = params.state.replace(/-/g, " ");
  const cityName = params.city.replace(/-/g, " ");

  return {
    title: `${cityName} Trussless Roofing | Vinfra Projects`,
    description: `Large-span trussless roofing and industrial steel solutions in ${cityName}, ${stateName}.`,
    alternates: {
      canonical: `https://vinfraprojects.com/regions/${params.state}/${params.city}`,
    },
  };
}

export default function StateCityPage({ params }) {
  const stateName = params.state.replace(/-/g, " ");
  const cityName = params.city.replace(/-/g, " ");

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
            Regional City Page
          </p>
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: "20px",
            }}
          >
            Trussless Roofing in {cityName}, {stateName}
          </h1>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.8,
              color: "#A4B3B6",
              maxWidth: "860px",
            }}
          >
            Vinfra Projects provides structural roofing systems and on-site
            manufacturing support for projects in {cityName}, {stateName},
            helping clients with efficient installation, durable finishes, and
            strong project execution.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
