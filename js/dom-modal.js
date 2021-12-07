// События формы
const modalForm = document.querySelector('.modal-form');

// const buttonElem = document.querySelector('.modal-button');
// const checkboxElem = document.querySelector('.checkbox-input');

const elements = {
  checkboxElem: document.querySelector('.checkbox-input'),
  buttonElem: document.querySelector('.modal-button'),
};

elements.checkboxElem.addEventListener('change', onLicenseChange);

function onLicenseChange(event) {
  console.log(event.currentTarget.checked);
  console.log(elements.buttonElem.disabled);
  elements.buttonElem.disabled = !elements.buttonElem.disabled;
  if (elements.buttonElem.disabled) {
    elements.buttonElem.style.backgroundColor = 'grey';
  } else {
    elements.buttonElem.style.backgroundColor = 'rgba(33, 150, 243, 1)';
  }
}

modalForm.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  formData.forEach((name, value) => {
    console.log(`onFormSubmit -> name: ${name}`);
    console.log(`onFormSubmit -> value: ${value}`);
  });
}
