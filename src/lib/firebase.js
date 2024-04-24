// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD92eOOjdmVctcJtL5nhWxLOxL-c4XK2bk",
  authDomain: "students-personal-details-form.firebaseapp.com",
  projectId: "students-personal-details-form",
  storageBucket: "students-personal-details-form.appspot.com",
  messagingSenderId: "953234537967",
  appId: "1:953234537967:web:7ef45078341c10e0fe4a1a",
  measurementId: "G-G4WC4C3DJ9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const FIRESTORE = getFirestore(app);
export const AUTH = getAuth(app);
export const addDocument = async (collectionName, document, callback) => {
  const collectionRef = collection(FIRESTORE, collectionName);
  document.id = document.id ? document.id : doc(collectionRef).id;
  await setDoc(doc(collectionRef, document.id), document)
    .then(() => callback(document))
    .catch((err) => console.log("Failed to add document", err.message));
};
export const getCollection = async (collectionName, callback) => {
  const collectionRef = collection(FIRESTORE, collectionName);
  const snapshot = await getDocs(collectionRef);
  const documents = snapshot.docs.map((doc) => doc.data());
  callback(documents);
};
