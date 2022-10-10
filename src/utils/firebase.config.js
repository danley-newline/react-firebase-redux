// import { initializeApp } from "firebase/app";
import { firebase } from "firebase/compat/app";

const app = firebase.initializeApp({
  apiKey: "AIzaSyB-22z-Dcv9sT4RfxzEAiGE7HFLFqmjogk",
  authDomain: "react-firebase-redux-613a6.firebaseapp.com",
  projectId: "react-firebase-redux-613a6",
  storageBucket: "react-firebase-redux-613a6.appspot.com",
  messagingSenderId: "134859612216",
  appId: "1:134859612216:web:760c0887ae2b3f9d8806cd"
});

export const auth = app.auth();
export default app;

// Initialize Firebase
// const app = initializeApp(firebaseConfig);