interface Table {
  [key: string]: string;
}

export function toRna(seq: string) {
  let lookup: Table = {
    'C' : 'G',
    'G' : 'C',
    'T' : 'A',
    'A' : 'U'
  }
  let lookupValues: string[] = Object.keys(lookup);
  let decodeArr: string[] = seq.split('');
  let filterSeq: string[] = decodeArr.filter(elem => !lookupValues.includes(elem));
  
  if (filterSeq.length > 0) {
    throw new Error('Invalid input DNA.')
  } else {
    let decode: string[] = decodeArr.map(elem => lookup[elem]);
    return decode.join('');
  }
}
