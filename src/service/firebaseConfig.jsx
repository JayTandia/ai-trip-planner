// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDW1SoNuN65g-STkB-ZyeEMSnUiv92knE4",
  authDomain: "yt-ai-projects.firebaseapp.com",
  projectId: "yt-ai-projects",
  storageBucket: "yt-ai-projects.appspot.com",
  messagingSenderId: "589690981098",
  appId: "1:589690981098:web:dec54e8d982e77ed47e593",
  measurementId: "G-THC354646L"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


//const analytics = getAnalytics(app);