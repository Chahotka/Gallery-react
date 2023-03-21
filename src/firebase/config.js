import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { getFirestore, collection, onSnapshot, addDoc, getDocs, query, limit, orderBy, serverTimestamp } from 'firebase/firestore'

const firebaseConfig = {
  // config
};


const app = initializeApp(firebaseConfig)

const storage = getStorage(app)
const firestore = getFirestore(app)
const timestamp = serverTimestamp

export { storage, ref, uploadBytesResumable, getDownloadURL, firestore, collection, onSnapshot, addDoc, getDocs, query, limit, orderBy, timestamp }