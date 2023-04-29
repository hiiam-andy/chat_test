import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";



firebase.initializeApp({
  apiKey: "AIzaSyBaGOSBF-W0JwDeE6P6xYKKG4CyanCUN6I",
  authDomain: "chat-react-c8fb5.firebaseapp.com",
  projectId: "chat-react-c8fb5",
  storageBucket: "chat-react-c8fb5.appspot.com",
  messagingSenderId: "570976781550",
  appId: "1:570976781550:web:cc5f55f24cf8b29313dfff",
  measurementId: "G-SR8CVVZ8TW"
});


export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
      firebase,
      auth,
      firestore
    }}>
      <App />

    </Context.Provider>

);

