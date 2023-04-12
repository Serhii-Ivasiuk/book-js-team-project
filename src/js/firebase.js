import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import Notiflix from 'notiflix';

const refs = {
  autirizationFormEl: document.querySelector('.authorization__form'),
  userNameEl: document.querySelector('#user_name'),
  userEmailEl: document.querySelector('#user_email'),
  userPasswordEl: document.querySelector('#user_password'),
  autorizationBtnEl: document.querySelector('.authorization__btn__submit'),
};

refs.autirizationFormEl.addEventListener('submit', handelRegistrUser);
console.log(refs.userEmailEl);

const firebaseConfig = {
  apiKey: 'AIzaSyDfT-rZpY0OALd7KjMrkrFQZlQZKUmMqYA',
  authDomain: 'book-159d3.firebaseapp.com',
  projectId: 'book-159d3',
  storageBucket: 'book-159d3.appspot.com',
  messagingSenderId: '35676359423',
  appId: '1:35676359423:web:0fe005890081fa3d52daca',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth();

// function handelCheckForm(evt) {}

function handelRegistrUser(evt) {
  evt.preventDefault();

  const {
    elements: { name, email, password },
  } = evt.currentTarget;
  if (password.value.length < 6) {
    Notiflix.Notify.failure('Password should be at least 6 characters');
    return;
  }

  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(userCredential => {
      const user = userCredential.user;
      user.displayName = name.value;
      Notiflix.Notify.success(`Hello, ${user.displayName}`);
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
// signInWithEmailAndPassword(auth, email, password)
//   .then(userCredential => {
//     const user = userCredential.user;
//     console.log(user);
//   })
//   .catch(error => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });
