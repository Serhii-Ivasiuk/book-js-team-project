import { refs } from './utility/refs';

export function showSpinner() {
  refs.spinner.classList.contains('done') &&
    refs.spinner.classList.remove('done');
    document.body.style.overflow = 'hidden';
}

export function hideSpinner() {
  !refs.spinner.classList.contains('done') &&
    refs.spinner.classList.add('done');
    document.body.style.overflow = '';
}