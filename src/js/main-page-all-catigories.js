import { getTopBooks } from './api-service';
import { normalizeMainTitle } from './utility/normilize-main-title';

getTopBooks().then((listBooks)=> {
  const listTopBooks = listBooks.map( (  item  ) => {
    console.log(item);
    //console.log(item.books);
    //return `<li class='book-card__item'>
    //      <a class='book-card__link' href='#'>
    //        <div class='book-card__wrapper'>
    //          <img
    //            class='book-card__image'
    //            src='${ book_image }'
    //            alt="Here must be book's name"
    //            height='${ book_image_height }'
    //            width='${ book_image_width }'
    //          />
    //          <div class='book-card__overlay'>
    //            <p class='book-card__quick-view-text'>quick view</p>
    //          </div>
    //        </div>
    //      </a>
    //      <div class='book-card__wrap'>
    //        <h3 class='book-card__name'>${ title }</h3>
    //        <p class='book-card__author'>${ author }</p>
    //      </div>
    //    </li>`;
  } );
  //refs.booksCategoryContainer.innerHTML = listBooks;
  //refs.mainTitle.innerHTML = normalizeMainTitle( 'Mass Market Monthly' );
} ).catch( ( error ) => {
  console.log( error.message );
} );