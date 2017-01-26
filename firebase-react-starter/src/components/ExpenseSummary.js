import React from 'react'

const expenseGroupByPeriod = expenses => {
    if (expenses === undefined) return null
    const d = new Date()
    let today = new Date(d.getFullYear(), d.getMonth(), d.getDate())
    let lastWeek =  new Date(today)
    lastWeek.setDate(lastWeek.getDate() -7)
    let lastMonth = new Date(today)
    lastMonth.setMonth(lastMonth.getMonth() -1)

    const results = expenses.reduce((results, e) => {
      const edate = new Date(e.on)
      if (edate === today) {
        results['today'] += parseInt(e.amount)
      } else if (edate > lastWeek) {
        results['lastWeek'] += parseInt(e.amount)
      } else if (edate > lastMonth) {
          results['lastMonth'] += parseInt(e.amount)
      } else {
        results['previous'] += parseInt(e.amount)
      }
      return results
    }, { today: 0, lastWeek: 0, lastMonth : 0, previous: 0})

    return results
}

const renderExpenseDetails = expenses => {
    if (expenses === undefined) return null
    let eToday = null
    let eLastWeek = null
    let eLastMonth = null
    let etillLastMonth = null

    const results = expenseGroupByPeriod(expenses)
    console.log(results)

    if (results['today']) {
      eToday = <h2> Today you spent {results['today']} </h2>
    }
    if (results['lastWeek']) {
      eLastWeek = <h2> Last week you spent {results['lastWeek']} </h2>
    }
    if (results['lastMonth']) {
      eLastMonth = <h2>Since last month you sepnt {results['lastMonth']}</h2>
    }
    if (results['previous']) {
      etillLastMonth = <h2>Until last month you spent {results['previous']}</h2>
    }
    return (
    <div>
        {eToday}
        {eLastWeek}
        {eLastMonth}
        {etillLastMonth}
    </div>
    )
}
const ExpenseSummary = ({expenses, total}) => {
  return (
    <div>
      <h1>Total expense so far: {total}</h1>
      {renderExpenseDetails(expenses)}
    </div>

  )
}
export default ExpenseSummary
