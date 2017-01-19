import React, { Component } from 'react';
import { AppBar, Paper, Drawer, MenuItem } from 'material-ui'
import { MuiThemeProvider, getMuiTheme} from 'material-ui/styles'
import SvgIcon from 'material-ui/SvgIcon';
import { Link } from 'react-router'

const HomeIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
);


const ShowSideBar = (props) => {
  if (!props.open) { return null }
  return (
    <Drawer open={props.open} docked={false}>
      <MenuItem primaryText="Home"
        leftIcon={<HomeIcon/>}
        onTouchTap={props.handleClick}
      ><Link to="/"/></MenuItem>
      <MenuItem><Link to="/expenses">NewExpense</Link></MenuItem>
      <MenuItem>Show Expenses</MenuItem>
      <MenuItem>Tanvi's Worldy Wise</MenuItem>
    </Drawer>
  )
}
const ShowTitle = (props) => (
      <AppBar title="Expense Manager"
      onLeftIconButtonTouchTap={props.handleClick}/>
)

class App extends Component {
  constructor() {
    super()
    this.state = {
      open: false
    }
  }
  _toggleSideBar = () => {
    this.setState({ open: !this.state.open})
  }
  render() {

    return (
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <Paper>
          <ShowTitle handleClick={this._toggleSideBar}/>
          <ShowSideBar open={this.state.open}
            handleClick={this._toggleSideBar}
          />
        </Paper>
        </MuiThemeProvider>
    );
  }
}

export default App;
