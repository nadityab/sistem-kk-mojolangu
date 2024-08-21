// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_Rdg_inhOJzEZgKm-52UywZtrZyF2L6w",
  authDomain: "sistem-kk-mojolangu.firebaseapp.com",
  projectId: "sistem-kk-mojolangu",
  storageBucket: "sistem-kk-mojolangu.appspot.com",
  messagingSenderId: "63326237879",
  appId: "1:63326237879:web:d8d3ba6ef02c16d750c932",
  measurementId: "G-ZKDPZY9K9S",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
const auth = getAuth(firebaseApp);

export { db as default, storage, auth };
