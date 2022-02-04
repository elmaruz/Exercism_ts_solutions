export class List<T> {
  array: Array<T>;

  constructor(values: T[]) {
    this.array = values;
  }

  public static create(...values: any[]) {
    // Do *not* construct any array literal ([]) in your solution.
    // Do *not* construct any arrays through new Array in your solution.
    // DO *not* use any of the Array.prototype methods in your solution.

    // You may use the destructuring and spreading (...) syntax from Iterable.

    return new List(values);
  }

  forEach(f: (n: T) => void): void {
    return this.array.forEach(f);
  }

  append(list: List<T>) {
    let currValues = this.array;
    list.array.forEach((elem) => currValues.push(elem));
    return new List(currValues);
  }

  concat(list: List<List<T>>): List<T> {
    return list.foldl(
      (res, list) => res.append(list),

      new List(this.array)
    );
  }

  filter<U>(f: (n: T) => boolean) {
    let nuList = List.create();
    for (let i = 0; i < this.array.length; i++) {
      if (f(this.array[i])) {
        nuList.array.push(this.array[i]);
      }
    }
    return nuList;
  }

  map<U>(f: (n: T) => U) {
    let nuList = List.create();
    for (let i = 0; i < this.array.length; i++) {
      nuList.array[i] = f(this.array[i]);
    }
    return nuList;
  }

  foldl<U, V>(f: (acc: U, elem: T) => U, start: U): U {
    if (this.length() === 0) {
      return start;
    }
    return new List(this.array.slice(1)).foldl(f, f(start, this.array[0]));
  }

  foldr<U, V>(f: (acc: U, elem: T) => U, initial: U): U {
    if (this.length() === 0) return initial;

    return f(
      new List(this.array.slice(1)).foldr(f, initial),

      this.array[0]
    );
  }

  length() {
    let len = 0;
    this.array.forEach((elem) => len++);
    return len;
  }

  reverse(): List<T> {
    if (this.length() === 0) {
      return this;
    }
    return new List(this.array.slice(1))
      .reverse()
      .append(new List([this.array[0]]));
  }
}
