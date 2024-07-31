import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

var firebaseConfig = {
    apiKey: "AIzaSyAaoqIQyL3gQY75wvjJIOs0xfDNhTdArDM",
    authDomain: "schooldb-9a633.firebaseapp.com",
    databaseURL: "https://schooldb-9a633.firebaseio.com",
    projectId: "schooldb-9a633",
    storageBucket: "schooldb-9a633.appspot.com",
    messagingSenderId: "992347550068",
    appId: "1:992347550068:web:f45f21d8d4d78a5e"
  };
firebase.initializeApp(firebaseConfig);

const db = firebase.database();
const auth = firebase.auth();

export { firebase, db, auth};