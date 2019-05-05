import * as app from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDBuB-6IWyFiouSkudtCHlJmgRgJ2doTw8",
  authDomain: "mapemo.firebaseapp.com",
  databaseURL: "https://mapemo.firebaseio.com",
  projectId: "mapemo",
  storageBucket: "mapemo.appspot.com",
  messagingSenderId: "207047600556",
};

export const firebaseApp = () => {
  return !app.apps.length ? app.initializeApp(config) : app.app();
};
