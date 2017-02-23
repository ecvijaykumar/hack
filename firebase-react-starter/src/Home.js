import './style/scss/index.scss'

import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { App,
         Article,
         Section,
         Tabs,
         Tab
       } from 'grommet'

import { sideBarSelection,
         hideSideBar } from './actions/ExpenseActionCreators'

const Home = ({ nav: { title, menuItems, show, mainTitle},
                sideBarSelection,
                hideSideBar,
                children}) => {

  const onItemClick = i => {
    let menu = menuItems[i]
    sideBarSelection(i, menu)
  }

  const renderTabs = (menuItems) => {
    if (!menuItems) return null
    const tabs = menuItems.map((m, i) =>(
      <Tab key={i} title={m.text}/>
    ))
    return tabs
  }
  return (
    <App centered={false}>

      <Tabs onActive={onItemClick}
        responsive={false}>
        {renderTabs(menuItems)}
      </Tabs>
      <Article>

        <Section>
          {children}
        </Section>
      </Article>
    </App>
  )
}

let select = (state) => ({
  nav: state.sideBar
})

let dispatchProps = dispatch => (
  bindActionCreators({hideSideBar, sideBarSelection}, dispatch)
)
export default connect(select, dispatchProps)(Home)
