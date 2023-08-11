// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqt6j9JwjN_QXGE8OqDK27aOwTTebxv_o",
  authDomain: "mate-99956.firebaseapp.com",
  projectId: "mate-99956",
  storageBucket: "mate-99956.appspot.com",
  messagingSenderId: "259007537568",
  appId: "1:259007537568:web:69fd8a2bfa076b673c04c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);