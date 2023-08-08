// script.js

document.addEventListener('keydown', function() {
    const welcomeText = document.getElementById('welcomeText');
    let textContent = welcomeText.textContent;
    
    if (textContent.length > 0) {
      textContent = textContent.slice(0, -1);
      welcomeText.textContent = textContent;
    }
  });
  