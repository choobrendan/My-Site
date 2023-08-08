// script.js

document.addEventListener('keydown', function() {
    const textContainer = document.getElementById('textContainer');
    
    // Get the first child element (span) and remove it
    const firstSpan = textContainer.querySelector('span');
    if (firstSpan) {
      textContainer.removeChild(firstSpan);
    }
  });
  