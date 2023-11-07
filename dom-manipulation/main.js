let clickCounter = 0;

const $hotButton = document.querySelector('.hot-button');
const $clickCount = document.querySelector('.click-count');

function handleClick() {
  clickCounter++;
  $clickCount.textContent = 'Clicks: ' + clickCounter;

  if (clickCounter < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (clickCounter < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (clickCounter < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (clickCounter < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (clickCounter < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
}
$hotButton.addEventListener('click', handleClick);
