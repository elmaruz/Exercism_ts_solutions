export class Rational {
  a: number;
  b: number;
  constructor(a: number, b: number) {
    this.a = a;
    this.b = b;
  }

  add(num: Rational) {
    let a1 = this.a;
    let b1 = this.b;
    let a2 = num.a;
    let b2 = num.b;
    let gcd = b1 === b2 ? b1 : b1 * b2;
    let numer = (gcd / b1) * a1 + (gcd / b2) * a2;
    let max = Math.max(numer, gcd);

    for (let i = 2; i <= max; i++) {
      if (numer % i === 0 && gcd % i === 0) {
        numer = numer / i;
        gcd = gcd / i;
        i = 2;
      }
    }

    return new Rational(numer, gcd);
  }

  sub(num: Rational) {
    let a1 = this.a;
    let b1 = this.b;
    let a2 = num.a;
    let b2 = num.b;
    let gcd = b1 === b2 ? b1 : b1 * b2;
    let numer = (gcd / b1) * a1 - (gcd / b2) * a2;
    let max = Math.max(numer, gcd);

    for (let i = 2; i <= max; i++) {
      if (numer % i === 0 && gcd % i === 0) {
        numer = numer / i;
        gcd = gcd / i;
        i = 2;
      }
    }

    return new Rational(numer, gcd);
  }

  mul(num: Rational) {
    let a1 = this.a;
    let b1 = this.b;
    let a2 = num.a;
    let b2 = num.b;
    let gcd = b1 * b2;
    let numer = a1 * a2;
    let max = Math.max(numer, gcd);

    for (let i = 2; i <= max; i++) {
      if (numer % i === 0 && gcd % i === 0) {
        numer = numer / i;
        gcd = gcd / i;
        i = 2;
      }
    }

    return new Rational(numer, gcd);
  }

  div(num: Rational) {
    let a1 = this.a;
    let b1 = this.b;
    let a2 = num.a < 0 || num.b < 0 ? -num.a : num.a;
    let b2 = num.a < 0 || num.b < 0 ? -num.b : num.b;
    let gcd = a2 * b1;
    let numer = a1 * b2;
    let max = Math.max(numer, gcd);

    for (let i = 2; i <= max; i++) {
      if (numer % i === 0 && gcd % i === 0) {
        numer = numer / i;
        gcd = gcd / i;
        i = 2;
      }
    }

    return new Rational(numer, gcd);
  }

  abs() {
    this.a = Math.abs(this.a);
    this.b = Math.abs(this.b);
    return this;
  }

  exprational(num: number) {
    this.a = Math.pow(this.a, num);
    this.b = Math.pow(this.b, num);
    return this;
  }

  expreal(num: number) {
    let a = parseFloat(Math.pow(num, this.a / this.b).toString());
    if (a > 1) {
      return Math.round(a);
    }
    return a;
  }

  reduce() {
    let gcd: number;
    let minVal = this.a > this.b ? this.b : this.a;
    if (minVal < 0) minVal *= -1;
    for (let i = minVal; i > 0; i--) {
      if (this.a % i == 0 && this.b % i == 0) {
        this.a /= i;
        this.b /= i;
        break;
      }
    }
    if (this.b < 0) {
      this.a *= -1;

      this.b *= -1;
    }
    if (this.a == 0) this.b = 1;
    return this;
  }
}
