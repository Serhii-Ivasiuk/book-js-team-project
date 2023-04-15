import { getBookDetail } from './api-service';

const bookshelfContainer = document.querySelector('.bookcase');

bookshelfContainer.addEventListener('click', onClickBook);

function onClickBook(e) {
  e.preventDefault();

  if (!e.target.closest('.book-card__link')) {
    return;
  }

  const bookId = e.target.closest('.book-card__link').dataset.id;

  getBookDetail(bookId).then(
    ({
      book_image_height: height,
      book_image_width: width,
      book_image,
      description,
      author,
      title,
    }) => {
      console.log(height);
      console.log(width);
      console.log(book_image);
      console.log(author);
      console.log(title);
      console.log(description);
    }
  );
}
