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
    setTimeout(typeText, 100); // Adjust the delay (in milliseconds) between each character
  } else {
    blinkElement.style.visibility = 'visible';
  }
}

typeText();

document.addEventListener('keydown', function() {
  preElement.style.display = 'none';
});
