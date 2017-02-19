
import {
  CLOSE_STATUS,
  NEW_EXPENSE,
  DELETE_EXPENSE,
  FETCH_EXPENSES,
  RECEIVE_EXPENSES,
  UPDATE_EXPENSE,
  FETCH_EXPENSE_FOR_KEY,
  SHOW_SIDEBAR,
  HIDE_SIDEBAR } from '../constants/actionTypes.js'

import { push } from 'react-router-redux'
import {reset} from 'redux-form'
import { decamelize} from '../lib/utils'
import * as firebase from 'firebase'

const formatDate = ds => {
  let d;
  if (ds) {
    d = new Date(ds)
  } else {
    d = new Date()
  }
  return d.toLocaleDateString('en-US')
}

const expensePayload = (expense) => {
  expense.item = expense.item || "misc"
  expense.at = expense.at || "unknown"

  return {
    amount: expense.amount || 0,
    item: decamelize(expense.item),
    on: formatDate(expense.on),
    at: decamelize(expense.at)
  }
}

export const loadPage = (url) =>{
  const x = push(url)
  return x
}

const receiveExpenses = (items, total) => ({
    type: RECEIVE_EXPENSES,
    payload: {
      items
    }
})

const fetchExpensesFromDB = (dispatch) => {
  const fbRef = firebase.database().ref('/expenses')
  fbRef.limitToLast(25).on('value', function(dataSnapshot) {
    var items = [];
    let total = 0
    dataSnapshot.forEach(function(childSnapshot) {
      var item = childSnapshot.val();
      item['.key'] = childSnapshot.key;
      total += parseInt(item.amount, 10)
      items.push(item);
    });
    dispatch(receiveExpenses(items, total))
  })
}

const fetchingExpenses = () => ({
  type: FETCH_EXPENSES
})

export const fetchExpenses = () => {
  return (dispatch) => {
    dispatch(fetchingExpenses())
    fetchExpensesFromDB(dispatch)
  }
}
export const fetchExpense = (key) => {
  return {
    type: FETCH_EXPENSE_FOR_KEY,
    payload: {
      key
    }
  }
}

export const cancelExpense = () => {
  return (dispatch) => {
    dispatch(loadPage("/showExpenses"))
  }
}

const saveLocalExpense = (expense) => ({
    type: NEW_EXPENSE,
    payload: expensePayload(expense)
})

const updateLocalExpense = (expense) => {
  console.log("udpate local ex")
  return {
    type: UPDATE_EXPENSE,
    payload: expense
    }
}

const updateDBExpense = (expense) => {
  const fbRef = firebase.database().ref('/expenses')
  let updates = {}
  updates[expense['.key']] = expensePayload(expense)
  fbRef.update(updates)
}

const saveDBExpense = (key, expense) => {
  const fbRef = firebase.database().ref('/expenses')
  return fbRef.push(expense).key
}

export const updateExpense = (expense) => {
  updateDBExpense(expense)
  return (dispatch) => {
    dispatch(updateLocalExpense(expense))
  }
}
export const newExpense = (expense) => {
  let _expense = expensePayload(expense)
  _expense['.key'] = saveDBExpense(_expense)

  return (dispatch) => {
      dispatch(saveLocalExpense(_expense))
      dispatch(reset('expenseForm'))
  }
}

export const editExpense = (url) => {
  return (dispatch) => {
    dispatch(loadPage(url))
  }
}
export const deleteExpense = (key) => {
  console.log("Deleting expense", key)
  const fbRef = firebase.database().ref('/expenses')
  fbRef.child(key).remove()
  return {
    type: DELETE_EXPENSE,
    payload: {
      key
    }
  }
}

export const closeStatus = () => ({
    type: CLOSE_STATUS
})

export const showSideBar = (text) => ({
    type: SHOW_SIDEBAR,
    text
})

export const hideSideBar = () => ({
  type: HIDE_SIDEBAR
})

export const sideBarSelection = (index, menu) => {
  return (dispatch) => {
    dispatch(showSideBar(menu.text))
    dispatch(loadPage(menu.url))
  }
}
