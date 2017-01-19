import React from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const renderExpenseHeader = () => (
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>Date</TableHeaderColumn>
        <TableHeaderColumn>Item</TableHeaderColumn>
        <TableHeaderColumn>Amount</TableHeaderColumn>
        <TableHeaderColumn>Spent At</TableHeaderColumn>
      </TableRow>
    </TableHeader>
)

const renderExpense = ({date, item, amount, location}, id) => (
    <TableRow key={id}>
      <TableRowColumn>{date}</TableRowColumn>
      <TableRowColumn>{item}</TableRowColumn>
      <TableRowColumn>{amount}</TableRowColumn>
      <TableRowColumn>{location}</TableRowColumn>
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
