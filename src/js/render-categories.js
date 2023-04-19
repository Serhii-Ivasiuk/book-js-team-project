import { getBooksByCategory, getCategoryList } from './api-service';
import { normalizeMainTitle } from './utility/normilize-main-title';
import { renderAllCategories } from './main-page-all-catigories';
import { refs } from './utility/refs';
import Notiflix from 'notiflix';
import { notFound } from './utility/404';
import empty_pic from '../images/empty_pic.jpg';

getCategoryList()
  .then(categoryList => {
    const categoryListItems = categoryList
      .map(category => {
        return `
        <li class = 'categories__item'>
          <button type="button" data-category-name='${category}' class='categories__name'>${category}</button>
        </li>`;
      })
      .join('');
    refs.categoriesList.innerHTML = `
       <li class='categories__item categories__item--fixed'>
          <button type="button" class='categories__name categories__active' data-category-name='All categories'>All categories</button>
       </li>`;
    refs.categoriesList.insertAdjacentHTML('beforeend', categoryListItems);
  })
  .catch(error =>
    Notiflix.Notify.failure('Network error, please try again later')
  );

refs.categoriesList.addEventListener('click', onCategoryItemClick);

export function onCategoryItemClick(e) {
  e.preventDefault();
  const categoryName = e.target.dataset.categoryName;

  if (!categoryName) {
    return;
  }

  const activeCategory = document.querySelector('.categories__active');
  activeCategory.classList.remove('categories__active');

  const currentCategory = document.querySelector(
    `[data-category-name="${categoryName}"]`
  );
  currentCategory.classList.add('categories__active');

  handleScrollToElement(refs.sectionCategory);

  let mainTitle = document.createElement('h1');
  const conteinerCategoryBooks = document.createElement('ul');
  mainTitle.classList.add('bookcase__cda');
  mainTitle.innerHTML = normalizeMainTitle(categoryName);
  conteinerCategoryBooks.classList.add('bookshelf__content', 'book-card__list');

  if (categoryName === 'All categories') {
    renderAllCategories();
    return;
  }

  getBooksByCategory(categoryName)
    .then(data => {
      if (!Boolean(data.length)) {
        refs.mainSectionCategories.innerHTML = '';
        return refs.mainSectionCategories.appendChild(notFound());
      }

      const booksList = data
        .map(
          ({
            book_image,
            book_image_height,
            book_image_width,
            author,
            title,
            buy_links,
            _id,
          }) => {
            if (!book_image) {
              book_image = empty_pic;
              book_image_height = 500;
              book_image_width = 330;
            }
            return `<li class='book-card__item'>
  <a class='book-card__link' href='#' data-id='${_id}'>
    <div class='book-card__wrapper'>
      <img
        class='book-card__image'
        src='${book_image}'
        alt="Here must be book's name"
        width='${book_image_width}'
        height = '${book_image_height}'
      />
      <div class='book-card__overlay'>
        <p class='book-card__quick-view-text'>quick view</p>
      </div>
    </div>
  </a>
  <div class='book-card__wrap'>
    <h3 class='book-card__name'>${title ? title : 'Unknown title'}</h3>
    <p class='book-card__author'>${author ? author : 'Unknown author'}</p>
  </div>
</li>`;
          }
        )
        .join('');

      conteinerCategoryBooks.innerHTML = booksList;

      refs.sectionCategory.innerHTML = '';
      refs.sectionCategory.appendChild(mainTitle);
      refs.sectionCategory.appendChild(conteinerCategoryBooks);
    })
    .catch(error =>
      Notiflix.Notify.failure('Network error, please try again later')
    );
}

function handleScrollToElement(element, position = 'start') {
  element.scrollIntoView({
    behavior: 'smooth',
    position,
  });
}
