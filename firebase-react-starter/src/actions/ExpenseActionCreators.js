
import { NEW_EXPENSE,
  FETCH_EXPENSES,
  SHOW_SIDEBAR,
  HIDE_SIDEBAR } from '../constants/actionTypes.js'

import { push } from 'react-router-redux'
import {reset} from 'redux-form'

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
      item: expense.item || "misc",
      on: formatDate(expense.on),
      at: expense.at || "Unknown"
    }
  }
}

export const newExpense = (expense) => {
  return (dispatch) => {
    dispatch(saveExpense(expense))
    dispatch(reset('expenseForm'))
  }
}

export const fetchExpenses = () => (
  {
    type: FETCH_EXPENSES
  }
)

export const showSideBar = () => ({
    type: SHOW_SIDEBAR
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
    dispatch(hideSideBar())
    dispatch(loadPage(menu.url))
  }
}
