import { refs } from './utility/refs';
import { doc } from 'firebase/firestore/lite';
import { getBookDetail } from './api-service';

import {
  onPopUpBackdropClick,
  onPopUpEscapeKeydown,
  closePopUp,
} from './close-pop-up';

import amazon from '../images/book-modal/amazon@1x.png';
import amazon2x from '../images/book-modal/amazon@2x.png';
import apple from '../images/book-modal/apple@1x.png';
import apple2x from '../images/book-modal/apple@2x.png';
import bookShop from '../images/book-modal/book-shop@1x.png';
import bookShop2x from '../images/book-modal/book-shop@2x.png';

const bookshelfContainer = document.querySelector('.bookcase');
let localBooks = [];
let curBookId = '';

localStorage.getItem('books-id') === null
  ? localStorage.setItem('books-id', JSON.stringify([]))
  : updateLocalBooks();

bookshelfContainer.addEventListener('click', onClickBook);

async function onClickBook(e) {
  e.preventDefault();

  if (!e.target.closest('.book-card__link')) {
    return;
  }

  const bookId = e.target.closest('.book-card__link').dataset.id;
  curBookId = bookId;

  const bookData = await getBookDetail(bookId);
  const markup = createMarkupCard(bookData);

  let isBookInLocal = localBooks.includes(curBookId);

  refs.popupCardContainer.innerHTML = markup;

  isBookInLocal
    ? (refs.addToLocalBtn.innerHTML = 'remove from the shopping list')
    : (refs.addToLocalBtn.innerHTML = 'add to shopping list');

  const buyLinks = bookData.buy_links;

  document.body.style.overflow = 'hidden';
  refs.popupBackdrop.classList.remove('is-hidden');
  refs.popupCloseBtn.addEventListener('click', closePopUp);
  refs.popupBackdrop.addEventListener('click', onPopUpBackdropClick);
  refs.addToLocalBtn.addEventListener('click', bookToLocal);
  window.addEventListener('keydown', onPopUpEscapeKeydown);
}

function createMarkupCard({
  title,
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
  return `<div class="pop-up__block-img"> <img
      class="pop-up__img "
      src=${book_image}
      alt='${title}'
      width=${book_image_width}
      heigth=${book_image_height}
    />
    </div>
    <div class="pop-up__book-info">
      <h2 class="card__book-name ">${title}</h2>
      <h3 class="card__book-author ">${author}</h3>
      <p class="card__book-text ">
        ${description}
      </p>
      <div class="book-shop__thumb">
        <a href="${amazonLink}" class="book-shop__link" target="_blank">
          <picture>
            <source
              srcset="
                ${amazon},
                ${amazon2x}
              "
            />
            <img
              class="book-shop__img"
              src="${amazon}"
              alt="amazon"
              width="48"
            />
          </picture>
        </a>
        <a href="${appleLink}" class="book-shop__link" target="_blank"
          ><picture>
            <source
              srcset="
                ${apple},
                ${apple2x}
              "
            />
            <img
              class="book-shop__img"
              src="${apple}"
              alt="apple"
              width="28"
            /> </picture
        ></a>
        <a href="${bookShopLink}" class="book-shop__link" target="_blank"
          ><picture>
            <source
              srcset="
                ${bookShop},
                ${bookShop2x}
              "
            />
            <img
              class="book-shop__img"
              src="${bookShop}"
              alt="book-shop"
              width="32"
            /> </picture
        ></a>
      </div>
    </div>`;
}

function bookToLocal() {
  let isBookInLocal = localBooks.includes(curBookId);
  if (isBookInLocal) {
    const index = localBooks.indexOf(curBookId);
    if (index !== -1) {
      localBooks.splice(index, 1);
      refs.addToLocalBtn.innerHTML = 'add to shopping list';
      updateLocal();
    }
  } else {
    localBooks.push(curBookId);
    refs.addToLocalBtn.innerHTML = 'remove from the shopping list';
    updateLocal();
  }
}

function updateLocalBooks() {
  const localBooksId = localStorage.getItem('books-id');
  localBooks = JSON.parse(localBooksId);
}

function updateLocal() {
  localStorage.setItem('books-id', JSON.stringify(localBooks));
}
