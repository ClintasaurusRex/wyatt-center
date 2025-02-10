import { teamMembers } from "../data";
import "../styles/About.css";

function About() {
  return (
    <>
      {teamMembers.map((member, index) => (
        <div key={index}>
          <h2>{member.name}</h2>
          <h3>{member.title}</h3>
          <main className="about-main">
            <img src={member.image} alt={member.name} />
            <p>{member.description}</p>
          </main>
        </div>
      ))}
    </>
  );
}
export default About;
