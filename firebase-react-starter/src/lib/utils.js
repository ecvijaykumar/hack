export const camelCase = s => (
  s.split('_').map((w) => (
    w.charAt(0).toUpperCase() + w.slice(1)
  )).join(' ')
)

export const decamelize = str => (
  str.split(' ').map((w) => (
    w.charAt(0).toLowerCase() + w.slice(1)
  )).join('_')
)
