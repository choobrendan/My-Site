// script.js

document.addEventListener('DOMContentLoaded', function() {
    const preElement = document.querySelector('.welcome pre');
    const textContent = preElement.textContent;
    preElement.textContent = ''; // Clear the content
  
    let charIndex = 0;
    const typingInterval = 50; // Adjust typing speed (milliseconds)
  
    function typeText() {
      preElement.textContent += textContent.charAt(charIndex);
      charIndex++;
  
      if (charIndex < textContent.length) {
        setTimeout(typeText, typingInterval);
      } else {
        preElement.innerHTML += '<p>Press any key to continue</p><p>&gt;<span class="blink">_</span></p>';
        document.addEventListener('keydown', function() {
          preElement.style.display = 'none';
        });
      }
    }
  
    typeText();
  });
  