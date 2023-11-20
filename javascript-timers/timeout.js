const $message = document.querySelector('.message');

function handleDOMLoad(event) {
  function renameHeader() {
    $message.innerText = 'Hello There';
  }
  setTimeout(renameHeader, 2000);
}

document.addEventListener('DOMContentLoaded', handleDOMLoad);
