// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  setDoc,
  deleteDoc,
  query,
  where,
  onSnapshot,
  writeBatch,
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
export const updateDocument = async (collectionName, document, callback) => {
  const docRef = doc(FIRESTORE, collectionName, document.id);
  await setDoc(docRef, document)
    .then(() => callback(document))
    .catch((err) => console.log("Failed to update document", err.message));
};
export const getCollection = async (collectionName, callback) => {
  const collectionRef = collection(FIRESTORE, collectionName);
  const snapshot = await getDocs(collectionRef);
  const documents = snapshot.docs.map((doc) => doc.data());
  callback(documents);
};
export const queryCollection = async (
  collectionName,
  queryPayload,
  callback
) => {
  const collectionRef = collection(FIRESTORE, collectionName),
    q = query(
      collectionRef,
      where(queryPayload.field, queryPayload.operator, queryPayload.value)
    );
  const snapshot = await getDocs(q);
  const documents = snapshot.docs.map((doc) => doc.data());
  callback(documents);
};
export const deleteDocument = async (collectionName, documentId, callback) => {
  const docRef = doc(FIRESTORE, collectionName, documentId);
  await deleteDoc(docRef).then(() => callback(documentId));
};

export const deleteMultipleDocuments = async (
  collectionName,
  queryPayload,
  callback
) => {
  const batch = writeBatch(FIRESTORE);
  const collectionRef = collection(FIRESTORE, collectionName),
    q = query(
      collectionRef,
      where(queryPayload.field, queryPayload.operator, queryPayload.value)
    );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    batch.delete(doc.ref);
  });
  await batch
    .commit()
    .then((result) => callback(result))
    .catch((error) => console.log(error));
};

/**
const deleteStrand = async (strandId) => {
  const batch = writeBatch(database);
  const docRef = doc(STRANDS, strandId);
  batch.delete(docRef);
  const q = query(STRANDS, where("resource_id", "==", strandId));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    batch.delete(doc.ref);
  });
  await batch
    .commit()
    .then(() => {
      success.value = true;
    })
    .catch((error) => console.log(error));
};

const functions = require("firebase-functions");
const admin = require("firebase-admin");

exports.deleteEntryAndSubentries = functions.firestore
  .document("entries/{entryId}")
  .onDelete(async (snap, context) => {
    const entryId = context.params.entryId;

    const subentriesQuery = admin
      .firestore()
      .collection("subentries")
      .where("entry_id", "==", entryId);

    const querySnapshot = await subentriesQuery.get();

    // Prepare batch
    const batch = admin.firestore().batch();

    querySnapshot.forEach((doc) => {
      batch.delete(doc.ref);
    });

    // Commit batch
    await batch.commit();
  });

const userdelete_query = db
  .collection("users")
  .where("user_online", "<=", new Date(Date.now() - 2592000000))
  .where("user_premium", "==", "no");

userdelete_query
  .get()
  .then(function (querySnapshot) {
    const promises = [];
    querySnapshot.forEach(function (doc) {
      promises.push(doc.ref.delete());
    });

    return Promise.all(promises);
  })
  .then(function () {
    console.log("ALL DOCS ARE DELETED");
  });

import { writeBatch, doc } from "firebase/firestore";

const toDelete = ["sdferwer32423asd", "Pasdas34234235", "aMNsdasd21312223232"];

const batch = writeBatch(db);

toDelete.forEach((docId) => {
  batch.delete(doc(db, "collectionName", docId));
});

// Commit the batch
await batch.commit();
// Alternatively, you can map an array of promises and then use Promise.all() as shown below:
const promises = toDelete.map((docId) =>
  deleteDoc(doc(db, "collection", docId))
);

await Promise.all(promises);

//The delete() in a batch just requires a DocumentReference so you can delete documents from multiple collections as shown below:

// After forEach in previous code snippet

await batch.delete(doc(db, "col2", sharedId));
await batch.delete(doc(db, "col3", currentUser.uid));

// Batch commit at the end
batch.commit();
 */
