// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCr-If8ltJgJBSlnL6b6qFpcxZdjf8-6DE",
  authDomain: "isle-cats.firebaseapp.com",
  projectId: "isle-cats",
  storageBucket: "isle-cats.appspot.com",
  messagingSenderId: "745283408392",
  appId: "1:745283408392:web:3345accd095465668d37bd",
  measurementId: "G-BK32GWFQZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
