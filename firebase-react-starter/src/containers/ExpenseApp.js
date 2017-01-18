import React, { Component } from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Paper } from 'material-ui'
import { MuiThemeProvider, getMuiTheme} from 'material-ui/styles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { newExpense } from '../actions/ExpenseActionCreators'
import ExpenseForm  from '../components/ExpenseForm'
import ExpenseReport from './ExpenseReport'


injectTapEventPlugin()

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addExpense: newExpense
  }, dispatch)
}

class ExpenseApp extends Component
{
  handleSubmit = (values) => this.props.addExpense(values)

  render = () => (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
    	<Paper style={{margin: 30}}>
        <ExpenseForm onSubmit={this.handleSubmit}/>
        <ExpenseReport/>
      </Paper>
    </MuiThemeProvider>
  )
}

export default connect(null, mapDispatchToProps)(ExpenseApp)
