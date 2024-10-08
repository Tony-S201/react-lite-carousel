import React, { useState, useEffect, useRef } from 'react';
import { slideStyle, nextBtnStyle, prevBtnStyle, containerStyle, slideItemStyle } from '../styles';

const ReactLiteCarousel = ({ children, autoPlay = false, autoPlayInterval = 3000, displayButtons = true, containerWidth = null, btnBackgroundColor = '#757575', btnArrowColor = '#FFFFFF', btnRounded = false }) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = React.Children.count(children);
  const autoPlayRef = useRef();

  // Go to the next slide.
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  // Go to the previous slide.
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  // Autoplay slides.
  useEffect(() => {
    if (autoPlay) {
      autoPlayRef.current = nextSlide; // Keep nextSlide function reference between render.
    }
  });

  useEffect(() => {
    if (autoPlay) {
      const play = () => {
        autoPlayRef.current();
      };
      const interval = setInterval(play, autoPlayInterval);
      return () => clearInterval(interval); // Clean at the end.
    }
  }, [autoPlay, autoPlayInterval]);

  return (
    <div style={containerStyle(containerWidth)}>
      {/* Slides */}
      <div style={slideStyle(currentIndex)}>
        {React.Children.map(children, (child, index) => (
          <div key={index} style={slideItemStyle}>{child}</div>
        ))}
      </div>

      {displayButtons ? (
        <>
          <button
            onClick={prevSlide}
            style={prevBtnStyle(btnBackgroundColor, btnArrowColor, btnRounded)}
          >
            &lt;
          </button>

          <button
            onClick={nextSlide}
            style={nextBtnStyle(btnBackgroundColor, btnArrowColor, btnRounded)}
          >
            &gt;
          </button>
        </>
      ): (<></>)}
    </div>
  )
}

export default ReactLiteCarousel;