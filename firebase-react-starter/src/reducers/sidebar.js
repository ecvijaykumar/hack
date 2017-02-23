
import { SHOW_SIDEBAR, HIDE_SIDEBAR } from '../constants/actionTypes.js'

const initialState = {
  show: true,
  title: "Expense Manager",
  mainTitle: "",
  menuItems : [
    {
      text: "Home",
      url: "/"
    },
    {
      text: "New",
      url : "/expenses"
    },
    {
      text: "Expenses",
      url : "/showExpenses"
    }
  ]
}

export const sideBarReducer = (state = initialState, action) => {
  let show
  let mainTitle
  switch(action.type) {
    case SHOW_SIDEBAR:
      show = true
      mainTitle = action.text

      return { ...state, show, mainTitle }
    case HIDE_SIDEBAR:
        show = false
        return { ...state, show }
    default:
      return state
  }
}
