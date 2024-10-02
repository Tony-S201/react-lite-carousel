export const slideStyles = (currentIndex) => {
    return {
        display: 'flex',
        transition: 'transform 0.5s ease-in-out',
        transform: `translateX(-${currentIndex * 100}%)`,
    }
};

export const containerStyles = {
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
    textAlign: 'center' 
};

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