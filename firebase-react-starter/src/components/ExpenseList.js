import React from 'react'
import {Table, Column, Cell} from 'fixed-data-table';
//import { camelCase} from '../lib/utils'

import "../../node_modules/fixed-data-table/dist/fixed-data-table.css"

const TextCell = ({rowIndex, data, col, ...props}) => {
  console.log("TC", rowIndex, data, col)
  return (
    <Cell {...props}>
      {data[rowIndex][col]}
    </Cell>
  )
}

const ExpenseList = ({expenses}) => {
  console.log(expenses.length)
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

    </Table>
  )
}

export default ExpenseList
////
