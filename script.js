AOS.init({
    delay: 200, // values from 0 to 3000, with step 50ms
    duration: 1500, // values from 0 to 3000, with step 50ms
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  });

  function scrollToSection(id) {
    const element = document.getElementById(id); 
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}


document.getElementById('scrollToTopButton').addEventListener('click', function() {
  scrollToTop();
});

function scrollToTop() {
  const targetElement = document.getElementById('home');

  if (targetElement) {
      const targetPosition = targetElement.offsetTop;
      const currentPosition = window.pageYOffset;

      const distance = targetPosition - currentPosition;
      const startTime = performance.now();
      const duration = 1000;

      function scrollStep(timestamp) {
          const timeElapsed = timestamp - startTime;
          const progress = Math.min(timeElapsed / duration, 1);

          window.scrollTo(0, currentPosition + distance * progress);

          if (timeElapsed < duration) {
              window.requestAnimationFrame(scrollStep);
          }
      }

      window.requestAnimationFrame(scrollStep);
  }
}

