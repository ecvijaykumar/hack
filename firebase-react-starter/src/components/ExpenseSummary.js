import React from 'react'

const ExpenseSummary = ({total}) => {
  console.log(total)
  return (
        <h1>Expense Summary: {total}</h1>
  )
}
export default ExpenseSummary
