// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVTecuUklbw78R61rPXkpyqhWnxjlzFmU",
  authDomain: "doctors-portal-5544e.firebaseapp.com",
  projectId: "doctors-portal-5544e",
  storageBucket: "doctors-portal-5544e.appspot.com",
  messagingSenderId: "567049726267",
  appId: "1:567049726267:web:e0b8bb36b7e6981dc52f1e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;