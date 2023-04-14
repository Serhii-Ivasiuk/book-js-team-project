export { refs };

const refs = {
  //------- AUTORIZATION-MODAL ---------- //
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  backdrop: document.querySelector('.authorization__bacdrop'),
  modal: document.querySelector('[data-modal]'),
  autirizationFormEl: document.querySelector('.authorization__form'),
  userNameEl: document.querySelector('#user_name'),
  userEmailEl: document.querySelector('#user_email'),
  userPasswordEl: document.querySelector('#user_password'),
  autorizationBtnEl: document.querySelector('.authorization__btn__submit'),
  signUpLink: document.querySelector('[data-action="sign-up"]'),
  signInLink: document.querySelector('[data-action="sign-in"]'),
  autorizationBackdrop: document.querySelector('.authorization__bacdrop'),
  signInForm: document.querySelector('#sign-in'),
  signUpForm: document.querySelector('#sign-up'),

  //------------ HEADER -------------//
  navigationEl: document.querySelector('.navigation'),
  userBar: document.querySelector('.js-user-bar'),
  userBarBtn: document.querySelector('.js-user-bar-btn'),
  signUpHeaderBtn: document.querySelector('.sign-up-btn'),
  logOutBtn: document.querySelector('.js-log-out-btn'),
  userBarBtnText: document.querySelector('.user-bar-btn__text'),

  //----------- BOOKSHOP------------- //
  booksCategoryContainer: document.querySelector('.book-card__list'),
  seeMoreBtns: document.querySelectorAll('.book-card__btn'),
  mainTitle: document.querySelector('.book-card__title'),
  mainTitleColorWord: document.querySelector('.book-card__filter'),

  //------------- SUPPORT------------- //
  fundsContainer: document.querySelector('.support_list'),
};
