
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
