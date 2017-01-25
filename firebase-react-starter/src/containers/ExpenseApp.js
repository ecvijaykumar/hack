import React from 'react'

import { Paper } from 'material-ui'
import { MuiThemeProvider, getMuiTheme} from 'material-ui/styles'
import { connect } from 'react-redux'

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
        {ExpenseSummary(props)}
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


export default connect(mapStateToProps)(ExpenseApp)
