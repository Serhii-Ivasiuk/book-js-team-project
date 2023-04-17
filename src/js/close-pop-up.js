import { refs } from './utility/refs';
import { bookToLocal } from './bookshelf';
const ESC_KEY_POPUP = 'Escape';

// click on backdrop closes Pop Up
export function onPopUpBackdropClick(event) {
  if (event.currentTarget === event.target) {
    closePopUp();
  }
}

// click on Esc closes Pop Up
export function onPopUpEscapeKeydown(event) {
  if (event.key === ESC_KEY_POPUP) {
    closePopUp();
  }
}

// closes Pop Up and removes listeners
export function closePopUp() {
  refs.popupBackdrop.classList.add('is-hidden');

  // remove listeners from closeModalBtn, backdrop, keydown(escape)
  refs.popupCloseBtn.removeEventListener('click', closePopUp);
  refs.popupBackdrop.removeEventListener('click', onPopUpBackdropClick);
  refs.addToLocalBtn.removeEventListener('click', bookToLocal);
  window.removeEventListener('keydown', onPopUpEscapeKeydown);
  document.body.style.overflow = '';
}
