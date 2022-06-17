import pad from './pad'

export default () => {
  const now = new Date()
  now.setDate(now.getDate() - 7)
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`
}
