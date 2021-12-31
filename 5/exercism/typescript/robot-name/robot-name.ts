export class Robot {
  name: string;
  static nameSet: Set<string> = new Set();
  constructor() {
    this.name = Robot.id()
  }

  public static id(): string {
    let count: number = 0;    
    let name: string = '';
    const chars: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    while (count < 2) {
      name = name + chars.charAt(Math.floor(Math.random() * chars.length));
      count++
    }
    count = 0;
    while (count < 3) {
      name = name + Math.floor(Math.random() * 10).toString();
      count++;
    }

    if (Robot.nameSet.has(name)) {
      return this.id();
    }

    Robot.nameSet.add(name);
    return name;
  }

  public resetName(): void {
    this.name = Robot.id();
  }

  public static releaseNames(): void {
    this.nameSet.clear()
  }
}
