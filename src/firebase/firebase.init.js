// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTZoNwxyh3JeWUghmmirkaNH-dhT3BfT0",
  authDomain: "travelbd-client.firebaseapp.com",
  projectId: "travelbd-client",
  storageBucket: "travelbd-client.appspot.com",
  messagingSenderId: "186063761516",
  appId: "1:186063761516:web:dbb7a165abe35b46ad6849"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;