import React, { Component } from 'react'
import * as firebase from 'firebase'

class ChatRoom extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      messages: []
    }
  }

  componentDidMount(){
    const mRef = firebase.database().ref('messages/')
    mRef.on('value', (snap) => {
      let curMessages = snap.val()
      if (curMessages) {
        this.setState({
          messages: curMessages
        })
      }
    })
  }

  updateMessage = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  submitMessage = (event) => {
    console.log("submit Message" , this.state.message)
    let nextMessage = {
      id: this.state.messages.length,
      text: this.state.message
    }
    firebase.database().ref('messages/' + nextMessage.id).set(nextMessage)
  }
  render() {
    const messages = this.state.messages.map((message, i) => {
      return (
          <li key={i}>
            {message.text}
          </li>
      )
    })

    return (
      <div>
        <ol>
          {messages}
        </ol>
        <input
          onChange={this.updateMessage}
          type="text"
          placeholder="Message" />
        <br/>
        <button
          onClick={this.submitMessage}>
          Submit Message
        </button>
      </div>
    )
  }
}

export default ChatRoom
