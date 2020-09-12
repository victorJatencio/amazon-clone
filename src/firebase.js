import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCa8-Y_IY00VpQLi_WIiSVMSf-dl8Ywd2g",
  authDomain: "clone-5c372.firebaseapp.com",
  databaseURL: "https://clone-5c372.firebaseio.com",
  projectId: "clone-5c372",
  storageBucket: "clone-5c372.appspot.com",
  messagingSenderId: "982812868203",
  appId: "1:982812868203:web:7002cad9600d5b3587bb2e",
  measurementId: "G-5RNHF5L044",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
