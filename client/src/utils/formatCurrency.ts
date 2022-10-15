export function formatCurrency(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })
    .format(price)
    .replace(/^(\D+)/, '$1 ');
}
