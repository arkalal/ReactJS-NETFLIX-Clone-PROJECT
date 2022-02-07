import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBxfc3KRJZpsGueZ6I_rL6glouozjhbkS0",
    authDomain: "linkedin-project-2e2a1.firebaseapp.com",
    projectId: "linkedin-project-2e2a1",
    storageBucket: "linkedin-project-2e2a1.appspot.com",
    messagingSenderId: "366707873479",
    appId: "1:366707873479:web:c6bb8b2d95d9d85e4f90e2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()

export { auth }