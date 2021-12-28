interface Values {
  [key: string]: string
}

export function decodedValue(arr: string[]): number {
  
  arr.length = 2;

  let resistorValues: Values = {
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

  let total: string[] = arr.map((n) =>  resistorValues[n]);

  return parseInt(total.join(''));

}
