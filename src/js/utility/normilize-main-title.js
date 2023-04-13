export function normalizeMainTitle(title) {
  let lastWordCategoryName = title.split(' ');
  lastWordCategoryName = lastWordCategoryName[lastWordCategoryName.length - 1];
  let categoryName = title.split(' ');
  categoryName.pop();
  let innerCategoryName = categoryName.join(' ');
  return `${innerCategoryName} <span class="book-card__filter">${lastWordCategoryName}</span>`;
}