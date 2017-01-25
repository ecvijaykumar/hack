import { NEW_EXPENSE} from '../constants/actionTypes.js'

const initialState = {
  items: [
    "gas",
    "food",
    "school"
  ],
  at: [
    "costco",
    "target",
    "amazon"
  ]
}

export const expenseFields = (state = initialState, action) => {
switch(action.type) {
  case NEW_EXPENSE:
      state.items = [ ...state.items, action.payload.item]
      state.at = [ ...state.at, action.payload.at]
      return state
  default:
    return state
}

}
