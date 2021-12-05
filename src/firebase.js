import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCfDsPG6bYQkeLHK1cZ8lGaFLfxf4D7eqw",
    authDomain: "devfest-adfda.firebaseapp.com",
    projectId: "devfest-adfda",
    storageBucket: "devfest-adfda.appspot.com",
    messagingSenderId: "807974878456",
    appId: "1:807974878456:web:a18a521178abd1e6098f0d",
    measurementId: "G-FS57WJMGBX"
  };
  const app=initializeApp(firebaseConfig)
  const db=getFirestore(app)
  export {db}