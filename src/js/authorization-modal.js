import { refs } from './utility/refs';
const ESC_KEY_CODE = 'Escape';

refs.openModalBtn.addEventListener('click', openModal);
refs.signUpMobileBtn.addEventListener('click', openModal);

function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    closeModel();
  }
}

function openModal() {
  refs.signUpForm.reset();
  refs.modal.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';

  // add listeners to closeModalBtn, backdrop, keydown(escape)
  refs.closeModalBtn.addEventListener('click', closeModel);
  refs.backdrop.addEventListener('click', onBackdropClick);
  window.addEventListener('keydown', onEscapeKeydown);
}

function closeModel() {
  refs.modal.classList.add('is-hidden');
  document.body.style.overflow = '';

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

refs.signUpLink.disabled = true;

refs.signInLink.addEventListener('click', e => {
  e.preventDefault();
  refs.signUpLink.classList.remove('active-link');
  refs.signUpLink.classList.add('desactive-link');
  refs.signInLink.classList.remove('desactive-link');
  refs.signInLink.classList.add('active-link');
  refs.autorizationBtnEl.textContent = 'Sign in';

  refs.signInForm.classList.remove('display-form');
  refs.signUpForm.classList.add('display-form');

  refs.signUpLink.disabled = false;
  refs.signInLink.disabled = true;
});

refs.signUpLink.addEventListener('click', e => {
  e.preventDefault();
  refs.signUpLink.classList.add('active-link');
  refs.signUpLink.classList.remove('desactive-link');
  refs.signInLink.classList.add('desactive-link');
  refs.signInLink.classList.remove('active-link');
  refs.autorizationBtnEl.textContent = 'Sign Up';

  refs.signInForm.classList.add('display-form');
  refs.signUpForm.classList.remove('display-form');

  refs.signUpLink.disabled = true;
  refs.signInLink.disabled = false;
});
