
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD1Ny82JGLJFkJvmMuTUO5DPQMJ62UjMzU",
  authDomain: "skhospital-4d128.firebaseapp.com",
  databaseURL: "https://skhospital-4d128-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "skhospital-4d128",
  storageBucket: "skhospital-4d128.firebasestorage.app",
  messagingSenderId: "390909379487",
  appId: "1:390909379487:web:92c174689c8fcd62c9b3aa"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const rtdb = getDatabase(app);

export { db, rtdb };
