export class Triangle {
  x: number;
  y: number;
  z: number;
  constructor(x: number, y: number, z: number) {
    (this.x = x), (this.y = y), (this.z = z);
  }

  get isEquilateral(): boolean {
    if (!this.x && !this.y && !this.z) {
      return false;
    }
    if (this.x === this.y && this.y === this.z && this.x === this.z) {
      return true;
    }
    return false;
  }

  get isIsosceles() {
    if (!this.x && !this.y && !this.z) {
      return false;
    }
    if (
      (this.x === this.y && this.x + this.y > this.z) ||
      (this.y === this.z && this.y + this.z > this.x) ||
      (this.x === this.z && this.x + this.z > this.y)
    ) {
      return true;
    }
    return false;
  }

  get isScalene() {
    if (!this.x && !this.y && !this.z) {
      return false;
    }
    if (
      this.x !== this.y &&
      this.y !== this.z &&
      this.x !== this.z 
    ) {
      if (this.x <= this.y + this.z) {
          return true;
        }
    }
    return false;
  }
}
