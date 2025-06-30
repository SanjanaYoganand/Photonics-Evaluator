import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBBUcmWmfxYXEx86GEoNibQlaxR74cKVnU",
  authDomain: "photonics-photo.firebaseapp.com",
  projectId: "photonics-photo",
  storageBucket: "photonics-photo.firebasestorage.app",
  messagingSenderId: "999810702515",
  appId: "1:999810702515:web:aec2c4900fee264af4a4c6",
  measurementId: "G-GK7YLTQSWC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
