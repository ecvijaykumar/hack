import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { deleteExpense, fetchExpenses } from '../actions/ExpenseActionCreators'
import ExpenseList from '../components/ExpenseList'
import ExpenseSummary from '../components/ExpenseSummary'

import Spinning from 'grommet/components/icons/Spinning';

import { Article, Box, Section} from 'grommet'

const renderExpenseList = ({expenses, count, onDelete}) => {
  if (count === 0) return null
  return (
      <ExpenseList expenses={expenses}
        count={count}
        onDelete={onDelete}
      />
  )
}

class ExpenseApp extends React.Component {
  componentWillMount() {
    this.props.fetchExpenses()
  }

  renderExpenseFetching() {
    return (
        <Spinning size="xlarge" />

    )
  }

  render() {
    const { fetching, expenses } = this.props
    if (fetching) {
      return this.renderExpenseFetching()
    }
    if (expenses.length === 0) return null

    return (
      <Article>
        <Box align="center">
          {ExpenseSummary(expenses)}
        </Box>

        <Section>
        {renderExpenseList(this.props)}
        </Section>

      </Article>

    )
  }
}

const mapStateToProps = (state) => (
  {
    fetching: state.expenses.fetching,
    expenses: state.expenses.items
  }
)

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    onDelete: deleteExpense,
    fetchExpenses,
  }, dispatch)
)


export default connect(mapStateToProps, mapDispatchToProps)(ExpenseApp)
