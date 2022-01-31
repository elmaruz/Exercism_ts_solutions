export class Node {
  value: number;
  next: null | Node;
  prev: null | Node;
  constructor(value: number) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class LinkedList<TElement> {
  head: null | Node;
  end: null | Node;
  _length: number;
  constructor() {
    this.head = null;
    this.end = null;
    this._length = 0;
  }

  public push(element: number): void {
    let nuNode = new Node(element);
    if (!this.head) {
      this.head = nuNode;
      this.end = this.head;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      this.end = nuNode;
      curr.next = nuNode;
      curr.next.prev = curr;
    }
    this._length++;
  }

  public pop(): number | undefined | null {
    let oldEnd;
    if (!this.head) {
      return null;
    } else if (this.head && this._length === 1) {
      oldEnd = this.head;
      this.head = null;
    } else {
      var curr = this.head;
      var secondLast = this.head;
      while (curr.next) {
        secondLast = curr;
        curr = curr.next;
      }
      oldEnd = curr;
      this.end = secondLast;
      secondLast.next = null;
    }
    this._length--;
    return oldEnd?.value;
  }

  public shift(): unknown {
    var oldHead = this.head;
    if (!this.head) {
      return null;
    } else if (this.head && !this.head.next) {
      this.head = null;
    } else if (this.head.next) {
      let nuHead = this.head.next;
      nuHead.prev = null;
      this.head = nuHead;
    }
    this._length--;
    return oldHead?.value;
  }

  public unshift(element: number) {
    let nuNode = new Node(element);
    if (!this.head) {
      this.head = nuNode;
      this.end = this.head;
    } else {
      nuNode.next = this.head;
      this.head = nuNode;
      let curr = this.head;
      while (curr.next) {
        curr.prev = curr;
        curr = curr.next;
      }
    }
    this._length++;
  }

  public delete(element: number) {
    if (!this.head) {
      return null;
    } else if (this.head.value === element && this.end?.value === element) {
      this.head = null;
      this.end = null;
      this._length--;
    } else {
      let curr = this.head;
      while (curr.next && curr.next.value !== element) {
        curr = curr.next;
      }
      if (curr.next?.value === element) {
        curr.next?.next ? (curr = curr.next.next) : curr;
        this._length--;
      }
    }
  }

  public count(): number {
    return this._length;
  }
}
