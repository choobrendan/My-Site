const welcomeText = `\
'##:::::'##:'########:'##::::::::'######:::'#######::'##::::'##:'########:
##:'##: ##: ##.....:: ##:::::::'##... ##:'##.... ##: ###::'###: ##.....::
##: ##: ##: ##::::::: ##::::::: ##:::..:: ##:::: ##: ####'####: ##:::::::
##: ##: ##: ######::: ##::::::: ##::::::: ##:::: ##: ## ### ##: ######:::
##: ##: ##: ##...:::: ##::::::: ##::::::: ##:::: ##: ##. #: ##: ##...::::
##: ##: ##: ##::::::: ##::::::: ##::: ##: ##:::: ##: ##:.:: ##: ##:::::::
. ###. ###:: ########: ########:. ######::. #######:: ##:::: ##: ########:
:...::...:::........::........:::......::::.......:::..:::::..::........::
Press any key to continue
&gt;<span class="blink">_</span>`;

const welcomeDiv = document.querySelector('.welcome');
const blinkSpan = welcomeDiv.querySelector('.blink');
let currentIndex = 0;
let timeout;

function typeText() {
  if (currentIndex < welcomeText.length) {
    welcomeDiv.innerHTML = welcomeText.substring(0, currentIndex) + `<span class="blink">_</span>`;
    currentIndex++;
    timeout = setTimeout(typeText, 50);
  } else {
    clearTimeout(timeout);
    welcomeDiv.innerHTML = welcomeText;
  }
}

typeText();

document.addEventListener('keydown', function() {
  clearTimeout(timeout);
  welcomeDiv.style.display = 'none';
});
