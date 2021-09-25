// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA59U8LIrZHwfciBW68H6j-IZyNsboBSbM",
  authDomain: "wisp-93daf.firebaseapp.com",
  projectId: "wisp-93daf",
  storageBucket: "wisp-93daf.appspot.com",
  messagingSenderId: "438011659300",
  appId: "1:438011659300:web:24f4fa204edb0c5e91c4b1",
  measurementId: "G-6KNQBBQV1J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
