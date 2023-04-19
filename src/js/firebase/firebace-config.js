import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAeik9oo_gBn0f-GbQ_xSpS3Q02Q6DDNBE',
  authDomain: 'able-keep-215213.firebaseapp.com',
  databaseURL: 'https://able-keep-215213-default-rtdb.firebaseio.com',
  projectId: 'able-keep-215213',
  storageBucket: 'able-keep-215213.appspot.com',
  messagingSenderId: '159339554115',
  appId: '1:159339554115:web:acb4081534c803abb77bf6',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
