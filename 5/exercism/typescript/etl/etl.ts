type OldETL = {
  [key: number]: string[];
};

type NewETL = {
  [key: string]: number;
};

export function transform(old: OldETL): NewETL {
  let newETL: NewETL = {};

  for (let i in old) {
    if (Array.isArray(old[i])) {
      for (let j = 0; j < old[i].length; j++) {
        newETL[old[i][j].toLowerCase()] = parseInt(i);
      }
    }
  }
  return newETL;
}
