import { refs } from './utility/refs';

const LOCAL_STORAGE_KEY = 'ui-theme';
let savedTheme = '';

refs.darkColorSwitcher.addEventListener('click', handelChangeThemeOnDark);
refs.lightColorSwitcher.addEventListener('click', handelChangeThemeOnLight);
window.addEventListener('load', rememberSelectedTheme);

function handelChangeThemeOnDark() {
  refs.html.classList.add('dark');
  refs.logoDarkSvg.classList.remove('visually-hidden');
  refs.logoLightSvg.classList.add('visually-hidden');
  refs.amazonLink.forEach(el => el.classList.add('amazon-link'));
  localStorage.setItem(LOCAL_STORAGE_KEY, 'dark');
  refs.darkColorSwitcher.checked = true;
}

function handelChangeThemeOnLight() {
  refs.html.classList.remove('dark');
  refs.logoDarkSvg.classList.add('visually-hidden');
  refs.logoLightSvg.classList.remove('visually-hidden');
  refs.amazonLink.forEach(el => el.classList.remove('amazon-link'));
  localStorage.removeItem(LOCAL_STORAGE_KEY);
}

function rememberSelectedTheme() {
  savedTheme = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (savedTheme !== 'dark') {
    return;
  } else handelChangeThemeOnDark();
}
