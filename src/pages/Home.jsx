import HeroSection from "../components/HeroSection/HeroSection";

import TeamCarousel from "../components/TeamCard/TeamCarousel";


import useRocketCursor from "../hooks/useRocketCursor";

function Home() {

  useRocketCursor();
  
  return (
    <>
      <section className="principal">
        <HeroSection />
        <TeamCarousel />
        <div className="boton-centro">
          <button className="btn-neon-viaje">
            <i className="fa-solid fa-rocket"></i>
            COMENZAR EL VIAJE
          </button>
        </div>
      </section>

    </>
  );
}

export default Home;