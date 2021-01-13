import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBO_0KXgNDv6mn82H7q5utBfIBGgBKKhdc",
    authDomain: "crown-db-78acb.firebaseapp.com",
    projectId: "crown-db-78acb",
    storageBucket: "crown-db-78acb.appspot.com",
    messagingSenderId: "724884192229",
    appId: "1:724884192229:web:b532ea75a9504fbece4d0c",
    measurementId: "G-3GNYXQE2D6"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


