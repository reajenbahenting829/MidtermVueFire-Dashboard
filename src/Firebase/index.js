// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZDiAlh914QxEzifxt8glh57P1XeX1lRU",
  authDomain: "authinapp-daab0.firebaseapp.com",
  projectId: "authinapp-daab0",
  storageBucket: "authinapp-daab0.appspot.com",
  messagingSenderId: "302121157079",
  appId: "1:302121157079:web:a6a2c69c1bf606c7dbcb92"  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }