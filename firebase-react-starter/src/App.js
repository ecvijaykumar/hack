import React, { Component } from 'react';
import './App.css';

import ChatRoom from './components/ChatRoom'
import TodoApp from './components/TodoApp'


class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="App">
        <TodoApp/>
        <ChatRoom/>

      </div>
    );
  }
}

export default App;
