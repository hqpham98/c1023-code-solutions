const charArray = Array.from(document.querySelectorAll('span'));
const $html = document.querySelector('html');
let i = 0;

function handleKeyPress(event) {
  if (i < charArray.length) {
    if (event.key.trim() === charArray[i].textContent.trim()) {
      charArray[i].classList.add('green');
    } else {
      charArray[i].classList.add('red');
    }
    charArray[i].classList.remove('current-char');
    i++;
    if (i < charArray.length) {
      charArray[i].classList.add('current-char');
    }
  }
}

$html.addEventListener('keypress', handleKeyPress);
console.log(charArray);
