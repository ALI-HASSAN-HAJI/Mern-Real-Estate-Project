// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-fdd73.firebaseapp.com",
  projectId: "mern-estate-fdd73",
  storageBucket: "mern-estate-fdd73.appspot.com",
  messagingSenderId: "611379654855",
  appId: "1:611379654855:web:3942b7b11bd41ef5c94ee2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);