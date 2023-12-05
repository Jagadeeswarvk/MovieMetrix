import { initializeApp } from "firebase/app";
import { getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCol2hLd2w2BoqexIITvMkww4w7vA-GWyU",
  authDomain: "moviemetrix.firebaseapp.com",
  projectId: "moviemetrix",
  storageBucket: "moviemetrix.appspot.com",
  messagingSenderId: "274512516655",
  appId: "1:274512516655:web:b95bdeda307ab3b977d8da",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;