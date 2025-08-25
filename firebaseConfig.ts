import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
apiKey: "AIzaSyASmnKvFmCt0YLV8dMA-ZM76W10vlbbGlw",
  authDomain: "projetoreactnative-39345.firebaseapp.com",
  projectId: "projetoreactnative-39345",
  storageBucket: "projetoreactnative-39345.firebasestorage.app",
  messagingSenderId: "677753948157",
  appId: "1:677753948157:web:9b27ce066246d055ebbb94"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);