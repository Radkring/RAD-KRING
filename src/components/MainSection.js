import React from 'react';
import './MainSection.css';
import videoSrc from '../assets/3rd audio.mp4'; // Adjust path as needed

const MainSection = () => {
  return (
    <div className="main-section">
      <video
        className="background-video"
        src={videoSrc}
        autoPlay
        loop
        muted={false} // Change to true if you want the video to be muted
        playsInline
        preload="auto"
        onError={(e) => console.error("Video failed to load:", e.target.error)}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* You can add other content here if needed */}
    </div>
  );
};

export default MainSection;
