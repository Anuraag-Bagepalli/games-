document.addEventListener('DOMContentLoaded', () => {
  const gameItems = document.querySelectorAll('.game-item');

  const slideInOptions = {
      threshold: 0.1
  };

  const slideInObserver = new IntersectionObserver((entries, slideInObserver) => {
      entries.forEach(entry => {
          if (!entry.isIntersecting) {
              return;
          } else {
              entry.target.classList.add('slide-in');
              slideInObserver.unobserve(entry.target);
          }
      });
  }, slideInOptions);

  gameItems.forEach(gameItem => {
      slideInObserver.observe(gameItem);
  });
});
