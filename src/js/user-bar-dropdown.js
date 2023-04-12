const refs = {
  dropdown: document.querySelector('.js-dropdown'),
  userBarBtn: document.querySelector('.js-user-bar-btn'),
  logOutBtn: document.querySelector('.js-log-out-btn'),
};

refs.userBarBtn.addEventListener('click', handleUserBarBtnClick);
refs.logOutBtn.addEventListener('click', handleLogOutBtnClick);

function handleUserBarBtnClick() {
  refs.dropdown.classList.toggle('is-active');
}

function handleLogOutBtnClick() {
  refs.dropdown.classList.remove('is-active');
  /*
  ===============================================================
  тут нужно будет добавить логику выхода из аккаунта пользователя
  ===============================================================
  */
  location.href = './index.html';
}
