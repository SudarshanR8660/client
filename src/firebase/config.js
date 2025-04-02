
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyAGzEpREAHYfAxcNehw1ZmDVlXWWOSchDE",
  authDomain: "ezcom-ea5d4.firebaseapp.com",
  projectId: "ezcom-ea5d4",
  storageBucket: "ezcom-ea5d4.appspot.com",
  messagingSenderId: "597852818392",
  appId: "1:597852818392:web:df512eb6212311e43880ad",
  measurementId: "G-TGHDKSYPPP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app