import React from 'react';
import './MainSection.css';
import videoSrc from '../assets/1st audio.mp4'; // Adjust path as needed

const MainSection = () => {
  return (
    <div className="main-section">
      <video
        className="background-video"
        src={videoSrc}
        autoPlay
        loop
        muted={false} // Change to true if you want to mute the audio
        playsInline
        preload="auto"
        onError={(e) => console.error("Video failed to load:", e.target.error)}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default MainSection;

