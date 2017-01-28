import React from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import { camelCase} from '../lib/utils'

const renderExpenseHeader = () => (
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>Spent</TableHeaderColumn>
        <TableHeaderColumn>On</TableHeaderColumn>
        <TableHeaderColumn>Item</TableHeaderColumn>
        <TableHeaderColumn>At</TableHeaderColumn>
      </TableRow>
    </TableHeader>
)

const renderExpense = ({on, item, amount, at}, id) => (
    <TableRow key={id}>
      <TableRowColumn>{amount}</TableRowColumn>
      <TableRowColumn>{on}</TableRowColumn>
      <TableRowColumn>{camelCase(item)}</TableRowColumn>
      <TableRowColumn>{camelCase(at)}</TableRowColumn>
    </TableRow>
)

const renderExpenses = (expenses) => (
    <TableBody>
      { expenses.map((expense, id) => renderExpense(expense, id)) }
    </TableBody>
)

const ExpenseList = ({expenses}) => (
  <Table>
    {renderExpenseHeader()}
    {renderExpenses(expenses)}
  </Table>
)


export default ExpenseList
