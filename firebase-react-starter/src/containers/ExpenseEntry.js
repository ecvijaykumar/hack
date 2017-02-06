import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { newExpense } from '../actions/ExpenseActionCreators'
import ExpenseForm  from '../components/ExpenseForm'
//import ExpenseSummary from '../components/ExpenseSummary'


const ExpenseEntry = props => (
      <ExpenseForm onSubmit={props.addExpense}
          items={props.expenseFields.items.toArray()}
          at={props.expenseFields.at.toArray()}/>

)

const mapStateToProps = (state) => (
  {
    total: state.total,
    expenseFields: state.expenseFields
  }
)

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addExpense: newExpense
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseEntry)
