const $clickButton = document.querySelector('.click-button');

function handleClick(event) {
  console.log('button clicked');
  console.log('event', event);
  console.log('event.target', event.target);
}

$clickButton.addEventListener('click', handleClick);

const $hoverButton = document.querySelector('.hover-button');

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event', event);
  console.log('event.target', event.target);
}

$hoverButton.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event', event);
  console.log('event.target', event.target);
}

const $doubleClickButton = document.querySelector('.double-click-button');
$doubleClickButton.addEventListener('dblclick', handleDoubleClick);
