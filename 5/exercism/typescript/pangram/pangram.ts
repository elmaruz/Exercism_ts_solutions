export function isPangram(sentence: string): boolean {
  let regx = /[^a-z]/gi;
  let foundChars: string | null = sentence.toLowerCase().replace(regx, '');
  let foundCharSet: Set<string> = new Set(foundChars);

  if (foundCharSet.size === 26) {
    return true;
  } else {
    return false;
  }
}
