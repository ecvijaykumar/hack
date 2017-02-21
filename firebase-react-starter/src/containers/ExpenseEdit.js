import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Box } from 'grommet'

import {
  showExpenses,
  fetchExpense,
  updateExpense } from '../actions/ExpenseActionCreators'

import ExpenseEditForm  from '../components/ExpenseEditForm'

class ExpenseEdit extends React.Component {
  componentWillMount() {
    if (this.props.id == null) return
    this.props.fetchExpense(this.props.id)
  }
  componentWillUpdate(nextProps, nextState) {
    if (nextProps.updateSuccess) {
      nextProps.showExpenses()
    } else {
      this.props = nextProps
    }
  }

  render() {
      const {
        updateExpense,
        cancelExpense,
        expenseFields,
        initialValues
      } = this.props

    if (!initialValues.eform) return null
    return (
      <Box align="center"
        justify="center"
        colorIndex="accent-1">
        <ExpenseEditForm onSubmit={updateExpense}
            title="Edit Expense"
            onCancel={cancelExpense}
            items={expenseFields.items}
            at={expenseFields.at}
            initialValues={initialValues}
        />
      </Box>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
    return {
      expenseFields: state.expenseFields,
      updateSuccess : state.expenses.updateSuccess,
      initialValues: {
        eform: state.expenses.expense,
      },
      id: ownProps.params.key
    }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    showExpenses,
    fetchExpense,
    updateExpense
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseEdit)
