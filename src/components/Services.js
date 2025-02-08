import React from 'react';

function Services() {
  const services = [
    {
      number: '01',
      title: 'Planting',
      description:
        'Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie',
    },
    {
      number: '02',
      title: 'Mulching',
      description:
        'Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie',
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
          <div className='row g-0'>
            {services.map((service, index) => (
              <div key={index} className='col-lg-3 col-md-6'>
                <div className='service-item'>
                  <span className='number'>{service.number}</span>
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
