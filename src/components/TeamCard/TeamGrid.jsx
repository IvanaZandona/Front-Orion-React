import TeamCard from "./TeamCard";
import teamData from "../../data/teamData";

function TeamGrid() {
  return (
    <section className="equipo">
      {teamData.map((integrante, index) => (
        <TeamCard
          key={index}
          name={integrante.name}
          frontImage={integrante.frontImage}
          avatar={integrante.avatar}
        />
      ))}
    </section>
  );
}

export default TeamGrid;