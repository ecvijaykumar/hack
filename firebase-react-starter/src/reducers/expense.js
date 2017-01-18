import { NEW_EXPENSE} from '../constants/actionTypes.js'

export const newExpense = (state = [], action) => {
  switch(action.type) {
    case NEW_EXPENSE:
      return [ ...state, action.payload.expense]
    default:
      return state
  }

}

export const totalExpenses = (state = 0, action) => {
  switch (action.type) {
    case NEW_EXPENSE:
      return state + action.payload.expense.amount
    default:
      return state
  }

}
