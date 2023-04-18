import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { refs } from './utility/refs';

export const books = JSON.parse(localStorage.getItem('books-id'));

console.log(books.length);
const options = {
  totalItems: books.length,
  itemsPerPage: 3,
  visiblePages: 3,
  page: 1,
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
const instance = new Pagination(refs.pagination, options);
export function cardsPagination() {
  instance.on('afterMove', () => {
    const currentPage = instance.getCurrentPage();
    console.log(currentPage);

    const firstCardIndex = (currentPage - 1) * 3;
    const lastCardIndex = (currentPage - 1) * 3 + 3;
    const booksPerPage = books.slice(firstCardIndex, lastCardIndex);

    return booksPerPage;
  });
}
console.log(cardsPagination());
