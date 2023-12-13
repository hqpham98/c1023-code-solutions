const charArray = document.querySelectorAll('span');
let i = 0;

function handleKeyPress(event) {
  console.dir(event);
  if (i < charArray.length) {
    if (event.key === charArray[i].textContent) {
      charArray[i].classList.add('green');
      charArray[i].classList.remove('red');
      charArray[i].classList.remove('current-char');
      i++;
      if (i < charArray.length) {
        charArray[i].classList.add('current-char');
      }
    } else {
      charArray[i].classList.add('red');
    }
  }
}

document.addEventListener('keypress', handleKeyPress);
