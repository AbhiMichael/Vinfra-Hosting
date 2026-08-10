import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/global/Footer";

export async function generateStaticParams() {
  return [{ city: "kochi" }, { city: "calicut" }];
}

export function generateMetadata({ params }) {
  const cityTitle = params.city.charAt(0).toUpperCase() + params.city.slice(1);

  return {
    title: `${cityTitle} Trussless Roofing | Vinfra Projects`,
    description: `Trussless roofing installation and monsoon-proof roofing services in ${cityTitle}, Kerala by Vinfra Projects.`,
    alternates: {
      canonical: `https://vinfraprojects.com/regions/kerala/${params.city}`,
    },
  };
}

export default function KeralaCityPage({ params }) {
  const cityName = params.city.charAt(0).toUpperCase() + params.city.slice(1);

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
            Kerala City Page
          </p>
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: "20px",
            }}
          >
            Trussless Roofing Installation in {cityName}
          </h1>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.8,
              color: "#A4B3B6",
              maxWidth: "860px",
            }}
          >
            Vinfra Projects provides leak-proof, monsoon-ready roofing
            installations for commercial and industrial projects in {cityName},
            designed for coastal weather resilience, faster execution, and
            long-lasting durability.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
