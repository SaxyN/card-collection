import * as firebase from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyBSJGeDzwuc_jx7DV80USG3B4Ped8P44Pk",
    authDomain: "web-app-dev-10fb0.firebaseapp.com",
    databaseURL: "https://web-app-dev-10fb0-default-rtdb.firebaseio.com",
    projectId: "web-app-dev-10fb0",
    storageBucket: "web-app-dev-10fb0.appspot.com",
    messagingSenderId: "543569094856",
    appId: "1:543569094856:web:e4008a794ea9ee8cac1dfd"
});
// console.log(app);

const db = getFirestore()

export { app, db };