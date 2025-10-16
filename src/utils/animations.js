// Ripple effect utility
export const createRippleEffect = (e) => {
  if (!e.target.classList.contains('btn')) return;
  
  const ripple = document.createElement('span');
  const rect = e.target.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = e.clientX - rect.left - size / 2;
  const y = e.clientY - rect.top - size / 2;
  
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  ripple.classList.add('ripple');
  
  e.target.appendChild(ripple);
  
  setTimeout(() => {
    ripple.remove();
  }, 600);
};

// Stagger animation utility
export const staggerAnimation = (elements, delay = 100) => {
  elements.forEach((element, index) => {
    element.style.animationDelay = `${index * delay}ms`;
  });
};