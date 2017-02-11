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

  render() {
    const {
      updateExpense,
      cancelExpense,
      expenseFields,
      fetched,
      initialValues,
      } = this.props

    if (!fetched) return null

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
      fetched: state.expenses.keyFetched,
      initialValues: state.expenses.expenseFetched,
      id: ownProps.params.key
    }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    cancelExpense,
    fetchExpense,
    updateExpense,
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseEdit)