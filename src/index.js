import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUNBTJoF3Ia-DBFlfqfxP4xnnqPhkXTbA",
  authDomain: "react-chat-app-e01b7.firebaseapp.com",
  databaseURL: "https://react-chat-app-e01b7-default-rtdb.firebaseio.com",
  projectId: "react-chat-app-e01b7",
  storageBucket: "react-chat-app-e01b7.appspot.com",
  messagingSenderId: "944678901625",
  appId: "1:944678901625:web:2307f7966aeab33231c1a8",
  measurementId: "G-KVETJCW2DW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
