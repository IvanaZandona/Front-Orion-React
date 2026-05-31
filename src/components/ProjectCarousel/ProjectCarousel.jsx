import React, { useState } from 'react';
import './projectCarousel.css';

function ProjectCarousel({ proyectos }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!proyectos || proyectos.length === 0) return null;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === proyectos.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? proyectos.length - 1 : prev - 1));
  };

  return (
    <div className="project-carousel-container">
      <button className="carousel-btn prev" onClick={prevSlide}>
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      
      <div className="carousel-view">
        <div 
          className="carousel-track" 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {proyectos.map((proyecto, index) => (
            <div key={index} className="carousel-slide">
              <img src={proyecto.imagen} alt={proyecto.titulo} />
              <div className="slide-content">
                <h3>{proyecto.titulo}</h3>
                <p>{proyecto.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="carousel-btn next" onClick={nextSlide}>
        <i className="fa-solid fa-chevron-right"></i>
      </button>

      <div className="carousel-indicators">
        {proyectos.map((_, index) => (
          <span 
            key={index} 
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCarousel;