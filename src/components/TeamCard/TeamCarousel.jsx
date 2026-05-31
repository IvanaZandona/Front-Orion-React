import React, { useState } from 'react';
import TeamCard from "./TeamCard";
import teamData from "../../data/teamData";
import './teamCarousel.css';

function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === teamData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? teamData.length - 1 : prev - 1));
  };

  return (
    <section className="equipo-carousel-wrapper">
      <button className="team-carousel-btn prev" onClick={prevSlide}>
        <i className="fa-solid fa-chevron-left"></i>
      </button>

      <div className="team-carousel-container">
        <div 
          className="team-carousel-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {teamData.map((integrante, index) => (
            <div key={index} className="team-carousel-item">
              <TeamCard
                id={integrante.id}
                name={integrante.nombre || integrante.apodo}
                frontImage="/assets/img/astronauta2.webp"
                avatar={integrante.avatar}
              />
            </div>
          ))}
        </div>
      </div>

      <button className="team-carousel-btn next" onClick={nextSlide}>
        <i className="fa-solid fa-chevron-right"></i>
      </button>

      <div className="team-carousel-indicators">
        {teamData.map((_, index) => (
          <span 
            key={index} 
            className={`team-indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default TeamCarousel;