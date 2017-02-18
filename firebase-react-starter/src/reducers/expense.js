import {
  CLOSE_STATUS,
  FETCH_EXPESNES,
  NEW_EXPENSE,
  DELETE_EXPENSE,
  UPDATE_EXPENSE,
  FETCH_EXPENSE_FOR_KEY
} from '../constants/actionTypes.js'
import  { Map} from 'immutable'
import uuid from 'uuid'

let expenseMap = Map()
const uuidv4 = uuid.v4


const initialState = {
  added: false,
  fetched: false,
  keyFetched: false,
  updateSuccess: false,
  updateFailure: false,
  count: 0,
  expenses: [],
  expenseFetched: {},
  total: 0
}

const addExpense = (data) => {
  let _key = uuidv4()
  data.key = _key
  expenseMap = expenseMap.set(_key, data)
  return expenseMap.toArray()
}

const updateExpense = (data) => {
  expenseMap = expenseMap.set(data.key, data)
  return expenseMap.toArray()
}

const deleteExpense = (key) => {
  expenseMap = expenseMap.delete(key)
  return expenseMap.toArray()
}

const getExpense = (key) => {
  return expenseMap.get(key)
}

const getExpenses = () => {
  return expenseMap.toArray()
}


export const expenseReducer = (state = initialState, action) => {
  switch(action.type) {
    case NEW_EXPENSE:
      return {
        ...state,
        added: true,
        expenses: addExpense(action.payload),
        count: expenseMap.count(),
        total: state.total + parseInt(action.payload.amount, 10)
      }
    case UPDATE_EXPENSE:
      return {
          ...state,
          updateSuccess: true,
          expenses: updateExpense(action.payload)
      }
    case FETCH_EXPESNES:
      return {
        ...state,
        expenses: getExpenses(),
        fetching: false,
        added: false,
        fetched: false,
        keyFetched: false,
        updateSuccess: false,
        updateFailure: false,
      }
    case FETCH_EXPENSE_FOR_KEY:
      return {
          ...state,
          keyFetched: true,
          updateSuccess: false,
          expenseFetched : getExpense(action.payload.key)
      }

    case CLOSE_STATUS:
      return {
        ...state,
        added: false
      }
    case DELETE_EXPENSE:
      return {
        ...state,
        expenses: deleteExpense(action.payload.key),
        count: expenseMap.count(),
      }

    default:
      return state
  }
}
