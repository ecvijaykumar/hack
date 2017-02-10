import React from 'react'

import {
          Button,
          Header,
          Sidebar,
          Title
       } from 'grommet'

import Close from 'grommet/components/icons/base/Close'
import NavItems from './NavItems'

const MySideBar = ({
    show,
    title,
    items,
    onClose,
    onItemClick }) => {
  if (!show) return null
  return (
    <Sidebar  fixed={true}
      full={true}
      colorIndex='neutral-1'>
      <Header justify="center">
        <Title a11yTitle="Welcome World"
          onClick={onClose}>
          {title}
        </Title>
        <Button icon={<Close/>}
                a11yTitle="Close"
                plain={true}
                onClick={onClose}
        />
      </Header>
      <NavItems responsive={true}
          label='Label'
          inline={true}
          primary={true}
          items={items}
          onItemClick={onItemClick}
        />
      </Sidebar>
  )
}



export default MySideBar
