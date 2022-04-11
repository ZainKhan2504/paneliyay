import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "paneliyay-d8f6a.firebaseapp.com",
  projectId: "paneliyay-d8f6a",
  storageBucket: "paneliyay-d8f6a.appspot.com",
  messagingSenderId: "692012172539",
  appId: "1:692012172539:web:aa496f2dbb383c4e1cdc5e",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
