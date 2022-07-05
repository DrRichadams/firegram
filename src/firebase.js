// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
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


async function getCities(db) {
    const citiesCol = collection(db, 'cities');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
}

export const cityData = getCities(db)