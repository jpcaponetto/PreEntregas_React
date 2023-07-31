// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2Lz1wCNNShmydqVuvKwHBkLr0bZVhkCs",
  authDomain: "proyectofinal-ecommerce.firebaseapp.com",
  projectId: "proyectofinal-ecommerce",
  storageBucket: "proyectofinal-ecommerce.appspot.com",
  messagingSenderId: "744454419885",
  appId: "1:744454419885:web:22a946aea5565d97fd1d24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);