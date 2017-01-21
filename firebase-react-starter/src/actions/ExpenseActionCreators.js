
import { NEW_EXPENSE,
  FETCH_EXPENSES,
  SHOW_SIDEBAR,
  HIDE_SIDEBAR } from '../constants/actionTypes.js'

import { push } from 'react-router-redux'

export const newExpense = (expense) => {
  return {
    type: NEW_EXPENSE,
    payload: {
      amount: expense.amount,
      item: expense.item || "misc",
      date: expense.date || new Date().toString(),
      location: expense.location || "Unknown"
    }
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
  console.log("load page", url)
  const x = push(url)
  console.log(x)
  return x
}

export const sideBarSelection = (index, menu) => {
  return (dispatch) => {

    dispatch(hideSideBar())
    dispatch(loadPage(menu.url))
//    let ret = push(menu.url)
//    console.log(ret)
//    dispatch(push(menu.url))

  }
}
