import React from 'react'
import { AnnotatedMeter } from 'grommet-addons'
import { FormattedNumber } from 'react-intl'
import { expenseGroupByPeriod } from '../lib/expense'

const renderExpenseDetails = expenses => {

    let eToday = null
    let eLastWeek = null
    let eLastMonth = null
    let etillLastMonth = null

    const results = expenseGroupByPeriod(expenses)
    console.log(results)

    if (results['today']) {
      eToday = <h2> Today you spent {' '}
        <FormattedNumber value={results['today']} />
      </h2>
    }
    if (results['lastWeek']) {
      eLastWeek = <h2> Last week you spent {' '}
        <FormattedNumber value={results['lastWeek']} />
       </h2>
    }
    if (results['lastMonth']) {
      eLastMonth = <h2>Since last month you spent {' '}
        <FormattedNumber value={results['lastMonth']} />
      </h2>
    }
    if (results['previous']) {
      etillLastMonth = <h2>Until last month you spent {' '}
        <FormattedNumber value={results['previous']}/>
      </h2>
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
//      {renderExpenseDetails(expenses)}
const ExpenseSummary = ({expenses, total}) => {
  if (expenses === undefined) return null
  const r = expenseGroupByPeriod(expenses)
  const series = [
    { "label": "Today", "value": r.today, "colorIndex": "graph-1"},
    { "label": "Last Week", "value": r.lastWeek, "colorIndex": "graph-2"},
    { "label": "Last Month", "value": r.lastMonth, "colorIndex": "graph-3"},
    { "label": "Past Months", "value": r.previous, "colorIndex": "graph-4"}
  ]

  return (
    <AnnotatedMeter type='circle'
      series={series}
      legend={true} />
  )
}

export default ExpenseSummary
