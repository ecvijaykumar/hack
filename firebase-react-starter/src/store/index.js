import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from '../reducers'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'

// Apply the middleware to the store

const loggerMiddleware = createLogger()

const store = createStore(reducer,
   applyMiddleware(
     thunkMiddleware,
     loggerMiddleware,
     routerMiddleware(browserHistory))
)

export default store
