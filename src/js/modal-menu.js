import { refs } from './utility/refs';

const PAGE_PATHNAME = 'shopping-list.html';

let isMenuOpen = false;
let currentPagePathname = window.location.pathname.split('/').pop();

refs.mobMenuBtn.addEventListener('click', toggleMenu);

activePage();

export function toggleMenu() {
  isMenuOpen = !isMenuOpen;
  refs.mobMenuEl.classList.toggle('is-open');
  refs.mobMenuBtn.classList.toggle('is-open');
  onWidestScreen();
  // прокрутка сторінки
  if (isMenuOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
  window
    .matchMedia('(max-width: 768px)')
    .removeEventListener('change', onTurnScreen);
}
function onWidestScreen() {
  // закриття меню при ширших екранах
  window
    .matchMedia('(max-width: 768px)')
    .addEventListener('change', onTurnScreen);
}
function onTurnScreen(e) {
  if (!e.matches && isMenuOpen) {
    refs.mobMenuEl.classList.remove('is-open');
    refs.mobMenuBtn.classList.remove('is-open');
    isMenuOpen = false;
    document.body.style.overflow = '';
  }
}
function activePage() {
  if (currentPagePathname === PAGE_PATHNAME) {
    refs.mainPageEl.forEach(el => el.classList.remove('is-active-now'));
    refs.listPageEl.forEach(el => el.classList.add('is-active-now'));
  } else {
    refs.mainPageEl.forEach(el => el.classList.add('is-active-now'));
    refs.listPageEl.forEach(el => el.classList.remove('is-active-now'));
  }
}
