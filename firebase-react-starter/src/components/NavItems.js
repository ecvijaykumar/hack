import React from 'react'
import {
         Anchor,
         Menu,
       } from 'grommet';

const NavItems = ({items, onItemClick, ...custom}) => {

  let links = items.map((page, index) => {
    let menuItemClick = onItemClick.bind(this, index)
    return (
      <Anchor
        key={index}
        onClick={menuItemClick}>
        {page.text}
      </Anchor>
    )
  })

  return (
    <Menu {...custom}>
      {links}
    </Menu>
  )
}

export default NavItems
