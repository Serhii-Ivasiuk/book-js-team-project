const refs = {
  openModalAuthorization: document.querySelector('[data-modal-open]'),
  closeModalAuthorization: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  backdrop: document.querySelector('.authorization__bacdrop'),
};

refs.openModalAuthorization.addEventListener('click', e => {
  toggleModal();
});

refs.closeModalAuthorization.addEventListener('click', e => {
  toggleModal();
});

refs.modal.addEventListener('click', e => {
  if (e.target !== refs.backdrop) {
    return;
  }
  toggleModal();
});

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
}
