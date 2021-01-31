import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAHbDrb9kPjbIm-UJImlleRbTBPpQaAYp8",
  authDomain: "twitter-clone-212c4.firebaseapp.com",
  projectId: "twitter-clone-212c4",
  storageBucket: "twitter-clone-212c4.appspot.com",
  messagingSenderId: "264520426992",
  appId: "1:264520426992:web:0e7606f7664ed22354a935",
  measurementId: "G-5PTM8ESFPX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
