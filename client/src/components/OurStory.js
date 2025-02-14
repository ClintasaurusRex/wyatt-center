import "../styles/OurStory.css";
import { useNavigate } from "react-router-dom";

function OurStory() {
  const navigate = useNavigate();

  return (
    <div>
      <main className="main-container">
        <section className="our-story">
          <h1 className="story-title">Our Mission</h1>
          <p>
            Our mission is to steward this land with deep respect, love, and gratitude, recognizing
            the wisdom and sacrifices of those who came before us and honoring the generations yet
            to come. We are committed to fostering a space where individuals can come together in a
            spirit of unity, connection, and healing. Through our efforts, we seek to nurture a
            community that supports personal growth, collective well-being, and a harmonious
            relationship with nature.
          </p>
          <div className="btn-container">
            <button className="btns" onClick={() => navigate("/about")}>
              Who We Are
            </button>
            <button className="btns" onClick={() => navigate("/services")}>
              Bookings
            </button>
            <button className="btns" onClick={() => console.log("clicked")}>
              Our Spaces
            </button>
          </div>
        </section>
        <section id="our-why" className="our-story">
          <h1 className="story-title">Our Why</h1>
          <p>
            After the sudden passing of our founders son, Wyatt, in January of 2021, it was clear
            she wanted to do something to honour him. A short four and a half months later her
            husband Ed passed away and the tragic event solidified her need to honour their legacy.
            After only a few months the idea of the Wyatt Wiebe Centre for Healing came to be. She
            knew she wanted to create a space of love, compassion, and healing for anyone and
            everyone who needed it. Everyone who knew Wyatt knew he was such a lively, caring, and
            outgoing person who could make anyone feel welcome and uplifted and that is what we hope
            to do here at the centre.
          </p>
        </section>
      </main>
    </div>
  );
}
export default OurStory;
