import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase'

// Initialize Firebase
 var config = {
   apiKey: "AIzaSyD5vGPCHzwxpBwIbhHKkyvQLyn2itGlkQk",
   authDomain: "veda-e9be8.firebaseapp.com",
   databaseURL: "https://veda-e9be8.firebaseio.com",
   storageBucket: "veda-e9be8.appspot.com",
   messagingSenderId: "218069762504"
 };

firebase.initializeApp(config)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
