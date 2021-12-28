interface Values {
  [key: string]: [string, number, string],
};

export function decodedResistorValue(arr: [string, string, string]): string {
  let resistorValues: Values = {
    black: ['0',1,'ohms'],
    brown: ['1',10,'ohms'],
    red: ['2',100, 'kiloohms'],
    orange: ['3',1, 'kiloohms'],
    yellow: ['4',10, 'kiloohms'],
    green: ['5',100, 'megaohms'],
    blue: ['6',1, 'megaohms'],
    violet: ['7',10, 'megaohms'],
    grey: ['8',100, 'gigaohms'],
    white: ['9',1, 'gigaohms'],
  };

  let [color1, color2, color3] = arr;
  let subtotal: string;
  let total: number;

  if (color2 !== 'black') {
    subtotal = resistorValues[color1][0] + resistorValues[color2][0];
  } else {
    subtotal = resistorValues[color1][0];
  }
  if (color2 !== 'black') {
    total = parseInt(subtotal) * resistorValues[color3][1];
  } else {
    total = parseInt(subtotal) * 1;
  }

  return `${total.toString()} ${resistorValues[color3][2]}`;

}
