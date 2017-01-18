import React from 'react'


import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return { expenses: state.expenses}
}

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

let  ExpenseReport = ({expenses}) => {
  if (expenses.length === 0) return null
  return(
    <Table>
      {renderExpenseHeader()}
      {renderExpenses(expenses)}
    </Table>
  )
}

export default connect(mapStateToProps)(ExpenseReport)
