import { refs } from './utility/refs';
const ESC_KEY_POPUP = 'Escape';

// add listeners to popupCloseBtn, popupBackdrop, keydown(escape)
// !!! ------- SHOULD BE REMOVED TO OPEN POP UP FUNCTION -------- !!!
refs.popupCloseBtn.addEventListener('click', closePopUp);
refs.popupBackdrop.addEventListener('click', onPopUpBackdropClick);
window.addEventListener('keydown', onPopUpEscapeKeydown);

// click on backdrop closes Pop Up
function onPopUpBackdropClick(event) {
  if (event.currentTarget === event.target) {
    closePopUp();
  }
}

// click on Esc closes Pop Up
function onPopUpEscapeKeydown(event) {
  if (event.key === ESC_KEY_POPUP) {
    closePopUp();
  }
}

// closes Pop Up and removes listeners
function closePopUp() {
  refs.popupBackdrop.classList.add('is-hidden');

  // remove listeners from closeModalBtn, backdrop, keydown(escape)
  refs.popupCloseBtn.removeEventListener('click', closePopUp);
  refs.popupBackdrop.removeEventListener('click', onPopUpBackdropClick);
  window.removeEventListener('keydown', onPopUpEscapeKeydown);
}
