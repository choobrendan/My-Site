document.addEventListener('DOMContentLoaded', function() {
  const preElement = document.querySelector('.welcome pre');
  const textContent = preElement.textContent;
  const press_anywhere = document.querySelector('#press-anywhere');
  const press_anykey = document.querySelector('#press-anykey');
  if (isMobile()) {
    press_anykey.style.display = 'none';
  } else {
    press_anywhere.style.display = 'none';
  }


  preElement.textContent = ''; // Clear the content

  let charIndex = 0;
  let deleteInterval;

  function typeText() {
    preElement.textContent += textContent.charAt(charIndex);
    charIndex++;

    if (charIndex < textContent.length) {
      setTimeout(typeText, typingInterval);
    } else {
      if (isMobile()) {
        document.addEventListener('touchstart', startDeleting);
        press_anykey.style.display = 'none';
      } else {
        document.addEventListener('keydown', startDeleting);
        press_anywhere.style.display = 'none';
      }
    }
  }

  function startDeleting() {
    removeEventListeners();
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

  function removeEventListeners() {
    if (isMobile()) {
      document.removeEventListener('touchstart', startDeleting);

    } else {
      document.removeEventListener('keydown', startDeleting);
    }
  }

  function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  const fadeInIntervalDuration = 100;
  const moveUpIntervalDuration = 100;
  const typingInterval = 0; // Adjust typing speed (milliseconds)
  typeText();
});

document.addEventListener('DOMContentLoaded', function() {
  const muteToggle = document.getElementById('muteToggle');
  const audio = document.getElementById('backgroundMusic');
  const muteIcon = muteToggle.querySelector('.mute-icon');
  const unmuteIcon = muteToggle.querySelector('.unmute-icon');

  let isMuted = true;

  muteToggle.addEventListener('click', function() {
    if (isMuted) {
      audio.play(); // Play music when unmute button is clicked
    } else {
      audio.pause(); // Pause music when mute button is clicked
    }
    isMuted = !isMuted;
    audio.muted = isMuted;

    // Toggle visibility of mute and unmute icons
    muteIcon.classList.toggle('hidden', !isMuted);
    unmuteIcon.classList.toggle('hidden', isMuted);
  });
});
