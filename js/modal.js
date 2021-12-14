(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    backdrop: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', onOpenModal);
  refs.closeModalBtn.addEventListener('click', onCloseModal);
  refs.backdrop.addEventListener('click', onBackDropClick);

  function onOpenModal() {
    refs.backdrop.classList.remove('is-hidden');
    window.addEventListener('keydown', onEscKeyPress);
  }

  function onCloseModal() {
    refs.backdrop.classList.add('is-hidden');
    window.removeEventListener('keydown', onEscKeyPress);
  }

  function onBackDropClick(event) {
    if (event.currentTarget === event.target) {
      onCloseModal();
    }
  }

  function onEscKeyPress(event) {
    const ESC_KEY_CODE = 'Escape';
    if (event.code === ESC_KEY_CODE) {
      onCloseModal();
    }
  }
})();
