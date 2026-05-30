import React from "react";
import { useParams, Navigate } from "react-router-dom";
import ProfileCard from "../ProfileCard/ProfileCard";
import teamData from "../../data/teamData";


function useProfileData(id) {
  const member = teamData.find((m) => String(m.id) === id);

  if (!member) return null;

  return {
    apodo: member.apodo || member.nombre,
    nombre: member.nombre,
    avatar: member.avatar,
    rol: member.rol || "Tripulante Espacial",
    ubicacion: member.ubicacion || "Ubicación confidencial",
    edad: member.edad || "?",
    redes: member.redes || {},
    habilidades: member.habilidades || [],
    peliculasFavoritas: member.peliculasFavoritas || [],
    discosFavoritos: member.discosFavoritos || []
  };
}

function Perfiles() {

  const { id } = useParams();

  // Si alguien entra a "/perfiles" sin ID, lo redirigimos automáticamente al primer tripulante
  if (!id) {
    return <Navigate to={`/perfiles/${teamData[0].id}`} replace />;
  }

  const currentProfileData = useProfileData(id);

  if (!currentProfileData) {
    return <h2 style={{ color: "snow", textAlign: "center", paddingTop: "200px" }}>Tripulante no encontrado en los registros de Orión.</h2>;
  }

  return (
    <section className="seccion-home">
      <ProfileCard {...currentProfileData} />
    </section>
  );
}

export default Perfiles;