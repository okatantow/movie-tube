import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";

import 'firebase/auth'; // Import any Firebase services you need
const firebaseConfig = {
    apiKey: "AIzaSyCdqLw2DOqY0bLqvc9f3l0szb28CzzrOYM",
    authDomain: "movie-tube-e7af5.firebaseapp.com",
    projectId: "movie-tube-e7af5",
    storageBucket: "movie-tube-e7af5.appspot.com",
    messagingSenderId: "283042234247",
    appId: "1:283042234247:web:5976732602c7067ea79d22"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  export {auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged};
  export default db;