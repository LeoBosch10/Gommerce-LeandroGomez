import firebase from 'firebase.app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCYxM_Yhvw4zk5z7cnGC3oLr_6L8ysnxHo",
    authDomain: "gommerce-f364b.firebaseapp.com",
    projectId: "gommerce-f364b",
    storageBucket: "gommerce-f364b.appspot.com",
    messagingSenderId: "42569676336",
    appId: "1:42569676336:web:f932b76fcb7b06f932dff5"
  };
 const fb= firebase.initializeApp(firebaseConfig);

 export const db= db.firestore();
