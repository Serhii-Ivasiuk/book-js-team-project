import books from '../../images/shoping-list/shoping-list-bg@1x.png';
import { refs } from './refs';

export function notFound() {
  const imagePage404 = document.createElement('img');
  imagePage404.src = books;
  imagePage404.classList.add('not-found');
  const containerWarning = document.createElement('div');
  containerWarning.classList.add('warning-message');
  const textWarningNotFound = `<p> There are no data to display, please select another category.</p>`;
  containerWarning.innerHTML =  textWarningNotFound;
  containerWarning.appendChild(imagePage404);
  return containerWarning;
}
