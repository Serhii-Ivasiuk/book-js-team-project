import { doc } from 'firebase/firestore/lite';
import { getBookDetail } from './api-service';

import image from '../images/book-modal/amazon@1x.png';
import image2x from '../images/book-modal/amazon@2x.png';
// import image from './images/book-modal/amazon@1x.png';
// import image2x from './images/book-modal/amazon@2x.png';
// import image from './images/book-modal/amazon@1x.png';
// import image2x from './images/book-modal/amazon@2x.png';

const refs = {
  div: document.querySelector('.book-card__container'),
  backdropDiv: document.querySelector('.pop-up__backdrop'),
};

const bookshelfContainer = document.querySelector('.bookcase');

bookshelfContainer.addEventListener('click', onClickBook);

async function onClickBook(e) {
  e.preventDefault();

  if (!e.target.closest('.book-card__link')) {
    return;
  }

  const bookId = e.target.closest('.book-card__link').dataset.id;

  await getBookDetail(bookId).then(data => {
    refs.div.innerHTML = createMarkupCard(data);
  });
  refs.backdropDiv.classList.remove('is-hidden');
}

function createMarkupCard({
  title,
  author,
  book_image_height,
  book_image_width,
  book_image,
  description,
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
  return `<div class="pop-up__block-img"> <img
      class="pop-up__img "
      src=${book_image}
      alt="NA"
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
        <a href="" class="book-shop__link" target="_blank">
          <picture>
            <source
              srcset="
                ${image},
                ${image2x}
              "
            />
            <img
              class="book-shop__img"
              src="./images/book-modal/amazon@1x.png"
              alt="amazon"
              width="48"
            />
          </picture>
        </a>
        <a href="" class="book-shop__link" target="_blank"
          ><picture>
            <source
              srcset="
                ./images/book-modal/apple@1x.png 1x,
                ./images/book-modal/apple@2x.png 2x
              "
            />
            <img
              class="book-shop__img"
              src="./images/book-modal/apple@1x.png"
              alt="apple"
              width="28"
            /> </picture
        ></a>
        <a href="" class="book-shop__link" target="_blank"
          ><picture>
            <source
              srcset="
                ./images/book-modal/book-shop@1x.png 1x,
                ./images/book-modal/book-shop@2x.png 2x
              "
            />
            <img
              class="book-shop__img"
              src="./images/book-modal/book-shop@1x.png"
              alt="book-shop"
              width="32"
            /> </picture
        ></a>
      </div>
    </div>`;
}
