import { reducer as formReducer } from 'redux-form'
import { combineReducers} from 'redux'
import { newExpense, totalExpenses } from './expense'

export default combineReducers({
  expenses: newExpense,
  total: totalExpenses,
  form: formReducer
})
