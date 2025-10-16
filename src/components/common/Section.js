import React from 'react';

const Section = ({ 
  children, 
  className = '', 
  id,
  background = 'light',
  padding = 'py-5',
  ...props 
}) => {
  const backgroundClasses = {
    light: 'bg-light',
    dark: 'bg-dark text-white',
    primary: 'bg-primary text-white',
    transparent: 'bg-transparent'
  };

  const classes = `section ${padding} ${backgroundClasses[background]} ${className}`;

  return (
    <section id={id} className={classes} {...props}>
      <div className="container">
        {children}
      </div>
    </section>
  );
};

export default Section;