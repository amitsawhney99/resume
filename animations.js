// Intersection Observer for scroll animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  // Animate elements on scroll
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  animatedElements.forEach(el => observer.observe(el));

  // Floating squares animation
  const createFloatingSquare = (size, duration, delay) => {
    const square = document.createElement('div');
    square.classList.add('floating-square');
    square.style.width = `${size}px`;
    square.style.height = `${size}px`;
    square.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
    return square;
  };

  const heroSection = document.getElementById('hero');
  const square1 = createFloatingSquare(50, 6, 0);
  const square2 = createFloatingSquare(30, 5, 1);
  
  heroSection.appendChild(square1);
  heroSection.appendChild(square2);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});