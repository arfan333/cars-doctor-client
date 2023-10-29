// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey:import.meta.env.ViteapiKey,
  // authDomain:import.meta.env.ViteauthDomain,
  // projectId:import.meta.env.ViteprojectId,
  // storageBucket:import.meta.env.VitestorageBucket,
  // messagingSenderId:import.meta.env.VitemessagingSenderId,
  // appId:import.meta.env.ViteappId

  apiKey: "AIzaSyD6xKnFjcMw1B6hJ5z5FSCWdSey7vA_cJ4",
  authDomain: "cars-doctor-practice-client.firebaseapp.com",
  projectId: "cars-doctor-practice-client",
  storageBucket: "cars-doctor-practice-client.appspot.com",
  messagingSenderId: "976344810728",
  appId: "1:976344810728:web:94b716866dbbd880b9b55d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app