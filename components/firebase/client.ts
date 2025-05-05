// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyB6hRbv0CFAJYJL6acqfrQdQziM_AVmMVQ",
  authDomain: "prepwise-c0a21.firebaseapp.com",
  projectId: "prepwise-c0a21",
  storageBucket: "prepwise-c0a21.firebasestorage.app",
  messagingSenderId: "276287358914",
  appId: "1:276287358914:web:a5e5734f2e14e1502f385b",
  measurementId: "G-XTY9M08V8V"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);