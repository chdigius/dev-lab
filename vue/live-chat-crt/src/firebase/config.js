import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAgOxws0swd8KJftDZgEXSWbz1dmyx99O8",
  authDomain: "vue-demo-sites.firebaseapp.com",
  projectId: "vue-demo-sites",
  storageBucket: "vue-demo-sites.appspot.com",
  messagingSenderId: "1094108994745",
  appId: "1:1094108994745:web:5bd11dfa4f532d4883cf68",
  measurementId: "G-BXFBEBPVEB"
};

//init firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp }