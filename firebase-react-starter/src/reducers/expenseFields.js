import { NEW_EXPENSE} from '../constants/actionTypes.js'
import  { Set} from 'immutable'

let itemSet = Set()
let atSet = Set()

const expenseItems = (state = [], action) => {
  switch(action.type) {
    case NEW_EXPENSE:
        itemSet = itemSet.add(action.payload.item)
        state = itemSet.toArray()
        return state
    default:
      return state
  }
}

const expenseAt = (state = [], action) => {
  switch(action.type) {
    case NEW_EXPENSE:
      atSet = atSet.add(action.payload.at)
      state = atSet.toArray()
      return state
    default:
      return state
  }
}

const expenseFields = (state = {}, action) => {
  switch(action.type) {
    case NEW_EXPENSE:
        return {
          ...state,
          at: expenseAt(state.at, action),
          items: expenseItems(state.items, action)
        }
      default:
        return state
  }
}

export default expenseFields
