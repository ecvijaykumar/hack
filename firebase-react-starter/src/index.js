import React from 'react';
import ReactDOM from 'react-dom';


import * as firebase from 'firebase'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { IntlProvider } from 'react-intl';
import { routes } from './Routes';

import injectTapEventPlugin from 'react-tap-event-plugin'

import store from './store'
import history from './history'


// Initialize Firebase
 var config = {
   apiKey: "AIzaSyD5vGPCHzwxpBwIbhHKkyvQLyn2itGlkQk",
   authDomain: "veda-e9be8.firebaseapp.com",
   databaseURL: "https://veda-e9be8.firebaseio.com",
   storageBucket: "veda-e9be8.appspot.com",
   messagingSenderId: "218069762504"
 };

firebase.initializeApp(config)

injectTapEventPlugin()


ReactDOM.render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
     <IntlProvider locale="en">
       <Router routes={routes} history={history} />
     </IntlProvider>
  </Provider>,
  document.getElementById('root')
);
