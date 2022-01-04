interface wordNum {
  [key: number]: string
}

export function commands(command: number): string[] {
  let bin: string[] = command.toString(2).split('').reverse(); // '1'
  let shakeArr: string[] = [];

  let dict: wordNum = {
    0: 'wink',
    1: 'double blink',
    2: 'close your eyes',
    3: 'jump',
  };

  for(let i = 0; i < 4; i++) { // '11'
    if (bin[i] === '1') {
      shakeArr.push(dict[i]);
    }
  };
  
  if (bin[4] === '1') {
    shakeArr.reverse();
  }

  return shakeArr;
}
