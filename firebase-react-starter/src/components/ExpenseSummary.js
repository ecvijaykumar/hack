import React from 'react'
import { AnnotatedMeter } from 'grommet-addons'
//import { FormattedNumber } from 'react-intl'
import { expenseGroupByPeriod } from '../lib/expense'

const ExpenseSummary = (expenses) => {
  
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
