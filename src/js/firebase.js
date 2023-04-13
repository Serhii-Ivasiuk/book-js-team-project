import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
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
};

refs.signInLink.addEventListener('click', e => {
  e.preventDefault();
  refs.signUpLink.classList.remove('active-link');
  refs.signUpLink.classList.add('desactive-link');
  refs.signInLink.classList.remove('desactive-link');
  refs.signInLink.classList.add('active-link');
  refs.autorizationBtnEl.textContent = 'Sign in';
});

refs.autirizationFormEl.addEventListener('submit', handelRegistrUser);
refs.autirizationFormEl.addEventListener('submit', handelSignInUserAccount);
console.log(refs);

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
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
console.log(provider);

const userCred = signInWithPopup(auth, new GoogleAuthProvider());

// signInWithPopup(auth, provider)
//   .then(result => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     console.log(credential);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     console.log(user);
//     // IdP data available using getAdditionalUserInfo(result)
//     // ...
//   })
//   .catch(error => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });
// // function signWithGoogle() {
//   const auth = getAuth();
//   signInWithRedirect(auth, provider);
// }

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

  if (refs.autorizationBtnEl.textContent === 'Sign up') {
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then(userCredential => {
        const user = userCredential.user;
        user.displayName = name.value;
        Notiflix.Notify.success(`Hello, ${user.displayName}`);
        refs.signUpLink.classList.remove('active-link');
        refs.signUpLink.classList.add('desactive-link');
        refs.signInLink.classList.remove('desactive-link');
        refs.signInLink.classList.add('active-link');
        refs.autorizationBtnEl.textContent = 'Sign in';
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

  if (refs.autorizationBtnEl.textContent === 'Sign in') {
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then(userCredential => {
        // const user = userCredential.user;

        Notiflix.Notify.success(`Hello, ${name.value}`);
        evt.target.reset();
        refs.autorizationBackdrop.style.display = 'none';
        refs.navigationEl.classList.remove('visually-hidden');
        refs.userBar.classList.remove('visually-hidden');
        refs.signUpHeaderBtn.classList.add('visually-hidden');
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
}

onAuthStateChanged(auth, user => {
  console.log(user);
  if (user) {
    const uid = user.uid;
  } else {
    // User is signed out
    // ...
  }
});
