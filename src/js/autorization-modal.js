const refs = {
  signUpBtn: document.querySelector('.sign-up-btn'),
  autorizationBackdrop: document.querySelector('.authorization__bacdrop'),
  authorizationBtnClose: document.querySelector(
    '.authorization__button__close'
  ),
};

refs.signUpBtn.addEventListener('click', handelShowModal);
refs.authorizationBtnClose.addEventListener('click', handelCloseModal);

function handelShowModal() {
  refs.autorizationBackdrop.style.display = 'block';
}

function handelCloseModal() {
  refs.autorizationBackdrop.style.display = 'none';
}
