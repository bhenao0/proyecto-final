// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJRBHG6IfZQdV6h7UESJ90n9AJ2VBv19M",
    authDomain: "login-ecommerce-bc0f2.firebaseapp.com",
    projectId: "login-ecommerce-bc0f2",
    storageBucket: "login-ecommerce-bc0f2.appspot.com",
    messagingSenderId: "180199424443",
    appId: "1:180199424443:web:c4706b6b04b34ec7fb849e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app