export class Squares {
  count: number;
  constructor(count: number) {
    this.count = count
  }

  get sumOfSquares(): number {
    const sum: (count: number) => number = (count: number = this.count) => {
      if (count <= 1) {
        return 1;
      }
      return count ** 2 + sum(count-1)
    }
    return sum(this.count);
  }

  get squareOfSum(): number {
    const sum: (count: number) => number = (count: number = this.count) => {
      if (count <= 1) {
        return 1;
      }
      return count + sum(count-1)
    }
    return sum(this.count)**2;
  }

  get difference(): number {
    return this.squareOfSum - this.sumOfSquares;
  }
}
