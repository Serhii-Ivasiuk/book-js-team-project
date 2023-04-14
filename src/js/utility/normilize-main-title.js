export function normalizeMainTitle(title) {
  let lastWordCategoryName = title.split(' ');
  console.log(lastWordCategoryName);
  lastWordCategoryName = lastWordCategoryName[lastWordCategoryName.length - 1];
  let categoryName = title.split(' ');
  categoryName.pop();
  let innerCategoryName = categoryName.join(' ');
  return `${innerCategoryName} <span class="bookcase__filter">${lastWordCategoryName}</span>`;
}