import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero section dark-background">
      <div
        id="hero-carousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="5000"
      >
        <div className="carousel-items">
          <img src="assets/img/hero_1.jpg" style={{ filter: "brightness(0.4)" }} alt="" />
          <div className="carousel-container">
            <h2>The Wyatt Wiebe Centre For Healing</h2>
            <p className="intro-text">
              Located in Sturgeon County, Alberta a quick thirty minutes from Edmonton, The Wyatt
              Wiebe Centre for Healing is situated on 84 acres of land in rural Alberta. We are the
              home to a large riding arena, four beautiful horses, a pool lovingly named Joy, a
              large art studio, and vast green spaces. We have multiple session rooms fit for energy
              healing, card reading, coaching, meditation, yoga classes, and so much more. We have
              hosted healing sessions, creative workshops, and other events, and we plan on hosting
              many more in the future. We hope to be a space to gather and connect to create a sense
              of community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
