
import { SHOW_SIDEBAR, HIDE_SIDEBAR } from '../constants/actionTypes.js'

const initialState = {
  show: false,
  menuItems : [
    {
      text: "Home",
      url: "/"
    },
    {
      text: "New Expense",
      url : "/expenses"
    }
  ]
}

export const sideBarReducer = (state = initialState, action) => {
  let show
  switch(action.type) {
    case SHOW_SIDEBAR:
      show = true
      return { ...state, show }
    case HIDE_SIDEBAR:
        show = false
        return { ...state, show }
    default:
      return state
  }
}
