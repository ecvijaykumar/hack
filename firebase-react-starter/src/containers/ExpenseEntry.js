import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { closeStatus, newExpense } from '../actions/ExpenseActionCreators'
import ExpenseForm  from '../components/ExpenseForm'
//import ExpenseSummary from '../components/ExpenseSummary'
import {
          Section,
          Toast
       } from 'grommet'

const ShowStatus = ({added, onClose}) => {
  if (!added) return null
  return (
    <Toast status="ok"
      onClose={() => onClose()}>
        Expense Added Successfully
    </Toast>
  )
}

const ExpenseEntry = props => (
    <Section>
      <ShowStatus added={props.added}
      onClose={props.closeStatus} />
      <ExpenseForm onSubmit={props.addExpense}
          added={props.added}
          items={props.expenseFields.items.toArray()}
          at={props.expenseFields.at.toArray()}/>

    </Section>

)

const mapStateToProps = (state) => (
  {
    total: state.total,
    expenseFields: state.expenseFields,
    added: state.expenses.added
  }
)

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addExpense: newExpense,
    closeStatus
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseEntry)
