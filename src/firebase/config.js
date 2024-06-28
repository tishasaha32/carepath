import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyBszz-NF0r_PkE4NJsFVYgt-6XLwdRs8Es",
  authDomain: "carepath-medhack.firebaseapp.com",
  projectId: "carepath-medhack",
  storageBucket: "carepath-medhack.appspot.com",
  messagingSenderId: "582022641811",
  appId: "1:582022641811:web:5f2f64ab425ce2bdb2b566",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// Initialize Firestore and Storage
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, auth };
export default app;
