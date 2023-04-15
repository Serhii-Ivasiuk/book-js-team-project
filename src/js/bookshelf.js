import { getBookDetail } from './api-service';

const bookshelfContainer = document.querySelector('.js-bookshelf__list');

bookshelfContainer.addEventListener('click', onClickBook);

function onClickBook(e) {
  e.preventDefault();

  const container = e.target.closest('.book-card__wrapper');

  if (!container) {
    return;
  }
  // getBookDetail('643282b1e85766588626a089').then(
  //   ({
  //     book_image_height: height,
  //     book_image_width: width,
  //     book_image,
  //     description,
  //     author,
  //     title,
  //   }) => {
  //     console.log(height);
  //     console.log(width);
  //     console.log(book_image);
  //     console.log(author);
  //     console.log(title);
  //     console.log(description);
  //   }
  // );
}
