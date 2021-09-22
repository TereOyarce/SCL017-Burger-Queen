import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBc_88nhWxIoa_GRC9ZZX5to0cBn_Y_ZPI",
    authDomain: "palico-scafe.firebaseapp.com",
    projectId: "palico-scafe",
    storageBucket: "palico-scafe.appspot.com",
    messagingSenderId: "732732898756",
    appId: "1:732732898756:web:8b8e54998e07980d8a3891"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const app = firebase.app();
console.log(app);


// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyBc_88nhWxIoa_GRC9ZZX5to0cBn_Y_ZPI",
    authDomain: "palico-scafe.firebaseapp.com",
    projectId: "palico-scafe"
  });
  
export { auth, db};