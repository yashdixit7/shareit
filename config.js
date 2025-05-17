// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkC2wZ2KfIPgvXXLqHv7zmJ7KPjjNndQY",
  authDomain: "shareit-374cb.firebaseapp.com",
  databaseURL: "https://shareit-374cb-default-rtdb.firebaseio.com",
  projectId: "shareit-374cb",
  storageBucket: "shareit-374cb.firebasestorage.app",
  messagingSenderId: "388639704117",
  appId: "1:388639704117:web:03c14dfe918c43746e1d7c",
  measurementId: "G-9N3718797R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);