
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBiim_tLVhRlII6Aro9JXdJw2RpwSRnCqY",
  authDomain: "soa9a-b71b2.firebaseapp.com",
  projectId: "soa9a-b71b2",
  storageBucket: "soa9a-b71b2.appspot.com",
  messagingSenderId: "528101012426",
  appId: "1:528101012426:web:05251f0c1799ef69a4d533"
};

initializeApp(firebaseConfig);
export const auth=getAuth();

