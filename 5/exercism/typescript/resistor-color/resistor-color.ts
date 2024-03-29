interface Values {
  [key: string]: string
}

export const cols: Values = {
  black: '0',
  brown: '1',
  red: '2',
  orange: '3',
  yellow: '4',
  green: '5',
  blue: '6',
  violet: '7',
  grey: '8',
  white: '9',
}
export const colorCode = (name: string) => {
  return parseInt(cols[name]);
}

export const COLORS: string[] = Object.keys(cols);
