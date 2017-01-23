import { NEW_EXPENSE} from '../constants/actionTypes.js'

const initialState = [
  {
    amount: 100,
    on: "01/30/2016",
    item: "gas",
    at: "costco"
  }
]
export const newExpense = (state = initialState, action) => {
  switch(action.type) {
    case NEW_EXPENSE:
      return [ ...state, action.payload]
    default:
      return state
  }

}

export const totalExpenses = (state = 0, action) => {

  switch (action.type) {
    case NEW_EXPENSE:
      return state + parseInt(action.payload.amount,  10)
    default:
      return state
  }

}
