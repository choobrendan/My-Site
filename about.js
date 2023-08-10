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