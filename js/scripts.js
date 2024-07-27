navToggle.addEventListener('click', () => {
  console.log('Menu button clicked!');
  navLinks.classList.toggle('nav__links--active');
});

const navToggle = document.querySelector('button.nav-toggle');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav__links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('nav__links--active');
});

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav__links');

  // Toggle navigation menu on click
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav__links--active');
  });

  // Smooth scroll to sections
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Add scroll animation to images
  const images = document.querySelectorAll('.display__col img');
  window.addEventListener('scroll', () => {
    images.forEach(image => {
      const imageTop = image.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;
      if (imageTop < screenHeight) {
        image.classList.add('slide-up');
      }
    });
  });
});
