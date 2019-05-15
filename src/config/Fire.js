import firebase from "firebase/app";
import "firebase/auth";
import key from "../.env.js";

const firebaseConfig = {
  apiKey: key,
  authDomain: "ergotin-45355.firebaseapp.com",
  databaseURL: "https://ergotin-45355.firebaseio.com",
  projectId: "ergotin-45355",
  storageBucket: "ergotin-45355.appspot.com",
  messagingSenderId: "878869459620",
  appId: "1:878869459620:web:1c6a83006362610d"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
