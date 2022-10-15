export function formatDate(date: number): string {
  return new Intl.DateTimeFormat().format(date);
}
