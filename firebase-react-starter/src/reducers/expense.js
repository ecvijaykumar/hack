import {
  CLOSE_STATUS,
  FETCH_EXPENSES,
  FETCH_EXPNSES_DEBUG,
  RECEIVE_EXPENSES,
  NEW_EXPENSE,
  DELETE_EXPENSE,
  UPDATE_EXPENSE,
  FETCH_EXPENSE_FOR_KEY
} from '../constants/actionTypes.js'


const initialState = {
  items: []
}
const deleteExpense = (items, key) => (
  items.filter((item) => item['.key'] !== key)
)

const getExpense = (items, key) => {
  let index = items.findIndex((item) => item['.key'] === key)
  if (index === -1) return null
  return items[index]
}

const updateExpense = (items, item) => {
  console.log(items)
  let index = items.findIndex(e => e['.key'] === item['.key'])
  if (index === -1) return items
  console.log("Updating expsense", items[index], item)
  items[index] = item

  return items
}

export const expenseReducer = (state = initialState, action) => {
  switch(action.type) {
    case NEW_EXPENSE:
      return {
        ...state,
        added: true,
        items: [ ...state.items, action.payload ]
      }
    case UPDATE_EXPENSE:
      return {
          ...state,
          updateSuccess: true,
          items: updateExpense(state.items, action.payload)
      }
    case FETCH_EXPENSES:
      return {
        ...state,
        fetching: true
      }

    case FETCH_EXPNSES_DEBUG:
    return {
      ...state,
      fetching: false
    }
    case RECEIVE_EXPENSES:
      return {
        ...state,
        fetching: false,
        items: action.payload.items
      }

    case FETCH_EXPENSE_FOR_KEY:
      return {
          ...state,
          expense: getExpense(state.items, action.payload.key)
      }

    case CLOSE_STATUS:
      return {
        ...state,
        added: false
      }
    case DELETE_EXPENSE:
      return {
        ...state,
        items: deleteExpense(state.items, action.payload.key),
      }

    default:
      return state
  }
}
