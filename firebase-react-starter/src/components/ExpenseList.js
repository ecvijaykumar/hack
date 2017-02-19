import React from 'react'
import {Table, Column, Cell} from 'fixed-data-table';
//import { camelCase} from '../lib/utils'
import "../../node_modules/fixed-data-table/dist/fixed-data-table.css"

import { Box, Anchor } from 'grommet'
import  Edit from 'grommet/components/icons/base/Edit'
import  Trash from 'grommet/components/icons/base/Trash'

const TextCell = ({rowIndex, data, col, ...props}) => (
  <Cell {...props}>
    {data[rowIndex][col]}
  </Cell>
)

const EditDeleteCell = ({rowIndex, data, onEdit, onDelete}) => (
  <Box direction='row'
    align='center'
    justify='center'
    pad='small'>
    <Anchor
      icon={<Edit size="small"/>}
      onClick={()=> onEdit(`/editExpense/${data[rowIndex]['.key']}`)}
    />
    <Anchor
      icon={<Trash size="small"/>}
      onClick={()=> onDelete(data[rowIndex]['.key'])}
    />

  </Box>
  )
const ExpenseList = ({expenses, onEdit, onDelete}) => {
  return (
    <Table
      rowHeight={50}
      headerHeight={50}
      rowsCount={expenses.length}
      width={1000}
      height={500}
      >


     <Column
       header={<Cell>Spent</Cell>}
       width={100}
       fixed={true}
       cell={<TextCell data={expenses} col="amount" />}
     />

      <Column
        header={<Cell>Item</Cell>}
        width={100}
        fixed={true}
        cell={<TextCell data={expenses} col="item" />}
      />

       <Column
         header={<Cell>At</Cell>}
         width={100}
         fixed={true}
         cell={<TextCell data={expenses} col="at" />}
       />

        <Column
          header={<Cell>On</Cell>}
          width={100}
          fixed={true}
          cell={<TextCell data={expenses} col="on" />}
        />

        <Column
          header={<Cell>Edit</Cell>}
          width={150}
          fixed={true}
          cell={<EditDeleteCell data={expenses}
            onEdit={onEdit}
            onDelete={onDelete} />}
        />

    </Table>
  )
}

export default ExpenseList
