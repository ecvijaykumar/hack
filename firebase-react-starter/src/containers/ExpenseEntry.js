import React from 'react'

import { Paper } from 'material-ui'
import { MuiThemeProvider, getMuiTheme} from 'material-ui/styles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { newExpense } from '../actions/ExpenseActionCreators'
import ExpenseForm  from '../components/ExpenseForm'
import ExpenseSummary from '../components/ExpenseSummary'


const ExpenseEntry = props => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Paper style={{margin: 30}}>
        <ExpenseForm onSubmit={props.addExpense}
            items={props.expenseFields.items.toArray()}
            at={props.expenseFields.at.toArray()}/>
        <ExpenseSummary total={props.total}/>
      </Paper>
    </MuiThemeProvider>
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
