// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import { getApp, getApps, initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
     // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
     // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
     // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID ,
     // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
     // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDER_ID,
     // appId: process.env.REACT_APP_FIREBASE_APP_ID
     apiKey: "AIzaSyATBpHl3gQTNQ0D96CKGur2wLN_NhPbE40",
     authDomain: "foodapp-fullstack3.firebaseapp.com",
     projectId: "foodapp-fullstack3",
     storageBucket: "foodapp-fullstack3.appspot.com",
     messagingSenderId: "608326449328",
     appId: "1:608326449328:web:115a1b885f69224b546375"

//      REACT_APP_FIREBASE_API_KEY = "AIzaSyATBpHl3gQTNQ0D96CKGur2wLN_NhPbE40",
// REACT_APP_FIREBASE_AUTH_DOMAIN = "foodapp-fullstack3.firebaseapp.com",
// REACT_APP_FIREBASE_PROJECT_ID = "foodapp-fullstack3",
// REACT_APP_FIREBASE_STORAGE_BUCKET = "foodapp-fullstack3.appspot.com",
// REACT_APP_FIREBASE_MESSAGINGSENDER_ID = "608326449328",
// REACT_APP_FIREBASE_APP_ID= "1:608326449328:web:115a1b885f69224b546375"
};

console.log('API Key:', process.env.REACT_APP_FIREBASE_API_KEY);
console.log("Hello");

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

//const storage = getStorage(app);

// export { app, storage };

export  {app} ;