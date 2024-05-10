// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCLwNab-s8fIr_Gblg5-GXWHewmdEkRzk",
  authDomain: "royella-luxury-hotel.firebaseapp.com",
  projectId: "royella-luxury-hotel",
  storageBucket: "royella-luxury-hotel.appspot.com",
  messagingSenderId: "356368651678",
  appId: "1:356368651678:web:c88130b77ca0dba8a5b28f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;