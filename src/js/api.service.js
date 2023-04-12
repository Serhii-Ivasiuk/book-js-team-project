import axios from 'axios';

const BASE_URL = 'https://books-backend.p.goit.global/books';
const CATEGORY_LIST = '/category-list';
const TOP_BOOKS = '/top-books';
const BOOKS_BY_CATEGORY = '/category';
const BOOK_BY_ID = '/books';

axios.defaults.baseURL = BASE_URL;

export async function getCategoryList() {
  const { data } = await axios.get(CATEGORY_LIST);
  return data.map(({ list_name }) => list_name);
}

//for example use function
// getCategoryList().then(data => console.log(data));

export async function getBooksByCategory(category) {
  const { data } = await axios.get(BOOKS_BY_CATEGORY,{
    params: {
      category
    }
  });
  return data;
}

//for example use function
// getBooksByCategory('Mass Market Monthly').then((data)=> console.log(data));

export async function getTopBooks() {
  const { data } = await axios.get(TOP_BOOKS);
  return data;
}

//for example use function
// getBooksByCategory().then((data)=> console.log(data));

export async function getBookDetail(id) {
  const { data } = await axios.get(`${BOOK_BY_ID}/${id}`);
  return data;
}

//for example use function
// getBookDetail(id).then((data)=> console.log(data));
