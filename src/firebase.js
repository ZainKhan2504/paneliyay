import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "paneliyay-d8f6a.firebaseapp.com",
  projectId: "paneliyay-d8f6a",
  storageBucket: "paneliyay-d8f6a.appspot.com",
  messagingSenderId: "692012172539",
  appId: "1:692012172539:web:aa496f2dbb383c4e1cdc5e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
