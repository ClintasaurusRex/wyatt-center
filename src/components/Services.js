import React from 'react';
import '../Services.css';

function Services() {
  const services = [
    {
      number: '01',
      title: 'Life Coach Discovery Call',
      description:
        'A 30 minute session where we will discuss your goals and how we can help you achieve them.',
    },
    {
      number: '02',
      title: 'Life Coaching Session',
      description:
        'A 60 minute session where we will dive deep into your life and your goals.',
    },
    {
      number: '03',
      title: 'Virtual Life Coaching Session',
      description:
        'A 60 minute session where we will dive deep into your life and your goals.',
    },
    {
      number: '04',
      title: 'Virtual Coaching Session',
      description:
        'A 45 minute session where we will dive deep into your life and your goals.',
    },
    {
      number: '05',
      title: 'Life Coaching Session',
      description:
        'A 45 minute session where we will dive deep into your life and your goals.',
    },
    // Add other services here
  ];

  return (
    <section id='services' className='services section'>
      <div className='container section-title' data-aos='fade-up'>
        <h2>SERVICES</h2>
        <p>Providing Fresh Produce Every Single Day</p>
      </div>

      <div className='content'>
        <div className='container'>
          <div className='grid-rows'>
            {services.map((service, index) => (
              <div key={index} className='col-lg-3 col-md-6'>
                <div className='grid-rows1'>
                  {/* <span className='number'>{service.number}</span> */}
                  <div className='service-item-icon'>
                    {/* SVG icons can be imported as separate components */}
                  </div>
                  <div className='service-item-content'>
                    <h3 className='service-heading'>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
