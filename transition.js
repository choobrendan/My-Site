// Transition effect between pages
window.addEventListener('beforeunload', function() {
    // Apply the transition effect by adding a class before navigating
    const transitionElements = document.querySelectorAll('.transition-element');
    transitionElements.forEach(element => {
      element.classList.add('transitioning');
    });
  });
  
  // Remove the transitioning class after the page has loaded
  window.addEventListener('load', function() {
    const transitionElements = document.querySelectorAll('.transition-element');
    transitionElements.forEach(element => {
      element.classList.remove('transitioning');
    });
  });