export function find(haystack: number[], needle: number): number | never {
  let min: number = 0;
  let max: number = haystack.length - 1;
  
  
  while (min <= max) {
    let mid: number = Math.floor((min + max) / 2);
    let curr: number = haystack[mid];
    if (curr === needle) {
      return mid;
  }
    if (curr > needle) {
      max = mid - 1;
    }
    if (curr < needle) {
      min = mid + 1;
    }
  }
  throw new Error('Value not in array');
  }

