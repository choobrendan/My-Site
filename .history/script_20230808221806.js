// script.js



document.addEventListener('DOMContentLoaded', function() {
  
    const preElement = document.querySelector('.welcome pre');
    const textContent = preElement.textContent;
    preElement.textContent = ''; // Clear the content
  
    let charIndex = 0;
    let deleteInterval;
  
    function typeText() {
      preElement.textContent += textContent.charAt(charIndex);
      charIndex++;
  
      if (charIndex < textContent.length) {
        setTimeout(typeText, typingInterval);
      } else {
        // preElement.innerHTML += '<p>Press any key to continue</p><p>&gt;<span class="blink">_</span></p>';
        document.addEventListener('keydown', startDeleting);
      }
    }
  
    function startDeleting() {
      document.removeEventListener('keydown', startDeleting);
      charIndex = textContent.length - 1;
      deleteInterval = setInterval(deleteText, typingInterval);
    }
  
    function deleteText() {
      preElement.textContent = preElement.textContent.slice(0, -1);
  
      if (preElement.textContent === '') {
        clearInterval(deleteInterval);
        preElement.style.display = 'none';
  
        const mainDiv = document.querySelector('#main');
        const welcomeDiv = document.querySelector('.welcome');
        welcomeDiv.style.display = 'none';
        mainDiv.style.display = 'block';
        mainDiv.style.opacity = '0';
        let fadeInInterval = setInterval(fadeIn, fadeInIntervalDuration);
      let opacity = 0.2;
      function fadeIn() {
        opacity += 0.05;
        mainDiv.style.opacity = opacity;

        if (opacity >= 1) {
          clearInterval(fadeInInterval);
        }
      }
      }
    }
  
    const typingInterval = 0; // Adjust typing speed (milliseconds)
    typeText();
  });
  