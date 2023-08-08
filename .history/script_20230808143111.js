// script.js

const preElement = document.querySelector('.welcome pre');
const blinkElement = preElement.querySelector('.blink');

let text = preElement.textContent;
let index = 0;

preElement.textContent = '';

function typeText() {
  if (index < text.length) {
    preElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 1); // Adjust the delay (in milliseconds) between each character
  } else {
    blinkElement.style.visibility = 'visible';
  }
}

document.addEventListener('keydown', function() {
  preElement.style.display = 'block';
  blinkElement.style.visibility = 'hidden';
  preElement.textContent = '';
  index = 0;
  typeText();
});
