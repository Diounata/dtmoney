export function capitalize(text: string): string {
  let [firstLetter, ...rest] = text;

  firstLetter = firstLetter.toUpperCase();
  rest = rest.map(letter => letter.toLowerCase());
  rest.unshift(firstLetter);

  return rest.join('');
}
