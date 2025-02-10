import { teamMembers } from "../data";
import "../styles/About.css";

function About() {
  return (
    <>
      {teamMembers.map((member, index) => (
        <div key={index}>
          <main className="about-main">
            <h2>{member.name}</h2>
            <h3>{member.title}</h3>

            <img className="about-img" src={member.image} alt={member.name} />
            <span className="member-description">{member.description}</span>
          </main>
        </div>
      ))}
    </>
  );
}
export default About;
