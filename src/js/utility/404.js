import books from '../../images/books.png';

export function notFound() {
  const imagePage404 = document.createElement('img');
  imagePage404.src = books;
  imagePage404.classList.add('not-found');
  imagePage404.style.margin = '20px 0 0 0';
  return imagePage404;
}