// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-8d5ed.firebaseapp.com",
  projectId: "mern-estate-8d5ed",
  storageBucket: "mern-estate-8d5ed.appspot.com",
  messagingSenderId: "433121531599",
  appId: "1:433121531599:web:66e437fb28b688ea64c9ba"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);