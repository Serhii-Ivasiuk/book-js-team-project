import { getCategoryList, getBooksByCategory, getTopBooks, getBookDetail } from './api-service';


const refs = {
  booksCategoryContainer: document.querySelector('.book-card__list'),
  seeMoreBtns: document.querySelectorAll('.book-card__btn'),
  mainTitle: document.querySelector('.book-card__title'),
  mainTitleColorWord: document.querySelector('.book-card__filter')

}

function cutMainTitle(title) {
  const lastWordCategoryName = title[categoryName.length - 1];
  let categoryName = title.split(' ');
  categoryName.pop();
  let innerCategoryName = categoryName.join(' ');
  return `${innerCategoryName}<span class="book-card__filter">lastWordCategoryName</span>`;
}
refs.seeMoreBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    getBooksByCategory('Mass Market Monthly').then((books) => {
      let mainTitleNormalize = cutMainTitle('Mass Market Monthly');
      const listBooks = books.map(({
                                     amazon_product_url,
                                     book_image,
                                     author,
                                     book_image_height,
                                     book_image_width,
                                     buy_links,
                                     description,
                                     title,
                                   }) => {

       return `<li class="book-card__item">
          <a class="book-card__link" href="#">
            <div class="book-card__wrapper">
              <img
                class="book-card__image"
                src="${book_image}"
                alt="Here must be book's name"
                height='${book_image_height}'
                width='${book_image_width}'
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
      }).join(' ');
      refs.booksCategoryContainer.innerHTML = listBooks;
      refs.mainTitle.innerHTML = mainTitleNormalize;
    }).catch((error) => {
      console.log(error.message);
    });

  });
});


