const circle = document.querySelector('.circle');
const background = document.querySelector('.container');

let turnedOff = true;
function handleClick(event) {
  if (turnedOff) {
    circle.className = 'circle light-bulb';
    background.className = 'container light-bg';
  } else {
    circle.className = 'circle dark-bulb';
    background.className = 'container dark-bg';
  }
  turnedOff = !turnedOff;
}

circle.addEventListener('click', handleClick);
