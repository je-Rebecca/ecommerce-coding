import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyB9qD2h5IX-pCZjS7g3FuZ7WA0JMM6pr4o',
  authDomain: 'eccommerce-db.firebaseapp.com',
  projectId: 'eccommerce-db',
  storageBucket: 'eccommerce-db.appspot.com',
  messagingSenderId: '758081707029',
  appId: '1:758081707029:web:7fc837ece2ff2eb8e8421c',
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; //로그인전, null일경우 존재하지 않으면
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    //존재 하지 않을경우 새로생성
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
      console.log('error', error.message);
    }
  }
  // console.log(snapShot);
  return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
