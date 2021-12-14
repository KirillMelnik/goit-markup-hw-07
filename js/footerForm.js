const footerElements = {
  formElem: document.querySelector('.subscribe-email-form'),
  buttonElem: document.querySelector('.subscribe-email-button'),
};

footerElements.formElem.addEventListener('submit', onSubscribeSubmit);
function onSubscribeSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  formData.forEach(value => {
    console.log(`onSubscribeSubmit -> value: ${value}`);
  });
  event.currentTarget.reset();
}
