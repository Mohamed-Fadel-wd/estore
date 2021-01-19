import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAf4-ugVBhFpQi1VOvk4Z2FDYaTge93aG4",
  authDomain: "estore-db-40e6b.firebaseapp.com",
  projectId: "estore-db-40e6b",
  storageBucket: "estore-db-40e6b.appspot.com",
  messagingSenderId: "432548184518",
  appId: "1:432548184518:web:e0faa4802e1ab66cbc32c7",
  measurementId: "G-MPL8T3BLQ7",
};

export const createUserProfileDocument = async (userAuth, AdditionalData ) => {
if (!userAuth) return; 
const userRef = firestore.doc(`user/${userAuth.uid}`);
const snapShot = await userRef.get();

if (!snapShot.exists){
  const { displayName , email} = userAuth;
  const createdAt = new Date ();
  try {
    await userRef.set({
      displayName, 
      email, 
      createdAt, 
      ...AdditionalData, 
    })

  } catch(error){
      console.log("Error creating user", error.message)
  } 
}
return userRef ;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
