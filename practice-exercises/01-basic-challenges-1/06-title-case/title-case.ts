export function titleCase(str: string): string {
  return str
    .split(' ')
    .map((char) => char[0].toUpperCase() + char.slice(1).toLowerCase())
    .join(' ');
}
