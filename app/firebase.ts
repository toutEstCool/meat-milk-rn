import { initializeApp } from "firebase/app"
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBSDxsYmeuTjXJO9Ors3jjxyjiwLelovqg",
  authDomain: "meat-milk-2dcd3.firebaseapp.com",
  projectId: "meat-milk-2dcd3",
  storageBucket: "meat-milk-2dcd3.appspot.com",
  messagingSenderId: "5015640617",
  appId: "1:5015640617:web:1a210affd4910aa93c5a38"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export const register = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

export const login = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

export const db = getFirestore();
