export { refs };

const refs = {
  //-------   MOBOLE-MENU   ---------- //
  signUpMobileBtn: document.querySelector('.js-signup-mobile-btn'),
  userMobileContainer: document.querySelector('.js-user-container'),
  mibileNav: document.querySelector('.js-mobile-thumb'),
  mobileLogOutBtn: document.querySelector('.js-mobile-logout'),
  userMobileBarBtnText: document.querySelector('.js-user-mobile-name'),

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

  //------------ HEADER -------------//
  navigationEl: document.querySelector('.navigation'),
  userBar: document.querySelector('.js-user-bar'),
  userBarBtn: document.querySelector('.js-user-bar-btn'),
  signUpHeaderBtn: document.querySelector('.sign-up-btn'),
  logOutBtn: document.querySelector('.js-log-out-btn'),
  userBarBtnText: document.querySelector('.user-bar-btn__text'),
  mobMenuBtn: document.querySelector('.js-mobile-menu-btn'),
  mobMenuEl: document.querySelector('.mobile-menu-wrapper'),
  mainPageEl: document.querySelectorAll('.js-main-page-link'),
  listPageEl: document.querySelectorAll('.js-list-page-link'),

  //----------- MAIN PAGE------------- //
  mainSectionCategories: document.querySelector('.bookcase'),

  //----------- BOOKSHOP------------- //
  booksCategoryContainer: document.querySelector('.book-card__list'),
  mainTitleColorWord: document.querySelector('.book-card__filter'),

  //------------- SUPPORT------------- //
  fundsContainer: document.querySelector('.support_list'),

  //------------- POP UP ------------- //
  // Close
  popupCloseBtn: document.querySelector('.pop-up__button__close'),
  popupBackdrop: document.querySelector('.pop-up__backdrop'),
};
