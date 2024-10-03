/* Container */

export const containerStyle = (containerWidth) => ({
  width: `${containerWidth ? containerWidth : 100}%`, // Container width
  overflow: 'hidden',
  position: 'relative',
  textAlign: 'center',
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

export const nextBtnStyle = (btnBackgroundColor, btnArrowColor, btnRounded) => {
return {
  position: 'absolute',
  top: '50%',
  right: '10px',
  transform: 'translateY(-50%)',
  zIndex: 1,
  backgroundColor: `${btnBackgroundColor}`,
  color: `${btnArrowColor}`,
  border: 'none',
  padding: '10px',
  cursor: 'pointer',
  borderRadius: btnRounded ? '9999px' : '0',
}
};

export const prevBtnStyle = (btnBackgroundColor, btnArrowColor, btnRounded) => {
return {
  position: 'absolute',
  top: '50%',
  left: '10px',
  transform: 'translateY(-50%)',
  zIndex: 1,
  backgroundColor: `${btnBackgroundColor}`,
  color: `${btnArrowColor}`,
  border: 'none',
  padding: '10px',
  cursor: 'pointer',
  borderRadius: btnRounded ? '9999px' : '0',
}
};