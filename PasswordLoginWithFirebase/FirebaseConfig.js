import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDuRKkLMTKOxdYJ9QIfDRHZsB36KbrsCqE",
    authDomain: "fir-assigment-e923c.firebaseapp.com",
    projectId: "fir-assigment-e923c",
    storageBucket: "fir-assigment-e923c.appspot.com",
    messagingSenderId: "97178963752",
    appId: "1:97178963752:web:83d5f2ec0d7312e139ca1d",
    measurementId: "G-TD856XT58T"
  };
const app = initializeApp(firebaseConfig);
export const database = getAuth(app)