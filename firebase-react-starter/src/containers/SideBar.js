import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Drawer, Menu, MenuItem } from 'material-ui'
import { sideBarSelection } from '../actions/ExpenseActionCreators'

const SideBar = (props) => {
  const { show, menuItems} = props.sideBar
  return (
    <Drawer open={show} docked={false}>
      <Menu onItemTouchTap={((i, a) => {
        let url = menuItems[a.key]
        props.sideBarSelection(a.key, url)})} >
        { menuItems.map((menu, i) => (
          <MenuItem key={i}>{menu.text}</MenuItem>
        ))}
      </Menu>
    </Drawer>
  )
}

const mapStateToProps = (state) => ({
  sideBar: state.sideBar
})


const mapDispatchToProps = dispatch => (
  bindActionCreators({ sideBarSelection}, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
