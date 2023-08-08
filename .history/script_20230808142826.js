// script.js

document.addEventListener('keydown', function() {
    const welcomePre = document.querySelector('.welcome pre');
    if (welcomePre) {
      let content = welcomePre.textContent;
      content = content.slice(0, -1); // Remove the last character
      welcomePre.textContent = content;
    }
  });
  
  