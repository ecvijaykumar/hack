import React, { Component } from 'react'
import * as firebase from 'firebase'

class TodoApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      text:""
    }
    this.fdb = firebase.database()
  }

  componentDidMount() {
    this.fdb.ref('/todos').on('value', snap => {
      let dbItems = snap.val()
      if (dbItems == null) return
      this.setState({
        items: dbItems
      })
    })
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    let id = this.state.items.length + 1
    this.fdb.ref('todos/' + this.state.items.length).set({
      text: this.state.text,
      id: id
    })
    this.setState({ text: ''})


  }
  toggleItem = (item) => {
    console.log("item clicked", item, item.text)
  }

  todoList =(items) => {
    const itemList = items.map((item, i) => (
        <li key={i} >
        <a onClick={this.toggleItem.bind(this, item)} href="#">{item.text} </a>
        </li>
    ))

    return (
      <ul>
        {itemList}
      </ul>
    )
  }

  render() {
    let todos = this.todoList(this.state.items)
    return (
      <div>
        {todos}
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.text}
            />
          <button> {'Add #' + (this.state.items.length + 1 )}</button>
        </form>
      </div>
    )

  }
}

export default TodoApp
