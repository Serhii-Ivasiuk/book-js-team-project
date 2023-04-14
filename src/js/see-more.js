import {
  getCategoryList,
  getBooksByCategory,
  getTopBooks,
  getBookDetail,
} from './api-service';
import { normalizeMainTitle } from './utility/normilize-main-title';
import { refs } from './utility/refs';

refs.seeMoreBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    getBooksByCategory('Mass Market Monthly')
      .then(books => {
        const listBooks = books
          .map(
            ({
              amazon_product_url,
              book_image,
              author,
              book_image_height,
              book_image_width,
              buy_links,
              description,
              title,
            }) => {
              return `<li class='book-card__item'>
          <a class='book-card__link' href='#'>
            <div class='book-card__wrapper'>
              <img
                class='book-card__image'
                src='${book_image}'
                alt="Here must be book's name"
                height='${book_image_height}'
                width='${book_image_width}'
              />
              <div class='book-card__overlay'>
                <p class='book-card__quick-view-text'>quick view</p>
              </div>
            </div>
          </a>
          <div class='book-card__wrap'>
            <h3 class='book-card__name'>${title}</h3>
            <p class='book-card__author'>${author}</p>
          </div>
        </li>`;
            }
          )
          .join(' ');
        refs.booksCategoryContainer.innerHTML = listBooks;
        refs.mainTitle.innerHTML = normalizeMainTitle('Mass Market Monthly');
      })
      .catch(error => {
        console.log(error.message);
      });
  });
});
