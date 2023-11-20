const $countdownDisplay = document.querySelector('.countdown-display');
let counter = 4;

function handleDOMLoad(event) {
  function countdown() {
    if (counter === 1) {
      clearInterval(intervalID);
      $countdownDisplay.innerText = '~Earth Beeeelooowww Us~';
    } else {
      $countdownDisplay.innerText = (--counter).toString();
    }
  }
  const intervalID = setInterval(countdown, 1000);
}

document.addEventListener('DOMContentLoaded', handleDOMLoad);
