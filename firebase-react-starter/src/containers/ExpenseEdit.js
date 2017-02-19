import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Section } from 'grommet'

import {
  cancelExpense,
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
      nextProps.cancelExpense()
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

    return (
      <Section>
        <ExpenseEditForm onSubmit={updateExpense}
            onCancel={cancelExpense}
            items={expenseFields.items}
            at={expenseFields.at}
            initialValues={initialValues}
        />

      </Section>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
    return {
      expenseFields: state.expenseFields,
      updateSuccess : state.expenses.updateSuccess,
      initialValues: state.expenses.expense,
      id: ownProps.params.key
    }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    cancelExpense,
    fetchExpense,
    updateExpense
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseEdit)
