document.addEventListener('keydown', function() {
    const welcomeDiv = document.querySelector('.welcome');
    if (welcomeDiv) {
      const text = welcomeDiv.textContent.trim();
      let currentIndex = 0;
  
      function animateText() {
        if (currentIndex < text.length) {
          welcomeDiv.textContent = text.slice(0, currentIndex);
          currentIndex++;
          setTimeout(animateText, 100); // Adjust the delay as needed
        } else {
          welcomeDiv.style.display = 'none';
        }
      }
  
      animateText();
    }
  });