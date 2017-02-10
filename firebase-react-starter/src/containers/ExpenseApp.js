import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { deleteExpense, editExpense } from '../actions/ExpenseActionCreators'
import ExpenseList from '../components/ExpenseList'
import ExpenseSummary from '../components/ExpenseSummary'


import { Article} from 'grommet'

const renderExpenseList = ({expenses, count, onEdit, onDelete}) => {
  if (count === 0) return null
  return (
      <ExpenseList expenses={expenses}
        count={count}
        onEdit={onEdit}
        onDelete={onDelete}
      />
  )
}

const ExpenseApp = props => (
  <Article>
        {ExpenseSummary(props)}
        {renderExpenseList(props)}
  </Article>
)

const mapStateToProps = (state) => (
  {
    expenses: state.expenses.expenses,
    count: state.expenses.count,
    total: state.expenses.total
  }
)

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    onDelete: deleteExpense,
    onEdit: editExpense,
  }, dispatch)
)


export default connect(mapStateToProps, mapDispatchToProps)(ExpenseApp)
