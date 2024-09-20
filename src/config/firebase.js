// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCklYSqPcsipeMsRRVTw3z41V4saXI87Zw",
  authDomain: "hotel-6e4ed.firebaseapp.com",
  projectId: "hotel-6e4ed",
  storageBucket: "hotel-6e4ed.appspot.com",
  messagingSenderId: "803196699766",
  appId: "1:803196699766:web:ab6e560e4822ab1ccfcb57",
  measurementId: "G-K515V3Y2BD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const db= getFirestore(app)
export const auth=getAuth(app)
// export { auth };
