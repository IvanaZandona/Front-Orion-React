import HeroSection from "../components/HeroSection/HeroSection";

import TeamGrid from "../components/TeamCard/TeamGrid";

import Footer from "../components/Footer/Footer";

import useRocketCursor from "../hooks/useRocketCursor";

function Home() {

  useRocketCursor();
  
  return (
    <>
      <section className="principal">
        <HeroSection />

        <TeamGrid />

        <div className="boton-centro">
          <button className="btn-neon-viaje">
            <i className="fa-solid fa-rocket"></i>
            COMENZAR EL VIAJE
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;