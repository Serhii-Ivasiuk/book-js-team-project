import { refs } from './utility/refs';
import { getBookDetail } from './api-service';
import axios from 'axios';

import amazon from '../images/book-modal/amazon@1x.png';
import amazon2x from '../images/book-modal/amazon@2x.png';
import apple from '../images/book-modal/apple@1x.png';
import apple2x from '../images/book-modal/apple@2x.png';
import bookShop from '../images/book-modal/book-shop@1x.png';
import bookShop2x from '../images/book-modal/book-shop@2x.png';
import icons from '../images/icons.svg';
import { ref } from 'firebase/storage';

let booksId = [];

checkLocalBooks();

function checkLocalBooks() {
  let booksFromLocal = localStorage.getItem('books-id');
  let localBooks = JSON.parse(booksFromLocal);

  if (localBooks) {
    localBooks.forEach(book => {
      booksId.push(book);
    });
    renderBooks();
  }
}

function renderBooks() {
  booksId.forEach(id => {
    getBookDetail(id).then(data => {
      bookCardMarkup(data);
    });
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
  if (!description) {
    description = 'N/A';
  }
  if (!author) {
    author = 'N/A';
  }
  if (!title) {
    title = 'N/A';
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
  return refs.shoppingList.insertAdjacentHTML(
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
            srcset="${apple},${apple2x}"
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
    <button class="trash-btn js-delete-book" type="button">
    <svg class="trash-btn__icon" width="28" height="28">
      <use href="${icons}#delete-book"></use>
    </svg>
  </button>
  </div>
</li>`
  );
}

refs.shoppingList.addEventListener('click', e => {
  const curBookId = e.target.closest('.book__container').dataset.id;
  let isBookInLocal = booksId.includes(curBookId);
  if (isBookInLocal) {
    const index = booksId.indexOf(curBookId);
    if (index !== -1) {
      booksId.splice(index, 1);
      updateLocal();
      refs.shoppingList.innerHTML = '';
      renderBooks();
    }
  }
});

function updateLocal() {
  localStorage.setItem('books-id', JSON.stringify(booksId));
}
