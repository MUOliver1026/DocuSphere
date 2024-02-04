// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvscFSa09uLRXjI3x3lQUPzcaCVk-kvU8",
  authDomain: "docusphere-fd832.firebaseapp.com",
  projectId: "docusphere-fd832",
  storageBucket: "docusphere-fd832.appspot.com",
  messagingSenderId: "1073515717825",
  appId: "1:1073515717825:web:67d1e61cdc99385cd86040",
  measurementId: "G-Z21YR63MCM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };