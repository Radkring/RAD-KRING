import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import CountUp from 'react-countup'; // Import CountUp
import './MapAnimation.css';

// Coordinates for Mumbai and Pune
const mumbaiCoords = [19.0760, 72.8777];
const puneCoords = [18.5204, 73.8567];
const pathCoords = [mumbaiCoords, puneCoords];

const MapAnimation = () => {
  const [countKey, setCountKey] = useState(0); // State to reset count

  useEffect(() => {
    // Reset counting animation on mount
    const timer = setTimeout(() => setCountKey(countKey + 1), 100);
    return () => clearTimeout(timer);
  }, []);

  // Function to reset counter on hover
  const handleHover = () => {
    setCountKey(countKey + 1); // Update state to reset CountUp
  };

  return (
    <div className="map-container">
      <MapContainer
        center={[(mumbaiCoords[0] + puneCoords[0]) / 2, (mumbaiCoords[1] + puneCoords[1]) / 2]}
        zoom={10}
        style={{ height: '500px', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={mumbaiCoords}>
          <Popup>Mumbai</Popup>
        </Marker>
        <Marker position={puneCoords}>
          <Popup>Pune</Popup>
        </Marker>
        <Polyline
          positions={pathCoords}
          color="blue"
          weight={5}
          opacity={0.8}
        />
      </MapContainer>
      
      {/* New Static Card */}
      <div className="new-card">
        <h2>MUMBAI TO PUNE IN JUST</h2>
        <div className="count count-animation" onMouseEnter={handleHover}>
          <CountUp key={countKey} start={0} end={48} duration={3} suffix=" MINS" />
        </div>
      </div>
    </div>
  );
};

export default MapAnimation;
