
import {
  CLOSE_STATUS,
  NEW_EXPENSE,
  DELETE_EXPENSE,
  FETCH_EXPENSES,
  UPDATE_EXPENSE,
  FETCH_EXPENSE_FOR_KEY,
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

const expensePayload = (expense) => {
  expense.item = expense.item || "misc"
  expense.at = expense.at || "unknown"

  return {
    key: expense.key,
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

const saveExpense = (expense) => {
  expense.key = null
  return {
    type: NEW_EXPENSE,
    payload: expensePayload(expense)
  }
}

export const updateExpense = (expense) => {
  return {
    type: UPDATE_EXPENSE,
    payload: expensePayload(expense)
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
    dispatch(fetchExpense)
    dispatch(loadPage("/showExpenses"))
  }
}

export const newExpense = (expense) => {
  return (dispatch) => {
    dispatch(saveExpense(expense))
    dispatch(reset('expenseForm'))
  }
}

export const editExpense = (url) => {
  return (dispatch) => {
    dispatch(loadPage(url))
  }
}
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


export const sideBarSelection = (index, menu) => {
  return (dispatch) => {
    dispatch(showSideBar(menu.text))
    dispatch(loadPage(menu.url))
  }
}
