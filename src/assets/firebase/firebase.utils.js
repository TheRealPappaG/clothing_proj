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

if(!firebase.apps.length){
    firebase.initializeApp(config);
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get(); 

    if(!snapShot.exists){
      const {displayName, email} = userAuth
      const createdOn = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdOn,
          ...additionalData
        })
      }catch(error){
        console.log('error creating user', error.message)
      }
    }
    return userRef;
  };
  

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


