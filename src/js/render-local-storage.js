import { refs } from './utility/refs';
import { getBookDetail } from './api-service';

import amazon from '../images/book-modal/amazon@1x.png';
import amazon2x from '../images/book-modal/amazon@2x.png';
import apple from '../images/book-modal/apple@1x.png';
import apple2x from '../images/book-modal/apple@2x.png';
import bookShop from '../images/book-modal/book-shop@1x.png';
import bookShop2x from '../images/book-modal/book-shop@2x.png';
import shoppingList from '../images/shoping-list/shoping-list-bg@1x.png';
import shoppingList2x from '../images/shoping-list/shoping-list-bg@2x.png';
import empty_pic from '../images/empty_pic.jpg';
import icons from '../images/icons.svg';
import { ref } from 'firebase/storage';

let booksId = [];

localStorage.getItem('books-id') === null ? noBooksMarkup() : checkLocalBooks();

function checkLocalBooks() {
  let booksFromLocal = localStorage.getItem('books-id');
  let localBooks = JSON.parse(booksFromLocal);

  if (localBooks.length > 0) {
    localBooks.forEach(book => {
      booksId.push(book);
    });
    renderBooks();
  } else {
    noBooksMarkup();
  }
  if (localBooks.length <= 3) {
    refs.pagination.style.display = 'none';
  }
}

function renderBooks() {
  booksId.forEach(book => {
    bookCardMarkup(book.bookData);
  });
}

function bookCardMarkup({
  _id,
  title,
  list_name,
  author,
  book_image_height,
  book_image_width,
  book_image,
  description,
  buy_links,
}) {
  if (!book_image) {
    book_image = empty_pic;
    book_image_height = 500;
    book_image_width = 330;
  }
  if (!description) {
    description = 'This book has no description yet. We will add it soon.';
  }
  if (!author) {
    author = 'Unknown author';
  }
  if (!title) {
    title = 'Unknown title';
  }
  let amazonLink = '';
  let appleLink = '';
  let bookShopLink = '';

  buy_links.forEach(link => {
    if (link.name === 'Amazon') {
      amazonLink = link.url;
    }

    if (link.name === 'Apple Books') {
      appleLink = link.url;
    }

    if (link.name === 'Bookshop') {
      bookShopLink = link.url;
    }
  });
  refs.shoppingList.insertAdjacentHTML(
    'beforeend',
    `<li class="shoplist__item">
  <div class="book__container" data-id=${_id}>
    <div class="book__img-container">
      <img class="book__img" src=${book_image} alt=${title} width=${book_image_width} height=${book_image_height} />
    </div>
    <p class="book__author">${author}</p>
    <div class="book-title">
      <h2 class="book-title__title">${title}</h2>
      <h3 class="book-title__category">${list_name}</h3>
    </div>
    <div class="book-links">
      <a href="${amazonLink}" class="book-links__link" target="_blank">
        <picture>
          <source
            srcset="${amazon}, ${amazon2x}"
          />
          <img
            class="img"
            src="./images/book-modal/amazon@1x.png"
            alt="amazon"
            width="48"
          />
        </picture>
      </a>
      <a href=${appleLink} class="book-links__link" target="_blank">
        <picture>
          <source
            srcset="${apple}, ${apple2x}"
          />
          <img
            class="img"
            src="./images/book-modal/apple@1x.png"
            alt="apple"
            width="28"
          />
        </picture>
      </a>
      <a href=${bookShopLink} class="book-links__link" target="_blank">
        <picture>
          <source
            srcset="${bookShop}, ${bookShop2x}"
          />
          <img
            class="img"
            src="./images/book-modal/book-shop@1x.png"
            alt="book-shop"
            width="32"
          />
        </picture>
      </a>
    </div>
    <p class="book-overview">${description}</p>
    <button class="trash-btn" type="button">
    <svg class="trash-btn__icon" width="28" height="28">
      <use class="js-delete-book" href="${icons}#delete-book"></use>
    </svg>
  </button>
  </div>
</li>`
  );
}

function noBooksMarkup() {
  refs.shoppingList.insertAdjacentHTML(
    'beforeend',
    `<div class="shoplist__list-background">
          <p class="shoplist__list-background-text">
            This page is empty, add some books and proceed to order.
          </p>
          <picture>
            <source
              srcset="${shoppingList}, ${shoppingList2x}"
            />
            <img class="shoplist__list-background-img"
              src="${shoppingList}"
              alt="Add some books"
            />
          </picture>
        </div>`
  );
}

refs.shoppingList.addEventListener('click', e => {
  if (e.target.classList.contains('js-delete-book')) {
    const curBookId = e.target.closest('.book__container').dataset.id;
    booksId.forEach((book, index) => {
      if (book.bookId === curBookId) {
        booksId.splice(index, 1);
        e.target.closest('.shoplist__item').remove();
        updateLocal();
      }
    });

    if (booksId.length < 1) {
      noBooksMarkup();
      refs.pagination.style.display = 'none';
    }
  }
});

function updateLocal() {
  localStorage.setItem('books-id', JSON.stringify(booksId));
}
