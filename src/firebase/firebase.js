import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBtOKUADu2dlNUHyOoEoug0Ml6sWG5MG00",
  authDomain: "crown-db-cee5b.firebaseapp.com",
  databaseURL: "https://crown-db-cee5b.firebaseio.com",
  projectId: "crown-db-cee5b",
  storageBucket: "crown-db-cee5b.appspot.com",
  messagingSenderId: "492723837501",
  appId: "1:492723837501:web:e28a46202a03d1d52ae854",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
