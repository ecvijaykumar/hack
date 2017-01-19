import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import ChatRoom from './components/ChatRoom'
import TodoApp from './components/TodoApp'
import ExpenseApp from './containers/ExpenseApp'
import store from './store'
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

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
   <Router history={history}>
    <Route path="/" component={App} />
    <Route path="/expenses" component={ExpenseApp}/>

    <Route path="/todo" component={TodoApp} />
    <Route path="/chat" component={ChatRoom} />
  </Router>
  </Provider>,
  document.getElementById('root')
);
