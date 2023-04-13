import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getStorage } from 'firebase/storage';
// import { getFirestore } from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from 'firebase/auth';
import Notiflix from 'notiflix';

const refs = {
  autirizationFormEl: document.querySelector('.authorization__form'),
  userNameEl: document.querySelector('#user_name'),
  userEmailEl: document.querySelector('#user_email'),
  userPasswordEl: document.querySelector('#user_password'),
  autorizationBtnEl: document.querySelector('.authorization__btn__submit'),
  signUpLink: document.querySelector('[data-action="sign-up"]'),
  signInLink: document.querySelector('[data-action="sign-in"]'),
  autorizationBackdrop: document.querySelector('.authorization__bacdrop'),
  navigationEl: document.querySelector('.navigation'),
  userBar: document.querySelector('.js-user-bar'),
  signUpHeaderBtn: document.querySelector('.sign-up-btn'),
  logOutBtn: document.querySelector('.js-log-out-btn'),
  userBarBtnText: document.querySelector('.user-bar-btn__text'),
};

refs.signInLink.addEventListener('click', e => {
  e.preventDefault();
  refs.signUpLink.classList.remove('active-link');
  refs.signUpLink.classList.add('desactive-link');
  refs.signInLink.classList.remove('desactive-link');
  refs.signInLink.classList.add('active-link');
  refs.autorizationBtnEl.textContent = 'Sign in';
});

refs.signUpLink.addEventListener('click', e => {
  e.preventDefault();
  refs.signUpLink.classList.add('active-link');
  refs.signUpLink.classList.remove('desactive-link');
  refs.signInLink.classList.add('desactive-link');
  refs.signInLink.classList.remove('active-link');
  refs.autorizationBtnEl.textContent = 'Sign Up';
});

refs.autirizationFormEl.addEventListener('submit', handelRegistrUser);
refs.autirizationFormEl.addEventListener('submit', handelSignInUserAccount);
refs.logOutBtn.addEventListener('click', handelLogOutUserAccount);
console.log(refs);

const firebaseConfig = {
  apiKey: 'AIzaSyDfT-rZpY0OALd7KjMrkrFQZlQZKUmMqYA',
  authDomain: 'book-159d3.firebaseapp.com',
  databaseURL: 'https://book-159d3-default-rtdb.firebaseio.com',
  projectId: 'book-159d3',
  storageBucket: 'book-159d3.appspot.com',
  storageBucket: 'book-159d3.appspot.com',
  messagingSenderId: '35676359423',
  appId: '1:35676359423:web:0fe005890081fa3d52daca',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

// const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

function handelRegistrUser(evt) {
  evt.preventDefault();

  const {
    elements: { name, email, password },
  } = evt.currentTarget;
  if (password.value.length < 6) {
    Notiflix.Notify.failure('Password should be at least 6 characters');
    return;
  }
  if (refs.signUpLink.classList.contains('active-link')) {
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then(userCredential => {
        const user = userCredential.user;
        user.displayName = name.value;
        Notiflix.Notify.success(`Hello, ${user.value}`);
        refs.autorizationBackdrop.style.display = 'none';
        refs.navigationEl.classList.remove('visually-hidden');
        refs.userBar.classList.remove('visually-hidden');
        refs.signUpHeaderBtn.classList.add('visually-hidden');
        refs.userBarBtnText.textContent = user.displayName;

        evt.target.reset();
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Notiflix.Notify.failure(
            'A user with this email address is already registered'
          );
        }
        console.log(error.message);
      });
  }
}

function handelSignInUserAccount(evt) {
  evt.preventDefault();
  console.log(evt.target);
  const {
    elements: { name, email, password },
  } = evt.currentTarget;
  if (refs.signInLink.classList.contains('active-link')) {
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then(userCredential => {
        const user = userCredential.user;
        user.displayName = name.value;

        Notiflix.Notify.success(`Hello, ${name.value}`);
        evt.target.reset();
        refs.autorizationBackdrop.style.display = 'none';
        refs.navigationEl.classList.remove('visually-hidden');
        refs.userBar.classList.remove('visually-hidden');
        refs.signUpHeaderBtn.classList.add('visually-hidden');
        refs.userBarBtnText.textContent = user.displayName;
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
}

function checkUserAuth() {
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log(user);
      refs.navigationEl.classList.remove('visually-hidden');
      refs.userBar.classList.remove('visually-hidden');
      refs.signUpHeaderBtn.classList.add('visually-hidden');
      refs.userBarBtnText.textContent = user.displayName;
    } else
      refs.navigationEl.classList.add('visually-hidden'),
        refs.userBar.classList.add('visually-hidden'),
        refs.signUpHeaderBtn.classList.remove('visually-hidden');
  });
}

checkUserAuth();

function handelLogOutUserAccount() {
  signOut(auth)
    .then(() => {
      refs.navigationEl.classList.add('visually-hidden'),
        refs.userBar.classList.add('visually-hidden'),
        refs.signUpHeaderBtn.classList.remove('visually-hidden');
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}
