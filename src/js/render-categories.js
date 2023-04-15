import { getBooksByCategory, getCategoryList, getTopBooks } from './api-service';
import { normalizeMainTitle } from './utility/normilize-main-title';
import { renderAllCategories } from './main-page-all-catigories';
import { refs } from './utility/refs';

const categoriesList = document.querySelector( '.categories__list' );
const sectionCategory = document.querySelector( '.bookcase' );
getCategoryList().then( categoryList => {
  const categoryListItems = categoryList.map( category => {
    return `
        <li class = 'categories__item'>
          <a href='#' data-category-name='${ category }' class='categories__name'>${ category }</a>
        </li>`;
  } ).join( '' );
  categoriesList.innerHTML = `
       <li class='categories__item categories__item--fixed'>
          <a href='#' class='categories__name categories__active' data-category-name='All categories'>All categories</a>
       </li>`;
  categoriesList.insertAdjacentHTML( 'beforeend', categoryListItems );
} ).catch( error => console.log( error.message ) );

categoriesList.addEventListener( 'click', onCategoryItemClick );

export function onCategoryItemClick( e ) {
  e.preventDefault();
  const categoryName = e.target.dataset.categoryName;

  if( !categoryName ) {
    return;
  }

  let mainTitle = document.createElement( 'h1' );
  const conteinerCategoryBooks = document.createElement( 'ul' );
  mainTitle.classList.add( 'bookcase__cda' );
  mainTitle.innerHTML = normalizeMainTitle( categoryName );
  conteinerCategoryBooks.classList.add( 'bookshelf__content', 'book-card__list' );


  if( categoryName === 'All categories' ) {
    renderAllCategories();
    return;
  }


  getBooksByCategory( categoryName ).then( data => {

    if(!Boolean(data.length)) {
      mainTitle = `<h1 class='bookcase__cda' style='text-align: center; margin-top: 50px'>
            There are no data to display, please select another category
          </h1>`;
      return refs.mainSectionCategories.innerHTML = mainTitle;
    }

    const booksList = data.map(
      ( {
        book_image,
        book_image_height,
        book_image_width,
        author,
        title,
        buy_links,
        _id,
      } ) => {
        return `<li class='book-card__item'>
  <a class='book-card__link' href='#' data-id='${ _id }'>
    <div class='book-card__wrapper'>
      <img
        class='book-card__image'
        src='${ book_image }'
        alt="Here must be book's name"
        width='${ book_image_width }'
        height = '${ book_image_height }'
      />
      <div class='book-card__overlay'>
        <p class='book-card__quick-view-text'>quick view</p>
      </div>
    </div>
  </a>
  <div class='book-card__wrap'>
    <h3 class='book-card__name'>${ title }</h3>
    <p class='book-card__author'>${ author }</p>
  </div>
</li>`;
      },
    ).join( '' );

    conteinerCategoryBooks.innerHTML = booksList;

    sectionCategory.innerHTML = '';
    sectionCategory.appendChild( mainTitle );

    sectionCategory.appendChild( conteinerCategoryBooks );
  } ).catch( error => console.log( error.message ) );
}
