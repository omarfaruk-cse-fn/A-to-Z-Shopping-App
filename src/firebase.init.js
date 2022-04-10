// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbur428zpXXA7Fy2lZCrvWatjKYRlur08",
    authDomain: "ema-john-simple-75446.firebaseapp.com",
    projectId: "ema-john-simple-75446",
    storageBucket: "ema-john-simple-75446.appspot.com",
    messagingSenderId: "443643775759",
    appId: "1:443643775759:web:fc58e142ab2ea28bb18c7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth