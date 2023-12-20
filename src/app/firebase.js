// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGhD7WWwwmwOG0HTH0d9EoaVLP-J1kWbc",
  authDomain: "personal-website-55ab9.firebaseapp.com",
  projectId: "personal-website-55ab9",
  storageBucket: "personal-website-55ab9.appspot.com",
  messagingSenderId: "864410764192",
  appId: "1:864410764192:web:cda561d1015882b4b59ac5",
  measurementId: "G-N8FPMF8X0J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);