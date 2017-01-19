import React from 'react'

import { Paper } from 'material-ui'
import { MuiThemeProvider, getMuiTheme} from 'material-ui/styles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { newExpense } from '../actions/ExpenseActionCreators'
import ExpenseForm  from '../components/ExpenseForm'
import ExpenseList from '../components/ExpenseList'
import ExpenseSummary from '../components/ExpenseSummary'



const PaperBorder = (props) => (
    <Paper style={{margin: 30}}>
      {props.children}
    </Paper>
)

const renderExpenseList = ({expenses}) => {
  if (expenses.length === 0) return null
  return (
    <PaperBorder>
      <h2>Details</h2>
      <ExpenseList expenses={expenses}/>
    </PaperBorder>
  )
}

const ExpenseApp = props => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <div>
      <PaperBorder>
        <ExpenseForm onSubmit={props.addExpense}/>
      </PaperBorder>
      <PaperBorder>
        <ExpenseSummary total={props.total}/>
      </PaperBorder>
      {renderExpenseList(props)}
    </div>
    </MuiThemeProvider>
)

const mapStateToProps = (state) => (
  {
    expenses: state.expenses ,
    total: state.total
  }
)

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addExpense: newExpense
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseApp)
