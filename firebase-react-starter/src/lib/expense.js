import * as moment from 'moment'

export const expenseGroupByPeriod = expenses => {
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
        results['today'] += parseInt(e.amount, 10)
      } else if (edate > lastWeek) {
        results['lastWeek'] += parseInt(e.amount, 10)
      } else if (edate > lastMonth) {
          results['lastMonth'] += parseInt(e.amount, 10)
      } else {
        results['previous'] += parseInt(e.amount, 10)
      }
      return results
    }, { today: 0, lastWeek: 0, lastMonth : 0, previous: 0})

    return results
}

export const expenseFieldsValidate = values => {
  const errors = {}
  if (!values.amount) {
    errors.amount = 'You forgot to eneter amount'
  } else if (parseInt(values.amount, 10) >= 100000) {
    errors.amount = "That's a huge amount"
  }
  if (values.on) {
    if (moment(values.on, "MM/DD/YYYY", true).isValid()) {
      errors.on = "Enter date in mm/dd/yyyy format"
    }
  }
  return errors
}
