import { getTopBooks } from './api-service';
import { refs } from './utility/refs';
import Notiflix from 'notiflix';
import { showSpinner, hideSpinner } from './spinner';
import { notFound } from './utility/404';
import empty_pic from '../images/empty_pic.jpg';

export function renderAllCategories() {
  let mainTitleAllCategories = `<h1 class='bookcase__cda'>
          Best Sellers <span class='bookcase__filter'>Books</span>
        </h1>`;

  const containerBookshelfList = document.createElement('ul');
  containerBookshelfList.classList.add('bookshelf__list');

  showSpinner();
  getTopBooks()
    .then(allCategories => {
      if (!Boolean(allCategories.length)) {
        refs.mainSectionCategories.innerHTML = '';
        return refs.mainSectionCategories.appendChild(notFound());
      }

      const result = allCategories
        .map(({ list_name, books }) => {
          return `
          <li class='bookshelf__item'>
            <h2 class='bookshelf__title'>${list_name}</h2>
            <ul class='bookshelf__content book-card__list'>
              ${books
                .map(
                  ({
                    _id,
                    book_image_height,
                    book_image_width,
                    author,
                    book_image,
                    title,
                  }) => {
                    if (!book_image) {
                      book_image = empty_pic;
                      book_image_height = 500;
                      book_image_width = 330;
                    }
                    return `<li class='book-card__item'>
                  <a class='book-card__link' href='#' data-id='${_id}'>
                    <div class='book-card__wrapper'>
                      <img class='book-card__image' src='${book_image}' alt="Here must be book's name"
                      width='${book_image_width}'
                      height='${book_image_height}'>
                      <div class='book-card__overlay'>
                        <p class='book-card__quick-view-text'>quick view</p>
                      </div>
                    </div>
                  </a>
                  <div class='book-card__wrap'>
                    <h3 class='book-card__name'>${
                      title ? title : 'Unknown title'
                    }</h3>
                    <p class='book-card__author'>${
                      author ? author : 'Unknown author'
                    }</p>
                  </div>
                </li>`;
                  }
                )
                .join('')}
                
        </ul>
            <button class='bookshelf__btn' type='button' data-see-more data-category-name='${list_name}'>see more</button>
         </li>
      `;
        })
        .join('');
      containerBookshelfList.innerHTML = result;
      refs.mainSectionCategories.innerHTML = mainTitleAllCategories;
      refs.mainSectionCategories.appendChild(containerBookshelfList);
    })
    .catch(error => {

      Notiflix.Notify.failure('Network error, please try again later');
    })

    .finally(hideSpinner);
}

renderAllCategories();

refs.logo.addEventListener('click', () => {
  renderAllCategories();
});
