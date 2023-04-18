import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { refs } from './utility/refs';
import { bookCardMarkup } from './render-local-storage';

let currentPage = 1;
const books = JSON.parse(localStorage.getItem('books-id'));

const options = {
  totalItems: books.length,
  itemsPerPage: 3,
  visiblePages: 3,
  centerAlign: false,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};
export const instance = new Pagination(refs.pagination, options);
let booksPerPage = books.slice(0, 3);
booksPerPage.forEach(book => {
  bookCardMarkup(book.bookData);
});
instance.on('afterMove', () => {
  refs.shoppingList.innerHTML = '';
  currentPage = instance.getCurrentPage();
  let firstCardIndex = (currentPage - 1) * 3;
  let lastCardIndex = (currentPage - 1) * 3 + 3;
  let booksPerPage = books.slice(firstCardIndex, lastCardIndex);
  return booksPerPage.forEach(book => {
    bookCardMarkup(book.bookData);
  });
});
