
import {
  CLOSE_STATUS,
  NEW_EXPENSE,
  EDIT_EXPENSE,
  DELETE_EXPENSE,
  FETCH_EXPENSES,
  SHOW_SIDEBAR,
  HIDE_SIDEBAR } from '../constants/actionTypes.js'

import { push } from 'react-router-redux'
import {reset} from 'redux-form'
import { decamelize} from '../lib/utils'

const formatDate = ds => {
  let d;
  if (ds) {
    d = new Date(ds)
  } else {
    d = new Date()
  }

  return d.toLocaleDateString('en-US')
}


const saveExpense = (expense) => {
  return {
    type: NEW_EXPENSE,
    payload: {
      amount: expense.amount || 0,
      item: decamelize(expense.item) || "misc",
      on: formatDate(expense.on),
      at: decamelize(expense.at) || "unknown"
    }
  }
}

export const newExpense = (expense) => {
  return (dispatch) => {
    dispatch(saveExpense(expense))
    dispatch(reset('expenseForm'))
  }
}

export const editExpense = (key) => (
  {
    type: EDIT_EXPENSE,
    payload: {
      key
    }
  }
)
export const deleteExpense = (key) => {
  return {
    type: DELETE_EXPENSE,
    payload: {
      key
    }
  }
}
export const closeStatus = () => (
  {
    type: CLOSE_STATUS
  }
)

export const fetchExpenses = () => (
  {
    type: FETCH_EXPENSES
  }
)

export const showSideBar = (text) => ({
    type: SHOW_SIDEBAR,
    text
})

export const hideSideBar = () => ({
  type: HIDE_SIDEBAR
})

export const loadPage = (url) =>{
  const x = push(url)
  return x
}

export const sideBarSelection = (index, menu) => {
  return (dispatch) => {
    dispatch(showSideBar(menu.text))
    dispatch(loadPage(menu.url))
  }
}
