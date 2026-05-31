import { useNavigate } from "react-router-dom";

function TeamCard({ id, name, avatar, frontImage }) {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/perfiles/${id}`)}>
      <div className="card-img">

        <div className="face front">
          <img src={frontImage} alt="Astronauta" />
        </div>

        <div className="face back">
          <img src={avatar} alt={name} />
        </div>

      </div>

      <h3>{name}</h3>

      <button className="btn-neon">
        Ver perfil →
      </button>
    </div>
  );
}

export default TeamCard;