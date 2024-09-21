import React, { useRef, useEffect } from 'react';
import './DesignViews.css'; // Import the styles

// Import images
import image1 from '../assets/Render.11.png';
import image2 from '../assets/design 9.png';
import image3 from '../assets/final top.png';
import image4 from '../assets/1st.png';
import image5 from '../assets/lofted winglets.png';

const DesignViews = () => {
  const scrollContainerRef = useRef(null);
  const images = [image1, image2, image3, image4, image5];

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const scrollInterval = setInterval(() => {
      if (scrollContainer) {
        const scrollWidth = scrollContainer.scrollWidth;
        const containerWidth = scrollContainer.clientWidth;
        const newScrollLeft = (scrollContainer.scrollLeft + containerWidth) % scrollWidth;

        scrollContainer.scrollTo({
          left: newScrollLeft,
          behavior: 'smooth',
        });
      }
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="design-views-container">
      <div className="design-views-scroll" ref={scrollContainerRef}>
        {images.map((image, index) => (
          <div className="design-card" key={index}>
            <img src={image} alt={`Design view ${index + 1}`} className="design-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignViews;
