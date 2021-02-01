import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAiAG0xeVfwchpedtNTt2uZW-KTwgVa80I",
  authDomain: "auth-daa73.firebaseapp.com",
  projectId: "auth-daa73",
  storageBucket: "auth-daa73.appspot.com",
  messagingSenderId: "196976781528",
  appId: "1:196976781528:web:6ee6ab0d18f7494c258fad",
});

export const auth = app.auth();
export default app;
