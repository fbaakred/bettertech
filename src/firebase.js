// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAn_wFUmfdJhsyzyZqeaYbGaeztaLxiIf4",
  authDomain: "bettertech-d5b9d.firebaseapp.com",
  projectId: "bettertech-d5b9d",
  storageBucket: "bettertech-d5b9d.appspot.com",
  messagingSenderId: "538251208133",
  appId: "1:538251208133:web:ef66f99e74a6eb27eb57ac",
  measurementId: "G-FNK66N7GET"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);