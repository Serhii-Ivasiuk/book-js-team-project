import { getBooksByCategory, getCategoryList } from './api-service';
import { normalizeMainTitle } from './utility/normilize-main-title';

const categoriesList = document.querySelector('.categories__list');
const sectionCategory = document.querySelector('.bookcase');
getCategoryList()
  .then(categoryList => {
    categoriesList.innerHTML = `<li class="categories__item categories__item--fixed">
      <a href="" class="categories__name categories__active">All categories</a>
    </li>`;
    const categoryListItems = categoryList
      .map(category => {
        return `<li class = "categories__item">
    <a href="#" data-category-name="${category}" class="categories__name">${category}</a>
      </li>`;
      })
      .join('');
    categoriesList.insertAdjacentHTML('beforeend', categoryListItems);
  })
  .catch(error => console.log(error.message));

categoriesList.addEventListener('click', onCategoryItemClick);

function onCategoryItemClick(e) {
  const categoryName = e.target.dataset.categoryName;

  if (!categoryName) {
    return;
  }

  const mainTitle = document.createElement('h1');
  mainTitle.classList.add('bookcase__cda');
  mainTitle.innerHTML = normalizeMainTitle(categoryName);

  const conteinerCategoryBooks = document.createElement('ul');
  conteinerCategoryBooks.classList.add('bookshelf__content', 'book-card__list');

  getBooksByCategory(categoryName)
    .then(data => {
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
            return `<li class="book-card__item" data-id="${_id}">
  <a class="book-card__link" href="#">
    <div class="book-card__wrapper">
      <img
        class="book-card__image"
        src="${book_image}"
        alt="Here must be book's name"
        width="${book_image_width}"
        height = "${book_image_height}"
      />
      <div class="book-card__overlay">
        <p class="book-card__quick-view-text">quick view</p>
      </div>
    </div>
  </a>
  <div class="book-card__wrap">
    <h3 class="book-card__name">${title}</h3>
    <p class="book-card__author">${author}</p>
  </div>
</li>`;
          }
        )
        .join('');

      conteinerCategoryBooks.innerHTML = booksList;

      sectionCategory.innerHTML = '';
      sectionCategory.appendChild(mainTitle);

      sectionCategory.appendChild(conteinerCategoryBooks);
    })
    .catch(error => console.log(error.message));
}
