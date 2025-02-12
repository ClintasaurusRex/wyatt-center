import React from "react";
import { PopupButton } from "react-calendly";
import "../styles/Modal.css";

const ServiceModal = ({ service, onClose }) => {
  // Each service will map to a specific calendly event type
  const getCalendlyUrl = (serviceTitle) => {
    switch (serviceTitle) {
      case "Life Coach Discovery Call":
        return "https://calendly.com/your-link/discovery-call";
      case "Life Coaching Session":
        return "https://calendly.com/your-link/coaching-session";
      case "Virtual Life Coaching Session":
        return "https://calendly.com/your-link/virtual-coaching";
      default:
        return "https://calendly.com/your-link/default";
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          <img src="/icons8-close.gif" alt="Close" width="24" height="24" />
        </button>
        <h2>{service.title}</h2>
        <p>{service.description}</p>

        <div className="booking-section">
          <PopupButton
            url={getCalendlyUrl(service.title)}
            rootElement={document.getElementById("root")}
            text="Book Now"
            styles={{
              backgroundColor: "#4CAF50",
              color: "white",
              padding: "12px 24px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              margin: "20px 0",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
