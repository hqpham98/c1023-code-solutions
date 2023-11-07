const $openButton = document.querySelector('.open-button');
const $modal = document.querySelector('.modal');
const $overlay = document.querySelector('.overlay');
const $noButton = document.querySelector('.no-button');
let modalOpened = false;

function handleOpenClick(event) {
  if (!modalOpened) {
    $modal.classList.remove('hidden');
    $overlay.classList.remove('hidden');
  } else {
    $modal.classList.add('hidden');
    $overlay.classList.add('hidden');
  }
  modalOpened = !modalOpened;
}

function handleNoClick(event) {
  if (modalOpened) {
    $modal.classList.add('hidden');
    $overlay.classList.add('hidden');
  } else {
    $modal.classList.remove('hidden');
    $overlay.classList.remove('hidden');
  }
  modalOpened = !modalOpened;
}
$openButton.addEventListener('click', handleOpenClick);
$noButton.addEventListener('click', handleNoClick);
