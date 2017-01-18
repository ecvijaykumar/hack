
import { NEW_EXPENSE} from '../constants/actionTypes.js'

export const newExpense = (expense) => {

  return {
    type: NEW_EXPENSE,
    payload: { expense }
  }
}
