// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvA84Z8LRStqj165cvXc-0JNbPBcPxbME",
  authDomain: "netflix-clone-9394f.firebaseapp.com",
  projectId: "netflix-clone-9394f",
  storageBucket: "netflix-clone-9394f.appspot.com",
  messagingSenderId: "311983547530",
  appId: "1:311983547530:web:888d410c5773921b9e3973"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)