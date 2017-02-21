
import {
  CLOSE_STATUS,
  NEW_EXPENSE,
  DELETE_EXPENSE,
  FETCH_EXPENSES,
  FETCH_EXPNSES_DEBUG,
  RECEIVE_EXPENSES,
  UPDATE_EXPENSE,
  FETCH_EXPENSE_FOR_KEY,
  SHOW_SIDEBAR,
  HIDE_SIDEBAR } from '../constants/actionTypes.js'

import { push } from 'react-router-redux'
import {reset} from 'redux-form'
import { decamelize} from '../lib/utils'
import * as firebase from 'firebase'
import uuid from 'uuid'

const useFB = process.env.NODE_ENV || 'development'

console.log(process.env.NODE_ENV)
const uuidv4 = uuid.v4

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
    payload: items
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
    if (useFB) {
        fetchExpensesFromDB(dispatch)
    } else {
      dispatch({
        type: FETCH_EXPNSES_DEBUG
      })
    }
  }
}

export const fetchExpense = key => ({
    type: FETCH_EXPENSE_FOR_KEY,
    payload: { key }
})

const updateLocalExpense = expense => ({
    type: UPDATE_EXPENSE,
    payload: expense
})

const updateDBExpense = (expense) => {
  const fbRef = firebase.database().ref('/expenses')
  let updates = {}
  updates[expense['.key']] = expense
  fbRef.update(updates)
}

export const updateExpense = (_expense) => {
  let key = _expense.eform['.key']
  let expense = expensePayload(_expense.eform)
  expense['.key'] = key
  if (useFB) {
    updateDBExpense(expense)
  }
  return (dispatch) => {
    dispatch(updateLocalExpense(expense))
  }
}

const saveLocalExpense = (expense) => ({
    type: NEW_EXPENSE,
    payload: expense
})

const saveDBExpense = (expense) => {
  const fbRef = firebase.database().ref('/expenses')
  return fbRef.push(expense).key
}
export const newExpense = (expense) => {
  let _expense = expensePayload(expense.eform)
  if (useFB) {
    _expense['.key'] = saveDBExpense(_expense)
  } else {
    _expense['.key'] = uuidv4()
    console.log(_expense)
  }

  return (dispatch) => {
      dispatch(saveLocalExpense(_expense))
      dispatch(reset('expenseForm'))
  }
}

export const deleteExpense = (key) => {
  if (useFB) {
    const fbRef = firebase.database().ref('/expenses')
    fbRef.child(key).remove()
  }

  return {
    type: DELETE_EXPENSE,
    payload: { key}
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

export const showExpenses = () => {
  return (dispatch) => {
    dispatch(loadPage("/showExpenses"))
  }
}
