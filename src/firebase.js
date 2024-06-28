import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDHKRXKOQH-FbWng8ZQOr2w76PXnrQ-7Dc",
  authDomain: "chat-app-a2e4a.firebaseapp.com",
  projectId: "chat-app-a2e4a",
  storageBucket: "chat-app-a2e4a.appspot.com",
  messagingSenderId: "589718873150",
  appId: "1:589718873150:web:7ff3e814f26ac57ae0dd6f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

