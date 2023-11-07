const charArray = Array.from(document.querySelectorAll('span'));
const $html = document.querySelector('html');
let currentCharIndex = 0;

function handleKeyPress(event) {
  if (currentCharIndex !== charArray.length) {
    currentCharIndex++;
  }
}

$html.addEventListener('keypress', handleKeyPress);
console.log(charArray);
