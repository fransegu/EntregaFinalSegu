import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import products from './mocks/products.json';
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkdDoQREyaiRsfSqZGms80KAta0Sd6goo",
  authDomain: "storenemesis-10609.firebaseapp.com",
  projectId: "storenemesis-10609",
  storageBucket: "storenemesis-10609.appspot.com",
  messagingSenderId: "685729760806",
  appId: "1:685729760806:web:5b7da1b6f4025bb96208e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// products.forEach((product) => {
//   addDoc(collection(db, 'products'), product)
//   .then((docRef => {
//     console.log('Documento agregado con id: ', docRef.id)

//   }))
//   .catch((error) => {
//     console.error("Error al agregar el documento", error)
//   })
// })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


<App />
  </React.StrictMode>,
)
