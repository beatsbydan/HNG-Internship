import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDwDC3KuKiiHkVCtUc1-gQ_b0G5_cJaCkQ",
    authDomain: "doggieframe.firebaseapp.com",
    projectId: "doggieframe",
    storageBucket: "doggieframe.appspot.com",
    messagingSenderId: "612521214100",
    appId: "1:612521214100:web:2d4276527bf9b01927f481",
    measurementId: "G-JX1LP3SDY2"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)