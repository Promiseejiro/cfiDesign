import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB0H5Q5eWsBKEaaveOv-e7uSTNUl4s7EM8",
  authDomain: "cfiproject.firebaseapp.com",
  projectId: "cfiproject",
  storageBucket: "cfiproject.appspot.com",
  messagingSenderId: "652050661196",
  appId: "1:652050661196:web:9c6e40c16dfb92a4b059e9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
