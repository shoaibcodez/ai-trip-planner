// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8-LvZWPzGb118sMOPzyLPJ6fSlWvAa7g",
  authDomain: "ai-trip-planner-b4723.firebaseapp.com",
  projectId: "ai-trip-planner-b4723",
  storageBucket: "ai-trip-planner-b4723.appspot.com",
  messagingSenderId: "777824145732",
  appId: "1:777824145732:web:cd4771918c92c96e800711",
  measurementId: "G-X0XD9CX90E",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
