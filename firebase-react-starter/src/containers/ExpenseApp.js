import React from 'react'

import { connect } from 'react-redux'

import ExpenseList from '../components/ExpenseList'
import ExpenseSummary from '../components/ExpenseSummary'


import { Article } from 'grommet'

const renderExpenseList = ({expenses}) => {
  if (expenses.length === 0) return null
  return (
      <ExpenseList expenses={expenses}/>
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
    expenses: state.expenses ,
    total: state.total
  }
)


export default connect(mapStateToProps)(ExpenseApp)
