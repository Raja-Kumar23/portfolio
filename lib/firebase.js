import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyD9l1vkW4syAyRd6xR1bMqLuiR36QKkTPk",
    authDomain: "my-portfolio-4f612.firebaseapp.com",
    projectId: "my-portfolio-4f612",
    storageBucket: "my-portfolio-4f612.firebasestorage.app",
    messagingSenderId: "748671114663",
    appId: "1:748671114663:web:947740b2aeea674af1ea82",
    measurementId: "G-RNMZMQYG2S"
  };

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const storage = getStorage(app)
