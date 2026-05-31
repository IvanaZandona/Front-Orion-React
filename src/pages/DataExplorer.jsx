import React, { useState } from 'react';
import { FaImage } from "react-icons/fa";
import dataPlanet from '../data/dataPlanet.json';
import ScrollTopBtn from '../components/ScrollTopBtn/ScrollTopBtn';
import './dataExplorer.css';

function DataExplorer() {
  const [searchTerm, setSearchTerm] = useState('');

  // Lógica de filtrado en tiempo real
  const filteredPlanets = dataPlanet.filter(planet =>
    planet.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    planet.categoria.toLowerCase().includes(searchTerm.toLowerCase()) ||
    planet.sistemaEstelar.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleImageError = (e) => {
    e.target.style.display = 'none'; // Oculta la imagen rota
    e.target.nextSibling.style.display = 'flex'; // Muestra el contenedor de fallback
  };

  return (
    <div className="explorer-container">
      <div className="explorer-header">
        <h1 className="explorer-title">Explorador de Cuerpos Celestes </h1>
        <p>Los 20 planetas y cuerpos celestes mas cercanos a la Tierra.</p>
        
        <input 
          type="text" 
          className="search-input"
          placeholder="Buscar por nombre, categoría o sistema estelar..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="data-grid">
        {filteredPlanets.length > 0 ? (
          filteredPlanets.map(item => (
            <div key={item.id} className="data-card">
              <div className="data-card-image-container">
                <img 
                  src={item.urlImagen} 
                  alt={item.nombre} 
                  onError={handleImageError}
                  className="data-card-image"
                />
                <div className="data-card-fallback">
                   <FaImage size={40} className="data-card-fallback-icon" />
                   <span className="data-card-fallback-text">No Image Available</span>
                </div>
              </div>
              <div className="data-card-content">
                <h3>{item.nombre}</h3>
                <div className="data-details">
                  <p><strong>Categoría:</strong> {item.categoria}</p>
                  <p><strong>Sistema Estelar:</strong> {item.sistemaEstelar}</p>
                  <p><strong>Distancia:</strong> {item.distanciaTexto}</p>
                  <p><strong>Habitable:</strong> <span className={`status ${item.potencialmenteHabitable ? 'active' : 'inactive'}`}>{item.potencialmenteHabitable ? 'Sí' : 'No'}</span></p>
                </div>
                <p className="data-description">{item.descripcion}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No se encontraron cuerpos celestes con ese término.</p>
        )}
      </div>
      
      <ScrollTopBtn />
    </div>
  );
}

export default DataExplorer;