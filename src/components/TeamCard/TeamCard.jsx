function TeamCard({ name, avatar, frontImage }) {
  return (
    <div className="card">
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