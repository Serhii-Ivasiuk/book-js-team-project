const ESC_KEY_CODE = 'Escape';

const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  backdrop: document.querySelector('.authorization__bacdrop'),
  modal: document.querySelector('[data-modal]'),
  signUpLink: document.querySelector('[data-action="sign-up"]'),
  signInLink: document.querySelector('[data-action="sign-in"]'),
  autorizationBtnEl: document.querySelector('.authorization__btn__submit'),
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

refs.signInLink.addEventListener('click', e => {
  e.preventDefault();
  refs.signUpLink.classList.remove('active-link');
  refs.signUpLink.classList.add('desactive-link');
  refs.signInLink.classList.remove('desactive-link');
  refs.signInLink.classList.add('active-link');
  refs.autorizationBtnEl.textContent = 'Sign in';
});

refs.signUpLink.addEventListener('click', e => {
  e.preventDefault();
  refs.signUpLink.classList.add('active-link');
  refs.signUpLink.classList.remove('desactive-link');
  refs.signInLink.classList.add('desactive-link');
  refs.signInLink.classList.remove('active-link');
  refs.autorizationBtnEl.textContent = 'Sign Up';
});
