export class Matrix {
  matrix: string[];
  rows: number[][];
  columns: number[][];
  constructor(input: string) {
    this.matrix = input.split(/[\n]/),
    this.rows = this.matrix.map(elem => (elem.split(' ')).map(elem => Number(elem)));
    this.columns = []
    for(let i = 0; i < this.rows.length; i++) {
      this.columns.push(this.rows.map(elem => elem[i]))
    }
  }
}
