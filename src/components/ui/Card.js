import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  hover = false,
  glassmorphism = false,
  ...props 
}) => {
  const baseClasses = 'card h-100';
  const hoverClasses = hover ? 'card-hover' : '';
  const glassClasses = glassmorphism ? 'glassmorphism-card' : '';
  
  const classes = `${baseClasses} ${hoverClasses} ${glassClasses} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;