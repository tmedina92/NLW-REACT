import firebase from "firebase/compat/app"
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAyWoGnyFlOpVGRyU3x2tTVw8eId3NbshE",
  authDomain: "letmeask-f0f6e.firebaseapp.com",
  databaseURL: "https://letmeask-f0f6e-default-rtdb.firebaseio.com",
  projectId: "letmeask-f0f6e",
  storageBucket: "letmeask-f0f6e.appspot.com",
  messagingSenderId: "412695725358",
  appId: "1:412695725358:web:8a3679148e0b0f59c3e6bf",
  measurementId: "G-HJM16F4JCB"
};
  
  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth();
  const db = getDatabase();
  const analytics = getAnalytics();
  const storage = getStorage();

  
  export { firebase, auth, db, analytics, firebaseApp, storage };
  
  