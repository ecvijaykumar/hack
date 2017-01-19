import { NEW_EXPENSE} from '../constants/actionTypes.js'

const initialState = [
  {
    amount: 100,
    date: "01/30/2016",
    item: "gas",
    location: "costco"
  }
]
export const newExpense = (state = initialState, action) => {
  switch(action.type) {
    case NEW_EXPENSE:
        console.log(action.payload)
      return [ ...state, action.payload]
    default:
      return state
  }

}

export const totalExpenses = (state = 0, action) => {

  switch (action.type) {
    case NEW_EXPENSE:
    console.log(state, action.payload.amount)
      return state + parseInt(action.payload.amount,  10)
    default:
      return state
  }

}
