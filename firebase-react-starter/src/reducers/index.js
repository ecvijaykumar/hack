import { reducer as formReducer } from 'redux-form'
import { combineReducers} from 'redux'
import { newExpense, totalExpenses } from './expense'
import { sideBarReducer } from './sidebar'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  expenses: newExpense,
  total: totalExpenses,
  form: formReducer,
  sideBar: sideBarReducer,
  routing: routerReducer
})