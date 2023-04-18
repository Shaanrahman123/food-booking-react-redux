import{getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyB7OtijvSMi7aIH-ghY5u-iG7KwY34vwWk",
    authDomain: "foodappshaan.firebaseapp.com",
    databaseURL: "https://foodappshaan-default-rtdb.firebaseio.com",
    projectId: "foodappshaan",
    storageBucket: "foodappshaan.appspot.com",
    messagingSenderId: "803011831816",
    appId: "1:803011831816:web:413f9b1b74cac9aff8c9bd"
  };


const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };