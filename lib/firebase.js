import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBttVkjVTbgsIhMC_gEmevgmY3X_86itfI",
  authDomain: "kiithub-1018.firebaseapp.com",
  databaseURL: "https://kiithub-1018-default-rtdb.firebaseio.com",
  projectId: "kiithub-1018",
  storageBucket: "kiithub-1018.firebasestorage.app",
  messagingSenderId: "560339256269",
  appId: "1:560339256269:web:dcf89ac3b7d9e553fdfa84"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const storage = getStorage(app)
