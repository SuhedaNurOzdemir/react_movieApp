import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyCdfsrAwcgGmwx4UddX4tW_2QlD7Ili6Fw",
  authDomain: "reactmovieapp-52621.firebaseapp.com",
  projectId: "reactmovieapp-52621",
  storageBucket: "reactmovieapp-52621.appspot.com",
  messagingSenderId: "332280981306",
  appId: "1:332280981306:web:be326a30ebbad1b60c1203",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
