
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCDy8Y1hakNOqBXx6i05JqkejQjBsDM_jU",
  authDomain: "clone-ee72d.firebaseapp.com",
  projectId: "clone-ee72d",
  storageBucket: "clone-ee72d.appspot.com",
  messagingSenderId: "771518768831",
  appId: "1:771518768831:web:297307861816b9e550080a",
  measurementId: "G-G3W4C8CCYS"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();

// The latest update for auth with db
 const auth = firebase.auth();
export default auth;







