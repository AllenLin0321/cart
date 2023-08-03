export const numberFormat = ({ number, showDollarSign = false }) => {
  const usFormatter = new Intl.NumberFormat('en-US')
  return showDollarSign
    ? '$ ' + usFormatter.format(number)
    : usFormatter.format(number)
}
