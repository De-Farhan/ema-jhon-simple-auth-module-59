// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJr4Vn3g5C6GlCucbfg_LDv0Ux83o_smc",
  authDomain: "ema-jhon-simple-f0123.firebaseapp.com",
  projectId: "ema-jhon-simple-f0123",
  storageBucket: "ema-jhon-simple-f0123.appspot.com",
  messagingSenderId: "85438187105",
  appId: "1:85438187105:web:cca97ea872ff5ff9c10c20",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
