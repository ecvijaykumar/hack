import { NEW_EXPENSE, UPDATE_EXPENSE} from '../constants/actionTypes.js'
import  { Set} from 'immutable'

let itemSet = Set()
let atSet = Set()

const expenseItems = (state, action) => {
  switch(action.type) {
    case NEW_EXPENSE:
    case UPDATE_EXPENSE:
        itemSet = itemSet.add(action.payload.item)
        state = itemSet.toArray()
        return state
    default:
      return state
  }
}

const expenseAt = (state, action) => {
  switch(action.type) {
    case NEW_EXPENSE:
    case UPDATE_EXPENSE:
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
          at: expenseAt(state.at, action),
          items: expenseItems(state.items, action)
        }
    case UPDATE_EXPENSE:
      return {
        at: expenseAt(state.at, action),
        items: expenseItems(state.items, action)
      }
/*
    case FETCH_EXPENSE_FOR_KEY:
      console.log("FK", itemSet.toArray())
      return {
        at: atSet.toArray(),
        items: itemSet.toArray()
      }
      */
      default:
        return state
  }
}

export default expenseFields
