interface Wcount {
  [key: string]: number
}

export function count(sentence: string) {
  const wordsArray = sentence.toLowerCase().trim().split(/[\s,\t,\n]+/);
  const wordsMap = wordsArray.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
  
  return wordsMap; 
}
