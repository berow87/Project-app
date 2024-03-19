// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdGQ5RusJiV3MwrsMFzShjS8QzHMhajj4",
  authDomain: "appproject-a8602.firebaseapp.com",
  projectId: "appproject-a8602",
  storageBucket: "appproject-a8602.appspot.com",
  messagingSenderId: "640561434086",
  appId: "1:640561434086:web:7347abf647243464671a27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)