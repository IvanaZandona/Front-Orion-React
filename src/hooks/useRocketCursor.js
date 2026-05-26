import { useEffect } from "react";

function useRocketCursor() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    cursor.innerHTML = "🚀";

    document.body.appendChild(cursor);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let cursorX = mouseX;
    let cursorY = mouseY;

    let currentAngle = -45;
    let isHovering = false;
    let isRocketActive = false;

    let lastParticleTime = 0;

    // =========================
    // PARTÍCULAS / COLA
    // =========================

    function createSmokeParticle(x, y) {
      const particle = document.createElement("div");

      particle.classList.add("smoke-particle");

      const size = Math.random() * 6 + 4;

      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;

      document.body.appendChild(particle);

      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 20;

      const moveX = Math.cos(angle) * distance;
      const moveY = Math.sin(angle) * distance;

      particle.animate(
        [
          {
            transform: "translate(-50%, -50%) scale(1)",
            opacity: 1,
          },
          {
            transform: `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px)) scale(3)`,
            opacity: 0,
          },
        ],
        {
          duration: 700,
          easing: "ease-out",
        }
      );

      setTimeout(() => {
        particle.remove();
      }, 700);
    }

    // =========================
    // ANIMACIÓN
    // =========================

    function animateCursor() {
      if (isRocketActive) {
        const dx = mouseX - cursorX;
        const dy = mouseY - cursorY;

        cursorX += dx * 0.15;
        cursorY += dy * 0.15;

        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;

        const angle = Math.atan2(dy, dx) * (180 / Math.PI);

        currentAngle = angle + 45;

        cursor.style.transform =
          `translate(-50%, -50%) rotate(${currentAngle}deg) scale(${isHovering ? 1.4 : 1})`;

        // =========================
        // CREAR COLA
        // =========================

        const now = Date.now();

        if (now - lastParticleTime > 35) {
          createSmokeParticle(cursorX, cursorY);
          lastParticleTime = now;
        }
      }

      requestAnimationFrame(animateCursor);
    }

    animateCursor();

    // =========================
    // MOUSE
    // =========================

    const moveHandler = (e) => {
      if (!isRocketActive) return;

      mouseX = e.clientX;
      mouseY = e.clientY;

      cursor.style.display = "block";
    };

    document.addEventListener("mousemove", moveHandler);

    // =========================
    // HOVER
    // =========================

    const clickables = document.querySelectorAll("a, button");

    clickables.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        isHovering = true;
      });

      el.addEventListener("mouseleave", () => {
        isHovering = false;
      });
    });

    // =========================
    // BOTÓN
    // =========================

    const btnViaje = document.querySelector(".btn-neon-viaje");

    const toggleRocket = () => {
      isRocketActive = !isRocketActive;

      if (isRocketActive) {
        document.body.classList.add("rocket-active");
        cursor.style.display = "block";
      } else {
        document.body.classList.remove("rocket-active");
        cursor.style.display = "none";
      }
    };

    btnViaje?.addEventListener("click", toggleRocket);

    // =========================
    // CLEANUP
    // =========================

    return () => {
      document.removeEventListener("mousemove", moveHandler);

      btnViaje?.removeEventListener("click", toggleRocket);

      cursor.remove();
    };
  }, []);
}

export default useRocketCursor;