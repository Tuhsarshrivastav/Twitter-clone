import firebase from "firebase";

const firebaseConfig = {
  //paste here your firebase config 
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
