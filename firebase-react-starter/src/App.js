import React from 'react';
import { AppBar, Paper } from 'material-ui'
import { MuiThemeProvider, getMuiTheme} from 'material-ui/styles'


import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { showSideBar } from './actions/ExpenseActionCreators'
import SideBar from './containers/SideBar'



let ShowTitle = (props) => (
      <AppBar title="Expense Manager"
      onLeftIconButtonTouchTap={props.showSideBar}/>
)

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    showSideBar: showSideBar
  }, dispatch)
)

ShowTitle = connect(null, mapDispatchToProps)(ShowTitle)


const App = (props) => (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Paper>
      <ShowTitle/>
      <SideBar/>
      {props.children}
    </Paper>
    </MuiThemeProvider>
)

export default App
