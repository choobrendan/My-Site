// script.js

document.addEventListener('DOMContentLoaded', function() {
    const preElement = document.querySelector('.welcome pre');
    const textContent = preElement.textContent;
    preElement.textContent = ''; // Clear the content
  
    let charIndex = 0;
    const typingInterval = 1; // Adjust typing speed (milliseconds)
  
    function typeText() {
      if (charIndex < textContent.length) {
        preElement.textContent += textContent.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingInterval);
      } else {
        preElement.innerHTML += '<p>Press any key to continue</p><p>&gt;<span class="blink">_</span></p>';
        
        document.addEventListener('keydown', function() {
          preElement.style.display = 'none';
        });
        
        setTimeout(eraseText, typingInterval);
      }
    }
  
    function eraseText() {
      if (charIndex > 0) {
        preElement.textContent = preElement.textContent.slice(0, -1);
        charIndex--;
        setTimeout(eraseText, typingInterval);
      }
    }
  
    typeText();
  });
  