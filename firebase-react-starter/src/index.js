import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase'
// Initialize Firebase
 var config = {
/* copy the config from  firebase project */
 };

firebase.initializeApp(config)
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
