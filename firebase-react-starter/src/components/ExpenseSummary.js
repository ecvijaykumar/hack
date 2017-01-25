import React from 'react'


const renderExpenseDetails = expenses => {
    if (expenses === undefined) return null
    const d = new Date()
    const today = d.toLocaleDateString('en-US')
    let lastWeek = d;
    let lastMonth = d;

    lastWeek = lastWeek.setDate(lastWeek.getDate() - 7)
    lastMonth = lastMonth.setMonth(lastMonth.getMonth() - 1)
    console.log("Today", today, "LW", lastWeek, "LM", lastMonth)

    const details = expenses.reduce((results, e) => {
      console.log(e)
      const edate = new Date(e.on)
      if (edate === today) {
        results['today'] = e
      } else if (edate > lastMonth) {
        results['lastMonth'] = e
      } else if (edate > lastWeek) {
          results['lastWeek'] = e
      } else {
        results['previous'] = e
      }
      return results
    }, {})

    console.log(details)
    return null
}
const ExpenseSummary = ({expenses, total}) => {
  return (
    <div>
      {renderExpenseDetails(expenses)}
        <h1>Total expense so far: {total}</h1>
    </div>

  )
}
export default ExpenseSummary
