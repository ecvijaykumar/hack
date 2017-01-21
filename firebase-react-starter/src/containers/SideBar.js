import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Drawer, Menu, MenuItem } from 'material-ui'
import { sideBarSelection, hideSideBar } from '../actions/ExpenseActionCreators'

const SideBar = (props) => {
  const { show, menuItems} = props.sideBar

  const _onItemTouchTap = (i, a) => {
    let url = menuItems[a.key]
    props.sideBarSelection(a.key, url)
  }

  const _onRequestChange = (open, reason) => {
    if (!open) props.hideSideBar()
  }

  return (
    <Drawer open={show} docked={false}
      onRequestChange={_onRequestChange}>
      <Menu onItemTouchTap={_onItemTouchTap}>
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
  bindActionCreators({ sideBarSelection, hideSideBar}, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
