// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBMcNpF26DR3ShSnH9AgbGsh_1FQsBH5d8",
    authDomain: "volunteer-network-1c693.firebaseapp.com",
    projectId: "volunteer-network-1c693",
    storageBucket: "volunteer-network-1c693.appspot.com",
    messagingSenderId: "704121300715",
    appId: "1:704121300715:web:d2c1cb08c6fae1b90780ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;