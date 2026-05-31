import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import ProjectCarousel from "../ProjectCarousel/ProjectCarousel";

import './styles.css'; 

function SkillProgressBar({ hab }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setWidth(hab.nivel || 0);
    }, 100);
  }, [hab]);

  return (
    <div className="skill-bar-container">
      <div className="skill-info">
        <span className="skill-name">
          <img src={hab.icono} alt={hab.nombre} className="skill-icon-small" /> {hab.nombre}
        </span>
        <span className="skill-percentage">{width}%</span>
      </div>
      <div className="skill-progress-bg">
        <div className="skill-progress-fill" style={{ width: `${width}%` }}></div>
      </div>
    </div>
  );
}

function ProfileCard({
  apodo,
  nombre,
  rol,
  avatar,
  ubicacion,
  edad,
  redes,
  habilidades,
  proyectos,
  peliculasFavoritas,
  discosFavoritos,
  onGravityToggle
}) {
  return (
    <div className="presentation-card" data-aos="zoom-in">
      {/* Row 1: Cabecera del Perfil */}
      <div className="profile-header-row">
        {/* Col 1: Avatar y Redes */}
        <div className="profile-header-left">
          <div className="profile-avatar-container">
            <img src={avatar} alt={`Avatar de ${nombre}`} className="profile-avatar" />
          </div>
         
        </div>

        {/* Col 2: Info Básica */}
        <div className="profile-header-right">
          <h1 className="profile-name">{nombre}</h1>
          <p className="profile-role">{rol}</p>

          <div className="profile-info-list">
            <div className="info-item">
              <i className="fa-solid fa-location-dot"></i>
              <span>{ubicacion}</span>
            </div>
            <div className="info-item">
              <i className="fa-solid fa-cake-candles"></i>
              <span>{edad} años</span>
            </div>
        
            
          </div>
           <div className="profile-socials">
            {redes?.linkedin && (
              <a href={redes.linkedin} target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            )}
            {redes?.github && (
              <a href={redes.github} target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
            )}
          </div>

          <div className="profile-actions">
            <div className="gravity-control">
              {/* <button className="btn-neon-viaje" onClick={onGravityToggle}>
                <i className="fa-solid fa-rocket"></i> COMENZAR EL VIAJE
              </button> */}
            </div>

            {/* <Link to="/" className="btn-volver-simple">
              <i className="fa-solid fa-arrow-left"></i> Volver a Inicio
            </Link> */}
          </div>
        </div>
      </div>

      {/* Row 2: Detalles (Habilidades, Proyectos, Películas, Discos) */}
      <div className="profile-details">
        
        {habilidades && habilidades.length > 0 && (
          <div className="detail-section">
            <h2><i className="fa-solid fa-code"></i> Habilidades</h2>
            <div className="skills-bars-container">
              {habilidades.map((hab, index) => (
                <SkillProgressBar key={index} hab={hab} />
              ))}
            </div>
          </div>
        )}

        {proyectos && proyectos.length > 0 && (
          <div className="detail-section">
            <h2><i className="fa-solid fa-rocket"></i> Proyectos Destacados</h2>
            <ProjectCarousel proyectos={proyectos} />
          </div>
        )}

        {peliculasFavoritas && peliculasFavoritas.length > 0 && (
          <div className="detail-section">
            <h2><i className="fa-solid fa-film"></i> Películas Favoritas</h2>
            <div className="movies-mini-grid">
              {peliculasFavoritas.map((pelicula, index) => (
                <div key={index} className="movie-mini-card">
                  <img src={pelicula.imagen} alt={pelicula.titulo} />
                  <span>{pelicula.titulo}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {discosFavoritos && discosFavoritos.length > 0 && (
          <div className="detail-section">
            <h2><i className="fa-solid fa-compact-disc"></i> Discos Favoritos</h2>
            <div className="movies-mini-grid">
              {discosFavoritos.map((disco, index) => (
                <div key={index} className="movie-mini-card">
                  <img src={disco.imagen} alt={disco.titulo} />
                  <span>{disco.titulo}</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default ProfileCard;