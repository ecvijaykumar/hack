import './style/scss/index.scss'

import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { App,
         Article,
         Box,
         Header,
         Search,
         Split,
         Title
       } from 'grommet'


import Actions from 'grommet/components/icons/base/Actions'


import MySideBar from './components/MySideBar'
import NavItems from './components/NavItems'



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

  return (
    <App centered={false}>
      <Split>
          <MySideBar show={show}
             title={title}
             items={menuItems}
             onClose={hideSideBar}
             onItemClick={onItemClick}
            />
          <Article>
            <Header size="large"
              justify="between">
              <Title>
              {mainTitle}
              </Title>
              <Box flex={true}
                justify='end'
                direction='row'
                responsive={false}>
                <Search inline={true}
                  fill={true}
                  size='medium'
                  placeHolder='Search'
                  dropAlign={{"right": "right"}} />
                <NavItems icon={<Actions />}
                  dropAlign={{"right": "right"}}
                  items={menuItems}
                  onItemClick={onItemClick}
                />
              </Box>
            </Header>
              {children}
          </Article>
      </Split>
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
