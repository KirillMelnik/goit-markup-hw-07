// События формы
const modalForm = document.querySelector('.modal-form');

const elements = {
  checkboxElem: document.querySelector('.checkbox-input'),
  buttonElem: document.querySelector('.modal-button'),
};

elements.checkboxElem.addEventListener('change', onLicenseChange);

function onLicenseChange(event) {
  const box = event.currentTarget;
  elements.buttonElem.disabled = !box.checked;
  if (!elements.buttonElem.disabled) {
    elements.buttonElem.classList.add('modal-button-second');
  }
  if (!box.checked) {
    elements.buttonElem.classList.remove('modal-button-second');
  }
}

elements.buttonElem.addEventListener('mouseenter', onMouseEnter);
elements.buttonElem.addEventListener('mouseleave', onMouseLeave);

function onMouseEnter(event) {
  const box = event.currentTarget;
  box.classList.add('modal-button-hover');
}

function onMouseLeave(event) {
  const box = event.currentTarget;
  box.classList.remove('modal-button-hover');
}

modalForm.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  formData.forEach((name, value) => {
    console.log(`onFormSubmit -> value: ${value}`);
    console.log(`onFormSubmit -> name: ${name}`);
  });
  event.currentTarget.reset();
}
