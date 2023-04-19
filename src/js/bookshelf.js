import { refs } from './utility/refs';
import Notiflix from 'notiflix';
import { doc } from 'firebase/firestore/lite';
import { getBookDetail } from './api-service';
import Notiflix from 'notiflix';

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
import empty_pic from '../images/empty_pic.jpg';

const bookshelfContainer = document.querySelector('.bookcase');
let idsForCheck = [];
let localBooks = [];
let curBookId = [];
let userBooksId = [];

localStorage.getItem('books-id') === null
  ? localStorage.setItem('books-id', JSON.stringify([]))
  : updateLocalBooks();

bookshelfContainer.addEventListener('click', onClickBook);

async function onClickBook(e) {
  try {
    e.preventDefault();

    if (!e.target.closest('.book-card__link')) {
      return;
    }

    updateLocal();

    const bookId = e.target.closest('.book-card__link').dataset.id;
    curBookId = bookId;

    const bookData = await getBookDetail(bookId);
    const markup = createMarkupCard(bookData);

    curBookId = {
      bookId,
      bookData,
    };

    refs.popupCardContainer.innerHTML = markup;

    localBooks.forEach(book => {
      idsForCheck.push(book.bookId);
    });

    if (idsForCheck.includes(curBookId.bookId)) {
      refs.addToLocalBtn.innerHTML = 'remove from the shopping list';
      refs.popupDesc.style.opacity = '1';
    } else {
      refs.addToLocalBtn.innerHTML = 'add to shopping list';
      refs.popupDesc.style.opacity = '0';
    }

    if (localStorage.getItem('user') === null) {
      refs.addToLocalBtn.innerHTML = 'add to shopping list';
      refs.popupDesc.style.opacity = '0';
    }

    const buyLinks = bookData.buy_links;

    document.body.style.overflow = 'hidden';
    refs.popupBackdrop.classList.remove('is-hidden');
    refs.popupCloseBtn.addEventListener('click', closePopUp);
    refs.popupBackdrop.addEventListener('click', onPopUpBackdropClick);
    refs.addToLocalBtn.addEventListener('click', bookToLocal);
    window.addEventListener('keydown', onPopUpEscapeKeydown);
  } catch (error) {
    Notiflix.Notify.failure(`Network error, please try again later`);
  }
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

export function bookToLocal() {
  const isBookInLocal = localBooks.some(
    book => book.bookId === curBookId.bookId
  );
  if (localStorage.getItem('user') === null) {
    return isUser();
  } else if (isBookInLocal) {
    localBooks = localBooks.filter(book => book.bookId !== curBookId.bookId);
    refs.addToLocalBtn.innerHTML = 'add to shopping list';
    refs.popupDesc.style.opacity = '0';
    updateLocal();
  } else {
    localBooks.push(curBookId);
    refs.addToLocalBtn.innerHTML = 'remove from the shopping list';
    refs.popupDesc.style.opacity = '1';
    updateLocal();
  }
}

function updateLocalBooks() {
  const localBooksId = localStorage.getItem('books-id');
  localBooks = JSON.parse(localBooksId);
}

function updateLocal() {
  localStorage.setItem('books-id', JSON.stringify(localBooks));
  idsForCheck = [];
}

function isUser() {
  if (localStorage.getItem('user') === null) {
    refs.addToLocalBtn.setAttribute('disabled', 'true');
    refs.addToLocalBtn.style.backgroundColor = '#b4afaf';
    refs.addToLocalBtn.style.color = '#ffffff';
    setTimeout(() => {
      refs.addToLocalBtn.removeAttribute('disabled');
      refs.addToLocalBtn.style = 'none';
    }, 2000);
    return Notiflix.Notify.failure(
      'Please register or sign in to your account to use this feature.',
      { timeout: 2000 }
    );
  }
}
