// script.js

document.addEventListener('keydown', function() {
    const welcomeDiv = document.querySelector('.welcome');
    if (welcomeDiv) {
      const text = welcomeDiv.textContent;
      welcomeDiv.textContent = ''; // Clear the div's content
  
      let index = 0;
  
      function removeCharacter() {
        if (index < text.length) {
          welcomeDiv.textContent = text.substring(0, index);
          index++;
          setTimeout(removeCharacter, 50); // Delay between character removals (in milliseconds)
        } else {
          welcomeDiv.style.display = 'none';
        }
      }
  
      removeCharacter();
    }
  });
  