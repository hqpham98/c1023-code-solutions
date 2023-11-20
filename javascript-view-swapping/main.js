const $tabContainer = document.querySelector('.tab-container');
const $tabElements = document.querySelectorAll('.tab');
const $viewElements = document.querySelectorAll('.view');

function handleClick(event) {
  if (event.target.matches('.tab')) {
    for (const elem of $tabElements) {
      if (event.target === elem) {
        elem.className = 'tab active';
      } else {
        elem.className = 'tab';
      }
    }

    const $dataView = event.target.getAttribute('data-view');
    for (const elem of $viewElements) {
      if ($dataView === elem.getAttribute('data-view')) {
        elem.className = 'view';
      } else {
        elem.className = 'view hidden';
      }
    }
  }
}

$tabContainer.addEventListener('click', handleClick);
