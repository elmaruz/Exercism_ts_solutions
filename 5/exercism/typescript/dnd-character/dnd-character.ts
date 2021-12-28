
export class DnDCharacter {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  hitpoints: number;
  constructor() {
    this.strength = DnDCharacter.generateAbilityScore(),
    this.dexterity = DnDCharacter.generateAbilityScore(),
    this.constitution = DnDCharacter.generateAbilityScore(),
    this.intelligence = DnDCharacter.generateAbilityScore(),
    this.wisdom = DnDCharacter.generateAbilityScore(),
    this.charisma = DnDCharacter.generateAbilityScore(),
    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution)
  }
  
  public static generateAbilityScore(): number {
      let count: number = 0
      let arr: number[] = [];
      
      while(count < 4) {
        arr.push(Math.trunc(Math.random() * (7-1) + 1));
        count++;
      }

      arr.sort((a,b) => a-b).shift();
      let num: number = arr.reduce((acc, elem) => acc+elem);
      
      return num;
  }

  public static getModifierFor(abilityValue: number): number {
    let modifier: number = Math.floor((abilityValue - 10) / 2);
    return modifier;
  }
}
