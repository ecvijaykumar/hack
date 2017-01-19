
import { NEW_EXPENSE, FETCH_EXPENSES } from '../constants/actionTypes.js'

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
