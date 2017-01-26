import { NEW_EXPENSE} from '../constants/actionTypes.js'
import  { Set} from 'immutable'

const itemSet = Set()
const atSet = Set()

const expenseItems = (state, action) => {
  switch(action.type) {
    case NEW_EXPENSE:
    console.log("add item", state)
        return state.add(action.payload.item)
    default:
      return state
  }
}

const expenseAt = (state , action) => {
  switch(action.type) {
    case NEW_EXPENSE:
    console.log("Add At", state)
      return state.add(action.payload.at)
    default:
      return state
  }
}

const initialState = {
  items: itemSet,
  at: atSet
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
