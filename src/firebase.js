// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCydIc37JxBOceNv-nuNwIm4uzCc4WBJp4",
  authDomain: "jt-solutions-b5c6d.firebaseapp.com",
  projectId: "jt-solutions-b5c6d",
  storageBucket: "jt-solutions-b5c6d.appspot.com",
  messagingSenderId: "952652311722",
  appId: "1:952652311722:web:8e709aaaf45278437074d3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
