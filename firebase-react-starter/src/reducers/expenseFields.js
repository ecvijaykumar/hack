import { NEW_EXPENSE} from '../constants/actionTypes.js'

const expenseItems = (state = [], action) => {
  switch(action.type) {
    case NEW_EXPENSE:
        state = [ ...state, action.payload.item]
        return state
    default:
      return state
  }
}

const expenseAt = (state = [], action) => {
  switch(action.type) {
    case NEW_EXPENSE:
        state = [ ...state, action.payload.at]
        return state
    default:
      return state
  }
}

const initialState = {
  items: [],
  at: []
}
const expenseFields = (state = initialState, action) => {
  switch(action.type) {
    case NEW_EXPENSE:
        state = {
          at: expenseAt(state.at, action),
          items: expenseItems(state.items, action)
        }
        return state
      default:
        return state
  }
}

export default expenseFields
