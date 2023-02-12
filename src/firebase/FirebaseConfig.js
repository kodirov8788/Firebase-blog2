import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyBElulC3APzC5Wul5biC8uDdDFUDO7wohM",
    authDomain: "first-app-49ce8.firebaseapp.com",
    projectId: "first-app-49ce8",
    storageBucket: "first-app-49ce8.appspot.com",
    messagingSenderId: "412629623191",
    appId: "1:412629623191:web:71e29d538199287f6724d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()

export const firestore = getFirestore()

export default firestore



