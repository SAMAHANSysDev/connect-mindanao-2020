import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDbwMvsBHIhZMK1Ta2qOWGJk9Sqn8KuQLk",
  authDomain: "connect-mindanao-2020.firebaseapp.com",
  databaseURL: "https://connect-mindanao-2020.firebaseio.com",
  projectId: "connect-mindanao-2020",
  storageBucket: "connect-mindanao-2020.appspot.com",
  messagingSenderId: "1088318278754",
  appId: "1:1088318278754:web:25966fe4e35231c4b1953b",
  measurementId: "G-4GSV3R5VK3"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export default firebase;