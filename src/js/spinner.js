import { refs } from './utility/refs';
export function showSpinner() {
  refs.spinner.classList.contains('done') &&
    refs.spinner.classList.remove('done');
}

export function hideSpinner() {
  !refs.spinner.classList.contains('done') &&
    refs.spinner.classList.add('done');
}
