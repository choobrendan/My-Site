document.addEventListener('keydown', function() {
    const welcomeDiv = document.querySelector('.welcome');
    if (welcomeDiv) {
      welcomeDiv.style.display = 'none';
    }
  });