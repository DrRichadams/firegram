// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage"
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAm_A1kNyv_se2tMIkDy7e7KAkHl9PaAq8",
  authDomain: "firegram-46f0e.firebaseapp.com",
  projectId: "firegram-46f0e",
  storageBucket: "firegram-46f0e.appspot.com",
  messagingSenderId: "272253767342",
  appId: "1:272253767342:web:1934e2f941000cb166a73f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const storage = getStorage(app);

export const projectStorage = ref(storage);
// export const cityData = getCities(db)