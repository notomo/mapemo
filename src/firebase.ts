import * as firebaseApp from "firebase/app";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyCUoVYAVO47sX1oF-802tzlIos7TcChmLs",
  authDomain: "mapemo-store.firebaseapp.com",
  databaseURL: "https://mapemo-store.firebaseio.com",
  projectId: "mapemo-store",
  storageBucket: "mapemo-store.appspot.com",
  messagingSenderId: "48166676660",
};

export const firebase = !firebaseApp.apps.length
  ? firebaseApp.initializeApp(config)
  : firebaseApp.app();
