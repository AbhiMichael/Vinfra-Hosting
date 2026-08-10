import Navbar from "../../../components/Navbar";
import Footer from "../../../components/global/Footer";

export async function generateStaticParams() {
  return [{ slug: "peb-structures" }, { slug: "industrial-sheds" }];
}

export function generateMetadata({ params }) {
  const titleMap = {
    "peb-structures": "PEB Structures | Vinfra Projects",
    "industrial-sheds": "Industrial Sheds | Vinfra Projects",
  };

  return {
    title:
      titleMap[params.slug] || "Specialty Roofing Services | Vinfra Projects",
    description:
      "Explore Vinfra Projects specialty roofing and steel structure services for industrial, commercial, and large-span project requirements.",
    alternates: {
      canonical: `https://vinfraprojects.com/services/${params.slug}`,
    },
  };
}

export default function ServiceSlugPage({ params }) {
  const titles = {
    "peb-structures": "PEB Structures",
    "industrial-sheds": "Industrial Sheds",
  };

  const title = titles[params.slug] || "Specialty Roofing Services";

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
            Service Extension
          </p>
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: "20px",
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.8,
              color: "#A4B3B6",
              maxWidth: "860px",
            }}
          >
            Vinfra Projects delivers engineered steel and roofing solutions
            designed for rapid installation, structural reliability, and
            long-term performance.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
