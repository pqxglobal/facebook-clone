import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAH-xmjEMifndSpMl9LNKYhRUuT7bz6Uw8',
  authDomain: 'facebook-clone-d455c.firebaseapp.com',
  projectId: 'facebook-clone-d455c',
  storageBucket: 'facebook-clone-d455c.appspot.com',
  messagingSenderId: '306171559507',
  appId: '1:306171559507:web:84ff7c449030862bcb10a6',
  measurementId: 'G-5BGY6ZXWJG',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
