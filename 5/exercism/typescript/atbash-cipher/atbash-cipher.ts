let az = 'abcdefghijklmnopqrstuvwxyz';
let za = az.split('').reverse().join('');
az += '1234567890';
za += '1234567890';

export function encode(plainText: string): string {
  let nuText = plainText.split(' ').join('').toLowerCase();
  let filteredText = nuText
    .split('')
    .filter((elem) => elem.match(/[a-zA-Z0-9]/g))
    .join('');

  let enc = '';

  for (let i = 0; i < filteredText.length; i++) {
    let letter = filteredText[i]; //h
    let indexLetter = az.indexOf(letter);
    let zaLetter = za[indexLetter];

    if (i !== 0 && i % 5 === 0) {
      enc += ' ';
    }
    enc += zaLetter;
  }

  return enc;
}

export function decode(cipherText: string): string {
  let cleanText = cipherText.split(' ').join('').toLowerCase(); // 'fbhsk ksjsu sj' -> 'fbhskksjsusj'
  let dec = '';

  for (let i = 0; i < cleanText.length; i++) {
    let letter = cleanText[i]; //h
    let indexLetter = az.indexOf(letter);
    let zaLetter = za[indexLetter];

    dec += zaLetter;
  }

  return dec;
}
