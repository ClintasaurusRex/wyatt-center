import React, { useState } from "react";
import ServiceModal from "../components/ServiceModal";
import { services } from "../data";
import "../styles/Services.css";

function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <section id="services" className="services section">
      <div className="container section-title" data-aos="fade-up">
        <h2>SERVICES</h2>
        <p>Providing Fresh Produce Every Single Day</p>
      </div>

      <div className="content">
        <div className="container">
          <div className="grid-rows">
            {services.map((service, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="grid-rows1" onClick={() => openModal(service)}>
                  <div className="service-item-content">
                    <h3 className="service-heading">{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedService && <ServiceModal service={selectedService} onClose={closeModal} />}
    </section>
  );
}

export default Services;
