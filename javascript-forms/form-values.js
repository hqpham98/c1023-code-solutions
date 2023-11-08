const $contactForm = document.querySelector('#contact-form');
function handleSubmit(event) {
  const messageData = {};
  messageData.name = $contactForm.elements.name.value;
  messageData.email = $contactForm.elements.email.value;
  messageData.message = $contactForm.elements.message.value;
  console.log('messageData:', messageData);
  event.target.reset();
  event.preventDefault();
}

$contactForm.addEventListener('submit', handleSubmit);
