import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1dclolwfo9C5RSb3QX23bwlidZX5qSUQ",
  authDomain: "portifoliolevileal.firebaseapp.com",
  projectId: "portifoliolevileal",
  storageBucket: "portifoliolevileal.appspot.com",
  messagingSenderId: "336579291739",
  appId: "1:336579291739:web:d9d2e82497a78936d3ed7e",
  measurementId: "G-CSGQS9EQMD"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)