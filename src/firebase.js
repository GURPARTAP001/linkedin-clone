import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCCzeGEEVkV_fsSXbvhntzcElJ88Of9IMc",
    authDomain: "linkedon-clone-e51bb.firebaseapp.com",
    projectId: "linkedon-clone-e51bb",
    storageBucket: "linkedon-clone-e51bb.appspot.com",
    messagingSenderId: "1032450616279",
    appId: "1:1032450616279:web:d3e5548488ce5582033992"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth()
export const storage = getStorage();
export const db = getFirestore();