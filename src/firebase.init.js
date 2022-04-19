// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA22GQOg6C4sLicCBwN-pwIY3qTNsD70mQ",
    authDomain: "practise-email-pass.firebaseapp.com",
    projectId: "practise-email-pass",
    storageBucket: "practise-email-pass.appspot.com",
    messagingSenderId: "655196257492",
    appId: "1:655196257492:web:9ad6eb92092e7501bdcf41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;