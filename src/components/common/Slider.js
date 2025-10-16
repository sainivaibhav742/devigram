import React from 'react';

const Slider = ({ 
  children, 
  className = '', 
  speed = 30,
  direction = 'left',
  pauseOnHover = true 
}) => {
  const sliderClasses = `slider-container ${className}`;
  const trackClasses = `slider-track ${direction === 'right' ? 'reverse' : ''}`;
  
  const style = {
    '--slider-speed': `${speed}s`,
    animationPlayState: pauseOnHover ? 'running' : 'paused'
  };

  return (
    <div className={sliderClasses}>
      <div 
        className={trackClasses} 
        style={style}
        onMouseEnter={(e) => pauseOnHover && (e.target.style.animationPlayState = 'paused')}
        onMouseLeave={(e) => pauseOnHover && (e.target.style.animationPlayState = 'running')}
      >
        {children}
        {children} {/* Duplicate for seamless loop */}
      </div>
    </div>
  );
};

export default Slider;