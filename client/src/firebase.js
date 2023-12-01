// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-6905e.firebaseapp.com",
  projectId: "mern-estate-6905e",
  storageBucket: "mern-estate-6905e.appspot.com",
  messagingSenderId: "896002972873",
  appId: "1:896002972873:web:77783744e66b266f404118"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);