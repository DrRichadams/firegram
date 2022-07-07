// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage"
import { 
    getFirestore, 
    collection, 
    getDocs, 
    addDoc, 
    doc, 
    setDoc, 
    Timestamp, 
    updateDoc,
    serverTimestamp
   } from 'firebase/firestore';
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
const storage = getStorage(app);

const storageRef = ref(storage);

const mountainsRef = ref(storage, 'mountains.jpg');

async function getCities(db) {
    // const citiesCol = collection(db, 'cities');
    const citySnapshot = await getDocs(collection(db, 'cities'));
    console.log(citySnapshot)
    const cityList = citySnapshot.docs.map(doc => doc.data());
    // .orderBy('createdAt', 'desc')
    let documents = [];
    const cities = citySnapshot.docs.forEach(doc => {
      documents.push({...doc.data(), id: doc.id})
    });
    // return cityList;
    return documents;
}

export const addSome = async (city) => {
  try {
    const docRef = await addDoc(collection(db, "cities"), {
      name: city,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  
}

export const setSome = async (city) => {
  await setDoc(doc(db, "cities", "9QOVzdTp7kdWBfQXCPls"), {
    name: city,
    time: Timestamp.fromDate(new Date("December 10, 1815")),
      // time: Timestamp.Date(),
  }, { merge: true })
}

export const updateSome = async (update) => {
  await updateDoc(doc(db, "cities", "9QOVzdTp7kdWBfQXCPls"), {
      minister: update,
      time: serverTimestamp()
  })
}

export const cityData = getCities(db)