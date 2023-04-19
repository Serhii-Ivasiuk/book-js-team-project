import { refs } from '../utility/refs';
import { app } from './firebace-config';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { getDatabase, ref, set, onValue } from 'firebase/database';
import Notiflix from 'notiflix';
import { doc } from 'firebase/firestore/lite';

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);

refs.signUpForm.addEventListener('submit', handelRegistrUser);
refs.signInForm.addEventListener('submit', handelSignInUserAccount);
refs.logOutBtn.addEventListener('click', handelLogOutUserAccount);
refs.mobileLogOutBtn.addEventListener('click', handelLogOutUserAccount);

function handelRegistrUser(evt) {
  evt.preventDefault();

  const {
    elements: { name, email, password },
  } = evt.currentTarget;

  validatePassword(password.value);
  let userEmail = email.value;
  let userPassword = password.value;
  let userName = name.value;
  if (createUser(auth, userEmail, userPassword, userName)) {
    setTimeout(() => {
      evt.target.reset();
    }, 3000);
  }
}

function handelSignInUserAccount(evt) {
  evt.preventDefault();

  // hide mobile menu
  refs.mobMenuEl.classList.remove('is-open');
  refs.mobMenuBtn.classList.remove('is-open');
  document.body.style.overflow = '';

  const {
    elements: { email, password },
  } = evt.currentTarget;

  let userEmail = email.value;
  let userPassword = password.value;

  if (signInUserAccount(auth, userEmail, userPassword)) {
    setTimeout(() => {
      evt.target.reset();
    }, 3000);
  }
}

// реєструємо нового користвуча
function createUser(auth, userEmail, userPassword, userName) {
  createUserWithEmailAndPassword(auth, userEmail, userPassword)
    .then(cred => {
      userId = cred.user.uid;
      //зберігаємо його облікові дані у сховище Database
      writeUserData(userId, userName, userEmail);

      Notiflix.Notify.success(
        `Hello, ${userName}, your registration was successful`
      );
      refs.autorizationBackdrop.style.display = 'none';
      refs.autorizationBackdrop.classList.add('is-hidden');
      refs.navigationEl.classList.remove('visually-hidden');
      refs.userBar.classList.remove('visually-hidden');
      refs.userMobileContainer.classList.remove('display-none');
      refs.mibileNav.classList.remove('display-none');
      refs.mobileLogOutBtn.classList.remove('display-none');
      refs.signUpMobileBtn.classList.add('visually-hidden');
      refs.signUpHeaderBtn.classList.add('visually-hidden');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        Notiflix.Notify.failure(
          'A user with this email address is already registered'
        );
      }
    });
}

//записуємо у сховище Database облікові дані користувача
const writeUserData = (userId, userName, userEmail) => {
  // const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: userName,
    email: userEmail,
  })
    .then(() => {
      console.log('Data saved successfully!');
    })
    .catch(error => {
      console.log(error.code);
      console.log(error.message);
    });
};

console.dir(writeUserData);

//створюємо функцію для можливості увійти у свій акаунт зареєстрованому користувачу
function signInUserAccount(auth, userEmail, userPassword) {
  signInWithEmailAndPassword(auth, userEmail, userPassword)
    .then(() => {
      refs.autorizationBackdrop.style.display = 'none';
      refs.autorizationBackdrop.classList.add('is-hidden');
      refs.navigationEl.classList.remove('visually-hidden');
      refs.userBar.classList.remove('visually-hidden');
      refs.userMobileContainer.classList.remove('display-none');
      refs.mibileNav.classList.remove('display-none');
      refs.mobileLogOutBtn.classList.remove('display-none');
      refs.signUpMobileBtn.classList.add('visually-hidden');
      refs.signUpHeaderBtn.classList.add('visually-hidden');
    })
    .catch(error => {
      if (error.code === 'auth/wrong-password') {
        Notiflix.Notify.failure('Your password is wrong, please try again');
      }
      // const errorCode = error.code;
      // console.log(errorCode);
      // const errorMessage = error.message;
      // console.log(errorMessage);
    });
}

//перевіряємо, чи єактивний User на сторінці
function checkUserAuth() {
  onAuthStateChanged(auth, user => {
    if (user) {
      //витягуємо із сховища ID поточного користувача та записуємо його ім'я в userBarBtnText
      const userNameRef = ref(db, 'users/' + user.uid);
      onValue(userNameRef, name => {
        const currentUserName = name.val();
        console.log(currentUserName);
        refs.userBarBtnText.innerHTML = currentUserName.username;
        refs.userMobileBarBtnText.innerHTML = currentUserName.username;
      });

      refs.navigationEl.classList.remove('visually-hidden');
      refs.userBar.classList.remove('visually-hidden');
      refs.signUpHeaderBtn.classList.add('visually-hidden');
      refs.userMobileContainer.classList.remove('display-none');
      refs.mibileNav.classList.remove('display-none');
      refs.mobileLogOutBtn.classList.remove('display-none');
      refs.signUpMobileBtn.classList.add('visually-hidden');

      localStorage.setItem('user', 'true');
    }
  });
}

checkUserAuth();

function handelLogOutUserAccount() {
  signOut(auth)
    .then(() => {
      refs.navigationEl.classList.add('visually-hidden'),
        refs.userBar.classList.add('visually-hidden'),
        refs.signUpHeaderBtn.classList.remove('visually-hidden');
      refs.userMobileContainer.classList.add('display-none'),
        refs.mibileNav.classList.add('display-none'),
        refs.mobileLogOutBtn.classList.add('display-none'),
        refs.signUpMobileBtn.classList.remove('visually-hidden');
      // refs.userBarBtnText.innerHTML = '';
      // refs.userMobileBarBtnText.innerHTML = '';

      localStorage.removeItem('user');
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

function validatePassword(password) {
  if (password.length < 6) {
    Notiflix.Notify.failure('Password should be at least 6 characters');
    return;
  }
}
