import Firebase from 'firebase';
import "firebase/firestore";
import "firebase/auth";

const app = {
    apiKey: "AIzaSyAez8I6DtMdcniqALJGoPbipUIeslL2fXI",
  authDomain: "ysu-accord.firebaseapp.com",
  projectId: "ysu-accord",
  storageBucket: "ysu-accord.appspot.com",
  messagingSenderId: "390803374543",
  appId: "1:390803374543:web:18144ac42ab577f94252ba"
};

const FirebaseApp = Firebase.initializeApp(app);
const db = FirebaseApp.firestore();
const auth = Firebase.auth();
const provider = new Firebase.auth.GoogleAuthProvider();

export {db, auth, provider };
