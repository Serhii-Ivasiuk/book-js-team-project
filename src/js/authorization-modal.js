// const refs = {
//   openModalAuthorization: document.querySelector('[data-modal-open]'),
//   closeModalAuthorization: document.querySelector('[data-modal-close]'),
//   modal: document.querySelector('[data-modal]'),
//   backdrop: document.querySelector('.authorization__bacdrop'),
// };

// refs.openModalAuthorization.addEventListener('click', e => {
//   toggleModal();
// });

// refs.closeModalAuthorization.addEventListener('click', e => {
//   toggleModal();
// });

// refs.modal.addEventListener('click', e => {
//   if (e.target !== refs.backdrop) {
//     return;
//   }
//   toggleModal();
// });

// function toggleModal() {
//   refs.modal.classList.toggle('is-hidden');
// }

const ESC_KEY_CODE = 'Escape';

const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  backdrop: document.querySelector('.authorization__bacdrop'),
  modal: document.querySelector('[data-modal]'),
};

refs.openModalBtn.addEventListener('click', openModal);

function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    closeModel();
  }
}

function openModal() {
  refs.modal.classList.remove('is-hidden');

  // add listeners to closeModalBtn, backdrop, keydown(escape)
  refs.closeModalBtn.addEventListener('click', closeModel);
  refs.backdrop.addEventListener('click', onBackdropClick);
  window.addEventListener('keydown', onEscapeKeydown);
}

function closeModel() {
  refs.modal.classList.add('is-hidden');

  // remove listiners from closeModalBtn, backdrop, keydown(escape)
  refs.closeModalBtn.removeEventListener('click', closeModel);
  refs.backdrop.removeEventListener('click', onBackdropClick);
  window.removeEventListener('keydown', onEscapeKeydown);
}

function onEscapeKeydown(e) {
  if (e.key === ESC_KEY_CODE) {
    closeModel();
  }
}
