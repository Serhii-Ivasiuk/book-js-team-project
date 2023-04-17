import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDfT-rZpY0OALd7KjMrkrFQZlQZKUmMqYA',
  authDomain: 'book-159d3.firebaseapp.com',
  databaseURL: 'https://book-159d3-default-rtdb.firebaseio.com',
  projectId: 'book-159d3',
  storageBucket: 'book-159d3.appspot.com',
  messagingSenderId: '35676359423',
  appId: '1:35676359423:web:0fe005890081fa3d52daca',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
