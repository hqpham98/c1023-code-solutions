const $userList = document.querySelector('#user-list');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  console.log('status:', xhr.status);
  console.log('response:', xhr.response);

  for (const user of xhr.response) {
    const li = document.createElement('li');
    li.textContent = user.name;
    $userList.appendChild(li);
  }
});

xhr.send();
