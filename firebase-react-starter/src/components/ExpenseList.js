import React from 'react'


//import { camelCase} from '../lib/utils'


import { Anchor, Box, List, ListItem, Timestamp, Value } from 'grommet'
import  Edit from 'grommet/components/icons/base/Edit'
import  Trash from 'grommet/components/icons/base/Trash'


const renderModifyOption = (data, onDelete) => (
  <Box direction='row'>
    <Anchor
      icon={<Edit size="small"/>}
      path={`/editExpense/${data['.key']}`}
    />
    <Anchor
      icon={<Trash size="small"/>}
      onClick={()=> onDelete(data['.key'])}
    />

  </Box>
  )

const ExpenseList = ({expenses, onDelete}) => {
  const expenseList = expenses.map((expense, index) => (
    <ListItem justify='between'
      separator='horizontal'
      key={index}>
        <Box><Timestamp fields='date'
          value={expense.on}/></Box>
          <Box><Value value={`$${expense.amount}`}
            colorIndex='accent-1' /></Box>
            <Box> {expense.item}</Box>
            <Box> {expense.at}</Box>
             {renderModifyOption(expense, onDelete)}

      </ListItem>
    ))

  return (
    <List selectable={true}>
      {expenseList}
    </List>
  )
}


export default ExpenseList
