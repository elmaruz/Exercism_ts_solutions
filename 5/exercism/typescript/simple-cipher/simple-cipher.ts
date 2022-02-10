let az = 'abcdefghijklmnopqrstuvwxyz';
let encValues: number[] = [];

export class SimpleCipher {
  key: string;
  constructor(key?: string) {
    if (key) {
      this.key = key;
    } else {
      let i = 0;
      let k = '';
      while (i < 100) {
        k += az[Math.floor(Math.random() * az.length)];
        i++;
      }
      this.key = k;
    }
  }
  encode(text: string): string {
    az += az;
    let enc = '';
    encValues = [];

    for (let i = 0; i < text.length; i++) {
      encValues.push(az.indexOf(text[i]));
      let indexedLetter;
      if (text.length <= this.key.length) {
        indexedLetter = az[az.indexOf(this.key[i]) + az.indexOf(text[i])];
      } else {
        let nuKey = this.key.repeat(100);
        indexedLetter = az[az.indexOf(nuKey[i]) + az.indexOf(text[i])];
      }
      enc += indexedLetter;
    }

    return enc;
  }

  decode(text: string): string {
    let dec = '';

    for (let i = 0; i < text.length; i++) {
      let indexedLetter = az[encValues[i]];
      dec += indexedLetter;
    }
    return dec;
  }
}
