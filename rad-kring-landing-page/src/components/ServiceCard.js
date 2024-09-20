import React from 'react';
import './ServiceCard.css'; // Ensure you have this CSS file or adjust as needed

const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="service-card">
      <img src={image} alt={title} className="service-card-image" />
      <h3 className="service-card-title">{title}</h3>
      <p className="service-card-description">{description}</p>
    </div>
  );
};

export default ServiceCard;
