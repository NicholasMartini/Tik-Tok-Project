// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVlo-WQHqhsA8KKPjiUn1u5BqLlqt-efQ",
  authDomain: "tiktok---jornada-5a5d5.firebaseapp.com",
  projectId: "tiktok---jornada-5a5d5",
  storageBucket: "tiktok---jornada-5a5d5.appspot.com",
  messagingSenderId: "751076027819",
  appId: "1:751076027819:web:26711e8c443974e29e36ee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
