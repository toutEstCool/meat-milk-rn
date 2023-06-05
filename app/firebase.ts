import { initializeApp } from "firebase/app"
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBkmFV9iwDeG_ym2zKwS1_4EpLqF8UB6JQ",
  authDomain: "meet-milk.firebaseapp.com",
  projectId: "meet-milk",
  storageBucket: "meet-milk.appspot.com",
  messagingSenderId: "355276732380",
  appId: "1:355276732380:web:1b31dd6ee2b4ba54834119"
};

initializeApp(firebaseConfig)
export const auth = getAuth()

export const register = (email: string, password: string): any => {
  createUserWithEmailAndPassword(auth, email, password)
}
export const login = (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password)
}
export const logout = () => signOut(auth)

export const db = getFirestore()
