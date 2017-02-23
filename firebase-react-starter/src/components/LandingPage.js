import React from 'react'
import { toggleDB } from '../actions/ExpenseActionCreators'

import {
         Box,
         CheckBox,
         Heading,
         Hero,
         Section
       } from 'grommet'

/*
<NavItems icon={<Actions />}
  dropAlign={{"right": "right"}}
  items={menuItems}
  onItemClick={onItemClick}
/>

*/
 const LandingPage = () => (
   <Hero>
     <Box direction='row'
       justify='center'
       align='center'>
       <Box basis='1/2'
         align='end'
         pad='medium' />
       <Box basis='1/2'
         align='start'
         pad='medium'>
         <Heading margin='none'>
           LandingPage
         </Heading>
       </Box>
       <Section>
         <CheckBox label='Save Local'
           toggle={true} onChange={(e)=> toggleDB(e.target.checked)}/>
       </Section>
     </Box>
   </Hero>
 )

 export default LandingPage
