import { runInThisContext } from "vm";

export class GradeSchool {
  rozzer: {[key: number]: string[]}
  constructor() {
    this.rozzer = {};
  }

  roster(): object {
    return this.rozzer;
  }

  add(name: string, grade: number): void {
    let containsValue: boolean = Object.values(this.rozzer).flat().includes(name);
    if (!this.rozzer[grade] && !containsValue) {
      this.rozzer[grade] = [name]
    } else if (!this.rozzer[grade]?.includes(name) && !containsValue) {
        this.rozzer[grade] = [...this.rozzer[grade], name].sort((a,b) => {
          if (a > b) return 1;
          if (a < b) return -1;
          return 0;
        }); 
    } else if (containsValue) {
      for (let i in this.rozzer) {
        if (this.rozzer[i].includes(name)) {
          this.rozzer[i] = []
        }
      }
      this.rozzer[grade] = [name]
    }
  }

  grade(grade: number): string[] | undefined {
    if (grade in this.rozzer) {
        return this.rozzer[grade].sort((a,b) => {
          if (a > b) return 1;
          if (a < b) return -1;
          return 0;
        })
      } else {
        return [];
      }
    }
}
