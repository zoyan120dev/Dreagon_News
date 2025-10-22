
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyApRs_pLBwdCpXNCB3piFkVV7nxgWh0fFw",
    authDomain: "dragon-news-auth-1164a.firebaseapp.com",
    projectId: "dragon-news-auth-1164a",
    storageBucket: "dragon-news-auth-1164a.firebasestorage.app",
    messagingSenderId: "504470334151",
    appId: "1:504470334151:web:0f665726b50be3ce3c6ce2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app