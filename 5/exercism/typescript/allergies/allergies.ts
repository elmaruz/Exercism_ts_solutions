export class Allergies {
  allergenIndex: number;
  constructor(allergenIndex: number) {
    this.allergenIndex = allergenIndex;
  }

  public list(): string[] {
    let list = {
      1: 'eggs',
      2: 'peanuts',
      3: 'shellfish',
      4: 'strawberries',
      5: 'tomatoes',
      6: 'chocolate',
      7: 'pollen',
      8: 'cats',
    };

    let bin = '';
    let res: string[] = [];

    function decBin(n: number): string {
      if (n === 0) {
        bin += '0';
        return bin;
      }

      n % 2 === 0 ? (bin += '0') : (bin += '1');

      return decBin(Math.floor(n / 2));
    }

    function binCalc(n: string): void {
      for (let i = 0; i < n.length; i++) {
        if (parseInt(n[i]) === 1 && Object.values(list)[i]) {
          res.push(Object.values(list)[i]);
        }
      }
    }

    decBin(this.allergenIndex);
    binCalc(bin);
    return res;
  }

  public allergicTo(allergen: string): boolean {
    let list = this.list();
    let res: boolean;
    list.includes(allergen) ? (res = true) : (res = false);
    return res;
  }
}
