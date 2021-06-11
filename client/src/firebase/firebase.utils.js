import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyB9qD2h5IX-pCZjS7g3FuZ7WA0JMM6pr4o',
  authDomain: 'eccommerce-db.firebaseapp.com',
  databaseURL: 'https://eccommerce-db.firebaseio.com',
  projectId: 'eccommerce-db',
  storageBucket: 'eccommerce-db.appspot.com',
  messagingSenderId: '758081707029',
  appId: '1:758081707029:web:7fc837ece2ff2eb8e8421c',
};
firebase.initializeApp(config);

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

export const addCollectionAndDocs = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  //batch로 예측가능한 코드 생성. objectToAdd 가더라도 반만 가다가 실패할수있으니
  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc(); //id 부여
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
