import React from "react";
import "../styles/Modal.css";

const ServiceModal = ({ service, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          <img src="/icons8-close.gif" alt="Close" width="24" height="24" />
        </button>
        <h2>{service.title}</h2>
        <p>{service.description}</p>
        {/* Add additional service details here */}
      </div>
    </div>
  );
};

export default ServiceModal;
