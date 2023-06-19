// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_F6Wx-FXIemqOMoRb35KEd-8Og_y8CPk",
  authDomain: "tiktok-jornadadev-54519.firebaseapp.com",
  projectId: "tiktok-jornadadev-54519",
  storageBucket: "tiktok-jornadadev-54519.appspot.com",
  messagingSenderId: "407320517253",
  appId: "1:407320517253:web:afb74785d3a4c3b03e27ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;