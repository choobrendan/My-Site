// document.addEventListener('DOMContentLoaded', function() {
//   const preElement = document.querySelector('.welcome pre');
  
// });




document.addEventListener('DOMContentLoaded', function() {
  const muteToggle = document.getElementById('muteToggle');
  const audio = document.getElementById('backgroundMusic');

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
    const muteIcon = muteToggle.querySelector('.mute-icon');
    const unmuteIcon = muteToggle.querySelector('.unmute-icon');
    muteIcon.classList.toggle('mute', isMuted);
    muteIcon.classList.toggle('unmute', !isMuted);
    unmuteIcon.classList.toggle('mute', !isMuted);
    unmuteIcon.classList.toggle('unmute', isMuted);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const welcomeDiv = document.querySelector('.welcome');

  // Check if the referrer is from the same website
  if (isReferrerFromSameWebsite()) {
    welcomeDiv.style.display = 'none';
  } else {
    welcomeDiv.style.display = 'block';
  }

  // Function to check if the referrer is from the same website
  function isReferrerFromSameWebsite() {
    const referrer = document.referrer;
    const currentHostname = window.location.hostname;
    const referrerHostname = new URL(referrer).hostname;

    return currentHostname === referrerHostname;
  }
});

