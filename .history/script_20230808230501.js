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
        mainDiv.style.top = '20px'; // Initial position
        let fadeInInterval = setInterval(fadeIn, fadeInIntervalDuration);
        let moveUpInterval = setInterval(moveUp, moveUpIntervalDuration);
      let opacity = 0;
      let position = 200; // Initial position
      function fadeIn() {
        opacity += 0.05;
        mainDiv.style.opacity = opacity;

        if (opacity >= 1) {
          clearInterval(fadeInInterval);
        }
      }
      function moveUp() {
        position -= 10; // Adjust the amount to move up
        mainDiv.style.top = position + 'px';

        if (position <= 0) {
          clearInterval(moveUpInterval);
        }
      }
      }
    }
    const fadeInIntervalDuration = 100;
    const moveUpIntervalDuration = 100;
    const typingInterval = 0; // Adjust typing speed (milliseconds)
    typeText();
  });



  document.addEventListener('DOMContentLoaded', function() {
    const muteToggle = document.getElementById('muteToggle');
    const audio = document.getElementById('backgroundMusic');
  
    let isMuted = false;
  
    muteToggle.addEventListener('click', function() {
      isMuted = !isMuted;
      audio.muted = isMuted;
      muteToggle.classList.toggle('muted');
  
      // Toggle mute/unmute classes
      const muteIcons = muteToggle.querySelectorAll('.mute-icon');
      muteIcons.forEach(icon => {
        icon.classList.toggle('mute', !isMuted);
        icon.classList.toggle('unmute', isMuted);
      });
    });
  });