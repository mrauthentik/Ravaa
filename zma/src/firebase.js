// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBkwXNFkWjmGukOA_QDk6ii29UISm2aMg",
  authDomain: "contact-5616c.firebaseapp.com",
  projectId: "contact-5616c",
  storageBucket: "contact-5616c.firebasestorage.app",
  messagingSenderId: "562635620661",
  appId: "1:562635620661:web:d9221a5d681c95cf85cc7c",
  measurementId: "G-7SH03DQ77Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);