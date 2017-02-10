import { reducer as formReducer } from 'redux-form'
import { combineReducers} from 'redux'
import { expenseReducer } from './expense'
import  expenseFields  from './expenseFields'
import { sideBarReducer } from './sidebar'
import { routerReducer } from 'react-router-redux'


export default combineReducers({
  expenses: expenseReducer,
  form: formReducer,
  sideBar: sideBarReducer,
  routing: routerReducer,
  expenseFields
})
