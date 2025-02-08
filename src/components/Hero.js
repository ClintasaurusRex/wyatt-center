import React from 'react';
import '../components/Header.css';

function Hero() {
  return (
    <section id='hero' className='hero section dark-background'>
      <div
        id='hero-carousel'
        className='carousel slide carousel-fade'
        data-bs-ride='carousel'
        data-bs-interval='5000'
      >
        <div className='carousel-item active'>
          <img src='assets/img/hero_1.jpg' alt='' />
          <div className='carousel-container'>
            <h2>The Wyatt Wiebe Centre For Healing</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
