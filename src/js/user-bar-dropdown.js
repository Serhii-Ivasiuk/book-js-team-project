const refs = {
  userBar: document.querySelector('.js-user-bar'),
  userBarBtn: document.querySelector('.js-user-bar-btn'),
  logOutBtn: document.querySelector('.js-log-out-btn'),
};

refs.userBarBtn.addEventListener('click', handleUserBarBtnClick);
refs.logOutBtn.addEventListener('click', handleLogOutBtnClick);

function handleUserBarBtnClick() {
  refs.userBar.classList.toggle('is-active');
}

function handleLogOutBtnClick() {
  refs.userBar.classList.remove('is-active');
  /*
  ===============================================================
  тут нужно будет добавить логику выхода из аккаунта пользователя
  ===============================================================
  */
  location.href = './index.html';
}