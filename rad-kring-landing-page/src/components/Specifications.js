import React, { useState } from 'react';
import CountUp from 'react-countup';
import './Specifications.css';
import backgroundImg from '../assets/navbarorange.jpg'; // Import the background image

const Specifications = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const specifications = [
    { title: 'Speed', value: 300, unit: 'km/h' },
    { title: 'Range', value: 500, unit: 'km' },
    { title: 'Number of Passengers', value: 4 },
    { title: 'Noise Level', value: 65, unit: 'dB' },
    { title: 'MTOW', value: 2100, unit: 'kg' },
    { title: 'Carbon Emission', value: 0, unit: '%' },
    { title: 'Fully Electric', value: 100, unit: '%' },
  ];

  return (
    <section
      id="specifications"
      className="specifications"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <h2 className="spec-title">Specifications</h2>
      <div className="spec-items">
        {specifications.map((spec, index) => (
          <div
            key={index}
            className="spec-item"
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h3>{spec.title}</h3>
            <p
              className="count-number"
              style={{
                background: hoveredCard === index ? 'linear-gradient(90deg, #ff416c, #ff4b2b)' : 'none',
                WebkitBackgroundClip: hoveredCard === index ? 'text' : 'initial',
                WebkitTextFillColor: hoveredCard === index ? 'transparent' : 'initial',
              }}
            >
              <CountUp
                end={spec.value}
                duration={2.5}
                separator=","
                key={hoveredCard === index ? index : null} // Reset animation only for hovered card
              />
              {spec.unit && ` ${spec.unit}`}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specifications;
