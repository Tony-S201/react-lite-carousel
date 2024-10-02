/* Container */

export const containerStyle = (containerWidth) => ({
    width: `${containerWidth ? containerWidth : 100}%`, // Container width
    overflow: 'hidden',
    position: 'relative',
    textAlign: 'center',
    border: '2px solid black',
    height: '100%' // Container height
});

/* Slides */

export const slideStyle = (currentIndex) => {
    return {
        display: 'flex',
        transition: 'transform 0.5s ease-in-out',
        transform: `translateX(-${currentIndex * 100}%)`,
        width: '100%',
        height: '100%'
    }
  };

/* Slide item */

export const slideItemStyle = {
    flexShrink: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

/* Navigation Buttons */

export const nextBtnStyle = {
    position: 'absolute',
    top: '50%',
    right: '10px',
    transform: 'translateY(-50%)',
    zIndex: 1,
    background: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    border: 'none',
    padding: '10px',
    cursor: 'pointer'
  };

export const prevBtnStyle = {
    position: 'absolute',
    top: '50%',
    left: '10px',
    transform: 'translateY(-50%)',
    zIndex: 1,
    background: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
  };