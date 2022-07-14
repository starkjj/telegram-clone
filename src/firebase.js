import { dblClick } from '@testing-library/user-event/dist/types/convenience';
import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDhbUb9qcbiFE_d9GKMtuRzpzqx_SOR82c",
    authDomain: "telegram-clone-6e382.firebaseapp.com",
    projectId: "telegram-clone-6e382",
    storageBucket: "telegram-clone-6e382.appspot.com",
    messagingSenderId: "992023432690",
    appId: "1:992023432690:web:5ffcf8c09932bfa7f86f6b",
    measurementId: "G-Z6FBH9K52K"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;