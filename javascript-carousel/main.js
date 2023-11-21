const images = [
  'images/001.png',
  'images/004.png',
  'images/007.png',
  'images/025.png',
  'images/039.png',
];
const $dotsRow = document.querySelector('.progress');
const $carouselImage = document.querySelector('.carousel-image');
const $prevButton = document.querySelector('.column-previous i');
const $forwardButton = document.querySelector('.column-forward i');
const $progressDots = document.querySelectorAll('.progress i');
let imageIndex = 0;
let intervalID = null;

function handleClick(event) {
  changeImage(event.target);
  $carouselImage.src = images[imageIndex];
  clearInterval(intervalID);
  intervalID = setInterval(changeImage, 3000);
}

function changeImage(action) {
  if (action === $prevButton) {
    // previous
    if (imageIndex === 0) {
      imageIndex = 4;
    } else {
      imageIndex--;
    }
  } else if (!action) {
    // forward
    if (imageIndex === 4) {
      imageIndex = 0;
    } else {
      imageIndex++;
    }
  } else if (action.tagName === 'I') {
    // dots icon button
    imageIndex = Number(action.id);
  }
  $carouselImage.src = images[imageIndex];
  for (let i = 0; i < 5; i++) {
    // progress dots
    if (i === imageIndex) {
      $progressDots[i].className = 'fa-solid fa-circle';
    } else {
      $progressDots[i].className = 'fa-regular fa-circle';
    }
  }
}
function handleDotsClick(event) {
  if (event.target.tagName === 'I') {
    changeImage(event.target);
    $carouselImage.src = images[imageIndex];
    clearInterval(intervalID);
    intervalID = setInterval(changeImage, 2000);
  }
}
function handleDOMLoad(event) {
  intervalID = setInterval(changeImage, 2000);
}

document.addEventListener('DOMContentLoaded', handleDOMLoad);
$prevButton.addEventListener('click', handleClick);
$forwardButton.addEventListener('click', handleClick);
$dotsRow.addEventListener('click', handleDotsClick);
