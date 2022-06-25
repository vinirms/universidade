import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDo4MyxRG1pNEaAsmOhEcL6EuDZ9m3ots8",
  authDomain: "unes-3a6ad.firebaseapp.com",
  projectId: "unes-3a6ad",
  storageBucket: "unes-3a6ad.appspot.com",
  messagingSenderId: "535426680049",
  appId: "1:535426680049:web:994d7f0c9012760bfb5550",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
