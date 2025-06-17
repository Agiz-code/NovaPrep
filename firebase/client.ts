// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvK3JiJT2MBT7mBIOwgA0O0DaBiAHJ8WQ",
  authDomain: "novaprep.firebaseapp.com",
  projectId: "novaprep",
  storageBucket: "novaprep.firebasestorage.app",
  messagingSenderId: "866800283817",
  appId: "1:866800283817:web:5ad0188d774aa3975639b8",
  measurementId: "G-EBZ1C57TS0",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
