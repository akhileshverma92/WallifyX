import { initializeApp } from "firebase/app"
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBZa8JslnujsbKGe8XqfgcYT5N5R57avj4",
    authDomain: "wallify-70334.firebaseapp.com",
    projectId: "wallify-70334",
    storageBucket: "wallify-70334.appspot.com",
    messagingSenderId: "174756788204",
    appId: "1:174756788204:web:ae386a23d821a5b7b872c9",
    measurementId: "G-2V549KGP3Q",
    databaseURL: 'https://wallify-70334-default-rtdb.firebaseio.com/',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export {auth,provider};