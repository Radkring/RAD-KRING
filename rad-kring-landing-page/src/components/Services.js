import React, { useState } from 'react';
import './Services.css'; // Ensure you have this CSS file or adjust as needed
import ServiceCard from './ServiceCard'; // Import the ServiceCard component

// Importing images
import passengerTravelImg from '../assets/pax.jpg';
import medicalEvacuationsImg from '../assets/medical.jpg';
import rescueOperationsImg from '../assets/rescue.jpg';
import logisticsTransportationImg from '../assets/logistics.jpg';
import surveillancePatrollingImg from '../assets/survillance.jpg';
import tourismTravelImg from '../assets/tourist.jpg';

const services = [
  {
    title: "Passenger Travel",
    description: "Quick and convenient air travel within and between cities, reducing commute times and traffic congestion.",
    image: passengerTravelImg
  },
  {
    title: "Medical Evacuations",
    description: "Emergency air transport for patients, providing rapid response to medical emergencies.",
    image: medicalEvacuationsImg
  },
  {
    title: "Rescue Operations",
    description: "Fast deployment of rescue teams for emergency situations, such as natural disasters or accidents.",
    image: rescueOperationsImg
  },
  {
    title: "Logistics Transportation",
    description: "Efficient and swift delivery of goods and packages within urban areas and between regions.",
    image: logisticsTransportationImg
  },
  {
    title: "Surveillance Patrolling",
    description: "Enhanced security and monitoring through aerial patrols, aiding in crime prevention and disaster management.",
    image: surveillancePatrollingImg
  },
  {
    title: "Tourism Travel",
    description: "Scenic and quick aerial tours within cities and to regional attractions, offering unique perspectives and experiences for tourists.",
    image: tourismTravelImg
  }
];

const Services = () => {
  const [scroll, setScroll] = useState(false);

  return (
    <section 
      id="services" 
      className="services" 
      onMouseEnter={() => setScroll(true)}
      onMouseLeave={() => setScroll(false)}
    >
      <h2 className="services-title">Our Services</h2>
      <div className={`services-scroll ${scroll ? 'scroll' : ''}`}>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </section>
  );
};

export default React.memo(Services);
