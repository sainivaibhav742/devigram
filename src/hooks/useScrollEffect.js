import { useState, useEffect } from 'react';

export const useScrollEffect = (threshold = 50) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setIsScrolled(window.scrollY > threshold);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      // Check initial scroll position
      handleScroll();
      
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [threshold]);

  return isScrolled;
};