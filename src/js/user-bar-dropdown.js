import { refs } from './utility/refs';

refs.userBarBtn.addEventListener('click', handleUserBarBtnClick);
refs.logOutBtn.addEventListener('click', handleLogOutBtnClick);
refs.mobileLogOutBtn.addEventListener('click', handleLogOutBtnClick);

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
  location.href = './';
}
