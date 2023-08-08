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
        mainDiv.style.display = 'block';
        mainDiv.style.display = 'block';
      }
    }
  
    const typingInterval = 0; // Adjust typing speed (milliseconds)
    typeText();
  });
  