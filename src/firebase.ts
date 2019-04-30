import * as firebaseApp from "firebase/app";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyDBuB-6IWyFiouSkudtCHlJmgRgJ2doTw8",
  authDomain: "mapemo.firebaseapp.com",
  databaseURL: "https://mapemo.firebaseio.com",
  projectId: "mapemo",
  storageBucket: "mapemo.appspot.com",
  messagingSenderId: "207047600556",
};

export const firebase = !firebaseApp.apps.length
  ? firebaseApp.initializeApp(config)
  : firebaseApp.app();
