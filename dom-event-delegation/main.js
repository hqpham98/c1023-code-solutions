const $taskList = document.querySelector('ul.task-list');

function handleClick(event) {
  console.log('event.target', event.target);
  console.log('event.target.tagName', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    const temp = event.target.closest('.task-list-item');
    console.log('event.target.closest(".task-list-item")', temp);
    temp.remove();
  }
}

$taskList.addEventListener('click', handleClick);
