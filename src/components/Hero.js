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
        <div className='carousel-items'>
          <img src='assets/img/hero_1.jpg' alt='' />
          <div className='carousel-container'>
            <h2>The Wyatt Wiebe Centre For Healing</h2>
            <p>
              Located in Sturgeon County, Alberta a quick thirty minutes from
              Edmonton, the centre is situated on 84 acres. We are home to large
              green spaces, a riding arena, and multiple healing spaces
              including an indoor pool, massage/energy healing room, and so much
              more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
