// lib/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCqdkKP-pvT_zAK4Ro-uGyQNpgoVvrkh9U",
    authDomain: "campus-connect-2711c.firebaseapp.com",
    projectId: "campus-connect-2711c",
    storageBucket: "campus-connect-2711c.firebasestorage.app",
    messagingSenderId: "882435198514",
    appId: "1:882435198514:web:19b4afef113c3295c0f62b",
    measurementId: "G-RWVFS0TV2H"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
