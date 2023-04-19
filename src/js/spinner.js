import { refs } from './utility/refs';

export function showSpinner() {
  refs.spinner.classList.contains('done') &&
    refs.spinner.classList.remove('done');
  refs.spinner.insertAdjacentHTML('afterbegin', SpinnerTemplate());
  document.body.style.overflow = 'hidden';
}

export function hideSpinner() {
  !refs.spinner.classList.contains('done') &&
    refs.spinner.classList.add('done');
  refs.spinner.replaceChildren();
  document.body.style.overflow = '';
}

export function SpinnerTemplate() {
  return `
  <div class="book">
    <div class="inner">
      <div class="left"></div>
      <div class="middle"></div>
      <div class="right"></div>
    </div>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>`;
}
