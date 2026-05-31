import { useCallback } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <ParticlesProvider init={particlesInit}>
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <Particles
          id="tsparticles"
          options={{
            fullScreen: false,

            background: {
              color: {
                value: "transparent",
              },
            },

            particles: {
              number: {
                value: 180,
                density: {
                  enable: true,
                },
              },

              color: {
                value: "#ffffff",
              },

              shape: {
                type: "circle",
              },

              opacity: {
                value: {
                  min: 0.2,
                  max: 0.8,
                },
              },

              size: {
                value: {
                  min: 1,
                  max: 2,
                },
              },

              move: {
  enable: true,
  speed: 1,
  random: true,
  direction: "none",
  straight: false,
  outModes: {
    default: "out",
  },
},
            },

            detectRetina: true,
          }}
        />
      </div>
    </ParticlesProvider>
  );
}

export default ParticlesBackground;