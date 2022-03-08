import firebase from "firebase/compat/app"
import "firebase/compat/auth"

export const app = firebase.initializeApp({
    apiKey: "AIzaSyDW-FtspMvVQ20rBKpum0VDrsQhHqWySJo",
    authDomain: "gestion-proyectos-app-1bb16.firebaseapp.com",
    projectId: "gestion-proyectos-app-1bb16",
    storageBucket: "gestion-proyectos-app-1bb16.appspot.com",
    messagingSenderId: "840741977325",
    appId: "1:840741977325:web:504318f993b3fbfdbb20e4",
    measurementId: "G-YNYHK7ZW3D"
})

export const google = new firebase.auth.GoogleAuthProvider();
